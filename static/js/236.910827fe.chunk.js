(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{329:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),react_collapsible__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__),react_web_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,a){void 0===e&&(e="");var t={};!0!==document.getElementById("identity_oidc_allowed_query_args_allowed_query_args_id"+e).value.endsWith(":")&&(t.identity_oidc_allowed_query_args_allowed_query_args=document.getElementById("identity_oidc_allowed_query_args_allowed_query_args_id"+e).value),_(t.identity_oidc_allowed_query_args_allowed_query_args,!0),handleClose(e,a)},handleAdd=function(_,e,a){void 0===_&&(_=""),document.getElementById("identity_oidc_allowed_query_args_allowed_query_args_id").value="",e&&e(),handleClose(_,a)},handleClose=function(_,e){Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("identity_div"+_,"display","block"),document.getElementById("addidentityoidc_allowed_query_argsPage"+_).style.display="none",e&&e()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("identity_oidc_allowed_query_args_div"+_,"display","block"),document.getElementById("identity_oidc_allowed_query_args_tab"+_).style.display="flex"},Identityoidc_allowed_query_argsAdd=function Identityoidc_allowed_query_argsAdd(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),identity_oidc_allowed_query_args_allowed_query_args=_useState2[0],setidentity_oidc_allowed_query_args_allowed_query_args=_useState2[1],updateidentity_oidc_allowed_query_args_allowed_query_args=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setidentity_oidc_allowed_query_args_allowed_query_args(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"addidentityoidc_allowed_query_argsPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.d,{id:"identity_oidc_allowed_query_args_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading identity_oidc_allowed_query_args_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Identity / OIDC / Allowed Query Arguments : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div identity_oidc_allowed_query_args_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oidc_allowed_query_args_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Allowed Query Argument"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oidc_allowed_query_args_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,{invalid:!props.identity_oidc_allowed_query_args_allowed_query_args_valid,invalidText:props.identity_oidc_allowed_query_args_allowed_query_args_invalid_text,value:props.identity_oidc_allowed_query_args_allowed_query_args,id:"identity_oidc_allowed_query_args_allowed_query_args_id"+idPrefix,labelText:"Allowed Query Argument *",onChange:props.updateidentity_oidc_allowed_query_args_allowed_query_args}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem identity_oidc_allowed_query_args_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!props.identity_oidc_allowed_query_args_allowed_query_args||!props.identity_oidc_allowed_query_args_allowed_query_args_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identityoidc_allowed_query_argsAdd}}]);
//# sourceMappingURL=236.910827fe.chunk.js.map