"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[5167,9113],{9113:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,r,t,i,a)=>{void 0===e&&(e="");var d={};!0!==document.getElementById("identity_ci_oidc_allowed_query_args_allowed_query_args_id"+e).value.endsWith(":")&&(d.identity_ci_oidc_allowed_query_args_allowed_query_args=document.getElementById("identity_ci_oidc_allowed_query_args_allowed_query_args_id"+e).value),_(d.identity_ci_oidc_allowed_query_args_allowed_query_args,!0),handleClose(e,r,t,i,a)},handleAdd=(_,e,r,t,i,a,d,l,n)=>{var o=t||"";if(window[o+"editing"]=!0,window[o+"rowId"]=_,d)for(var c=0;c<d.length;c++)d[c](t,l,n);e();var s=o;if(s.endsWith("_ci_oidc_allowed_query_args")){s=s.slice(0,-27)}void 0!==i&&""!==i&&(document.getElementById(i).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(s+"_div"+a,"display","none"),document.getElementById("editidentityci_oidc_allowed_query_argsPage"+r).style.display="block",document.getElementById(s+"_tab"+a).style.display="none"},handleClose=(_,e,r,t,i)=>{var a=e||"";delete window[a+"editing"],delete window[a+"rowId"];var d=a;if(d.endsWith("_ci_oidc_allowed_query_args")){d=d.slice(0,-27)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(d+"_div"+t,"display","block"),document.getElementById("editidentityci_oidc_allowed_query_argsPage"+_).style.display="none",document.getElementById(d+"_tab"+t).style.display="flex",i&&i()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("identity_ci_oidc_allowed_query_args_div"+_,"display","block"),document.getElementById("identity_ci_oidc_allowed_query_args_tab"+_).style.display="flex"},getEditData=(_,e,r)=>{var t=window.iagyaml,i={};null!==t&&void 0!==t&&(void 0!==(i=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(t))&&null!==i||(i={}))},Identityci_oidc_allowed_query_argsEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[identity_ci_oidc_allowed_query_args_allowed_query_args,setidentity_ci_oidc_allowed_query_args_allowed_query_args]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateidentity_ci_oidc_allowed_query_args_allowed_query_args=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setidentity_ci_oidc_allowed_query_args_allowed_query_args(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editidentityci_oidc_allowed_query_argsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"identity_ci_oidc_allowed_query_args_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading identity_ci_oidc_allowed_query_args_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Identity / CI OIDC (deprecated) / Allowed Query Arguments : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div identity_ci_oidc_allowed_query_args_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_ci_oidc_allowed_query_args_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Allowed Query Argument"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem identity_ci_oidc_allowed_query_args_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.identity_ci_oidc_allowed_query_args_allowed_query_args,id:"identity_ci_oidc_allowed_query_args_allowed_query_args_id"+idPrefix,labelText:"Allowed Query Argument *",onChange:props.updateidentity_ci_oidc_allowed_query_args_allowed_query_args})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_ci_oidc_allowed_query_args_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.identity_ci_oidc_allowed_query_args_allowed_query_args||!props.identity_ci_oidc_allowed_query_args_allowed_query_args_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Identityci_oidc_allowed_query_argsEdit},5167:(_,e,r)=>{r.d(e,{Ay:()=>u});var t=r(4467),i=r(3986),a=r(8168),d=(r(2740),r(5173)),l=r.n(d),n=r(5043),o=(r(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function c(_,e){var r=Object.keys(_);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(_);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),r.push.apply(r,t)}return r}function s(_){return _&&"icon"===_.split("--")[0]}var E=function(_){var e,r=_.className,d=_.iconTitle,l=_.description,E=_.fill,u=_.fillRule,p=_.height,P=_.name,y=_.icon,O=_.role,g=_.style,D=_.width,m=_.iconRef,w=(0,i.A)(_,o),M=function(_){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,t.A)(_,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(r,e))}))}return _}({className:r,fill:E,fillRule:u,height:p||y.height,name:s?P:"icon--".concat(P),role:O,style:g,viewBox:y.viewBox,width:D||y.width,ref:m},w),b=y?(e=y.svgData,Object.keys(e).filter((function(_){return e[_]})).map((function(_){var r=e[_];return"circles"===_?r.map((function(_,e){var r={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return n.createElement("circle",(0,a.A)({key:e},r))})):"paths"===_?r.map((function(_,e){return n.createElement("path",{d:_.d,key:"key".concat(e)})})):"polygons"===_?r.map((function(_,e){return n.createElement("polygon",{points:_.points,key:"key".concat(e)})})):""}))):"";return n.createElement("svg",(0,a.A)({},M,{"aria-label":l}),n.createElement("title",null,"undefined"===typeof d?l:d),b)};E.propTypes={className:l().string,description:l().string.isRequired,fill:l().string,fillRule:l().string,height:l().string,icon:l().shape({width:l().string,height:l().string,viewBox:l().string.isRequired,svgData:l().object.isRequired}),iconRef:l().func,iconTitle:l().string,name:l().string,role:l().string,style:l().object,viewBox:l().string,width:l().string},E.defaultProps={fillRule:"evenodd",role:"img"};const u=E}}]);
//# sourceMappingURL=9113.6ba2ed29.chunk.js.map