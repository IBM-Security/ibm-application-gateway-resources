(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{394:function(e,t,n){"use strict";n.r(t);var r=n(413),o=n(100),a=n(101),c=n(104),i=n(103),l=n(88),s=n(3),u=n(0),d=n.n(u),f=n(78),p=n.n(f),m=n(412),b=n(415),h=n(87);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var O=function(e){var t=e.renderLauncher,n=e.children,r=Object(u.useState)(!1),o=Object(s.a)(r,2),a=o[0],c=o[1];return d.a.createElement(d.a.Fragment,null,n&&"undefined"!==typeof document?p.a.createPortal(d.a.createElement(n,{open:a,setOpen:c}),document.body):null,t&&d.a.createElement(t,{open:a,setOpen:c}))},y=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Components",title:"Delete Components?",iconDescription:"Close"}},j=function(){return{hasScrollingContent:!1,"aria-label":"Delete Components?"}},w=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},C=function(){return{style:{margin:"5px"},icon:h.b,name:h.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},E=function(e,t,n){return t(e,!1),!0},R=function(e){Object(c.a)(n,e);var t=g(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,logging_statistics_components_components:r.props.row.cells[0].value,open:!1},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=y(),n=t.size,o=Object(r.a)(t,["size"]),a=j();a.hasScrollingContent,Object(r.a)(a,["hasScrollingContent"]);return d.a.createElement(O,{renderLauncher:function(t){var n=t.setOpen;return d.a.createElement(m.a,Object.assign({},C(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,a=t.setOpen;return d.a.createElement(b.d,Object.assign({},o,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return a(!1)}}),d.a.createElement(b.c,v({titleOnly:!0,name:e.state.code+" "+e.state.model})),d.a.createElement(b.a,null),d.a.createElement(b.b,Object.assign({},w(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){E(e.state.logging_statistics_components_components,e.state.loadGrid,a)}})))})}}]),n}(d.a.Component);t.default=R}}]);
//# sourceMappingURL=249.6fa3930a.chunk.js.map