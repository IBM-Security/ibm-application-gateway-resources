"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[4638],{9400:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,i,o,r,a)=>{void 0===e&&(e="");var l={};!0!==document.getElementById("policies_cors_policy_allow_origins_allow_origins_id"+e).value.endsWith(":")&&(l.policies_cors_policy_allow_origins_allow_origins=document.getElementById("policies_cors_policy_allow_origins_allow_origins_id"+e).value),_(l.policies_cors_policy_allow_origins_allow_origins,!0),handleClose(e,i,o,r,a)},handleAdd=(_,e,i,o,r,a,l,s,t)=>{var c=o||"";if(window[c+"editing"]=!0,window[c+"rowId"]=_,l)for(var n=0;n<l.length;n++)l[n](o,s,t);e();var d=c;if(d.endsWith("_policy_allow_origins")){d=d.slice(0,-21)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(d+"_div"+a,"display","none"),document.getElementById("editpoliciescorspolicy_allow_originsPage"+i).style.display="block",document.getElementById(d+"_tab"+a).style.display="none"},handleClose=(_,e,i,o,r)=>{var a=e||"";delete window[a+"editing"],delete window[a+"rowId"];var l=a;if(l.endsWith("_policy_allow_origins")){l=l.slice(0,-21)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(l+"_div"+o,"display","block"),document.getElementById("editpoliciescorspolicy_allow_originsPage"+_).style.display="none",document.getElementById(l+"_tab"+o).style.display="flex",r&&r()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("policies_cors_policy_allow_origins_div"+_,"display","block"),document.getElementById("policies_cors_policy_allow_origins_tab"+_).style.display="flex"},getEditData=(_,e,i)=>{var o=_||"",r=window.iagyaml,a={};if(null!==r&&void 0!==r&&(void 0!==(a=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(r))&&null!==a||(a={})),e&&i)for(var l=0;l<e.length;l++){e[l].allow_origins&&e[l].allow_origins;window[o+"rowId"]}else void 0!==a&&void 0!==a.policies&&a.policies.cors},Policiescorspolicy_allow_originsEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[policies_cors_policy_allow_origins_allow_origins,setpolicies_cors_policy_allow_origins_allow_origins]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updatepolicies_cors_policy_allow_origins_allow_origins=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setpolicies_cors_policy_allow_origins_allow_origins(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editpoliciescorspolicy_allow_originsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"policies_cors_policy_allow_origins_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading policies_cors_policy_allow_origins_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Policies / CORS / Policy / Allow Origins : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div policies_cors_policy_allow_origins_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Origin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.policies_cors_policy_allow_origins_allow_origins,id:"policies_cors_policy_allow_origins_allow_origins_id"+idPrefix,labelText:"Origin *",onChange:props.updatepolicies_cors_policy_allow_origins_allow_origins})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem policies_cors_policy_allow_origins_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.policies_cors_policy_allow_origins_allow_origins||!props.policies_cors_policy_allow_origins_allow_origins_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Policiescorspolicy_allow_originsEdit}}]);
//# sourceMappingURL=4638.7535ac94.chunk.js.map