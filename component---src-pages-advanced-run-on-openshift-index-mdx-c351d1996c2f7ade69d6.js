(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),l=t("NmYn"),r=t.n(l),s=t("Wbzz"),c=t("Xrax"),i=t("k4MR"),d=t("TSYQ"),m=t.n(d),p=t("QH2O"),b=t.n(p),u=t("qKvR"),g=function(e){var n,t=e.title,a=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(u.b)("div",{className:m()(b.a.pageHeader,(n={},n[b.a.withTabs]=l.length,n[b.a.darkMode]="dark"===a,n))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:b.a.text},t)))))},h=t("BAC9"),O=function(e){var n=e.relativePagePath,t=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||a,l=o.baseUrl,r=o.subDirectory,c=l+"/edit/"+o.branch+r+"/src/pages"+n;return l?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},f=t("FCXl"),v=t("dI71"),y=t("I8xM"),j=function(e){function n(){return e.apply(this,arguments)||this}return Object(v.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.title,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var n,t=r()(e,{lower:!0,strict:!0}),l=t===o,c=new RegExp(o+"/?(#.*)?$"),i=a.replace(c,t);return Object(u.b)("li",{key:e,className:m()((n={},n[y.selectedItem]=l,n),y.listItem)},Object(u.b)(s.Link,{className:y.link,to:""+i},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":n},Object(u.b)("ul",{className:y.list},l))))))},n}(o.a.Component),x=t("MjG9"),k=t("CzIb"),_=t("Asxa"),w=t("OIbQ"),T=t.n(w),P=function(e){var n=e.date,t=new Date(n);return n?Object(u.b)(_.c,{className:T.a.row},Object(u.b)(_.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};n.a=function(e){var n=e.pageContext,t=e.children,a=e.location,o=e.Title,l=n.frontmatter,d=void 0===l?{}:l,m=n.relativePagePath,p=n.titleType,b=d.tabs,h=d.title,v=d.theme,y=d.description,_=d.keywords,w=d.date,T=Object(k.a)().interiorTheme,D=Object(s.useStaticQuery)("2456312558").site.pathPrefix,N=D?a.pathname.replace(D,""):a.pathname,z=b?N.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",I=v||T;return Object(u.b)(i.a,{tabs:b,homepage:!1,theme:I,pageTitle:h,pageDescription:y,pageKeywords:_,titleType:p},Object(u.b)(g,{title:o?Object(u.b)(o,null):h,label:"label",tabs:b,theme:I}),b&&Object(u.b)(j,{title:h,slug:N,tabs:b,currentTab:z}),Object(u.b)(x.a,{padded:!0},t,Object(u.b)(O,{relativePagePath:m}),Object(u.b)(P,{date:w})),Object(u.b)(f.a,{pageContext:n,location:a,slug:N,tabs:b,currentTab:z}),Object(u.b)(c.a,null))}},BAC9:function(e,n,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,n,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IKph:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t("wx14"),o=t("zLVn"),l=(t("q1tI"),t("7ljp")),r=t("013z"),s=(t("qKvR"),["components"]),c={},i={_frontmatter:c},d=r.a;function m(e){var n=e.components,t=Object(o.a)(e,s);return Object(l.b)(d,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Running deployer as a pod for existing OpenShift cluster"),Object(l.b)("h2",null,"Collect cluster credentials"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cluster: …"),Object(l.b)("li",{parentName:"ul"},"OpenShift admin user: ",Object(l.b)("inlineCode",{parentName:"li"},"kubeadmin")),Object(l.b)("li",{parentName:"ul"},"Password: …")),Object(l.b)("h2",null,"Login to cluster"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc login ... --insecure-skip-tls-verify\n")),Object(l.b)("p",null,"Keep the login command, you will need it later to set the vault secret the deployer will use."),Object(l.b)("h2",null,"Create configuration"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'export CONFIG_DIR=./cpd-config && mkdir -p $CONFIG_DIR/config\nexport STATUS_DIR=./cpd-status && mkdir -p $STATUS_DIR\n\ncat << EOF > $CONFIG_DIR/config/sample.yaml\n---\nglobal_config:\n  environment_name: demo\n  cloud_platform: existing-ocp\n\nopenshift:\n- name: cpd-demo\n  ocp_version: 4.8\n  cluster_name: cpd-demo\n  domain_name: example.com\n  openshift_storage:\n  - storage_name: nfs-storage\n    storage_type: nfs\n    ocp_storage_class_file: managed-nfs-storage\n    ocp_storage_class_block: managed-nfs-storage\n\ncp4d:\n- project: cpd-instance\n  openshift_cluster_name: cpd-demo\n  cp4d_version: 4.5.0\n  olm_utils: True\n  accept_licenses: True\n  cartridges:\n  - name: cp-foundation\n    license_service:\n      state: disabled\n      threads_per_core: 2\n  - name: lite\n\n#\n# All tested cartridges. To install, change the "state" property to "installed". To uninstall, change the state\n# to "removed" or comment out the entire cartridge. Make sure that the "-" and properties are aligned with the lite\n# cartridge; the "-" is at position 3 and the property starts at position 5.\n#\n\n  - name: analyticsengine \n    size: small \n    state: removed\n\n  - name: bigsql\n    state: removed\n\n  - name: ca\n    size: small\n    instances:\n    - name: ca-instance\n      metastore_ref: ca-metastore\n    state: removed\n\n  - name: cde\n    state: removed\n\n  - name: datagate\n    state: removed\n\n  - name: datastage-ent-plus\n    state: removed\n\n  - name: db2\n    size: small\n    instances:\n    - name: ca-metastore\n      metadata_size_gb: 20\n      data_size_gb: 20\n      backup_size_gb: 20  \n      transactionlog_size_gb: 20\n    state: removed\n\n  - name: db2u\n    state: removed\n\n  - name: db2wh\n    state: removed\n\n  - name: dmc\n    state: removed\n\n  - name: dods\n    size: small\n    state: removed\n\n  - name: dp\n    size: small\n    state: removed\n\n  - name: dv\n    size: small \n    instances:\n    - name: data-virtualization\n    state: removed\n\n  - name: hadoop\n    size: small\n    state: removed\n\n  - name: mdm\n    size: small\n    wkc_enabled: true\n    state: removed\n\n  - name: openpages\n    state: removed\n\n  - name: planning-analytics\n    state: removed\n\n  - name: rstudio\n    size: small\n    state: removed\n\n  - name: spss\n    state: removed\n\n  - name: voice-gateway\n    replicas: 1\n    state: removed\n\n  - name: watson-assistant\n    size: small\n    state: removed\n\n  - name: watson-discovery\n    state: removed\n\n  - name: watson-ks\n    size: small\n    state: removed\n\n  - name: watson-openscale\n    size: small\n    state: removed\n\n  - name: watson-speech\n    stt_size: xsmall\n    tts_size: xsmall\n    state: removed\n\n  - name: wkc\n    size: small\n    state: removed\n\n  - name: wml\n    size: small\n    state: installed\n\n  - name: wml-accelerator\n    replicas: 1\n    size: small\n    state: removed\n\n  - name: wsl\n    state: installed\n\nEOF\n')),Object(l.b)("h2",null,"Prepare the deployer and start"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc new-project cloud-pak-deployer\n\noc project cloud-pak-deployer\noc create serviceaccount cloud-pak-deployer-sa\noc adm policy add-scc-to-user privileged -z cloud-pak-deployer-sa\noc adm policy add-cluster-role-to-user cluster-admin -z cloud-pak-deployer-sa\n\ncat << EOF | oc apply -f -\napiVersion: batch/v1\nkind: Job\nmetadata:\n  labels:\n    app: cloud-pak-deployer\n  name: cloud-pak-deployer\n  namespace: cloud-pak-deployer\nspec:\n  parallelism: 1\n  completions: 1\n  backoffLimit: 0\n  template:\n    metadata:\n      name: cloud-pak-deployer\n      labels:\n        app: cloud-pak-deployer\n    spec:\n      initContainers:\n      - name: wait-config\n        image: quay.io/fketelaars/cloud-pak-deployer:latest\n        command: ['sh', '-c', 'until [ -f /Data/cpd-config/config-ready ]; do ls -al /Data/cpd-config; echo Waiting for /Data/cpd-config/config-ready file; sleep 1; done;echo \"Configuration is ready, starting deployer\"']\n        env:\n        - name: CONFIG_DIR\n          value: /Data/cpd-config\n        - name: STATUS_DIR\n          value: /Data/cpd-status\n        volumeMounts:\n        - mountPath: /Data\n          name: cloud-pak-deployer-volume\n      containers:\n      - image: quay.io/fketelaars/cloud-pak-deployer:latest\n        imagePullPolicy: Always\n        name: cloud-pak-deployer\n        terminationMessagePath: /dev/termination-log\n        terminationMessagePolicy: File\n        env:\n        - name: CONFIG_DIR\n          value: /Data/cpd-config\n        - name: STATUS_DIR\n          value: /Data/cpd-status\n        volumeMounts:\n        - mountPath: /Data\n          name: cloud-pak-deployer-volume\n        command: [\"/bin/sh\",\"-xc\"]\n        args: \n          - /cloud-pak-deployer/cp-deploy.sh env apply -v\n      restartPolicy: Never\n      securityContext:\n        runAsUser: 0\n      serviceAccountName: cloud-pak-deployer-sa\n      volumes:\n      - emptyDir: {}\n        name: cloud-pak-deployer-volume\nEOF\n")),Object(l.b)("p",null,"The OpenShift job consists of 2 containers: ",Object(l.b)("inlineCode",{parentName:"p"},"wait-config")," and ",Object(l.b)("inlineCode",{parentName:"p"},"cloud-pak-deployer"),", where the ",Object(l.b)("inlineCode",{parentName:"p"},"wait-config")," is an “init” container, just waiting for the signal that the deployer can start. In the next steps, the deployer configuration and secrets are created inside the pod, then the configuration is marked “ready” and deployment can start."),Object(l.b)("h2",null,"Copy local configuration and status directory into deployer pod"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export DEPLOYER_POD=$(oc get po --no-headers -l app=cloud-pak-deployer | head -1 | awk '{print $1}')\noc cp -c wait-config $CONFIG_DIR $DEPLOYER_POD:/Data/cpd-config/\n")),Object(l.b)("h2",null,"Prepare for deployer run"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'oc rsh -c wait-config $DEPLOYER_POD /cloud-pak-deployer/cp-deploy.sh vault set \\\n  -vs ibm_cp_entitlement_key -vsv "your_entitlement_key"\noc rsh -c wait-config $DEPLOYER_POD /cloud-pak-deployer/cp-deploy.sh vault set \\\n  -vs cpd-demo-oc-login -vsv "your_oc_login_command"\noc rsh -c wait-config $DEPLOYER_POD /cloud-pak-deployer/cp-deploy.sh vault list\n')),Object(l.b)("h2",null,"Mark the configuration ready to start the deployment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc rsh -c wait-config $DEPLOYER_POD bash -c 'touch /Data/cpd-config/config-ready; chmod 777 /Data/cpd-config/config-ready'\n")),Object(l.b)("h2",null,"Follow the logs of the deployment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc logs -f $DEPLOYER_POD\n")),Object(l.b)("p",null,"In some cases, especially if the OpenShift cluster is remote from where the ",Object(l.b)("inlineCode",{parentName:"p"},"oc")," command is running, the ",Object(l.b)("inlineCode",{parentName:"p"},"oc logs -f")," command may terminate abruptly. "))}m.isMDXComponent=!0},OIbQ:function(e,n,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,n,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-advanced-run-on-openshift-index-mdx-c351d1996c2f7ade69d6.js.map