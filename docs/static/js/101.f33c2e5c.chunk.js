(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{438:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),react_collapsible__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39),react_collapsible__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__),react_web_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),react_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),handleChange=function(){},handleSave=function(e,_,t){void 0===_&&(_="");var r={};!0!==document.getElementById("resource_servers_identity_headers_attributes_attribute_id"+_).value.endsWith(":")&&(r.resource_servers_identity_headers_attributes_attribute=document.getElementById("resource_servers_identity_headers_attributes_attribute_id"+_).value),!0!==document.getElementById("resource_servers_identity_headers_attributes_header_id"+_).value.endsWith(":")&&(r.resource_servers_identity_headers_attributes_header=document.getElementById("resource_servers_identity_headers_attributes_header_id"+_).value),e(r.resource_servers_identity_headers_attributes_attribute,r.resource_servers_identity_headers_attributes_header,!0),handleClose(_,t)},handleAdd=function(e,_,t){void 0===e&&(e=""),document.getElementById("resource_servers_identity_headers_attributes_attribute_id").value="",document.getElementById("resource_servers_identity_headers_attributes_header_id").value="",_&&_(),handleClose(e,t)},handleClose=function(e,_){Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("identity_headers_div"+e,"display","block"),document.getElementById("addidentity_headers_attributesPage"+e).style.display="none",_&&_()},closeAdd=function(e){void 0===e&&(e=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.d)("resource_servers_identity_headers_attributes_div"+e,"display","block"),document.getElementById("resource_servers_identity_headers_attributes_tab"+e).style.display="flex"},Identity_headers_attributesAdd=function Identity_headers_attributesAdd(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),resource_servers_identity_headers_attributes_attribute=_useState2[0],setresource_servers_identity_headers_attributes_attribute=_useState2[1],updateresource_servers_identity_headers_attributes_attribute=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setresource_servers_identity_headers_attributes_attribute(e.target.value)},[]),_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),resource_servers_identity_headers_attributes_header=_useState4[0],setresource_servers_identity_headers_attributes_header=_useState4[1],updateresource_servers_identity_headers_attributes_header=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(e){return setresource_servers_identity_headers_attributes_header(e.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"addidentity_headers_attributesPage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.d,{id:"resource_servers_identity_headers_attributes_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_5__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Resource Servers / Identity Headers / Attributes : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Attributes"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"20px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,{invalid:!props.resource_servers_identity_headers_attributes_attribute_valid,invalidText:props.resource_servers_identity_headers_attributes_attribute_invalid_text,value:props.resource_servers_identity_headers_attributes_attribute,id:"resource_servers_identity_headers_attributes_attribute_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a.hide(e.target)},"data-tip":!0,"data-for":"resource_servers_identity_headers_attributes_attribute_tooltip_id"+idPrefix,labelText:"Attribute *",onChange:props.updateresource_servers_identity_headers_attributes_attribute}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a,{id:"resource_servers_identity_headers_attributes_attribute_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:300}},"The name of the credential attribute.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null)))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,{invalid:!props.resource_servers_identity_headers_attributes_header_valid,invalidText:props.resource_servers_identity_headers_attributes_header_invalid_text,value:props.resource_servers_identity_headers_attributes_header,id:"resource_servers_identity_headers_attributes_header_id"+idPrefix,onFocus:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a.show(e.target)},onBlur:function(e){return react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a.hide(e.target)},"data-tip":!0,"data-for":"resource_servers_identity_headers_attributes_header_tooltip_id"+idPrefix,labelText:"Header *",onChange:props.updateresource_servers_identity_headers_attributes_header}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6__.a,{id:"resource_servers_identity_headers_attributes_header_tooltip_id"+idPrefix,place:"top",effect:"solid"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:300}},"The name of the HTTP header which will contain the credential attribute. If no name is supplied the name of the credential attribute itself will be used.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null))))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem resource_servers_identity_headers_attributes_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function(){handleClose(idPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!props.resource_servers_identity_headers_attributes_attribute||!props.resource_servers_identity_headers_attributes_attribute_valid||!props.resource_servers_identity_headers_attributes_header||!props.resource_servers_identity_headers_attributes_header_valid,onClick:function(){handleSave(loadGrid,idPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Identity_headers_attributesAdd}}]);
//# sourceMappingURL=101.f33c2e5c.chunk.js.map