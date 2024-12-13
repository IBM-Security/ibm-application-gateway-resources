"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[1165,3546,5167],{3546:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5167),carbon_components_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2830),carbon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4888),react_collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__),react_web_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,t,i,r,a)=>{void 0===e&&(e="");var n={};!0!==document.getElementById("identity_oauth_attributes_attributes_id"+e).value.endsWith(":")&&(n.identity_oauth_attributes_attributes=document.getElementById("identity_oauth_attributes_attributes_id"+e).value),_(n.identity_oauth_attributes_attributes,!0),handleClose(e,t,i,r,a)},handleAdd=(_,e,t,i,r,a,n,s,o)=>{var d=i||"";if(window[d+"editing"]=!0,window[d+"rowId"]=_,n)for(var c=0;c<n.length;c++)n[c](i,s,o);e();var l=d;if(l.endsWith("_attributes")){l=l.slice(0,-11)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(l+"_div"+a,"display","none"),document.getElementById("editidentityoauth_attributesPage"+t).style.display="block",document.getElementById(l+"_tab"+a).style.display="none"},handleClose=(_,e,t,i,r)=>{var a=e||"";delete window[a+"editing"],delete window[a+"rowId"];var n=a;if(n.endsWith("_attributes")){n=n.slice(0,-11)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.nn)(n+"_div"+i,"display","block"),document.getElementById("editidentityoauth_attributesPage"+_).style.display="none",document.getElementById(n+"_tab"+i).style.display="flex",r&&r()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("identity_oauth_attributes_div"+_,"display","block"),document.getElementById("identity_oauth_attributes_tab"+_).style.display="flex"},getEditData=(_,e,t)=>{var i=_||"",r=window.iagyaml,a={};if(null!==r&&void 0!==r&&(void 0!==(a=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.Qd)(r))&&null!==a||(a={})),e&&t)for(var n=0;n<e.length;n++){e[n].attributes&&e[n].attributes;window[i+"rowId"]}else void 0!==a&&void 0!==a.identity&&a.identity.oauth},Identityoauth_attributesEdit=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"";var rowId=void 0!==row?row.id:"";const[identity_oauth_attributes_attributes,setidentity_oauth_attributes_attributes]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateidentity_oauth_attributes_attributes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setidentity_oauth_attributes_attributes(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return 1==props.editing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.Ay,{..._helpers__WEBPACK_IMPORTED_MODULE_5__.Z_.editIcon(),onClick:()=>{handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"editidentityoauth_attributesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.tU,{id:"identity_oauth_attributes_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_3__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem iag_tab_heading identity_oauth_attributes_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"iag_breadcrumb",children:"Identity / OAuth / Attributes : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag--simple-div identity_oauth_attributes_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{children:"Attribute"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_8__.A,{value:props.identity_oauth_attributes_attributes,id:"identity_oauth_attributes_attributes_id"+idPrefix,labelText:"Attribute *",onChange:props.updateidentity_oauth_attributes_attributes})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"iag_form_elem identity_oauth_attributes_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{onClick:()=>{handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_9__.A,{disabled:!props.identity_oauth_attributes_attributes||!props.identity_oauth_attributes_attributes_valid,onClick:()=>{handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Identityoauth_attributesEdit},5167:(_,e,t)=>{t.d(e,{Ay:()=>E});var i=t(4467),r=t(3986),a=t(8168),n=(t(2740),t(5173)),s=t.n(n),o=t(5043),d=(t(4888),["className","iconTitle","description","fill","fillRule","height","name","icon","role","style","width","iconRef"]);function c(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(_);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,i)}return t}function l(_){return _&&"icon"===_.split("--")[0]}var u=function(_){var e,t=_.className,n=_.iconTitle,s=_.description,u=_.fill,E=_.fillRule,p=_.height,b=_.name,P=_.icon,O=_.role,D=_.style,m=_.width,h=_.iconRef,M=(0,r.A)(_,d),y=function(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,i.A)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}({className:t,fill:u,fillRule:E,height:p||P.height,name:l?b:"icon--".concat(b),role:O,style:D,viewBox:P.viewBox,width:m||P.width,ref:h},M),f=P?(e=P.svgData,Object.keys(e).filter((function(_){return e[_]})).map((function(_){var t=e[_];return"circles"===_?t.map((function(_,e){var t={cx:_.cx,cy:_.cy,r:_.r,key:"circle".concat(e)};return o.createElement("circle",(0,a.A)({key:e},t))})):"paths"===_?t.map((function(_,e){return o.createElement("path",{d:_.d,key:"key".concat(e)})})):"polygons"===_?t.map((function(_,e){return o.createElement("polygon",{points:_.points,key:"key".concat(e)})})):""}))):"";return o.createElement("svg",(0,a.A)({},y,{"aria-label":s}),o.createElement("title",null,"undefined"===typeof n?s:n),f)};u.propTypes={className:s().string,description:s().string.isRequired,fill:s().string,fillRule:s().string,height:s().string,icon:s().shape({width:s().string,height:s().string,viewBox:s().string.isRequired,svgData:s().object.isRequired}),iconRef:s().func,iconTitle:s().string,name:s().string,role:s().string,style:s().object,viewBox:s().string,width:s().string},u.defaultProps={fillRule:"evenodd",role:"img"};const E=u}}]);
//# sourceMappingURL=1165.70bc5e9c.chunk.js.map