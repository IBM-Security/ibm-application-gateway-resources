"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[4146],{4146:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,t,i,a,r)=>{void 0===e&&(e="");var c={};!0!==document.getElementById("identity_oauth_ssl_certificate_certificate_id"+e).value.endsWith(":")&&(c.identity_oauth_ssl_certificate_certificate=document.getElementById("identity_oauth_ssl_certificate_certificate_id"+e).value),_(c.identity_oauth_ssl_certificate_certificate,!0),handleClose(e,t,i,a,r)},handleAdd=(_,e,t,i,a,r,c,s,d)=>{var n=i||"";if(window[n+"editing"]=!0,window[n+"rowId"]=_,c)for(var o=0;o<c.length;o++)c[o](i,s,d);e();var l=n;if(l.endsWith("_ssl_certificate")){l=l.slice(0,-16)}void 0!==a&&""!==a&&(document.getElementById(a).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(l+"_div"+r,"display","none"),document.getElementById("editidentityoauthssl_certificatePage"+t).style.display="block",document.getElementById(l+"_tab"+r).style.display="none"},handleClose=(_,e,t,i,a)=>{var r=e||"";delete window[r+"editing"],delete window[r+"rowId"];var c=r;if(c.endsWith("_ssl_certificate")){c=c.slice(0,-16)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(c+"_div"+i,"display","block"),document.getElementById("editidentityoauthssl_certificatePage"+_).style.display="none",document.getElementById(c+"_tab"+i).style.display="flex",a&&a()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("identity_oauth_ssl_certificate_div"+_,"display","block"),document.getElementById("identity_oauth_ssl_certificate_tab"+_).style.display="flex"},getEditData=(_,e,t)=>{var i=_||"",a=window.iagyaml,r={};if(null!==a&&void 0!==a&&(void 0!==(r=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(a))&&null!==r||(r={})),e&&t)for(var c=0;c<e.length;c++){e[c].certificate&&e[c].certificate;window[i+"rowId"]}else void 0!==r&&void 0!==r.identity&&r.identity.oauth},Identityoauthssl_certificateEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[identity_oauth_ssl_certificate_certificate,setidentity_oauth_ssl_certificate_certificate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateidentity_oauth_ssl_certificate_certificate=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setidentity_oauth_ssl_certificate_certificate(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editidentityoauthssl_certificatePage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"identity_oauth_ssl_certificate_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading identity_oauth_ssl_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Identity / OAuth / SSL / Certificate : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div identity_oauth_ssl_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_oauth_ssl_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Certificate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem identity_oauth_ssl_certificate_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.identity_oauth_ssl_certificate_certificate,id:"identity_oauth_ssl_certificate_certificate_id"+idPrefix,labelText:"Certificate *",onChange:props.updateidentity_oauth_ssl_certificate_certificate})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_oauth_ssl_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.identity_oauth_ssl_certificate_certificate||!props.identity_oauth_ssl_certificate_certificate_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Identityoauthssl_certificateEdit}}]);
//# sourceMappingURL=4146.c5c26724.chunk.js.map