"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[3940,5167],{3940:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(9895),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9976),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(8674),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(4007),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(2751),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(697),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(9199),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(810),carbon_components_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(263),carbon_components_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(6519),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const PolicieshttpTransformationsresponsepathsDeleteModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>Promise.all([__webpack_require__.e(3466),__webpack_require__.e(5555)]).then(__webpack_require__.bind(__webpack_require__,7936)))),PolicieshttpTransformationsresponsepathsAdd=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(6899).then(__webpack_require__.bind(__webpack_require__,6899)))),PolicieshttpTransformationsresponsepathsEdit=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(4981).then(__webpack_require__.bind(__webpack_require__,7362)))),handleChange=()=>{},handleSave=(_,e,t,s,r,a)=>{void 0===e&&(e="");var i={};!0!==document.getElementById("policies_http_transformations_response_host_id"+e).value.endsWith(":")&&(i.policies_http_transformations_response_host=document.getElementById("policies_http_transformations_response_host_id"+e).value),!0!==document.getElementById("policies_http_transformations_response_method_id"+e).value.endsWith(":")&&(i.policies_http_transformations_response_method=document.getElementById("policies_http_transformations_response_method_id"+e).value),!0!==document.getElementById("policies_http_transformations_response_name_id"+e).value.endsWith(":")&&(i.policies_http_transformations_response_name=document.getElementById("policies_http_transformations_response_name_id"+e).value),!0!==document.getElementById("policies_http_transformations_response_rule_id"+e).value.endsWith(":")&&(i.policies_http_transformations_response_rule=document.getElementById("policies_http_transformations_response_rule_id"+e).value),i.policies_http_transformations_response_paths=policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths,_(i.policies_http_transformations_response_host,i.policies_http_transformations_response_method,i.policies_http_transformations_response_name,i.policies_http_transformations_response_rule,i.policies_http_transformations_response_paths,!0),handleClose(e,t,s,r,a)},handleAdd=(_,e,t,s,r,a,i,o,n)=>{var p=s||"";if(window[p+"editing"]=!0,window[p+"rowId"]=_,i)for(var c=0;c<i.length;c++)i[c](s,o,n);e();var l=p;if(l.endsWith("_http_transformations_response")){l=l.slice(0,-30)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(l+"_div"+a,"display","none"),document.getElementById("editpolicieshttp_transformations_responsePage"+t).style.display="block",document.getElementById(l+"_tab"+a).style.display="none"},handleClose=(_,e,t,s,r)=>{var a=e||"";delete window[a+"editing"],delete window[a+"rowId"];var i=a;if(i.endsWith("_http_transformations_response")){i=i.slice(0,-30)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(i+"_div"+s,"display","block"),document.getElementById("editpolicieshttp_transformations_responsePage"+_).style.display="none",document.getElementById(i+"_tab"+s).style.display="flex",r&&r()},closeAdd=_=>{void 0===_&&(_=""),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)("policies_http_transformations_response_div"+_,"display","block"),document.getElementById("policies_http_transformations_response_tab"+_).style.display="flex"},policies_http_transformations_response_pathsheaderData=[{header:"Path",key:"paths"}],policies_http_transformations_response_pathsrowData={policies_http_transformations_response_paths:[]},policies_http_transformations_response_pathshandleAdd=(idPrefix,clearFields)=>{if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("policies_http_transformations_response_paths_paths_id"+idPrefix).value="",(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)("policies_http_transformations_response_div"+idPrefix,"display","none"),document.getElementById("addpolicieshttp_transformationsresponse_pathsPage"+idPrefix).style.display="block",document.getElementById("policies_http_transformations_response_tab"+idPrefix).style.display="none"},getEditData=(_,e,t)=>{var s=_||"",r=window.iagyaml,a={};if(null!==r&&void 0!==r&&(void 0!==(a=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(r))&&null!==a||(a={})),policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths=[],e&&t)for(var i=0;i<e.length;i++){if((e[i].name?e[i].name:"")===window[s+"rowId"]&&void 0!==e[i]&&void 0!==e[i].paths){if("string"===typeof e[i].paths)(n={}).id=e[i].paths,n.paths=e[i].paths,policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.push(n);else for(var o=0;o<e[i].paths.length;o++){var n={};e[i].paths[o].id?n.id=e[i].paths[o].id:e[i].paths[o].paths?n.id=e[i].paths[o].paths:n.id=e[i].paths[o],e[i].paths[o].paths?n.paths=e[i].paths[o].paths:n.paths=e[i].paths[o],policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.push(n)}t("setpolicies_http_transformations_response_paths",policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths)}}else if(void 0!==a&&void 0!==a.policies&&void 0!==a.policies.http_transformations&&void 0!==a.policies.http_transformations.response)for(i=0;i<a.policies.http_transformations.response.length;i++){if((a.policieshttp_transformations_response[i].name?a.policieshttp_transformations_response[i].name:"")===window[s+"rowId"]&&void 0!==a&&void 0!==a.policies&&void 0!==a.policies.http_transformations&&void 0!==a.policies.http_transformations.response[i]&&void 0!==a.policies.http_transformations.response[i].paths)for(o=0;o<a.policies.http_transformations.response[i].paths.length;o++){(n={}).id=a.policies.http_transformations.response[i].paths[o],n.paths=a.policies.http_transformations.response[i].paths[o],policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.push(n)}}},Policieshttp_transformations_responseEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[policies_http_transformations_response_paths,setpolicies_http_transformations_response_paths]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),[fetchedpolicies_http_transformations_response_paths,setFetchedpolicies_http_transformations_response_paths]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{policies_http_transformations_response_pathsloadGrid()}),[fetchedpolicies_http_transformations_response_paths]);const policies_http_transformations_response_pathsloadGrid=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((async(_,e)=>{try{var t=[];if(_)if(e){for(var s=0;s<policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.length;s++){var r=(policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[s].paths?policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[s].paths:"")+"";(1!=window.policies_http_transformations_response_pathsediting&&"true"!=window.policies_http_transformations_response_pathsediting||r!=window.policies_http_transformations_response_pathsrowId)&&t.push(policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[s])}var a=(_||"")+"";t.push({id:a,paths:_})}else for(s=0;s<policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.length;s++)policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[s].paths!==_&&t.push(policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[s]);else t=policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths;policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths=t;setpolicies_http_transformations_response_paths({policies_http_transformations_response_paths:t}.policies_http_transformations_response_paths),void 0!==_&&null!==_&&handleChange()}catch(i){console.log(i)}return!0})),[policies_http_transformations_response_host,setpolicies_http_transformations_response_host]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_response_host=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_response_host(_.target.value)),[]),[policies_http_transformations_response_method,setpolicies_http_transformations_response_method]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_response_method=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_response_method(_.target.value)),[]),[policies_http_transformations_response_name,setpolicies_http_transformations_response_name]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_response_name=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_response_name(_.target.value)),[]),[policies_http_transformations_response_paths_paths,setpolicies_http_transformations_response_paths_paths]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_response_paths_paths=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_response_paths_paths(_.target.value)),[]),[policies_http_transformations_response_paths_paths_valid,setpolicies_http_transformations_response_paths_paths_valid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[policies_http_transformations_response_paths_paths_invalid_text,setpolicies_http_transformations_response_paths_paths_invalid_text]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[policies_http_transformations_response_rule,setpolicies_http_transformations_response_rule]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_response_rule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_response_rule(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>{for(var _=0;_<policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths.length;_++)policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[_].id===window.policies_http_transformations_response_pathsrowId&&setpolicies_http_transformations_response_paths_paths(void 0!==policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[_]&&void 0!==policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[_].paths?policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths[_].paths:"");return!0},setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{id:"editpolicieshttp_transformations_responsePage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"policies_http_transformations_response_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"paths_tab"+idPrefix,children:"Paths"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / HTTP Transformations / Response : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Response"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_http_transformations_response_host,id:"policies_http_transformations_response_host_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_response_host_tooltip_id"+idPrefix,labelText:"Host",onChange:props.updatepolicies_http_transformations_response_host}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"policies_http_transformations_response_host_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_http_transformations_response_method,id:"policies_http_transformations_response_method_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_response_method_tooltip_id"+idPrefix,labelText:"Method",onChange:props.updatepolicies_http_transformations_response_method}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"policies_http_transformations_response_method_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:['The HTTP method for which this transformation will take place. If the wildcard "*" is specified all methods will be matched.',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_http_transformations_response_name,id:"policies_http_transformations_response_name_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_response_name_tooltip_id"+idPrefix,labelText:"Name *",onChange:props.updatepolicies_http_transformations_response_name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"policies_http_transformations_response_name_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The name which is associated with this transformation.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_http_transformations_response_rule,id:"policies_http_transformations_response_rule_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_response_rule_tooltip_id"+idPrefix,labelText:"Rule",onChange:props.updatepolicies_http_transformations_response_rule}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"policies_http_transformations_response_rule_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:["The HTTP transformation rule.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.policies_http_transformations_response_name||!props.policies_http_transformations_response_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"paths_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / HTTP Transformations / Response : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"Paths Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{tabIndex:"0","data-tooltip-id":"policies_http_transformations_response_paths_tooltip_id"+idPrefix,children:"Paths"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_4__.m_,{id:"policies_http_transformations_response_paths_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{maxWidth:300},children:['The paths for which this transformation will take place. If the wildcard "*" is specified all paths will be matched. This entry is an array and can be used to specify multiple paths.',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"policies_http_transformations_response_pathsTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.Ay,{id:"policies_http_transformations_response_pathsTable"+idPrefix,isSortable:!0,headers:policies_http_transformations_response_pathsheaderData,rows:policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths,render:_=>{let{rows:e,headers:t,getHeaderProps:s,getRowProps:r,getTableProps:a,getToolbarProps:i,onInputChange:o,getTableContainerProps:n}=_;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{"aria-label":"data table toolbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{policies_http_transformations_response_pathshandleAdd(idPrefix,[setpolicies_http_transformations_response_paths_paths(""),setpolicies_http_transformations_response_paths_paths_valid(!0)])},children:"Add"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.A,{size:"normal",...a(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:[t.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{...s({header:_}),children:_.header}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{children:"Actions"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_18__.A,{children:e.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:[_.cells.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_19__.A,{children:_.value},_.id))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_19__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PolicieshttpTransformationsresponsepathsDeleteModal,{row:_,loadGrid:policies_http_transformations_response_pathsloadGrid})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PolicieshttpTransformationsresponsepathsEdit,{data:policies_http_transformations_response_pathsrowData.policies_http_transformations_response_paths,setData:setDataMain,row:_,loadGrid:policies_http_transformations_response_pathsloadGrid,dataLoad:dataLoad,editing:!0,name:"policies_http_transformations_response_paths",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updatepolicies_http_transformations_response_paths_paths:updatepolicies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths:policies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths_valid:policies_http_transformations_response_paths_paths_valid,policies_http_transformations_response_paths_paths_invalid_text:policies_http_transformations_response_paths_paths_invalid_text})})]})]},_.id)))})]})]})}})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_response_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.policies_http_transformations_response_name||!props.policies_http_transformations_response_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PolicieshttpTransformationsresponsepathsAdd,{loadGrid:policies_http_transformations_response_pathsloadGrid,doClose:()=>{closeAdd(idPrefix)},idPrefix:idPrefix,updatepolicies_http_transformations_response_paths_paths:updatepolicies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths:policies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths_valid:policies_http_transformations_response_paths_paths_valid,policies_http_transformations_response_paths_paths_invalid_text:policies_http_transformations_response_paths_paths_invalid_text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PolicieshttpTransformationsresponsepathsEdit,{loadGrid:policies_http_transformations_response_pathsloadGrid,dataLoad:dataLoad,name:"policies_http_transformations_response_paths",idPrefix:idPrefix+"_edit",parentIdPrefix:idPrefix,updatepolicies_http_transformations_response_paths_paths:updatepolicies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths:policies_http_transformations_response_paths_paths,policies_http_transformations_response_paths_paths_valid:policies_http_transformations_response_paths_paths_valid,policies_http_transformations_response_paths_paths_invalid_text:policies_http_transformations_response_paths_paths_invalid_text})})]})})},__WEBPACK_DEFAULT_EXPORT__=Policieshttp_transformations_responseEdit},5167:(_,e,t)=>{t.d(e,{Ay:()=>d});var s=t(4467),r=t(3986),a=t(8168),i=(t(2740),t(5173)),o=t.n(i),n=t(5043),p=(t(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function c(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(_);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,s)}return t}function l(_){return _&&"icon"===_.split("--")[0]}var h=function(_){var e,t=_.className,i=_.iconTitle,o=_.description,h=_.fill,d=_.fillRule,E=_.height,m=_.name,P=_.icon,f=_.role,D=_.style,O=_.width,M=_.iconRef,u=(0,r.A)(_,p),x=function(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,s.A)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}({className:t,fill:h,fillRule:d,height:E||P.height,name:l?m:"icon--".concat(m),role:f,style:D,viewBox:P.viewBox,width:O||P.width,ref:M},u),I=P?(e=P.svgData,Object.keys(e).filter((function(_){return e[_]})).map((function(_){var t=e[_];return"circles"===_?t.map((function(_,e){var t={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return n.createElement("circle",(0,a.A)({key:e},t))})):"paths"===_?t.map((function(_,e){return n.createElement("path",{d:_.d,key:"key".concat(e)})})):"polygons"===_?t.map((function(_,e){return n.createElement("polygon",{points:_.points,key:"key".concat(e)})})):""}))):"";return n.createElement("svg",(0,a.A)({},x,{"aria-label":o}),n.createElement("title",null,"undefined"===typeof i?o:i),I)};h.propTypes={className:o().string,description:o().string.isRequired,fill:o().string,fillRule:o().string,height:o().string,icon:o().shape({width:o().string,height:o().string,viewBox:o().string.isRequired,svgData:o().object.isRequired}),iconRef:o().func,iconTitle:o().string,name:o().string,role:o().string,style:o().object,viewBox:o().string,width:o().string},h.defaultProps={fillRule:"evenodd",role:"img"};const d=h}}]);
//# sourceMappingURL=3940.101d103c.chunk.js.map