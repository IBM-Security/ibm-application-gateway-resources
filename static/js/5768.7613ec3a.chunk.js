"use strict";(self.webpackChunkiag_configurator=self.webpackChunkiag_configurator||[]).push([[5768],{5768:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5043),carbon_components_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8946),carbon_components_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2830),react_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1995),react_collapsible__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__),react_web_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5495),react_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9532),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1262),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(579);const handleChange=()=>{},handleSave=(_,e,s)=>{void 0===e&&(e="");var r={};!0!==document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+e).value.endsWith(":")&&(r.services_redis_collections_servers_ssl_trust_certificates_trust_certificates=document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+e).value),_(r.services_redis_collections_servers_ssl_trust_certificates_trust_certificates,!0),handleClose(e,s)},handleAdd=(_,e,s)=>{void 0===_&&(_=""),document.getElementById("services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id").value="",e&&e(),handleClose(_,s)},handleClose=(_,e)=>{(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.nn)("ssl_div"+_,"display","block"),document.getElementById("addservicesrediscollectionsserversssl_trust_certificatesPage"+_).style.display="none",e&&e()},closeAdd=_=>{void 0===_&&(_=""),updateStyle("services_redis_collections_servers_ssl_trust_certificates_div"+_,"display","block"),document.getElementById("services_redis_collections_servers_ssl_trust_certificates_tab"+_).style.display="flex"},Servicesrediscollectionsserversssl_trust_certificatesAdd=props=>{var row=props.row;const loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",[services_redis_collections_servers_ssl_trust_certificates_trust_certificates,setservices_redis_collections_servers_ssl_trust_certificates_trust_certificates]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),updateservices_redis_collections_servers_ssl_trust_certificates_trust_certificates=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_=>setservices_redis_collections_servers_ssl_trust_certificates_trust_certificates(_.target.value)),[]),[fetcheddata,setFetcheddata]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{dataLoad()}),[fetcheddata]);const dataLoad=()=>!0,setDataMain=(functionName,data)=>{functionName&&data&&eval(functionName)(data)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"addservicesrediscollectionsserversssl_trust_certificatesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,{id:"services_redis_collections_servers_ssl_trust_certificates_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.wb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.oz,{tabFor:"General_tab"+idPrefix,children:"General"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_web_tabs__WEBPACK_IMPORTED_MODULE_2__.Kp,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem iag_tab_heading services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"iag_breadcrumb",children:"Services / Redis / Collections / Servers / SSL / Trust Certificates : "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"                  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"General Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{}),"Specifies the general settings associated with this component"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag--simple-div services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3",{children:"Trust Certificate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"iag-wdgt-container",style:{marginLeft:"80px",marginBottom:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_6__.A,{invalid:!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_valid,invalidText:props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_invalid_text,value:props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates,id:"services_redis_collections_servers_ssl_trust_certificates_trust_certificates_id"+idPrefix,labelText:"Trust Certificate *",onChange:props.updateservices_redis_collections_servers_ssl_trust_certificates_trust_certificates})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"iag_form_elem services_redis_collections_servers_ssl_trust_certificates_div"+idPrefix,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{onClick:()=>{handleClose(idPrefix,doClose)},children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(carbon_components_react__WEBPACK_IMPORTED_MODULE_7__.A,{disabled:!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates||!props.services_redis_collections_servers_ssl_trust_certificates_trust_certificates_valid,onClick:()=>{handleSave(loadGrid,idPrefix,doClose)},children:"Save"})]})]})]})})})},__WEBPACK_DEFAULT_EXPORT__=Servicesrediscollectionsserversssl_trust_certificatesAdd}}]);
//# sourceMappingURL=5768.7613ec3a.chunk.js.map