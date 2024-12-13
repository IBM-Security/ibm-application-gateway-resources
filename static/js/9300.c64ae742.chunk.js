"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[5167,9300],{9300:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(e,_,t,r,i,a)=>{void 0===_&&(_="");var n={};!0!==document.getElementById("server_ssl_front_end_certificate_certificate_id"+_).value.endsWith(":")&&(n.server_ssl_front_end_certificate_certificate=document.getElementById("server_ssl_front_end_certificate_certificate_id"+_).value),e(n.server_ssl_front_end_certificate_certificate,!0),handleClose(_,t,r,i,a)},handleAdd=(e,_,t,r,i,a,n,s,c)=>{var o=r||"";if(window[o+"editing"]=!0,window[o+"rowId"]=e,n)for(var l=0;l<n.length;l++)n[l](r,s,c);_();var d=o;if(d.endsWith("_ssl_front_end_certificate")){d=d.slice(0,-26)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(d+"_div"+a,"display","none"),document.getElementById("editserversslfront_end_certificatePage"+t).style.display="block",document.getElementById(d+"_tab"+a).style.display="none"},handleClose=(e,_,t,r,i)=>{var a=_||"";delete window[a+"editing"],delete window[a+"rowId"];var n=a;if(n.endsWith("_ssl_front_end_certificate")){n=n.slice(0,-26)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(n+"_div"+r,"display","block"),document.getElementById("editserversslfront_end_certificatePage"+e).style.display="none",document.getElementById(n+"_tab"+r).style.display="flex",i&&i()},closeAdd=e=>{void 0===e&&(e=""),updateStyle("server_ssl_front_end_certificate_div"+e,"display","block"),document.getElementById("server_ssl_front_end_certificate_tab"+e).style.display="flex"},getEditData=(e,_,t)=>{var r=window.iagyaml,i={};null!==r&&void 0!==r&&(void 0!==(i=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(r))&&null!==i||(i={}))},Serversslfront_end_certificateEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[server_ssl_front_end_certificate_certificate,setserver_ssl_front_end_certificate_certificate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateserver_ssl_front_end_certificate_certificate=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>setserver_ssl_front_end_certificate_certificate(e.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editserversslfront_end_certificatePage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"server_ssl_front_end_certificate_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading server_ssl_front_end_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Server / SSL / Front End / Certificate : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div server_ssl_front_end_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem server_ssl_front_end_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Certificate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"40px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem server_ssl_front_end_certificate_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.server_ssl_front_end_certificate_certificate,id:"server_ssl_front_end_certificate_certificate_id"+idPrefix,labelText:"Certificate *",onChange:props.updateserver_ssl_front_end_certificate_certificate})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem server_ssl_front_end_certificate_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.server_ssl_front_end_certificate_certificate||!props.server_ssl_front_end_certificate_certificate_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Serversslfront_end_certificateEdit},5167:(e,_,t)=>{t.d(_,{Ay:()=>f});var r=t(4467),i=t(3986),a=t(8168),n=(t(2740),t(5173)),s=t.n(n),c=t(5043),o=(t(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function l(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,r)}return t}function d(e){return e&&"icon"===e.split("--")[0]}var E=function(e){var _,t=e.className,n=e.iconTitle,s=e.description,E=e.fill,f=e.fillRule,p=e.height,P=e.name,O=e.icon,u=e.role,D=e.style,m=e.width,M=e.iconRef,b=(0,i.A)(e,o),v=function(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?l(Object(t),!0).forEach((function(_){(0,r.A)(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}({className:t,fill:E,fillRule:f,height:p||O.height,name:d?P:"icon--".concat(P),role:u,style:D,viewBox:O.viewBox,width:m||O.width,ref:M},b),x=O?(_=O.svgData,Object.keys(_).filter((function(e){return _[e]})).map((function(e){var t=_[e];return"circles"===e?t.map((function(e,_){var t={cx:e.cx,cy:e.cy,r:e.r,key:"circle".concat(_)};return c.createElement("circle",(0,a.A)({key:_},t))})):"paths"===e?t.map((function(e,_){return c.createElement("path",{d:e.d,key:"key".concat(_)})})):"polygons"===e?t.map((function(e,_){return c.createElement("polygon",{points:e.points,key:"key".concat(_)})})):""}))):"";return c.createElement("svg",(0,a.A)({},v,{"aria-label":s}),c.createElement("title",null,"undefined"===typeof n?s:n),x)};E.propTypes={className:s().string,description:s().string.isRequired,fill:s().string,fillRule:s().string,height:s().string,icon:s().shape({width:s().string,height:s().string,viewBox:s().string.isRequired,svgData:s().object.isRequired}),iconRef:s().func,iconTitle:s().string,name:s().string,role:s().string,style:s().object,viewBox:s().string,width:s().string},E.defaultProps={fillRule:"evenodd",role:"img"};const f=E}}]);
//# sourceMappingURL=9300.c64ae742.chunk.js.map