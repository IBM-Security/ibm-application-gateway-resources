(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),carbon_components_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(434),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(33),carbon_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),react_collapsible__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(38),react_collapsible__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_6__),react_web_tabs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),react_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),handleChange=function(){},handleSave=function(_,e,t,a,r,i){void 0===e&&(e="");var c={};!0!==document.getElementById("server_ssl_front_end_sni_certificate_certificate_id"+e).value.endsWith(":")&&(c.server_ssl_front_end_sni_certificate_certificate=document.getElementById("server_ssl_front_end_sni_certificate_certificate_id"+e).value),_(c.server_ssl_front_end_sni_certificate_certificate,!0),handleClose(e,t,a,r,i)},handleAdd=function(_,e,t,a,r,i,c,n,s){var l=a||"";if(window[l+"editing"]=!0,window[l+"rowId"]=_,c)for(var d=0;d<c.length;d++)c[d](a,n,s);e();var o=l;if(o.endsWith("_certificate")){var E="_certificate".length;o=o.slice(0,-E)}void 0!==r&&""!==r&&(document.getElementById(r).style.display="none"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(o+"_div"+i,"display","none"),document.getElementById("editserversslfront_endsni_certificatePage"+t).style.display="block",document.getElementById(o+"_tab"+i).style.display="none"},handleClose=function(_,e,t,a,r){var i=e||"";delete window[i+"editing"],delete window[i+"rowId"];var c=i;if(c.endsWith("_certificate")){var n="_certificate".length;c=c.slice(0,-n)}void 0!==t&&""!==t&&(document.getElementById(t).style.display="flex"),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(c+"_div"+a,"display","block"),document.getElementById("editserversslfront_endsni_certificatePage"+_).style.display="none",document.getElementById(c+"_tab"+a).style.display="flex",r&&r()},closeAdd=function(_){void 0===_&&(_=""),Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.d)("server_ssl_front_end_sni_certificate_div"+_,"display","block"),document.getElementById("server_ssl_front_end_sni_certificate_tab"+_).style.display="flex"},getEditData=function(_,e,t){var a=_||"",r=window.iagyaml,i={};if(null!==r&&void 0!==r&&(void 0!==(i=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(r))&&null!==i||(i={})),e&&t)for(var c=0;c<e.length;c++){e[c].certificate&&e[c].certificate;window[a+"rowId"]}else void 0!==i&&void 0!==i.server&&void 0!==i.server.ssl&&void 0!==i.server.ssl.front_end&&i.server.ssl.front_end.sni},Serversslfront_endsni_certificateEdit=function Serversslfront_endsni_certificateEdit(props){var row=props.row,loadGrid=props.loadGrid,doClose=props.doClose,idPrefix=props.idPrefix?props.idPrefix:"",parentIdPrefix=props.parentIdPrefix?props.parentIdPrefix:"",objectName=props.name?props.name:"",tbName=props.toolbarName?props.toolbarName:"",rowId=void 0!==row?row.id:"",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),server_ssl_front_end_sni_certificate_certificate=_useState2[0],setserver_ssl_front_end_sni_certificate_certificate=_useState2[1],updateserver_ssl_front_end_sni_certificate_certificate=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(_){return setserver_ssl_front_end_sni_certificate_certificate(_.target.value)},[]),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState2=Object(_home_travis_build_IAG_yaml_gui_generator_out_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fetcheddata=_React$useState2[0],setFetcheddata=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function(){dataLoad()},[fetcheddata]);var dataLoad=function(){return!0},setDataMain=function setDataMain(functionName,data){functionName&&data&&eval(functionName)(data)};return 1==props.editing?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},_helpers__WEBPACK_IMPORTED_MODULE_9__.a.editIcon(),{onClick:function(){handleAdd(rowId,props.dataLoad,idPrefix,objectName,tbName,parentIdPrefix,[getEditData],props.data,props.setData)},title:"TODO"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"editserversslfront_endsni_certificatePage"+idPrefix,style:{display:"none"},className:"bx--col bx--no-gutter"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.d,{id:"server_ssl_front_end_sni_certificate_tab"+idPrefix,defaultTab:"General_tab"+idPrefix,vertical:!0,className:"vertical-tabs",style:{overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.a,{tabFor:"General_tab"+idPrefix},"General")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_web_tabs__WEBPACK_IMPORTED_MODULE_7__.c,{style:{width:"100%",overflow:"auto"},tabId:"General_tab"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_sublevel_tabs",style:{height:"60vh",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem iag_tab_heading server_ssl_front_end_sni_certificate_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"iag_breadcrumb"},"Server / SSL / Front End / SNI / Certificate : "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"                  ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"General Settings"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),"Specifies the general settings associated with this component"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag--simple-div server_ssl_front_end_sni_certificate_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_ssl_front_end_sni_certificate_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Certificate"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag-wdgt-container",style:{marginLeft:"60px",marginBottom:"10px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_ssl_front_end_sni_certificate_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{value:props.server_ssl_front_end_sni_certificate_certificate,id:"server_ssl_front_end_sni_certificate_certificate_id"+idPrefix,labelText:"Certificate *",onChange:props.updateserver_ssl_front_end_sni_certificate_certificate}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"iag_form_elem server_ssl_front_end_sni_certificate_div"+idPrefix},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:function(){handleClose(idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Cancel"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!props.server_ssl_front_end_sni_certificate_certificate||!props.server_ssl_front_end_sni_certificate_certificate_valid,onClick:function(){handleSave(loadGrid,idPrefix,objectName,tbName,parentIdPrefix,doClose)}},"Save"))))))};__webpack_exports__.default=Serversslfront_endsni_certificateEdit}}]);
//# sourceMappingURL=326.7d7de0ad.chunk.js.map