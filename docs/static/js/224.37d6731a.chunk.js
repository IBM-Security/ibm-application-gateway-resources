(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{350:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),react_collapsible__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__),react_web_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,t){void 0===e&&(e="");var a={};!0!==document.getElementById("identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_id"+e).value.endsWith(":")&&(a.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs=document.getElementById("identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_id"+e).value),_(a.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs,!0),handleClose(e,t)},handleAdd=function(_,e,t){void 0===_&&(_=""),document.getElementById("identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_id").value="",e&&e(),handleClose(_,t)},handleClose=function(_,e){Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("identity_div"+_,"display","block"),document.getElementById("addidentityci_oidc_bearer_token_attrsPage"+_).style.display="none",e&&e()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("identity_ci_oidc_bearer_token_attrs_div"+_,"display","block"),document.getElementById("identity_ci_oidc_bearer_token_attrs_tab"+_).style.display="flex"},Identityci_oidc_bearer_token_attrsAdd=function Identityci_oidc_bearer_token_attrsAdd(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),identity_ci_oidc_bearer_token_attrs_bearer_token_attrs=_useState2[0],setidentity_ci_oidc_bearer_token_attrs_bearer_token_attrs=_useState2[1],updateidentity_ci_oidc_bearer_token_attrs_bearer_token_attrs=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setidentity_ci_oidc_bearer_token_attrs_bearer_token_attrs(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"addidentityci_oidc_bearer_token_attrsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.d,{id:"identity_ci_oidc_bearer_token_attrs_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading identity_ci_oidc_bearer_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Identity / CI OIDC (deprecated) / Bearer Token Attributes : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div identity_ci_oidc_bearer_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_bearer_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Bearer Token Attribute"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_bearer_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,{invalid:!props.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_valid,invalidText:props.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_invalid_text,value:props.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs,id:"identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_id"+idPrefix,labelText:"Bearer Token Attribute *",onChange:props.updateidentity_ci_oidc_bearer_token_attrs_bearer_token_attrs}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_ci_oidc_bearer_token_attrs_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!props.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs||!props.identity_ci_oidc_bearer_token_attrs_bearer_token_attrs_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identityci_oidc_bearer_token_attrsAdd}}]);
//# sourceMappingURL=224.37d6731a.chunk.js.map