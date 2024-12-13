"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[7732],{5351:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,r,a,t,s)=>{void 0===e&&(e="");var i={};!0!==document.getElementById("resource_servers_health_ping_rule_rule_id"+e).value.endsWith(":")&&(i.resource_servers_health_ping_rule_rule=document.getElementById("resource_servers_health_ping_rule_rule_id"+e).value),_(i.resource_servers_health_ping_rule_rule,!0),handleClose(e,r,a,t,s)},handleAdd=(_,e,r,a,t,s,i,l,n)=>{var d=a||"";if(window[d+"editing"]=!0,window[d+"rowId"]=_,i)for(var o=0;o<i.length;o++)i[o](a,l,n);e();var c=d;if(c.endsWith("_health_ping_rule")){c=c.slice(0,-17)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(c+"_div"+s,"display","none"),document.getElementById("edithealthping_rulePage"+r).style.display="block",document.getElementById(c+"_tab"+s).style.display="none"},handleClose=(_,e,r,a,t)=>{var s=e||"";delete window[s+"editing"],delete window[s+"rowId"];var i=s;if(i.endsWith("_health_ping_rule")){i=i.slice(0,-17)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(i+"_div"+a,"display","block"),document.getElementById("edithealthping_rulePage"+_).style.display="none",document.getElementById(i+"_tab"+a).style.display="flex",t&&t()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("resource_servers_health_ping_rule_div"+_,"display","block"),document.getElementById("resource_servers_health_ping_rule_tab"+_).style.display="flex"},getEditData=(_,e,r)=>{var a=_||"",t=window.iagyaml,s={};if(null!==t&&void 0!==t&&(void 0!==(s=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(t))&&null!==s||(s={})),e&&r)for(var i=0;i<e.length;i++){e[i].rule&&e[i].rule;window[a+"rowId"]}else void 0!==s&&s.resource_servers},Healthping_ruleEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[resource_servers_health_ping_rule_rule,setresource_servers_health_ping_rule_rule]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateresource_servers_health_ping_rule_rule=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setresource_servers_health_ping_rule_rule(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"edithealthping_rulePage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"resource_servers_health_ping_rule_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading resource_servers_health_ping_rule_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Resource Servers / Health / Ping / Response Rules : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div resource_servers_health_ping_rule_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem resource_servers_health_ping_rule_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Response Rule"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem resource_servers_health_ping_rule_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.resource_servers_health_ping_rule_rule,id:"resource_servers_health_ping_rule_rule_id"+idPrefix,labelText:"Response Rule *",onChange:props.updateresource_servers_health_ping_rule_rule})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem resource_servers_health_ping_rule_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.resource_servers_health_ping_rule_rule||!props.resource_servers_health_ping_rule_rule_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Healthping_ruleEdit}}]);
//# sourceMappingURL=7732.ec60c251.chunk.js.map