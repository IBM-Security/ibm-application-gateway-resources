"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[5606],{5606:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9895),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9976),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8674),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4007),carbon_components_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2830),carbon_components_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(2751),carbon_components_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(697),carbon_components_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(9199),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(810),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(263),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(6519),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(8946),react_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__),react_web_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(579);const PolicieshttpTransformationspostauthnauthenticationMechanismsDeleteModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>Promise.all([__webpack_require__.e(3466),__webpack_require__.e(7412)]).then(__webpack_require__.bind(__webpack_require__,7412)))),PolicieshttpTransformationspostauthnauthenticationMechanismsAdd=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(3479).then(__webpack_require__.bind(__webpack_require__,3479)))),PolicieshttpTransformationspostauthnauthenticationMechanismsEdit=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((()=>__webpack_require__.e(5462).then(__webpack_require__.bind(__webpack_require__,5462)))),handleChange=()=>{},handleSave=(_,t,a)=>{void 0===t&&(t="");var i={};!0!==document.getElementById("policies_http_transformations_postauthn_host_id"+t).value.endsWith(":")&&(i.policies_http_transformations_postauthn_host=document.getElementById("policies_http_transformations_postauthn_host_id"+t).value),!0!==document.getElementById("policies_http_transformations_postauthn_name_id"+t).value.endsWith(":")&&(i.policies_http_transformations_postauthn_name=document.getElementById("policies_http_transformations_postauthn_name_id"+t).value),!0!==document.getElementById("policies_http_transformations_postauthn_rule_id"+t).value.endsWith(":")&&(i.policies_http_transformations_postauthn_rule=document.getElementById("policies_http_transformations_postauthn_rule_id"+t).value),i.policies_http_transformations_postauthn_authentication_mechanisms=policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms,_(i.policies_http_transformations_postauthn_host,i.policies_http_transformations_postauthn_name,i.policies_http_transformations_postauthn_rule,i.policies_http_transformations_postauthn_authentication_mechanisms,!0),handleClose(t,a)},handleAdd=(_,t,a,i)=>{void 0===t&&(t=""),document.getElementById("policies_http_transformations_postauthn_host_id").value="",document.getElementById("policies_http_transformations_postauthn_name_id").value="",document.getElementById("policies_http_transformations_postauthn_rule_id").value="",policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms=[],_(policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms),a&&a(),handleClose(t,i)},handleClose=(_,t)=>{(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_div"+_,"display","block"),document.getElementById("addpolicieshttp_transformations_postauthnPage"+_).style.display="none",t&&t()},closeAdd=_=>{void 0===_&&(_=""),(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_http_transformations_postauthn_div"+_,"display","block"),document.getElementById("policies_http_transformations_postauthn_tab"+_).style.display="flex"},policies_http_transformations_postauthn_authentication_mechanismsheaderData=[{header:"Authentication Mechanisms",key:"authentication_mechanisms"}],policies_http_transformations_postauthn_authentication_mechanismsrowData={policies_http_transformations_postauthn_authentication_mechanisms:[]},policies_http_transformations_postauthn_authentication_mechanismshandleAdd=(idPrefix,clearFields)=>{if(void 0===idPrefix&&(idPrefix=""),clearFields)for(var i=0;i<clearFields.length;i++)eval(clearFields[i]);document.getElementById("policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_id"+idPrefix).value="",(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("policies_http_transformations_postauthn_div"+idPrefix,"display","none"),document.getElementById("addpolicieshttp_transformationspostauthn_authentication_mechanismsPage"+idPrefix).style.display="block",document.getElementById("policies_http_transformations_postauthn_tab"+idPrefix).style.display="none"},Policieshttp_transformations_postauthnAdd=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",[policies_http_transformations_postauthn_authentication_mechanisms,setpolicies_http_transformations_postauthn_authentication_mechanisms]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),[fetchedpolicies_http_transformations_postauthn_authentication_mechanisms,setFetchedpolicies_http_transformations_postauthn_authentication_mechanisms]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{policies_http_transformations_postauthn_authentication_mechanismsloadGrid()}),[fetchedpolicies_http_transformations_postauthn_authentication_mechanisms]);const policies_http_transformations_postauthn_authentication_mechanismsloadGrid=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((async(_,t)=>{try{var a=[];if(_)if(t){for(var i=0;i<policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms.length;i++){var s=(policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[i].authentication_mechanisms?policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[i].authentication_mechanisms:"")+"";(1!=window.policies_http_transformations_postauthn_authentication_mechanismsediting&&"true"!=window.policies_http_transformations_postauthn_authentication_mechanismsediting||s!=window.policies_http_transformations_postauthn_authentication_mechanismsrowId)&&a.push(policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[i])}var e=(_||"")+"";a.push({id:e,authentication_mechanisms:_})}else for(i=0;i<policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms.length;i++)policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[i].authentication_mechanisms!==_&&a.push(policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[i]);else a=policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms;policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms=a;setpolicies_http_transformations_postauthn_authentication_mechanisms({policies_http_transformations_postauthn_authentication_mechanisms:a}.policies_http_transformations_postauthn_authentication_mechanisms),void 0!==_&&null!==_&&handleChange()}catch(n){console.log(n)}return!0})),[policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>{setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms(_.target.value);var t=_.target.value;(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.jr)(policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms,setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid,setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text,"Policies Http Transformations Postauthn Authentication Mechanisms","authentication_mechanisms",t)}),[]),[policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid,setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text,setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[policies_http_transformations_postauthn_host,setpolicies_http_transformations_postauthn_host]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_postauthn_host=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_postauthn_host(_.target.value)),[]),[policies_http_transformations_postauthn_name,setpolicies_http_transformations_postauthn_name]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_postauthn_name=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_postauthn_name(_.target.value)),[]),[policies_http_transformations_postauthn_rule,setpolicies_http_transformations_postauthn_rule]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_http_transformations_postauthn_rule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_http_transformations_postauthn_rule(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>{for(var _=0;_<policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms.length;_++)policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[_].id===window.policies_http_transformations_postauthn_authentication_mechanismsrowId&&setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms(void 0!==policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[_]&&void 0!==policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[_].authentication_mechanisms?policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms[_].authentication_mechanisms:"");return!0},setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{id:"addpolicieshttp_transformations_postauthnPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,{id:"policies_http_transformations_postauthn_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.wb,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"General_tab"+idPrefix,children:"General"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"authentication_mechanisms_tab"+idPrefix,children:"Authentication Mechanisms"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"authentication_mechanisms_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / HTTP Transformations / Postauthn : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"Authentication Mechanisms Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3",{tabIndex:"0","data-tooltip-id":"policies_http_transformations_postauthn_authentication_mechanisms_tooltip_id"+idPrefix,children:"Authentication Mechanisms"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_http_transformations_postauthn_authentication_mechanisms_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The authentication mechanisms for which this transformation should be  triggered.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"The name of the authentication mechanism is located within the AZN_CRED_AUTH_METHOD attribute of an authenticated credential.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"policies_http_transformations_postauthn_authentication_mechanismsTableDiv"+idPrefix,style:{marginLeft:"10px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.Ay,{id:"policies_http_transformations_postauthn_authentication_mechanismsTable"+idPrefix,isSortable:!0,headers:policies_http_transformations_postauthn_authentication_mechanismsheaderData,rows:policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms,render:_=>{let{rows:t,headers:a,getHeaderProps:i,getRowProps:s,getTableProps:e,getToolbarProps:n,onInputChange:o,getTableContainerProps:r}=_;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{"aria-label":"data table toolbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{onClick:()=>{policies_http_transformations_postauthn_authentication_mechanismshandleAdd(idPrefix,[setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms(""),setpolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid(!0)])},children:"Add"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_11__.A,{size:"normal",...e(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_12__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.A,{children:[a.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.A,{...i({header:_}),children:_.header}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.A,{children:"Actions"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.A,{children:t.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__.A,{children:[_.cells.map((_=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:_.value},_.id))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PolicieshttpTransformationspostauthnauthenticationMechanismsDeleteModal,{row:_,loadGrid:policies_http_transformations_postauthn_authentication_mechanismsloadGrid})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PolicieshttpTransformationspostauthnauthenticationMechanismsEdit,{data:policies_http_transformations_postauthn_authentication_mechanismsrowData.policies_http_transformations_postauthn_authentication_mechanisms,setData:setDataMain,row:_,loadGrid:policies_http_transformations_postauthn_authentication_mechanismsloadGrid,dataLoad:dataLoad,editing:!0,name:"policies_http_transformations_postauthn_authentication_mechanisms",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text})})]})]},_.id)))})]})]})}})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{disabled:!props.policies_http_transformations_postauthn_name||!props.policies_http_transformations_postauthn_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / HTTP Transformations / Postauthn : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3",{children:"Postauthn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{value:props.policies_http_transformations_postauthn_host,id:"policies_http_transformations_postauthn_host_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_postauthn_host_tooltip_id"+idPrefix,labelText:"Host",onChange:props.updatepolicies_http_transformations_postauthn_host}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_http_transformations_postauthn_host_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{invalid:!props.policies_http_transformations_postauthn_name_valid,invalidText:props.policies_http_transformations_postauthn_name_invalid_text,value:props.policies_http_transformations_postauthn_name,id:"policies_http_transformations_postauthn_name_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_postauthn_name_tooltip_id"+idPrefix,labelText:"Name *",onChange:props.updatepolicies_http_transformations_postauthn_name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_http_transformations_postauthn_name_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The name which is associated with this transformation.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.A,{value:props.policies_http_transformations_postauthn_rule,id:"policies_http_transformations_postauthn_rule_id"+idPrefix,"data-tooltip-id":"policies_http_transformations_postauthn_rule_tooltip_id"+idPrefix,labelText:"Rule",onChange:props.updatepolicies_http_transformations_postauthn_rule}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.m_,{id:"policies_http_transformations_postauthn_rule_tooltip_id"+idPrefix,clickable:!0,place:"top",effect:"solid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:300},children:["The HTTP transformation rule.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]})})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem policies_http_transformations_postauthn_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_10__.A,{disabled:!props.policies_http_transformations_postauthn_name||!props.policies_http_transformations_postauthn_name_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PolicieshttpTransformationspostauthnauthenticationMechanismsAdd,{loadGrid:policies_http_transformations_postauthn_authentication_mechanismsloadGrid,doClose:()=>{closeAdd(idPrefix)},idPrefix:idPrefix,updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PolicieshttpTransformationspostauthnauthenticationMechanismsEdit,{loadGrid:policies_http_transformations_postauthn_authentication_mechanismsloadGrid,dataLoad:dataLoad,name:"policies_http_transformations_postauthn_authentication_mechanisms",idPrefix:idPrefix+"_add",parentIdPrefix:idPrefix,updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:updatepolicies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_valid,policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text:policies_http_transformations_postauthn_authentication_mechanisms_authentication_mechanisms_invalid_text})})]})})},__WEBPACK_DEFAULT_EXPORT__=Policieshttp_transformations_postauthnAdd}}]);
//# sourceMappingURL=5606.604926be.chunk.js.map