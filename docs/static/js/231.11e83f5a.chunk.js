(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{340:function(e,t,n){"use strict";n.r(t);var r=n(413),a=n(100),i=n(101),o=n(104),c=n(103),l=n(88),s=n(3),u=n(0),d=n.n(u),f=n(78),p=n.n(f),g=n(412),m=n(415),b=n(87);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(e){var t=e.renderLauncher,n=e.children,r=Object(u.useState)(!1),a=Object(s.a)(r,2),i=a[0],o=a[1];return d.a.createElement(d.a.Fragment,null,n&&"undefined"!==typeof document?p.a.createPortal(d.a.createElement(n,{open:i,setOpen:o}),document.body):null,t&&d.a.createElement(t,{open:i,setOpen:o}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Triggers",title:"Delete Triggers?",iconDescription:"Close"}},j=function(){return{hasScrollingContent:!1,"aria-label":"Delete Triggers?"}},w=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},C=function(){return{style:{margin:"5px"},icon:b.b,name:b.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},E=function(e,t,n){return t(e,!1),!0},R=function(e){Object(o.a)(n,e);var t=h(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,identity_eai_triggers_triggers:r.props.row.cells[0].value,open:!1},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=O(),n=t.size,a=Object(r.a)(t,["size"]),i=j();i.hasScrollingContent,Object(r.a)(i,["hasScrollingContent"]);return d.a.createElement(y,{renderLauncher:function(t){var n=t.setOpen;return d.a.createElement(g.a,Object.assign({},C(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,i=t.setOpen;return d.a.createElement(m.d,Object.assign({},a,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return i(!1)}}),d.a.createElement(m.c,v({titleOnly:!0,name:e.state.code+" "+e.state.model})),d.a.createElement(m.a,null),d.a.createElement(m.b,Object.assign({},w(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){E(e.state.identity_eai_triggers_triggers,e.state.loadGrid,i)}})))})}}]),n}(d.a.Component);t.default=R}}]);
//# sourceMappingURL=231.11e83f5a.chunk.js.map