(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{273:function(e,t,n){"use strict";n.r(t);var r=n(413),o=n(100),a=n(101),c=n(104),l=n(103),s=n(88),i=n(3),u=n(0),d=n.n(u),p=n(78),f=n.n(p),m=n(412),y=n(415),h=n(87);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e){var t=e.renderLauncher,n=e.children,r=Object(u.useState)(!1),o=Object(i.a)(r,2),a=o[0],c=o[1];return d.a.createElement(d.a.Fragment,null,n&&"undefined"!==typeof document?f.a.createPortal(d.a.createElement(n,{open:a,setOpen:c}),document.body):null,t&&d.a.createElement(t,{open:a,setOpen:c}))},O=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).titleOnly;return{open:!0,danger:!0,selectorPrimaryFocus:"[data-modal-primary-focus]"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.titleOnly,e.name;return{label:"Paths",title:"Delete Paths?",iconDescription:"Close"}},C=function(){return{hasScrollingContent:!1,"aria-label":"Delete Paths?"}},N=function(){return{primaryButtonText:"Delete",primaryButtonDisabled:!1,secondaryButtonText:"Cancel",shouldCloseAfterSubmit:!0,danger:!0}},w=function(){return{style:{margin:"5px"},icon:h.b,name:h.b,role:"img",fill:"grey",fillRule:"",width:"",height:"",description:"This is a description of the icon and what it does in context",iconTitle:"",className:"extra-class"}},k=function(e,t,n){return t(e,!1),!0},j=function(e){Object(c.a)(n,e);var t=b(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={row:e.row,loadGrid:e.loadGrid,policies_cors_paths_paths:r.props.row.cells[0].value,open:!1},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=O(),n=t.size,o=Object(r.a)(t,["size"]),a=C();a.hasScrollingContent,Object(r.a)(a,["hasScrollingContent"]);return d.a.createElement(v,{renderLauncher:function(t){var n=t.setOpen;return d.a.createElement(m.a,Object.assign({},w(),{onClick:function(){return n(!0)},title:e.state.id}))}},function(t){var r=t.open,a=t.setOpen;return d.a.createElement(y.d,Object.assign({},o,{open:r,row:e.props.row,loadGrid:e.state.loadGrid,size:n||void 0,onClose:function(){return a(!1)}}),d.a.createElement(y.c,g({titleOnly:!0,name:e.state.code+" "+e.state.model})),d.a.createElement(y.a,null),d.a.createElement(y.b,Object.assign({},N(),{shouldCloseAfterSubmit:!0,onRequestSubmit:function(){k(e.state.policies_cors_paths_paths,e.state.loadGrid,a)}})))})}}]),n}(d.a.Component);t.default=j},413:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),l=n(35),s=n(16),i=n.n(s),u=n(19);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=u.a.prefix,m=o.a.forwardRef(function(e,t){var n,r,a,c=e.children,l=e.className,s=e.stacked,u=p(e,["children","className","stacked"]),m=i()(l,"".concat(f,"--btn-set"),(n={},r="".concat(f,"--btn-set--stacked"),a=s,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));return o.a.createElement("div",d({},u,{className:m,ref:t}),c)});m.displayName="ButtonSet",m.propTypes={children:c.a.node,className:c.a.string,stacked:c.a.bool};var y=m,h=n(6);function b(e,t,n){e.classList.contains(t)===!n&&e.classList[n?"add":"remove"](t)}var v,O=n(79),g=n(102);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function E(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"===typeof t))return t;return R(e)}(this,n)}}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"d",function(){return T}),n.d(t,"c",function(){return _}),n.d(t,"a",function(){return F}),n.d(t,"b",function(){return q});var B=u.a.prefix,T=function(e){E(n,r["Component"]);var t=P(n);function n(){var e;k(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return D(R(e=t.call.apply(t,[this].concat(a))),"state",{}),D(R(e),"outerModal",o.a.createRef()),D(R(e),"innerModal",o.a.createRef()),D(R(e),"button",o.a.createRef()),D(R(e),"startSentinel",o.a.createRef()),D(R(e),"endSentinel",o.a.createRef()),D(R(e),"handleKeyDown",function(t){27===t.which&&e.closeModal(t),e.props.onKeyDown(t)}),D(R(e),"handleClick",function(t){!e.innerModal.current.contains(t.target)&&e.props.preventCloseOnClickOutside||e.innerModal.current&&!e.innerModal.current.contains(t.target)&&e.closeModal(t)}),D(R(e),"handleBlur",function(t){var n=t.target,r=t.relatedTarget,o=e.props,a=o.open,c=o.selectorsFloatingMenus;if(a&&r&&n){var l=e.innerModal.current,s=e.startSentinel.current,i=e.endSentinel.current;Object(g.a)({bodyNode:l,startSentinelNode:s,endSentinelNode:i,currentActiveNode:r,oldActiveNode:n,selectorsFloatingMenus:c})}}),D(R(e),"focusButton",function(t){if(t){var n=t.querySelector(e.props.selectorPrimaryFocus);if(n)return void n.focus();e.button.current&&e.button.current.focus()}}),D(R(e),"handleTransitionEnd",function(t){e.outerModal.current.offsetWidth&&e.outerModal.current.offsetHeight&&e.beingOpen&&(e.focusButton(t.currentTarget),e.beingOpen=!1)}),D(R(e),"closeModal",function(t){var n=e.props.onClose;n&&!1===n(t)||e.setState({open:!1})}),e}return S(n,[{key:"componentDidUpdate",value:function(e,t){!t.open&&this.state.open?this.beingOpen=!0:t.open&&!this.state.open&&(this.beingOpen=!1),t.open!==this.state.open&&b(document.body,"".concat(B,"--body--with-modal-open"),this.state.open)}},{key:"componentWillUnmount",value:function(){b(document.body,"".concat(B,"--body--with-modal-open"),!1)}},{key:"componentDidMount",value:function(){b(document.body,"".concat(B,"--body--with-modal-open"),this.props.open),this.props.open&&this.innerModal.current&&this.focusButton(this.innerModal.current)}},{key:"render",value:function(){var e,t,n=this,r=this.state.open,a=this.props,c=a.className,l=a.containerClassName,s=a.children,u=a.danger,d=(a.preventCloseOnClickOutside,a.selectorPrimaryFocus,a.size),p=w(a,["className","containerClassName","children","danger","preventCloseOnClickOutside","selectorPrimaryFocus","size"]),f=i()((D(e={},"".concat(B,"--modal"),!0),D(e,"is-visible",r),D(e,c,c),D(e,"".concat(B,"--modal--danger"),u),e)),m=i()((D(t={},"".concat(B,"--modal-container"),!0),D(t,"".concat(B,"--modal-container--").concat(d),d),D(t,l,l),t)),y=o.a.Children.toArray(s).map(function(e){switch(e.type){case o.a.createElement(_).type:return o.a.cloneElement(e,{closeModal:n.closeModal});case o.a.createElement(q).type:return o.a.cloneElement(e,{closeModal:n.closeModal,inputref:n.button});default:return e}});return o.a.createElement("div",N({},p,{role:"presentation",ref:this.outerModal,onBlur:this.handleBlur,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onTransitionEnd:r?this.handleTransitionEnd:void 0,className:f}),o.a.createElement("span",{ref:this.startSentinel,tabIndex:"0",role:"link",className:"".concat(B,"--visually-hidden")},"Focus sentinel"),o.a.createElement("div",{ref:this.innerModal,className:m,role:"dialog"},y),o.a.createElement("span",{ref:this.endSentinel,tabIndex:"0",role:"link",className:"".concat(B,"--visually-hidden")},"Focus sentinel"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.open;return t.prevOpen===n?null:{open:n,prevOpen:n}}}]),n}();D(T,"defaultProps",{onKeyDown:function(){},selectorPrimaryFocus:"[data-modal-primary-focus]"}),D(T,"propTypes",{children:c.a.node,className:c.a.string,containerClassName:c.a.string,danger:c.a.bool,onClose:c.a.func,onKeyDown:c.a.func,open:c.a.bool,preventCloseOnClickOutside:c.a.bool,selectorPrimaryFocus:c.a.string,selectorsFloatingMenus:c.a.string,size:c.a.oneOf(["xs","sm","lg"])});var _=function(e){E(n,r["Component"]);var t=P(n);function n(){var e;k(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return D(R(e=t.call.apply(t,[this].concat(o))),"handleCloseButtonClick",function(t){e.props.closeModal(t),e.props.buttonOnClick()}),e}return S(n,[{key:"render",value:function(){var e,t,n,r,a,c=this.props,l=c.className,s=c.labelClassName,u=c.titleClassName,d=c.closeClassName,p=c.closeIconClassName,f=c.label,m=c.title,y=c.children,b=c.iconDescription,v=(c.closeModal,c.buttonOnClick,c.preventCloseOnClickOutside,w(c,["className","labelClassName","titleClassName","closeClassName","closeIconClassName","label","title","children","iconDescription","closeModal","buttonOnClick","preventCloseOnClickOutside"])),O=i()((D(e={},"".concat(B,"--modal-header"),!0),D(e,l,l),e)),g=i()((D(t={},"".concat(B,"--modal-header__label ").concat(B,"--type-delta"),!0),D(t,s,s),t)),C=i()((D(n={},"".concat(B,"--modal-header__heading ").concat(B,"--type-beta"),!0),D(n,u,u),n)),k=i()((D(r={},"".concat(B,"--modal-close"),!0),D(r,d,d),r)),j=i()((D(a={},"".concat(B,"--modal-close__icon"),!0),D(a,p,p),a));return o.a.createElement("div",N({className:O},v),f&&o.a.createElement("p",{className:g},f),m&&o.a.createElement("p",{className:C},m),y,o.a.createElement("button",{onClick:this.handleCloseButtonClick,className:k,title:b,"aria-label":b,type:"button"},o.a.createElement(h.Dd,{className:j})))}}]),n}();function F(e){var t,n=e.className,r=e.children,a=e.hasForm,c=e.hasScrollingContent,l=(e.preventCloseOnClickOutside,w(e,["className","children","hasForm","hasScrollingContent","preventCloseOnClickOutside"])),s=i()((D(t={},"".concat(B,"--modal-content"),!0),D(t,"".concat(B,"--modal-content--with-form"),a),D(t,n,n),t)),u=c?{tabIndex:0,role:"region"}:{};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",N({className:s},u,l),r),c&&o.a.createElement("div",{className:"".concat(B,"--modal-content--overflow-indicator")}))}D(_,"propTypes",{buttonOnClick:c.a.func,children:c.a.node,className:c.a.string,closeClassName:c.a.string,closeIconClassName:c.a.string,closeModal:c.a.func,iconDescription:c.a.string,label:c.a.node,labelClassName:c.a.string,title:c.a.node,titleClassName:c.a.string}),D(_,"defaultProps",{iconDescription:"Close",buttonOnClick:function(){}}),F.propTypes=(D(v={},"aria-label",Object(O.a)("hasScrollingContent",c.a.string)),D(v,"children",c.a.node),D(v,"className",c.a.string),D(v,"hasForm",c.a.bool),D(v,"hasScrollingContent",c.a.bool),v);var q=function(e){E(n,r["Component"]);var t=P(n);function n(){var e;k(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return D(R(e=t.call.apply(t,[this].concat(o))),"handleRequestClose",function(t){e.props.closeModal(t),e.props.onRequestClose(t)}),e}return S(n,[{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.primaryClassName,a=t.secondaryClassName,c=t.secondaryButtonText,s=t.primaryButtonText,u=t.primaryButtonDisabled,d=(t.closeModal,t.onRequestClose,t.onRequestSubmit),p=t.children,f=t.danger,m=t.inputref,h=w(t,["className","primaryClassName","secondaryClassName","secondaryButtonText","primaryButtonText","primaryButtonDisabled","closeModal","onRequestClose","onRequestSubmit","children","danger","inputref"]),b=i()((D(e={},"".concat(B,"--modal-footer"),!0),D(e,n,n),e)),v=i()(D({},r,r)),O=i()(D({},a,a));return o.a.createElement(y,N({className:b},h),c&&o.a.createElement(l.a,{className:O,onClick:this.handleRequestClose,kind:"secondary"},c),s&&o.a.createElement(l.a,{onClick:d,className:v,disabled:u,kind:f?"danger":"primary",ref:m},s),p)}}]),n}();D(q,"propTypes",{children:c.a.node,className:c.a.string,closeModal:c.a.func,danger:c.a.bool,inputref:c.a.oneOfType([c.a.func,c.a.shape({current:c.a.any})]),onRequestClose:c.a.func,onRequestSubmit:c.a.func,primaryButtonDisabled:c.a.bool,primaryButtonText:c.a.string,primaryClassName:c.a.string,secondaryButtonText:c.a.string,secondaryClassName:c.a.string}),D(q,"defaultProps",{onRequestClose:function(){},onRequestSubmit:function(){}})}}]);
//# sourceMappingURL=21.355084b4.chunk.js.map