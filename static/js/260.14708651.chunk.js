(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{344:function(e,t,n){"use strict";n.r(t);var r=n(435),a=n(101),o=n(102),l=n(105),i=n(104),c=n(88),u=n(3),s=n(0),d=n.n(s),f=n(77),p=n.n(f),m=n(434),y=n(437),b=n(87);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var g=function(e){var t=e.renderLauncher,n=e.children,r=Object(s.useState)(!1),a=Object(u.a)(r,2),o=a[0],l=a[1];return d.a.createElement(d.a.Fragment,null,n&&"undefined"!==typeof document?p.a.createPortal(d.a.createElement(n,{open:o,setOpen:l}),document.body):null,t&&d.a.createElement(t,{open:o,setOpen:l}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Allowed Query Args",title:"Delete Allowed Query Args?",iconDescription:"Close"}},v=function(){return{hasScrollingContent:!1,"aria-label":"Delete Allowed Query Args?"}},_=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},j=function(){return{style:{margin:"5px"},icon:b.b,name:b.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},C=function(e,t,n){return t(e,!1),!0},E=function(e){Object(l.a)(n,e);var t=h(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,identity_oidc_allowed_query_args_allowed_query_args:r.props.row.cells[0].value,open:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=O(),n=t.size,a=Object(r.a)(t,["size"]),o=v();o.hasScrollingContent,Object(r.a)(o,["hasScrollingContent"]);return d.a.createElement(g,{renderLauncher:function(t){var n=t.setOpen;return d.a.createElement(m.a,Object.assign({},j(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,o=t.setOpen;return d.a.createElement(y.d,Object.assign({},a,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return o(!1)}}),d.a.createElement(y.c,w({titleOnly:!0,name:e.state.code+" "+e.state.model})),d.a.createElement(y.a,null),d.a.createElement(y.b,Object.assign({},_(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){C(e.state.identity_oidc_allowed_query_args_allowed_query_args,e.state.loadGrid,o)}})))})}}]),n}(d.a.Component);t.default=E}}]);
//# sourceMappingURL=260.14708651.chunk.js.map