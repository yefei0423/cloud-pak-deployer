(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),l=n("NmYn"),s=n.n(l),r=n("Wbzz"),c=n("Xrax"),d=n("k4MR"),i=n("TSYQ"),m=n.n(i),p=n("QH2O"),u=n.n(p),b=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(b.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===a,t))},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12"},Object(b.b)("h1",{id:"page-title",className:u.a.text},n)))))},v=n("BAC9"),y=function(e){var t=e.relativePagePath,n=e.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,l=o.baseUrl,s=o.subDirectory,c=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?Object(b.b)("div",{className:"bx--row "+v.row},Object(b.b)("div",{className:"bx--col"},Object(b.b)("a",{className:v.link,href:c},"Edit this page on GitHub"))):null},O=n("FCXl"),h=n("dI71"),x=n("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(e){var t,n=s()(e,{lower:!0,strict:!0}),l=n===o,c=new RegExp(o+"/?(#.*)?$"),d=a.replace(c,n);return Object(b.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=l,t),x.listItem)},Object(b.b)(r.Link,{className:x.link,to:""+d},e))}));return Object(b.b)("div",{className:x.tabsContainer},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(b.b)("nav",{"aria-label":t},Object(b.b)("ul",{className:x.list},l))))))},t}(o.a.Component),f=n("MjG9"),k=n("CzIb"),_=n("Asxa"),w=n("OIbQ"),T=n.n(w),N=function(e){var t=e.date,n=new Date(t);return t?Object(b.b)(_.c,{className:T.a.row},Object(b.b)(_.a,null,Object(b.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,l=t.frontmatter,i=void 0===l?{}:l,m=t.relativePagePath,p=t.titleType,u=i.tabs,v=i.title,h=i.theme,x=i.description,_=i.keywords,w=i.date,T=Object(k.a)().interiorTheme,P=Object(r.useStaticQuery)("2456312558").site.pathPrefix,z=P?a.pathname.replace(P,""):a.pathname,D=u?z.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",I=h||T;return Object(b.b)(d.a,{tabs:u,homepage:!1,theme:I,pageTitle:v,pageDescription:x,pageKeywords:_,titleType:p},Object(b.b)(g,{title:o?Object(b.b)(o,null):v,label:"label",tabs:u,theme:I}),u&&Object(b.b)(j,{title:v,slug:z,tabs:u,currentTab:D}),Object(b.b)(f.a,{padded:!0},n,Object(b.b)(y,{relativePagePath:m}),Object(b.b)(N,{date:w})),Object(b.b)(O.a,{pageContext:t,location:a,slug:z,tabs:u,currentTab:D}),Object(b.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IKph:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),s=n("013z"),r=(n("qKvR"),["components"]),c={},d={_frontmatter:c},i=s.a;function m(e){var t=e.components,n=Object(o.a)(e,r);return Object(l.b)(i,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Running deployer as a pod for existing OpenShift cluster"),Object(l.b)("h2",null,"Collect cluster credentials"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cluster: …"),Object(l.b)("li",{parentName:"ul"},"OpenShift admin user: ",Object(l.b)("inlineCode",{parentName:"li"},"kubeadmin")),Object(l.b)("li",{parentName:"ul"},"Password: …")),Object(l.b)("h2",null,"Login to cluster"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc login ... --insecure-skip-tls-verify\n")),Object(l.b)("p",null,"Keep the login command, you will need it later to set the vault secret the deployer will use."),Object(l.b)("h2",null,"Create configuration"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'export CONFIG_DIR=./cpd-config && mkdir -p $CONFIG_DIR/config\nexport STATUS_DIR=./cpd-status && mkdir -p $STATUS_DIR\n\ncat << EOF > $CONFIG_DIR/config/sample.yaml\n---\nglobal_config:\n  environment_name: demo\n  cloud_platform: existing-ocp\n\nopenshift:\n- name: cpd-demo\n  ocp_version: 4.8\n  cluster_name: cpd-demo\n  domain_name: example.com\n  openshift_storage:\n  - storage_name: nfs-storage\n    storage_type: nfs\n    ocp_storage_class_file: managed-nfs-storage\n    ocp_storage_class_block: managed-nfs-storage\n\ncp4d:\n- project: cpd-instance\n  openshift_cluster_name: cpd-demo\n  cp4d_version: 4.5.0\n  olm_utils: True\n  accept_licenses: True\n  cartridges:\n  - name: cp-foundation\n    license_service:\n      state: disabled\n      threads_per_core: 2\n  - name: lite\n\n#\n# All tested cartridges. To install, change the "state" property to "installed". To uninstall, change the state\n# to "removed" or comment out the entire cartridge. Make sure that the "-" and properties are aligned with the lite\n# cartridge; the "-" is at position 3 and the property starts at position 5.\n#\n\n  - name: analyticsengine \n    size: small \n    state: removed\n\n  - name: bigsql\n    state: removed\n\n  - name: ca\n    size: small\n    instances:\n    - name: ca-instance\n      metastore_ref: ca-metastore\n    state: removed\n\n  - name: cde\n    state: removed\n\n  - name: datagate\n    state: removed\n\n  - name: datastage-ent-plus\n    state: removed\n\n  - name: db2\n    size: small\n    instances:\n    - name: ca-metastore\n      metadata_size_gb: 20\n      data_size_gb: 20\n      backup_size_gb: 20  \n      transactionlog_size_gb: 20\n    state: removed\n\n  - name: db2u\n    state: removed\n\n  - name: db2wh\n    state: removed\n\n  - name: dmc\n    state: removed\n\n  - name: dods\n    size: small\n    state: removed\n\n  - name: dp\n    size: small\n    state: removed\n\n  - name: dv\n    size: small \n    instances:\n    - name: data-virtualization\n    state: removed\n\n  - name: hadoop\n    size: small\n    state: removed\n\n  - name: mdm\n    size: small\n    wkc_enabled: true\n    state: removed\n\n  - name: openpages\n    state: removed\n\n  - name: planning-analytics\n    state: removed\n\n  - name: rstudio\n    size: small\n    state: removed\n\n  - name: spss\n    state: removed\n\n  - name: voice-gateway\n    replicas: 1\n    state: removed\n\n  - name: watson-assistant\n    size: small\n    state: removed\n\n  - name: watson-discovery\n    state: removed\n\n  - name: watson-ks\n    size: small\n    state: removed\n\n  - name: watson-openscale\n    size: small\n    state: removed\n\n  - name: watson-speech\n    stt_size: xsmall\n    tts_size: xsmall\n    state: removed\n\n  - name: wkc\n    size: small\n    state: removed\n\n  - name: wml\n    size: small\n    state: installed\n\n  - name: wml-accelerator\n    replicas: 1\n    size: small\n    state: removed\n\n  - name: wsl\n    state: installed\n\nEOF\n')),Object(l.b)("h2",null,"Start deployer"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'oc new-project cloud-pak-deployer\n\noc project cloud-pak-deployer\noc create serviceaccount cloud-pak-deployer-sa\noc adm policy add-scc-to-user privileged -z cloud-pak-deployer-sa\noc adm policy add-cluster-role-to-user cluster-admin -z cloud-pak-deployer-sa\n\ncat << EOF | oc apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: cloud-pak-deployer\n  name: cloud-pak-deployer\n  namespace: cloud-pak-deployer\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      deployment: cloud-pak-deployer\n  template:\n    metadata:\n      labels:\n        deployment: cloud-pak-deployer\n    spec:\n      containers:\n      - image: quay.io/fketelaars/cloud-pak-deployer:latest\n        imagePullPolicy: Always\n        name: cloud-pak-deployer\n        terminationMessagePath: /dev/termination-log\n        terminationMessagePolicy: File\n        env:\n        - name: CONFIG_DIR\n          value: /Data/cpd-config\n        - name: STATUS_DIR\n          value: /Data/cpd-status\n        volumeMounts:\n        - mountPath: /Data\n          name: cloud-pak-deployer-volume-1\n        command: ["/bin/sh","-xc"]\n        args: \n          - sleep infinity\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext:\n        runAsUser: 0\n      serviceAccountName: cloud-pak-deployer-sa\n      terminationGracePeriodSeconds: 30\n      volumes:\n      - emptyDir: {}\n        name: cloud-pak-deployer-volume-1\nEOF\n')),Object(l.b)("h2",null,"Copy local configuration and status directory into deployer pod"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export DEPLOYER_POD=$(oc get po --no-headers -l deployment=cloud-pak-deployer | head -1 | awk '{print $1}')\noc rsh $DEPLOYER_POD rm -rf /Data/cpd-config && oc cp $CONFIG_DIR $DEPLOYER_POD:/Data/cpd-config/\n")),Object(l.b)("h2",null,"Prepare for deployer run"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'oc rsh deploy/cloud-pak-deployer /cloud-pak-deployer/cp-deploy.sh vault set \\\n  -vs cp_entitlement_key -vsv "your_entitlement_key"\noc rsh deploy/cloud-pak-deployer /cloud-pak-deployer/cp-deploy.sh vault set \\\n  -vs cpd-demo-oc-login -vsv "your_oc_login_command"\noc rsh deploy/cloud-pak-deployer /cloud-pak-deployer/cp-deploy.sh vault list\n')),Object(l.b)("h2",null,"Run deployer"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc rsh deploy/cloud-pak-deployer /cloud-pak-deployer/cp-deploy.sh env apply -v \n")))}m.isMDXComponent=!0},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-advanced-run-on-openshift-index-mdx-3b2b1cbab8f24e9a3f07.js.map