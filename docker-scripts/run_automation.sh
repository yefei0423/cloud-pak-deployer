#!/bin/bash
SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )

error=0

# Check mandatory parameters
if [ ! -v IBM_CLOUD_API_KEY ];then
  echo "Error: environment variable IBM_CLOUD_API_KEY has not been set and is required"
  error=1
fi

if [ -v GIT_REPO_URL ];then
  if [ ! -v GIT_ACCESS_TOKEN ];then
    echo "Error: environment variable GIT_ACCESS_TOKEN has not been set and is required"
    error=1
  fi
  if [ ! -v GIT_REPO_DIR ];then
    echo "Error: environment variable GIT_REPO_DIR has not been set and is required"
    error=1
  fi
fi

if [ ! -v GIT_REPO_URL ] && [ ! -v CONFIG_DIR ];then
  echo "Error: either environment variable GIT_REPO_URL or CONFIG_DIR must be specified"
  error=1
fi

if [[ error -ne 0 ]];then
  echo "Error running automation"
  exit 1
fi

# Handle configuration on GitHub
if [ -v GIT_REPO_URL ];then
  GIT_DIR=/tmp/automation_config
  mkdir -p ${GIT_DIR}

  #Disable asking for credentials when login fails.
  export GIT_TERMINAL_PROMPT=0

  # Clear any existing content from the CONF_FOLDER_PATH
  rm -rf ${GIT_DIR}/*

  # Clone the config repository
  export GIT_REPO_URL_WITH_TOKEN="https://git_token:${GIT_ACCESS_TOKEN}@${GIT_REPO_URL#https://}"
  pushd ${GIT_DIR}
  git clone ${GIT_REPO_URL_WITH_TOKEN} .
  popd

  if [ $? -ne 0 ]; then
    echo "git clone ${GIT_REPO_URL_WITH_TOKEN} failed..."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi

  CONFIG_DIR=${GIT_DIR}/${GIT_REPO_DIR}

  # Validate if the specified context directory exists
  if [ ! -d "${CONFIG_DIR}" ]; then
    echo "Git repository directory ${GIT_REPO_DIR} not found."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi

  # Validate if the configuration directory exists
  CONF_DIR="${CONFIG_DIR}/config"
  if [ ! -d "${CONF_DIR}" ]; then
    echo "config directory not found in context directory ${GIT_REPO_DIR}."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi

  # Validate if the inventory directory exists
  INV_DIR="${CONFIG_DIR}/inventory"
  if [ ! -d "${INV_DIR}" ]; then
    echo "inventory directory not found in context directory ${GIT_REPO_DIR}."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi
else
  # Validate if the configuration directory exists
  CONF_DIR="${CONFIG_DIR}/config"
  if [ ! -d "${CONF_DIR}" ]; then
    echo "config directory not found in directory ${CONFIG_DIR}."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi

    # Validate if the inventory directory exists
  INV_DIR="${CONFIG_DIR}/inventory"
  if [ ! -d "${INV_DIR}" ]; then
    echo "inventory directory not found in directory ${CONFIG_DIR}."
    echo "Exiting with exit code 1"
    echo ""
    exit 1
  fi
fi

echo ""
echo "Starting Automation script..."
echo ""
cd ${SCRIPT_DIR}/..

VERBOSE_ARG=""
if $ANSIBLE_VERBOSE;then VERBOSE_ARG="-vvv";fi

# Check that subcommand is valid
export SUBCOMMAND=${SUBCOMMAND,,}
export ACTION=${ACTION,,}
case "$SUBCOMMAND" in
env|environment)
  if [ "$ACTION" == "apply" ];then
    export ANSIBLE_CONFIG=$PWD/ansible-apply.cfg && \
    ansible-playbook \
      -i ${INV_DIR} \
      playbooks/playbook-env-apply.yml \
      --extra-vars config_dir=${CONFIG_DIR} \
      --extra-vars status_dir=${STATUS_DIR} \
      --extra-vars ibmcloud_api_key=${IBM_CLOUD_API_KEY} \
      --extra-vars confirm_destroy=${CONFIRM_DESTROY} ${VERBOSE_ARG}
  elif [ "$ACTION" == "destroy" ];then
    export ANSIBLE_CONFIG=$PWD/ansible-apply.cfg && \
    ansible-playbook \
      -i ${INV_DIR} \
      playbooks/playbook-env-destroy.yml \
      --extra-vars config_dir=${CONFIG_DIR} \
      --extra-vars status_dir=${STATUS_DIR} \
      --extra-vars ibmcloud_api_key=${IBM_CLOUD_API_KEY} \
      --extra-vars confirm_destroy=${CONFIRM_DESTROY} ${VERBOSE_ARG}
  fi
  ;;

vault)
  export ANSIBLE_CONFIG=$PWD/ansible-vault.cfg && \
  ansible-playbook \
    -i ${INV_DIR} \
    playbooks/playbook-vault.yml \
    --extra-vars ACTION=${ACTION} \
    --extra-vars config_dir=${CONFIG_DIR} \
    --extra-vars status_dir=${STATUS_DIR} \
    --extra-vars ibmcloud_api_key=${IBM_CLOUD_API_KEY} \
    --extra-vars secret_group_param=${VAULT_GROUP} \
    --extra-vars secret_name=${VAULT_SECRET} \
    --extra-vars secret_payload=${VAULT_SECRET_VALUE} \
    --extra-vars secret_file=${VAULT_SECRET_FILE} ${VERBOSE_ARG}
  ;;
*) 
  echo "Invalid subcommand $SUBCOMMAND."
  command_usage 1
  ;;
esac


