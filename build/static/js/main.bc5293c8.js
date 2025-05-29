/*! For license information please see main.bc5293c8.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!j.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+T(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),R(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+T(s=e[c],c);l+=R(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,u=o+T(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},O={transition:null},D={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)S.call(t,c)&&!j.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,p=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,O(S);else{var t=r(u);null!==t&&D(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(C),C=-1),f=!0;var o=p;try{for(b(n),h=r(c);null!==h&&(!(h.expirationTime>n)||e&&!R());){var a=h.callback;if("function"===typeof a){h.callback=null,p=h.priorityLevel;var s=a(h.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?h.callback=s:h===r(c)&&i(c),b(n)}else i(c);h=r(c)}if(null!==h)var l=!0;else{var d=r(u);null!==d&&D(w,d.startTime-n),l=!1}return l}finally{h=null,p=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,j=!1,E=null,C=-1,P=5,T=-1;function R(){return!(t.unstable_now()-T<P)}function A(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?k():(j=!1,E=null)}}else j=!1}if("function"===typeof x)k=function(){x(A)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,z=_.port2;_.port1.onmessage=A,k=function(){z.postMessage(null)}}else k=function(){v(A,0)};function O(e){E=e,j||(j=!0,k())}function D(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(C),C=-1):g=!0,D(w,o-a))):(e.sortIndex=s,n(c,e),m||f||(m=!0,O(S))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var M,N=Object.assign;function I(e){if(void 0===M)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function B(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case j:return"StrictMode";case R:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case _:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,je=null;function Ee(e){if(e=xi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?je?je.push(e):je=[e]:ke=e}function Pe(){if(ke){var e=ke,t=je;if(je=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function Re(){}var Ae=!1;function _e(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Te(e,t,n)}finally{Ae=!1,(null!==ke||null!==je)&&(Re(),Pe())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Oe=!1;if(u)try{var De={};Object.defineProperty(De,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ue){Oe=!1}function Le(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Me=!1,Ne=null,Ie=!1,Fe=null,Ve={onError:function(e){Me=!0,Ne=e}};function Be(e,t,n,r,i,o,a,s,l){Me=!1,Ne=null,Le.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return We(i),e;if(a===r)return We(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var qe=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Xe=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,jt,Et,Ct=!1,Pt=[],Tt=null,Rt=null,At=null,_t=new Map,zt=new Map,Ot=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":_t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Mt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Nt(e){var t=yi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function Vt(){Ct=!1,null!==Tt&&It(Tt)&&(Tt=null),null!==Rt&&It(Rt)&&(Rt=null),null!==At&&It(At)&&(At=null),_t.forEach(Ft),zt.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Pt.length){Bt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Bt(Tt,e),null!==Rt&&Bt(Rt,e),null!==At&&Bt(At,e),_t.forEach(t),zt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Nt(n),null===n.blockedOn&&Ot.shift()}var $t=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var i=xt,o=$t.transition;$t.transition=null;try{xt=1,qt(e,t,n,r)}finally{xt=i,$t.transition=o}}function Yt(e,t,n,r){var i=xt,o=$t.transition;$t.transition=null;try{xt=4,qt(e,t,n,r)}finally{xt=i,$t.transition=o}}function qt(e,t,n,r){if(Wt){var i=Gt(e,t,n,r);if(null===i)Wr(e,t,r,Kt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=Mt(Tt,e,t,n,r,i),!0;case"dragenter":return Rt=Mt(Rt,e,t,n,r,i),!0;case"mouseover":return At=Mt(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _t.set(o,Mt(_t.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zt.set(o,Mt(zt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==i;){var o=xi(i);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Wr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Kt=null;function Gt(e,t,n,r){if(Kt=null,null!==(e=yi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=N({},cn,{view:0,detail:0}),hn=on(dn),pn=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),fn=on(pn),mn=on(N({},pn,{dataTransfer:0})),gn=on(N({},dn,{relatedTarget:0})),vn=on(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(N({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return jn}var Cn=N({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=on(Cn),Tn=on(N({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),An=on(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),_n=N({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(_n),On=[9,13,27,32],Dn=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Mn=u&&"TextEvent"in window&&!Ln,Nn=u&&(!Dn||Ln&&8<Ln&&11>=Ln),In=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Hn(e,t,n,r){Ce(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,qn=null;function Kn(e){Ir(e,0)}function Gn(e){if(q(bi(e)))return e}function Qn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Zn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),qn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(qn)){var t=[];Hn(t,qn,e,we(e)),_e(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(qn)}function or(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},jr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return kr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=Er("animationend"),Pr=Er("animationiteration"),Tr=Er("animationstart"),Rr=Er("transitionend"),Ar=new Map,_r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Ar.set(e,t),l(t,[e])}for(var Or=0;Or<_r.length;Or++){var Dr=_r[Or];zr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}zr(Cr,"onAnimationEnd"),zr(Pr,"onAnimationIteration"),zr(Tr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Rr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Be.apply(this,arguments),Me){if(!Me)throw Error(o(198));var u=Ne;Me=!1,Ne=null,Ie||(Ie=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Nr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Nr(i,s,c),o=l}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,a.forEach((function(t){"selectionchange"!==t&&(Mr.has(t)||Vr(t,!1,e),Vr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Qt(t)){case 1:var i=Ht;break;case 4:i=Yt;break;default:i=qt}n=i.bind(null,t,n,e),i=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}_e((function(){var r=o,i=we(n),a=[];e:{var s=Ar.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Cr:case Pr:case Tr:l=vn;break;case Rr:l=An;break;case"scroll":l=hn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var u=0!==(4&t),d=!u&&"scroll"===e,h=u?null!==s?s+"Capture":null:s;u=[];for(var p,f=r;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=ze(f,h))&&u.push(Hr(f,m,p)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[fi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=fn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=Tn,m="onPointerLeave",h="onPointerEnter",f="pointer"),d=null==l?s:bi(l),p=null==c?s:bi(c),(s=new u(m,f+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,yi(i)===r&&((u=new u(h,f+"enter",c,n,i)).target=p,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,f=0,p=u=l;p;p=qr(p))f++;for(p=0,m=h;m;m=qr(m))p++;for(;0<f-p;)u=qr(u),f--;for(;0<p-f;)h=qr(h),p--;for(;f--;){if(u===h||null!==h&&u===h.alternate)break e;u=qr(u),h=qr(h)}u=null}else u=null;null!==l&&Kr(a,s,l,u,!1),null!==c&&null!==d&&Kr(a,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Wn(s))if(Xn)g=ar;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?bi(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var y;if(Dn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Un?Vn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Nn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==x?"onCompositionEnd"===x&&Un&&(y=en()):(Zt="value"in(Xt=i)?Xt.value:Xt.textContent,Un=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,i),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Bn(n))&&(x.data=y))),(y=Mn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Dn&&Vn(e,t)?(e=en(),Jt=Zt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Ir(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=ze(e,n))&&r.unshift(Hr(e,o,i)),null!=(o=ze(e,t))&&r.push(Hr(e,o,i))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=ze(n,o))&&a.unshift(Hr(n,l,s)):i||null!=(l=ze(n,o))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),hi="__reactFiber$"+di,pi="__reactProps$"+di,fi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[hi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[hi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[pi]||null}var Si=[],ki=-1;function ji(e){return{current:e}}function Ei(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function Ci(e,t){ki++,Si[ki]=e.current,e.current=t}var Pi={},Ti=ji(Pi),Ri=ji(!1),Ai=Pi;function _i(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function zi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oi(){Ei(Ri),Ei(Ti)}function Di(e,t,n){if(Ti.current!==Pi)throw Error(o(168));Ci(Ti,t),Ci(Ri,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,$(e)||"Unknown",i));return N({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,Ai=Ti.current,Ci(Ti,e),Ci(Ri,Ri.current),!0}function Ni(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Ai),r.__reactInternalMemoizedMergedChildContext=e,Ei(Ri),Ei(Ti),Ci(Ti,e)):Ei(Ri),Ci(Ri,n)}var Ii=null,Fi=!1,Vi=!1;function Bi(e){null===Ii?Ii=[e]:Ii.push(e)}function Ui(){if(!Vi&&null!==Ii){Vi=!0;var e=0,t=xt;try{var n=Ii;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),qe(Je,Ui),i}finally{xt=t,Vi=!1}}return null}var $i=[],Wi=0,Hi=null,Yi=0,qi=[],Ki=0,Gi=null,Qi=1,Xi="";function Zi(e,t){$i[Wi++]=Yi,$i[Wi++]=Hi,Hi=e,Yi=t}function Ji(e,t,n){qi[Ki++]=Qi,qi[Ki++]=Xi,qi[Ki++]=Gi,Gi=e;var r=Qi;e=Xi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,Xi=o+e}else Qi=1<<o|n<<i|r,Xi=e}function eo(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function to(e){for(;e===Hi;)Hi=$i[--Wi],$i[Wi]=null,Yi=$i[--Wi],$i[Wi]=null;for(;e===Gi;)Gi=qi[--Ki],qi[Ki]=null,Xi=qi[--Ki],qi[Ki]=null,Qi=qi[--Ki],qi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=_c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:Qi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=_c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function ho(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw po(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ci(e.nextSibling)}function fo(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Oc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===z&&xo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ic(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Ic(t,e.mode,n)).return=e,t;case z:return h(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case S:return n.key===i?u(e,t,n,r):null;case z:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===s.length)return n(i,d),io&&Zi(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=h(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Zi(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Zi(i,m),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=p(i,m,y.value,c);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(i,m),s=a(x,s,g),null===d?u=x:d.sibling=x,d=x,m=v}if(y.done)return n(i,m),io&&Zi(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=h(i,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return io&&Zi(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=f(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),io&&Zi(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===k){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&xo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=vo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===k?((o=Lc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Dc(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case S:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Ic(a,r.mode,l)).return=r,r=o}return s(r);case z:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(L(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Nc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=bo(!0),So=bo(!1),ko=ji(null),jo=null,Eo=null,Co=null;function Po(){Co=Eo=jo=null}function To(e){var t=ko.current;Ei(ko),e._currentValue=t}function Ro(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ao(e,t){jo=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function _o(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===jo)throw Error(o(308));Eo=e,jo.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var zo=null;function Oo(e){null===zo?zo=[e]:zo.push(e)}function Do(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Mo=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,Oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;Mo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var h=s.lane,p=s.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(h=t,p=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(p,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=m.payload)?f.call(p,d,h):f)||void 0===h)break e;d=N({},d,h);break e;case 2:Mo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,a|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Ml|=a,e.lanes=a,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Ho={},Yo=ji(Ho),qo=ji(Ho),Ko=ji(Ho);function Go(e){if(e===Ho)throw Error(o(174));return e}function Qo(e,t){switch(Ci(Ko,t),Ci(qo,e),Ci(Yo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Yo),Ci(Yo,t)}function Xo(){Ei(Yo),Ei(qo),Ei(Ko)}function Zo(e){Go(Ko.current);var t=Go(Yo.current),n=le(t,e.type);t!==n&&(Ci(qo,e),Ci(Yo,n))}function Jo(e){qo.current===e&&(Ei(Yo),Ei(qo))}var ea=ji(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,ha=0,pa=0;function fa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Ja:es,e=n(r,i),da){a=0;do{if(da=!1,ha=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Za,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function va(){var e=0!==ha;return ha=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=h,s=r):c=c.next=h,sa.lanes|=d,Ml|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Ml|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function ja(e,t){var n=sa,r=xa(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,xs=!0),r=r.queue,Ma(Pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,_a(9,Ca.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(o(349));0!==(30&aa)||Ea(n,t,i)}return i}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&Ra(e)}function Pa(e,t,n){return n((function(){Ta(t)&&Ra(e)}))}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ra(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Aa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return xa().memoizedState}function Oa(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=_a(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var i=xa();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=_a(t,n,o,r))}sa.flags|=e,i.memoizedState=_a(1|t,n,o,r)}function La(e,t){return Oa(8390656,8,e,t)}function Ma(e,t){return Da(2048,8,e,t)}function Na(e,t){return Da(4,2,e,t)}function Ia(e,t){return Da(4,4,e,t)}function Fa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Va(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4,4,Fa.bind(null,t,e),n)}function Ba(){}function Ua(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $a(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Ml|=n,e.baseState=!0),t)}function Ha(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{xt=n,oa.transition=r}}function Ya(){return xa().memoizedState}function qa(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Qa(t,n);else if(null!==(n=Do(e,t,n,r))){nc(n,e,r,ec()),Xa(n,t,r)}}function Ka(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Oo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Do(e,t,i,r))&&(nc(n,e,r,i=ec()),Xa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Za={readContext:_o,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Ja={readContext:_o,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:_o,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oa(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qa.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Aa,useDebugValue:Ba,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Ha.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Rl)throw Error(o(349));0!==(30&aa)||Ea(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,La(Pa.bind(null,r,a,e),[e]),r.flags|=2048,_a(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Rl.identifierPrefix;if(io){var n=Xi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=ha++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:_o,useCallback:Ua,useContext:_o,useEffect:Ma,useImperativeHandle:Va,useInsertionEffect:Na,useLayoutEffect:Ia,useMemo:$a,useReducer:wa,useRef:za,useState:function(){return wa(ba)},useDebugValue:Ba,useDeferredValue:function(e){return Wa(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:ja,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:_o,useCallback:Ua,useContext:_o,useEffect:Ma,useImperativeHandle:Va,useInsertionEffect:Na,useLayoutEffect:Ia,useMemo:$a,useReducer:Sa,useRef:za,useState:function(){return Sa(ba)},useDebugValue:Ba,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:ja,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Fo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Vo(e,i,r))&&(nc(t,e,r,n),Bo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Pi,o=t.contextType;return"object"===typeof o&&null!==o?o=_o(o):(i=zi(t)?Ai:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?_i(e,i):Pi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},No(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=_o(o):(o=zi(t)?Ai:Ti.current,i.context=_i(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var hs="function"===typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function fs(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Ao(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||xs?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ss(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||zc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ks(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=Oc(o,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(xs=!0)}}return Cs(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Ol,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Ol,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ci(Ol,zl),zl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ci(Ol,zl),zl|=r;return bs(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var o=zi(n)?Ai:Ti.current;return o=_i(t,o),Ao(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||xs?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ps(e,t,n,r,i){if(zi(n)){var o=!0;Mi(t)}else o=!1;if(Ao(t,i),null===t.stateNode)$s(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=_o(c):c=_i(t,c=zi(n)?Ai:Ti.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Mo=!1;var h=t.memoizedState;a.state=h,$o(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Ri.current||Mo?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Mo||os(t,n,s,r,h,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Io(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,h=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=_o(l):l=_i(t,l=zi(n)?Ai:Ti.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||h!==l)&&ss(t,a,r,l),Mo=!1,h=t.memoizedState,a.state=h,$o(t,r,a,i);var f=t.memoizedState;s!==d||h!==f||Ri.current||Mo?("function"===typeof p&&(rs(t,n,p,r),f=t.memoizedState),(c=Mo||os(t,n,c,r,h,f,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,i)}function Ts(e,t,n,r,i,o){Es(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Ni(t,n,!1),Ws(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Ni(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Di(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Di(0,t.context,!1),Qo(e,t.containerInfo)}function As(e,t,n,r,i){return fo(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var _s,zs,Os,Ds,Ls={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ci(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Mc(l,i,0,null),e=Lc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ms(n),t.memoizedState=Ls,e):Is(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Mc({mode:"visible",children:r.children},i,0,null),(a=Lc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ms(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Lo(e,i),nc(r,e,i,-1))}return mc(),Fs(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(qi[Ki++]=Qi,qi[Ki++]=Xi,qi[Ki++]=Gi,Qi=e.id,Xi=e.overflow,Gi=t),t=Is(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Oc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Oc(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=Oc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Is(e,t){return(t=Mc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ro(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ml|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Oc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Oc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qs(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return zi(t.type)&&Oi(),Ys(t),null;case 3:return r=t.stateNode,Xo(),Ei(Ri),Ei(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),zs(e,t),Ys(t),null;case 5:Jo(t);var i=Go(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Os(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=Go(Yo.current),ho(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[hi]=t,r[pi]=a,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":Q(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":ie(r,a),Fr("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":Y(r),J(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[hi]=t,e[pi]=r,_s(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=N({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(a in ye(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&he(e,u):"number"===typeof u&&he(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Fr("scroll",e):null!=u&&x(e,a,u,l))}switch(n){case"input":Y(e),J(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Ko.current),Go(Yo.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[hi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[hi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ei(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),fo(),t.flags|=98560,a=!1;else if(a=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[hi]=t}else fo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Dl&&(Dl=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Xo(),zs(e,t),null===e&&Ur(t.stateNode.containerInfo),Ys(t),null;case 10:return To(t.type._context),Ys(t),null;case 19:if(Ei(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Dl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Ul&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ys(t),null}else 2*Xe()-a.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,Ci(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ks(e,t){switch(to(t),t.tag){case 1:return zi(t.type)&&Oi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ei(Ri),Ei(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ei(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(ea),null;case 4:return Xo(),null;case 10:return To(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}_s=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Os=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(Yo.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Qs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Zs=null;function Js(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){jc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hi],delete t[pi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function hl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||Js(n,t);case 6:var r=ul,i=dl;ul=null,hl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,hl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}hl(e,t,n);break;case 1:if(!Qs&&(Js(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){jc(n,t,s)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,hl(e,t,n),Qs=r):hl(e,t,n);break;default:hl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach((function(t){var r=Tc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));pl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){jc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){jc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Js(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Js(n,n.return),32&e.flags){var i=e.stateNode;try{he(i,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(i,a),xe(l,s);var u=xe(l,a);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];"style"===d?ge(i,h):"dangerouslySetInnerHTML"===d?de(i,h):"children"===d?he(i,h):x(i,d,h,u)}switch(l){case"input":Z(i,a);break;case"textarea":oe(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(i,!!a.multiple,f,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[pi]=a}catch(g){jc(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){jc(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Xe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(u=Qs)||d,ml(t,e),Qs=u):ml(t,e),vl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zs=e,d=e.child;null!==d;){for(h=Zs=d;null!==Zs;){switch(f=(p=Zs).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Js(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Js(p,p.return);break;case 22:if(null!==p.memoizedState){wl(h);continue}}null!==f?(f.return=p,Zs=f):wl(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{i=h.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=h.stateNode,s=void 0!==(c=h.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){jc(e,e.return,g)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ml(t,e),vl(e),4&r&&fl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(he(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Zs=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Zs;){var i=Zs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Gs;var c=Qs;if(Gs=a,(Qs=l)&&!c)for(Zs=i;null!==Zs;)l=(a=Zs).child,22===a.tag&&null!==a.memoizedState?Sl(i):null!==l?(l.return=a,Zs=l):Sl(i);for(;null!==o;)Zs=o,xl(o,t,n),o=o.sibling;Zs=i,Gs=s,Qs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Zs=o):bl(e)}}function bl(e){for(;null!==Zs;){var t=Zs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Ut(h)}}}break;default:throw Error(o(163))}Qs||512&t.flags&&il(t)}catch(p){jc(t,t.return,p)}}if(t===e){Zs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zs=n;break}Zs=t.return}}function wl(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function Sl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){jc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){jc(t,i,l)}}var o=t.return;try{il(t)}catch(l){jc(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){jc(t,a,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var kl,jl=Math.ceil,El=b.ReactCurrentDispatcher,Cl=b.ReactCurrentOwner,Pl=b.ReactCurrentBatchConfig,Tl=0,Rl=null,Al=null,_l=0,zl=0,Ol=ji(0),Dl=0,Ll=null,Ml=0,Nl=0,Il=0,Fl=null,Vl=null,Bl=0,Ul=1/0,$l=null,Wl=!1,Hl=null,Yl=null,ql=!1,Kl=null,Gl=0,Ql=0,Xl=null,Zl=-1,Jl=0;function ec(){return 0!==(6&Tl)?Xe():-1!==Zl?Zl:Zl=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==_l?_l&-_l:null!==go.transition?(0===Jl&&(Jl=mt()),Jl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Xl=null,Error(o(185));vt(e,n,r),0!==(2&Tl)&&e===Rl||(e===Rl&&(0===(2&Tl)&&(Nl|=n),4===Dl&&sc(e,_l)),rc(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Ul=Xe()+500,Fi&&Ui()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=pt(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=ht(e,e===Rl?_l:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(lc.bind(null,e)):Bi(lc.bind(null,e)),ai((function(){0===(6&Tl)&&Ui()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Rc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zl=-1,Jl=0,0!==(6&Tl))throw Error(o(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=ht(e,e===Rl?_l:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Tl;Tl|=2;var a=fc();for(Rl===e&&_l===t||($l=null,Ul=Xe()+500,hc(e,t));;)try{yc();break}catch(l){pc(e,l)}Po(),El.current=a,Tl=i,null!==Al?t=0:(Rl=null,_l=0,t=Dl)}if(0!==t){if(2===t&&(0!==(i=ft(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ll,hc(e,0),sc(e,r),rc(e,Xe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=ft(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ll,hc(e,0),sc(e,r),rc(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Vl,$l);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Bl+500-Xe())){if(0!==ht(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Vl,$l),t);break}wc(e,Vl,$l);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Vl,$l),r);break}wc(e,Vl,$l);break;default:throw Error(o(329))}}}return rc(e,Xe()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Vl,Vl=n,null!==t&&ac(t)),e}function ac(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function sc(e,t){for(t&=~Il,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Tl))throw Error(o(327));Sc();var t=ht(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ll,hc(e,0),sc(e,t),rc(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Vl,$l),rc(e,Xe()),null}function cc(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Ul=Xe()+500,Fi&&Ui())}}function uc(e){null!==Kl&&0===Kl.tag&&0===(6&Tl)&&Sc();var t=Tl;Tl|=1;var n=Pl.transition,r=xt;try{if(Pl.transition=null,xt=1,e)return e()}finally{xt=r,Pl.transition=n,0===(6&(Tl=t))&&Ui()}}function dc(){zl=Ol.current,Ei(Ol)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Al)for(n=Al.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oi();break;case 3:Xo(),Ei(Ri),Ei(Ti),ra();break;case 5:Jo(r);break;case 4:Xo();break;case 13:case 19:Ei(ea);break;case 10:To(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Rl=e,Al=e=Oc(e.current,null),_l=zl=t,Dl=0,Ll=null,Il=Nl=Ml=0,Vl=Fl=null,null!==zo){for(t=0;t<zo.length;t++)if(null!==(r=(n=zo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}zo=null}return e}function pc(e,t){for(;;){var n=Al;try{if(Po(),ia.current=Za,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,ha=0,Cl.current=null,null===n||null===n.return){Dl=1,Ll=t,Al=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=_l,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,h=d.tag;if(0===(1&d.mode)&&(0===h||11===h||15===h)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&ms(a,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mo(cs(c,l));break e}}a=c=cs(c,l),4!==Dl&&(Dl=2),null===Fl?Fl=[a]:Fl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,ps(0,c,t));break e;case 1:l=c;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Yl||!Yl.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Al===n&&null!==n&&(Al=n=n.return);continue}break}}function fc(){var e=El.current;return El.current=Za,null===e?Za:e}function mc(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===Rl||0===(268435455&Ml)&&0===(268435455&Nl)||sc(Rl,_l)}function gc(e,t){var n=Tl;Tl|=2;var r=fc();for(Rl===e&&_l===t||($l=null,hc(e,t));;)try{vc();break}catch(i){pc(e,i)}if(Po(),Tl=n,El.current=r,null!==Al)throw Error(o(261));return Rl=null,_l=0,Dl}function vc(){for(;null!==Al;)xc(Al)}function yc(){for(;null!==Al&&!Ge();)xc(Al)}function xc(e){var t=kl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?bc(e):Al=t,Cl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=qs(n,t,zl)))return void(Al=n)}else{if(null!==(n=Ks(n,t)))return n.flags&=32767,void(Al=n);if(null===e)return Dl=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===Dl&&(Dl=5)}function wc(e,t,n){var r=xt,i=Pl.transition;try{Pl.transition=null,xt=1,function(e,t,n,r){do{Sc()}while(null!==Kl);if(0!==(6&Tl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Rl&&(Al=Rl=null,_l=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||ql||(ql=!0,Rc(tt,(function(){return Sc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Pl.transition,Pl.transition=null;var s=xt;xt=1;var l=Tl;Tl|=4,Cl.current=null,function(e,t){if(ei=Wt,pr(e=hr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==r&&3!==h.nodeType||(c=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=s),p===a&&++d===r&&(c=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(ti),Wt=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Qe(),Tl=l,xt=s,Pl.transition=a}else e.current=n;if(ql&&(ql=!1,Kl=e,Gl=i),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&Sc(),a=e.pendingLanes,0!==(1&a)?e===Xl?Ql++:(Ql=0,Xl=e):Ql=0,Ui()}(e,t,n,r)}finally{Pl.transition=i,xt=r}return null}function Sc(){if(null!==Kl){var e=bt(Gl),t=Pl.transition,n=xt;try{if(Pl.transition=null,xt=16>e?16:e,null===Kl)var r=!1;else{if(e=Kl,Kl=null,Gl=0,0!==(6&Tl))throw Error(o(331));var i=Tl;for(Tl|=4,Zs=e.current;null!==Zs;){var a=Zs,s=a.child;if(0!==(16&Zs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Zs=u;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var h=d.child;if(null!==h)h.return=d,Zs=h;else for(;null!==Zs;){var p=(d=Zs).sibling,f=d.return;if(ol(d),d===u){Zs=null;break}if(null!==p){p.return=f,Zs=p;break}Zs=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Zs=s;else e:for(;null!==Zs;){if(0!==(2048&(a=Zs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Zs=y;break e}Zs=a.return}}var x=e.current;for(Zs=x;null!==Zs;){var b=(s=Zs).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Zs=b;else e:for(s=x;null!==Zs;){if(0!==(2048&(l=Zs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(S){jc(l,l.return,S)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if(Tl=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{xt=n,Pl.transition=t}}return!1}function kc(e,t,n){e=Vo(e,t=ps(0,t=cs(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Vo(t,e=fs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(_l&n)===n&&(4===Dl||3===Dl&&(130023424&_l)===_l&&500>Xe()-Bl?hc(e,0):Il|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(vt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cc(e,n)}function Rc(e,t){return qe(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _c(e,t,n,r){return new Ac(e,t,n,r)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Oc(e,t){var n=e.alternate;return null===n?((n=_c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)zc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Lc(n.children,i,a,t);case j:s=8,i|=8;break;case E:return(e=_c(12,n,t,2|i)).elementType=E,e.lanes=a,e;case R:return(e=_c(13,n,t,i)).elementType=R,e.lanes=a,e;case A:return(e=_c(19,n,t,i)).elementType=A,e.lanes=a,e;case O:return Mc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case P:s=9;break e;case T:s=11;break e;case _:s=14;break e;case z:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=_c(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=_c(7,e,r,t)).lanes=n,e}function Mc(e,t,n,r){return(e=_c(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=_c(6,e,null,t)).lanes=n,e}function Ic(e,t,n){return(t=_c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,a,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=_c(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(o),e}function Bc(e){if(!e)return Pi;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(zi(n))return Li(e,n,t)}return t}function Uc(e,t,n,r,i,o,a,s,l){return(e=Vc(n,r,!0,e,0,o,0,s,l)).context=Bc(null),n=e.current,(o=Fo(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Vo(n,o,i),e.current.lanes=i,vt(e,i,r),rc(e,r),e}function $c(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(i,t,a))&&(nc(e,i,a,o),Bo(e,i,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}kl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),fo();break;case 5:Zo(t);break;case 1:zi(t.type)&&Mi(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(Ci(ea,1&ea.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ci(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ws(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,io&&0!==(1048576&t.flags)&&Ji(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=_i(t,Ti.current);Ao(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zi(r)?(a=!0,Mi(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,No(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===_)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=Ss(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Io(e,t),$o(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=As(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=As(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===i){t=Ws(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Es(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Ns(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ci(ko,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Ri.current){t=Ws(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Fo(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Ro(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ro(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ao(t,n),r=r(i=_o(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Ss(e,t,r,i=ns(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),$s(e,t),t.tag=1,zi(r)?(e=!0,Mi(t)):e=!1,Ao(t,n),as(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return js(e,t,n)}throw Error(o(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Wc(a);s.call(e)}}$c(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Wc(a);o.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=a,e[fi]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=l,e[fi]=l.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){$c(t,l,n,r)})),l}(n,t,e,i,r);return Wc(a)}Gc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));$c(e,t,null,null)},Gc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){$c(null,e,null,null)})),t[fi]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Nt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Xe()),0===(6&Tl)&&(Ul=Xe()+500,Ui()))}break;case 13:uc((function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Yc(e,1)}},St=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},jt=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));q(r),Z(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[xi,bi,wi,Ce,Pe,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(o(299));var n=!1,r="",i=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[fi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(o(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,i,0,a,s),e[fi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(o(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[fi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),o=n(950),a=n.t(o,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function h(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,u=o.history,f=e.Pop,m=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){f=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:f,location:b.location,delta:n})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(s({},u.state,{idx:g}),""));let b={get action(){return f},get location(){return t(o,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(l,y),m=e,()=>{o.removeEventListener(l,y),m=null}},createHref:e=>n(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let i=h(b.location,t,n);r&&r(i,t),g=v()+1;let s=d(i,g),l=b.createHref(i);try{u.pushState(s,"",l)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(l)}a&&m&&m({action:f,location:b.location,delta:1})},replace:function(t,n){f=e.Replace;let i=h(b.location,t,n);r&&r(i,t),g=v();let o=d(i,g),s=b.createHref(i);u.replaceState(o,"",s),a&&m&&m({action:f,location:b.location,delta:0})},go:e=>u.go(e)};return b}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let i=z(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let o=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=_(i);a=R(o[s],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(c(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=N([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))i(e,t,r);else i(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=b(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,S=3,k=2,j=1,E=10,C=-2,P=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(P)&&(r+=C),t&&(r+=k),n.filter((e=>!P(e))).reduce(((e,t)=>e+(w.test(t)?S:""===t?j:E)),r)}function R(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=A({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=A({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:N([o,u.pathname]),pathnameBase:I(N([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=N([o,u.pathnameBase]))}return a}function A(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function _(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e,t){let n=D(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=f(e):(i=s({},e),c(!i.pathname||!i.pathname.includes("?"),O("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),O("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),O("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?f(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:F(r),hash:V(i)}}(i,o),d=l&&"/"!==l&&l.endsWith("/"),h=(a||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!h||(u.pathname+="/"),u}const N=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],$=(new Set(U),["get",...U]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const H=t.createContext(null);const Y=t.createContext(null);const q=t.createContext(null);const K=t.createContext(null);const G=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function X(){return null!=t.useContext(K)}function Z(){return X()||c(!1),t.useContext(K).location}function J(e){t.useContext(q).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=he(ce.UseNavigateStable),r=t.useRef(!1);J((()=>{r.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:n},i)))}),[e,n]);return i}():function(){X()||c(!1);let e=t.useContext(H),{basename:n,future:r,navigator:i}=t.useContext(q),{matches:o}=t.useContext(G),{pathname:a}=Z(),s=JSON.stringify(L(o,r.v7_relativeSplatPath)),l=t.useRef(!1);return J((()=>{l.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let o=M(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:N([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)}),[n,i,s,a,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(q),{matches:o}=t.useContext(G),{pathname:a}=Z(),s=JSON.stringify(L(o,i.v7_relativeSplatPath));return t.useMemo((()=>M(e,JSON.parse(s),a,"path"===r)),[e,s,a,r])}function ne(n,r,i,o){X()||c(!1);let{navigator:a,static:s}=t.useContext(q),{matches:l}=t.useContext(G),u=l[l.length-1],d=u?u.params:{},h=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let p,m=Z();if(r){var g;let e="string"===typeof r?f(r):r;"/"===h||(null==(g=e.pathname)?void 0:g.startsWith(h))||c(!1),p=e}else p=m;let y=p.pathname||"/",x=y;if("/"!==h){let e=h.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!s&&i&&i.matches&&i.matches.length>0?i.matches:v(n,{pathname:x});let w=se(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:N([h,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:N([h,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,i,o);return r&&w?t.createElement(K.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},w):w}function re(){let e=function(){var e;let n=t.useContext(Q),r=de(ce.UseRouteError),i=he(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ie=t.createElement(re,null);class oe extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(H);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},i)}function se(e,n,r,i){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(o=r)?void 0:o.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||c(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,i,o)=>{let a,c=!1,h=null,p=null;var f;r&&(a=l&&i.route.id?l[i.route.id]:void 0,h=i.route.errorElement||ie,u&&(d<0&&0===o?(f="route-fallback",!1||pe[f]||(pe[f]=!0),c=!0,p=null):d===o&&(c=!0,p=i.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=a?h:c?p:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ae,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?t.createElement(oe,{location:r.location,revalidation:r.revalidation,component:h,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(H);return n||c(!1),n}function de(e){let n=t.useContext(Y);return n||c(!1),n}function he(e){let n=function(){let e=t.useContext(G);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const pe={};function fe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){c(!1)}function ge(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1,future:u}=n;X()&&c(!1);let d=r.replace(/^\/*/,"/"),h=t.useMemo((()=>({basename:d,navigator:s,static:l,future:W({v7_relativeSplatPath:!1},u)})),[d,u,s,l]);"string"===typeof o&&(o=f(o));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=o,x=t.useMemo((()=>{let e=z(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:a}}),[d,p,m,g,v,y,a]);return null==x?null:t.createElement(q.Provider,{value:h},t.createElement(K.Provider,{children:i,value:x}))}function ve(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise((()=>{}));t.Component;function ye(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,o));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ye(e.props.children,o)),r.push(a)})),r}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(wf){}new Map;const Se=r.startTransition;a.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),m((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return h("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:p(t)}),null,s)));let l=a.current,[c,u]=t.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},f=t.useCallback((e=>{d&&Se?Se((()=>u(e))):u(e)}),[u,d]);return t.useLayoutEffect((()=>l.listen(f)),[l,f]),t.useEffect((()=>fe(i)),[i]),t.createElement(ge,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=t.forwardRef((function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:l,target:u,to:d,preventScrollReset:h,viewTransition:f}=e,m=be(e,we),{basename:g}=t.useContext(q),v=!1;if("string"===typeof d&&Ee.test(d)&&(r=d,je))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=z(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(wf){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;X()||c(!1);let{basename:i,navigator:o}=t.useContext(q),{hash:a,pathname:s,search:l}=te(e,{relative:r}),u=s;return"/"!==i&&(u="/"===s?i:N([i,s])),o.createHref({pathname:u,search:l,hash:a})}(d,{relative:o}),x=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,c=ee(),u=Z(),d=te(e,{relative:s});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:p(u)===p(d);c(e,{replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l})}}),[u,c,d,i,o,r,e,a,s,l])}(d,{replace:s,state:l,target:u,preventScrollReset:h,relative:o,viewTransition:f});return t.createElement("a",xe({},m,{href:r||y,onClick:v||a?i:function(e){i&&i(e),e.defaultPrevented||x(e)},ref:n,target:u}))}));var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));const Re=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ae=(0,t.createContext)({}),_e=(0,t.createContext)(null),ze="undefined"!==typeof document,Oe=ze?t.useLayoutEffect:t.useEffect,De=(0,t.createContext)({strict:!1}),Le=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Me="data-"+Le("framerAppearId");function Ne(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Ie(e){return"string"===typeof e||Array.isArray(e)}function Fe(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Ve=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Be=["initial",...Ve];function Ue(e){return Fe(e.animate)||Be.some((t=>Ie(e[t])))}function $e(e){return Boolean(Ue(e)||e.variants)}function We(e){const{initial:n,animate:r}=function(e,t){if(Ue(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Ie(t)?t:void 0,animate:Ie(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Ae));return(0,t.useMemo)((()=>({initial:n,animate:r})),[He(n),He(r)])}function He(e){return Array.isArray(e)?e.join(" "):e}const Ye={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qe={};for(const n in Ye)qe[n]={isEnabled:e=>Ye[n].some((t=>!!e[t]))};const Ke=(0,t.createContext)({}),Ge=(0,t.createContext)({}),Qe=Symbol.for("motionComponentSymbol");function Xe(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;n&&function(e){for(const t in e)qe[t]={...qe[t],...e[t]}}(n);const s=(0,t.forwardRef)((function(e,s){let l;const c={...(0,t.useContext)(Re),...e,layoutId:Ze(e)},{isStatic:u}=c,d=We(e),h=o(e,u);if(!u&&ze){d.visualElement=function(e,n,r,i){const{visualElement:o}=(0,t.useContext)(Ae),a=(0,t.useContext)(De),s=(0,t.useContext)(_e),l=(0,t.useContext)(Re).reducedMotion,c=(0,t.useRef)();i=i||a.renderer,!c.current&&i&&(c.current=i(e,{visualState:n,parent:o,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,t.useInsertionEffect)((()=>{u&&u.update(r,s)}));const d=(0,t.useRef)(Boolean(r[Me]&&!window.HandoffComplete));return Oe((()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())})),(0,t.useEffect)((()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),u}(a,h,c,r);const e=(0,t.useContext)(Ge),i=(0,t.useContext)(De).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,i,n,e))}return t.createElement(Ae.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...c}):null,i(a,e,function(e,n,r){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Ne(r)&&(r.current=t))}),[n])}(h,d.visualElement,s),h,u,d.visualElement))}));return s[Qe]=a,s}function Ze(e){let{layoutId:n}=e;const r=(0,t.useContext)(Ke).id;return r&&void 0!==n?r+"-"+n:n}function Je(e){function t(t){return Xe(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const et=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tt(e){return"string"===typeof e&&!e.includes("-")&&!!(et.indexOf(e)>-1||/[A-Z]/.test(e))}const nt={};const rt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],it=new Set(rt);function ot(e,t){let{layout:n,layoutId:r}=t;return it.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!nt[e]||"opacity"===e)}const at=e=>Boolean(e&&e.getVelocity),st={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lt=rt.length;const ct=e=>t=>"string"===typeof t&&t.startsWith(e),ut=ct("--"),dt=ct("var(--"),ht=(e,t)=>t&&"number"===typeof e?t.transform(e):e,pt=(e,t,n)=>Math.min(Math.max(n,e),t),ft={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},mt={...ft,transform:e=>pt(0,1,e)},gt={...ft,default:1},vt=e=>Math.round(1e5*e)/1e5,yt=/(-)?([\d]*\.?[\d])+/g,xt=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,bt=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function wt(e){return"string"===typeof e}const St=e=>({test:t=>wt(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),kt=St("deg"),jt=St("%"),Et=St("px"),Ct=St("vh"),Pt=St("vw"),Tt={...jt,parse:e=>jt.parse(e)/100,transform:e=>jt.transform(100*e)},Rt={...ft,transform:Math.round},At={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,radius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,size:Et,top:Et,right:Et,bottom:Et,left:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:gt,scaleX:gt,scaleY:gt,scaleZ:gt,skew:kt,skewX:kt,skewY:kt,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:mt,originX:Tt,originY:Tt,originZ:Et,zIndex:Rt,fillOpacity:mt,strokeOpacity:mt,numOctaves:Rt};function _t(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(ut(d)){o[d]=e;continue}const n=At[d],r=ht(e,n);if(it.has(d)){if(l=!0,a[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:o=!0}=t,a="";for(let s=0;s<lt;s++){const t=rt[s];void 0!==e[t]&&(a+=`${st[t]||t}(${e[t]}) `)}return i&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):o&&n&&(a="none"),a}(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const zt=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ot(e,t,n){for(const r in t)at(t[r])||ot(r,n)||(e[r]=t[r])}function Dt(e,n,r){const i={};return Ot(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return _t(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)}),[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function Lt(e,t,n){const r={},i=Dt(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Mt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nt(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Mt.has(e)}let It=e=>!Nt(e);try{(Ft=require("@emotion/is-prop-valid").default)&&(It=e=>e.startsWith("on")?!Nt(e):Ft(e))}catch(Sf){}var Ft;function Vt(e,t,n){return"string"===typeof e?e:Et.transform(t+n*e)}const Bt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ut={offset:"strokeDashoffset",array:"strokeDasharray"};function $t(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:h=0,...p}=t;if(_t(e,p,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(void 0!==l||void 0!==c||m.transform)&&(m.transformOrigin=function(e,t,n){return`${Vt(t,e.x,e.width)} ${Vt(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==o&&(f.x=o),void 0!==a&&(f.y=a),void 0!==s&&(f.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?Bt:Ut;e[o.offset]=Et.transform(-r);const a=Et.transform(t),s=Et.transform(n);e[o.array]=`${a} ${s}`}(f,u,d,h,!1)}const Wt=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Ht=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Yt(e,n,r,i){const o=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return $t(t,n,{enableHardwareAcceleration:!1},Ht(i),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};Ot(t,e.style,e),o.style={...t,...o.style}}return o}function qt(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,a)=>{let{latestValues:s}=o;const l=(tt(n)?Yt:Lt)(r,s,a,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(It(i)||!0===n&&Nt(i)||!t&&!Nt(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),u={...c,...l,ref:i},{children:d}=r,h=(0,t.useMemo)((()=>at(d)?d.get():d),[d]);return(0,t.createElement)(n,{...u,children:h})}}function Kt(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const a in o)e.style.setProperty(a,o[a])}const Gt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qt(e,t,n,r){Kt(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Gt.has(i)?i:Le(i),t.attrs[i])}function Xt(e,t){const{style:n}=e,r={};for(const i in n)(at(n[i])||t.style&&at(t.style[i])||ot(i,e))&&(r[i]=n[i]);return r}function Zt(e,t){const n=Xt(e,t);for(const r in e)if(at(e[r])||at(t[r])){n[-1!==rt.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Jt(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}const en=e=>Array.isArray(e),tn=e=>en(e)?e[e.length-1]||0:e;function nn(e){const t=at(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const rn=e=>(n,r)=>{const i=(0,t.useContext)(Ae),o=(0,t.useContext)(_e),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onMount:a}=e;const s={latestValues:on(t,n,r,i),renderState:o()};return a&&(s.mount=e=>a(t,e,s)),s}(e,n,i,o);return r?a():function(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}(a)};function on(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=nn(o[h]);let{initial:a,animate:s}=e;const l=Ue(e),c=$e(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Fe(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const n=Jt(e,t);if(!n)return;const{transitionEnd:r,transition:o,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]}))}return i}const an=e=>e;class sn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const ln=["prepare","read","update","preRender","render","postRender"];const{schedule:cn,cancel:un,state:dn,steps:hn}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=ln.reduce(((e,t)=>(e[t]=function(e){let t=new sn,n=new sn,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=o?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&o&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),a=e=>o[e].process(i),s=()=>{const o=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,ln.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=ln.reduce(((t,a)=>{const l=o[a];return t[a]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,o,a)},t}),{});return{schedule:l,cancel:e=>ln.forEach((t=>o[t].cancel(e))),state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:an,!0),pn={useVisualState:rn({scrapeMotionValuesFromProps:Zt,createRenderState:Wt,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;cn.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(wf){r.dimensions={x:0,y:0,width:0,height:0}}})),cn.render((()=>{$t(r,i,{enableHardwareAcceleration:!1},Ht(t.tagName),e.transformTemplate),Qt(t,r)}))}})},fn={useVisualState:rn({scrapeMotionValuesFromProps:Xt,createRenderState:zt})};function mn(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const gn=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function vn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function yn(e,t,n,r){return mn(e,t,(e=>t=>gn(t)&&e(t,vn(t)))(n),r)}const xn=(e,t)=>n=>t(e(n)),bn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(xn)};function wn(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Sn=wn("dragHorizontal"),kn=wn("dragVertical");function jn(e){let t=!1;if("y"===e)t=kn();else if("x"===e)t=Sn();else{const e=Sn(),n=kn();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function En(){const e=jn(!0);return!e||(e(),!1)}class Cn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Pn(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return yn(e.current,n,((n,i)=>{if("touch"===n.pointerType||En())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&cn.update((()=>o[r](n,i)))}),{passive:!e.getProps()[r]})}const Tn=(e,t)=>!!t&&(e===t||Tn(e,t.parentElement));function Rn(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,vn(n))}const An=new WeakMap,_n=new WeakMap,zn=e=>{const t=An.get(e.target);t&&t(e)},On=e=>{e.forEach(zn)};function Dn(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;_n.has(r)||_n.set(r,{});const i=_n.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(On,{root:t,...n})),i[o]}(t);return An.set(e,n),r.observe(e),()=>{An.delete(e),r.unobserve(e)}}const Ln={some:0,all:1};const Mn={inView:{Feature:class extends Cn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Ln[r]};return Dn(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Cn{constructor(){super(...arguments),this.removeStartListeners=an,this.removeEndListeners=an,this.removeAccessibleListeners=an,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=yn(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();cn.update((()=>{i||Tn(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),i=yn(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=bn(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=mn(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=mn(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Rn("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&cn.update((()=>n(e,t)))}))})),Rn("down",((e,t)=>{this.startPress(e,t)}))})),t=mn(this.node.current,"blur",(()=>{this.isPressing&&Rn("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=bn(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&cn.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!En()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&cn.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=yn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bn(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Cn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(wf){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(mn(this.node.current,"focus",(()=>this.onFocus())),mn(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Cn{mount(){this.unmount=bn(Pn(this.node,!0),Pn(this.node,!1))}unmount(){}}}};function Nn(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function In(e,t,n){const r=e.getProps();return Jt(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}let Fn=an,Vn=an;const Bn=e=>1e3*e,Un=e=>e/1e3,$n=!1,Wn=e=>Array.isArray(e)&&"number"===typeof e[0];function Hn(e){return Boolean(!e||"string"===typeof e&&qn[e]||Wn(e)||Array.isArray(e)&&e.every(Hn))}const Yn=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},qn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yn([0,.65,.55,1]),circOut:Yn([.55,0,1,.45]),backIn:Yn([.31,.01,.66,-.59]),backOut:Yn([.33,1.53,.69,.99])};function Kn(e){if(e)return Wn(e)?Yn(e):Array.isArray(e)?e.map(Kn):qn[e]}const Gn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Qn(e,t,n,r){if(e===t&&n===r)return an;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=Gn(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Gn(i(e),t,r)}const Xn=Qn(.42,0,1,1),Zn=Qn(0,0,.58,1),Jn=Qn(.42,0,.58,1),er=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tr=e=>t=>1-e(1-t),nr=e=>1-Math.sin(Math.acos(e)),rr=tr(nr),ir=er(nr),or=Qn(.33,1.53,.69,.99),ar=tr(or),sr=er(ar),lr={linear:an,easeIn:Xn,easeInOut:Jn,easeOut:Zn,circIn:nr,circInOut:ir,circOut:rr,backIn:ar,backInOut:sr,backOut:or,anticipate:e=>(e*=2)<1?.5*ar(e):.5*(2-Math.pow(2,-10*(e-1)))},cr=e=>{if(Array.isArray(e)){Vn(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Qn(t,n,r,i)}return"string"===typeof e?(Vn(void 0!==lr[e],`Invalid easing type '${e}'`),lr[e]):e},ur=(e,t)=>n=>Boolean(wt(n)&&bt.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),dr=(e,t,n)=>r=>{if(!wt(r))return r;const[i,o,a,s]=r.match(yt);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},hr={...ft,transform:e=>Math.round((e=>pt(0,255,e))(e))},pr={test:ur("rgb","red"),parse:dr("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+hr.transform(t)+", "+hr.transform(n)+", "+hr.transform(r)+", "+vt(mt.transform(i))+")"}};const fr={test:ur("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:pr.transform},mr={test:ur("hsl","hue"),parse:dr("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+jt.transform(vt(n))+", "+jt.transform(vt(r))+", "+vt(mt.transform(i))+")"}},gr={test:e=>pr.test(e)||fr.test(e)||mr.test(e),parse:e=>pr.test(e)?pr.parse(e):mr.test(e)?mr.parse(e):fr.parse(e),transform:e=>wt(e)?e:e.hasOwnProperty("red")?pr.transform(e):mr.transform(e)},vr=(e,t,n)=>-n*e+n*t+e;function yr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const xr=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},br=[fr,pr,mr];function wr(e){const t=(e=>br.find((t=>t.test(e))))(e);Vn(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===mr&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=yr(i,e,t+1/3),a=yr(i,e,t),s=yr(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const Sr=(e,t)=>{const n=wr(e),r=wr(t),i={...n};return e=>(i.red=xr(n.red,r.red,e),i.green=xr(n.green,r.green,e),i.blue=xr(n.blue,r.blue,e),i.alpha=vr(n.alpha,r.alpha,e),pr.transform(i))};const kr={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:an},jr={regex:xt,countKey:"Colors",token:"${c}",parse:gr.parse},Er={regex:yt,countKey:"Numbers",token:"${n}",parse:ft.parse};function Cr(e,t){let{regex:n,countKey:r,token:i,parse:o}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...a.map(o)))}function Pr(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Cr(n,kr),Cr(n,jr),Cr(n,Er),n}function Tr(e){return Pr(e).values}function Rr(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Pr(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(kr.token,e[i]):i<r+n?t.replace(jr.token,gr.transform(e[i])):t.replace(Er.token,vt(e[i]));return t}}const Ar=e=>"number"===typeof e?0:e;const _r={test:function(e){var t,n;return isNaN(e)&&wt(e)&&((null===(t=e.match(yt))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(xt))||void 0===n?void 0:n.length)||0)>0},parse:Tr,createTransformer:Rr,getAnimatableNone:function(e){const t=Tr(e);return Rr(e)(t.map(Ar))}},zr=(e,t)=>n=>`${n>0?t:e}`;function Or(e,t){return"number"===typeof e?n=>vr(e,t,n):gr.test(e)?Sr(e,t):e.startsWith("var(")?zr(e,t):Mr(e,t)}const Dr=(e,t)=>{const n=[...e],r=n.length,i=e.map(((e,n)=>Or(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},Lr=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Or(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},Mr=(e,t)=>{const n=_r.createTransformer(t),r=Pr(e),i=Pr(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?bn(Dr(r.values,i.values),n):(Fn(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),zr(e,t))},Nr=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Ir=(e,t)=>n=>vr(e,t,n);function Fr(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?Ir:"string"===typeof e?gr.test(e)?Sr:Mr:Array.isArray(e)?Dr:"object"===typeof e?Lr:Ir}(e[0]),o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||an:t;n=bn(e,n)}r.push(n)}return r}function Vr(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(Vn(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Fr(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=Nr(e[n],e[n+1],t);return a[n](r)};return n?t=>l(pt(e[0],e[o-1],t)):l}function Br(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Nr(0,t,r);e.push(vr(n,1,i))}}(t,e.length-1),t}function Ur(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(cr):cr(i),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Br(n),t),l=Vr(s,n,{ease:Array.isArray(o)?o:(c=n,u=o,c.map((()=>u||Jn)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function $r(e,t){return t?e*(1e3/t):0}function Wr(e,t,n){const r=Math.max(t-5,0);return $r(n-e(r),t-r)}const Hr=.001;function Yr(e){let t,n,{duration:r=800,bounce:i=.25,velocity:o=0,mass:a=1}=e;Fn(r<=Bn(10),"Spring duration must be 10 seconds or less");let s=1-i;s=pt(.05,1,s),r=pt(.01,10,Un(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=Kr(e,s),l=Math.exp(-n);return Hr-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Kr(Math.pow(e,2),s);return(-t(e)+Hr>0?-1:1)*((i-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<qr;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Bn(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const qr=12;function Kr(e,t){return e*Math.sqrt(1-t*t)}const Gr=["duration","bounce"],Qr=["stiffness","damping","mass"];function Xr(e,t){return t.some((t=>void 0!==e[t]))}function Zr(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const o=t[0],a=t[t.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Xr(e,Qr)&&Xr(e,Gr)){const n=Yr(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Un(i.velocity||0)}),f=h||0,m=c/(2*Math.sqrt(l*u)),g=a-o,v=Un(Math.sqrt(l/u)),y=Math.abs(g)<5;let x;if(r||(r=y?.01:2),n||(n=y?.005:.5),m<1){const e=Kr(v,m);x=t=>{const n=Math.exp(-m*v*t);return a-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:p&&d||null,next:e=>{const t=x(e);if(p)s.done=e>=d;else{let i=f;0!==e&&(i=m<1?Wr(x,e,t):0);const o=Math.abs(i)<=r,l=Math.abs(a-t)<=n;s.done=o&&l}return s.value=s.done?a:t,s}}}function Jr(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const h=t[0],p={done:!1,value:h},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=h+m,v=void 0===s?g:s(g);v!==g&&(m=v-h);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);p.done=Math.abs(t)<=u,p.value=p.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(w=e,S=Zr({keyframes:[p.value,f(p.value)],velocity:Wr(x,e,p.value),damping:o,stiffness:a,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>w?S.next(e-w):(!t&&b(e),p)}}}const ei=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>cn.update(t,!0),stop:()=>un(t),now:()=>dn.isProcessing?dn.timestamp:performance.now()}};function ti(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const ni={decay:Jr,inertia:Jr,tween:Ur,keyframes:Ur,spring:Zr};function ri(e){let t,n,{autoplay:r=!0,delay:i=0,driver:o=ei,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:h,onComplete:p,onUpdate:f,...m}=e,g=1,v=!1;const y=()=>{n=new Promise((e=>{t=e}))};let x;y();const b=ni[s]||Ur;let w;b!==Ur&&"number"!==typeof a[0]&&(w=Vr([0,100],a,{clamp:!1}),a=[0,100]);const S=b({...m,keyframes:a});let k;"mirror"===u&&(k=b({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let j="idle",E=null,C=null,P=null;null===S.calculatedDuration&&l&&(S.calculatedDuration=ti(S));const{calculatedDuration:T}=S;let R=1/0,A=1/0;null!==T&&(R=T+c,A=R*(l+1)-c);let _=0;const z=e=>{if(null===C)return;g>0&&(C=Math.min(C,e)),g<0&&(C=Math.min(e-A/g,C)),_=null!==E?E:Math.round(e-C)*g;const t=_-i*(g>=0?1:-1),n=g>=0?t<0:t>A;_=Math.max(t,0),"finished"===j&&null===E&&(_=A);let r=_,o=S;if(l){const e=Math.min(_,A)/R;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/R)):"mirror"===u&&(o=k)),r=pt(0,1,n)*R}const s=n?{done:!1,value:a[0]}:o.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=g>=0?_>=A:_<=0);const h=null===E&&("finished"===j||"running"===j&&d);return f&&f(s.value),h&&L(),s},O=()=>{x&&x.stop(),x=void 0},D=()=>{j="idle",O(),t(),y(),C=P=null},L=()=>{j="finished",p&&p(),O(),t()},M=()=>{if(v)return;x||(x=o(z));const e=x.now();d&&d(),null!==E?C=e-E:C&&"finished"!==j||(C=e),"finished"===j&&y(),P=C,E=null,j="running",x.start()};r&&M();const N={then:(e,t)=>n.then(e,t),get time(){return Un(_)},set time(e){e=Bn(e),_=e,null===E&&x&&0!==g?C=x.now()-e/g:E=e},get duration(){const e=null===S.calculatedDuration?ti(S):S.calculatedDuration;return Un(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,N.time=Un(_))},get state(){return j},play:M,pause:()=>{j="paused",E=_},stop:()=>{v=!0,"idle"!==j&&(j="idle",h&&h(),D())},cancel:()=>{null!==P&&z(P),D()},complete:()=>{j="finished"},sample:e=>(C=0,z(e))};return N}const ii=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),oi=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function ai(e,t,n){let{onUpdate:r,onComplete:i,...o}=n;if(!(ii()&&oi.has(t)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let a,s,l=!1,c=!1;const u=()=>{s=new Promise((e=>{a=e}))};u();let{keyframes:d,duration:h=300,ease:p,times:f}=o;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Hn(t.ease))(t,o)){const e=ri({...o,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;f=void 0,d=n,h=r-10,p="linear"}const m=function(e,t,n){let{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Kn(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...o,duration:h,ease:p,times:f}),g=()=>{c=!1,m.cancel()},v=()=>{c=!0,cn.update(g),a(),u()};m.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,o)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,an),get time(){return Un(m.currentTime||0)},set time(e){m.currentTime=Bn(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return Un(h)},play:()=>{l||(m.play(),un(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=ri({...o,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{c||m.finish()},cancel:v}}const si={type:"spring",stiffness:500,damping:25,restSpeed:10},li={type:"keyframes",duration:.8},ci={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ui=(e,t)=>{let{keyframes:n}=t;return n.length>2?li:it.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:si:ci},di=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!_r.test(t)&&"0"!==t||t.startsWith("url("))),hi=new Set(["brightness","contrast","saturate","opacity"]);function pi(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(yt)||[];if(!r)return e;const i=n.replace(r,"");let o=hi.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const fi=/([a-z-]*)\(.*?\)/g,mi={..._r,getAnimatableNone:e=>{const t=e.match(fi);return t?t.map(pi).join(" "):e}},gi={...At,color:gr,backgroundColor:gr,outlineColor:gr,fill:gr,stroke:gr,borderColor:gr,borderTopColor:gr,borderRightColor:gr,borderBottomColor:gr,borderLeftColor:gr,filter:mi,WebkitFilter:mi},vi=e=>gi[e];function yi(e,t){let n=vi(e);return n!==mi&&(n=_r),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const xi=e=>/^0[^.\s]+$/.test(e);function bi(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||xi(e):void 0}function wi(e,t){return e[t]||e.default||e}const Si=!1,ki=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const o=wi(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s-=Bn(a);const l=function(e,t,n,r){const i=di(t,n);let o;o=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<o.length;c++)null===o[c]&&(o[c]=0===c?a:o[c-1]),bi(o[c])&&l.push(c),"string"===typeof o[c]&&"none"!==o[c]&&"0"!==o[c]&&(s=o[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)o[l[c]]=yi(t,s);return o}(t,e,n,o),c=l[0],u=l[l.length-1],d=di(e,c),h=di(e,u);Fn(d===h,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(o)||(p={...p,...ui(e,p)}),p.duration&&(p.duration=Bn(p.duration)),p.repeatDelay&&(p.repeatDelay=Bn(p.repeatDelay)),!d||!h||$n||!1===o.type||Si)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const o=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:an,pause:an,stop:an,then:e=>(e(),Promise.resolve()),cancel:an,complete:an});return n?ri({keyframes:[0,1],duration:0,delay:n,onComplete:o}):o()}($n?{...p,delay:0}:p);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=ai(t,e,p);if(n)return n}return ri(p)}};function ji(e){return Boolean(at(e)&&e.add)}const Ei=e=>/^\-?\d*\.?\d+$/.test(e);function Ci(e,t){-1===e.indexOf(t)&&e.push(t)}function Pi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ti{constructor(){this.subscriptions=[]}add(e){return Ci(this.subscriptions,e),()=>Pi(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ri={current:void 0};class Ai{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=dn;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,cn.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>cn.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ti);const n=this.events[e].add(t);return"change"===e?()=>{n(),cn.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ri.current&&Ri.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$r(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _i(e,t){return new Ai(e,t)}const zi=e=>t=>t.test(e),Oi=[ft,Et,jt,kt,Pt,Ct,{test:e=>"auto"===e,parse:e=>e}],Di=e=>Oi.find(zi(e)),Li=[...Oi,gr,_r],Mi=e=>Li.find(zi(e));function Ni(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,_i(n))}function Ii(e,t){const n=In(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){Ni(e,a,tn(o[a]))}}function Fi(e,t){if(!t)return;return(t[e]||t.default||t).from}function Vi(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Bi(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Ui(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&Vi(u,d))continue;const i={delay:n,elapsed:0,...wi(o||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[Me];if(n){const e=window.HandoffAppearAnimations(n,d,t,cn);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let a=!i.isHandoff&&!Bi(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(ki(d,t,r,e.shouldReduceMotion&&it.has(d)?{type:!1}:i));const h=t.animation;ji(l)&&(l.add(d),h.then((()=>l.remove(d)))),c.push(h)}return a&&Promise.all(c).then((()=>{a&&Ii(e,a)})),c}function $i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=In(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Ui(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Wi).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push($i(e,t,{...o,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then((()=>t()))}return Promise.all([o(),a(n.delay)])}function Wi(e,t){return e.sortNodePosition(t)}const Hi=[...Ve].reverse(),Yi=Ve.length;function qi(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>$i(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=$i(e,t,r);else{const i="function"===typeof t?In(e,t,r.custom):t;n=Promise.all(Ui(e,i,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function Ki(e){let t=qi(e);const n={animate:Qi(!0),whileInView:Qi(),whileHover:Qi(),whileTap:Qi(),whileDrag:Qi(),whileFocus:Qi(),exit:Qi()};let r=!0;const i=(t,n)=>{const r=In(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function o(o,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},h=1/0;for(let t=0;t<Yi;t++){const p=Hi[t],f=n[p],m=void 0!==s[p]?s[p]:l[p],g=Ie(m),v=p===a?f.isActive:null;!1===v&&(h=t);let y=m===l[p]&&m!==s[p]&&g;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...d},!f.isActive&&null===v||!m&&!f.prevProp||Fe(m)||"boolean"===typeof m)continue;let x=Gi(f.prevProp,m)||p===a&&f.isActive&&!y&&g||t>h&&g,b=!1;const w=Array.isArray(m)?m:[m];let S=w.reduce(i,{});!1===v&&(S={});const{prevResolvedValues:k={}}=f,j={...k,...S},E=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),f.needsAnimating[e]=!0};for(const e in j){const t=S[e],n=k[e];if(d.hasOwnProperty(e))continue;let r=!1;r=en(t)&&en(n)?!Nn(t,n):t!==n,r?void 0!==t?E(e):u.add(e):void 0!==t&&u.has(e)?E(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=S,f.isActive&&(d={...d,...S}),r&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||c.push(...w.map((e=>({animation:e,options:{type:p,...o}}))))}if(u.size){const t={};u.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),c.push({animation:t})}let p=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(c):Promise.resolve()}return{animateChanges:o,setActive:function(t,r,i){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=o(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function Gi(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Nn(t,e)}function Qi(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Xi=0;const Zi={animation:{Feature:class extends Cn{constructor(e){super(e),e.animationState||(e.animationState=Ki(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Fe(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends Cn{constructor(){super(...arguments),this.id=Xi++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ji=(e,t)=>Math.abs(e-t);class eo{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ro(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ji(e.x,t.x),r=Ji(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=dn;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=to(t,this.transformPagePoint),cn.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=ro("pointercancel"===e.type?this.lastMoveEventInfo:to(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!gn(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const o=to(vn(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=dn;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,ro(o,this.history)),this.removeListeners=bn(yn(this.contextWindow,"pointermove",this.handlePointerMove),yn(this.contextWindow,"pointerup",this.handlePointerUp),yn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),un(this.updatePoint)}}function to(e,t){return t?{point:t(e.point)}:e}function no(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ro(e,t){let{point:n}=e;return{point:n,delta:no(n,oo(t)),offset:no(n,io(t)),velocity:ao(t,.1)}}function io(e){return e[0]}function oo(e){return e[e.length-1]}function ao(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=oo(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Bn(t)));)n--;if(!r)return{x:0,y:0};const o=Un(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function so(e){return e.max-e.min}function lo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function co(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=vr(t.min,t.max,e.origin),e.scale=so(n)/so(t),(lo(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=vr(n.min,n.max,e.origin)-e.originPoint,(lo(e.translate)||isNaN(e.translate))&&(e.translate=0)}function uo(e,t,n,r){co(e.x,t.x,n.x,r?r.originX:void 0),co(e.y,t.y,n.y,r?r.originY:void 0)}function ho(e,t,n){e.min=n.min+t.min,e.max=e.min+so(t)}function po(e,t,n){e.min=t.min-n.min,e.max=e.min+so(t)}function fo(e,t,n){po(e.x,t.x,n.x),po(e.y,t.y,n.y)}function mo(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function go(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const vo=.35;function yo(e,t,n){return{min:xo(e,t),max:xo(e,n)}}function xo(e,t){return"number"===typeof e?e:e[t]||0}function bo(e){return[e("x"),e("y")]}function wo(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function So(e){return void 0===e||1===e}function ko(e){let{scale:t,scaleX:n,scaleY:r}=e;return!So(t)||!So(n)||!So(r)}function jo(e){return ko(e)||Eo(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Eo(e){return Co(e.x)||Co(e.y)}function Co(e){return e&&"0%"!==e}function Po(e,t,n){return n+t*(e-n)}function To(e,t,n,r,i){return void 0!==i&&(e=Po(e,i,r)),Po(e,n,r)+t}function Ro(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=To(e.min,t,n,r,i),e.max=To(e.max,t,n,r,i)}function Ao(e,t){let{x:n,y:r}=t;Ro(e.x,n.translate,n.scale,n.originPoint),Ro(e.y,r.translate,r.scale,r.originPoint)}function _o(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function zo(e,t){e.min=e.min+t,e.max=e.max+t}function Oo(e,t,n){let[r,i,o]=n;const a=void 0!==t[o]?t[o]:.5,s=vr(e.min,e.max,a);Ro(e,t[r],t[i],s,t.scale)}const Do=["x","scaleX","originX"],Lo=["y","scaleY","originY"];function Mo(e,t){Oo(e.x,t,Do),Oo(e.y,t,Lo)}function No(e,t){return wo(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Io=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Fo=new WeakMap;class Vo{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new eo(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vn(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=jn(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bo((e=>{let t=this.getAxisMotionValue(e).get()||0;if(jt.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=so(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&cn.update((()=>i(e,t)),!1,!0);const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>bo((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Io(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&cn.update((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Bo(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?vr(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?vr(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Ne(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:mo(e.x,r,o),y:mo(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vo;return!1===e?e=0:!0===e&&(e=vo),{x:yo(e,"left","right"),y:yo(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&bo((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ne(e))return!1;const n=e.current;Vn(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=No(e,n),{scroll:i}=t;return i&&(zo(r.x,i.offset.x),zo(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:go(e.x,t.x),y:go(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=wo(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=bo((a=>{if(!Bo(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(ki(e,n,0,t))}stopAnimation(){bo((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){bo((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){bo((t=>{const{drag:n}=this.getProps();if(!Bo(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-vr(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ne(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};bo((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=so(e),i=so(t);return i>r?n=Nr(t.min,t.max-r,e.min):r>i&&(n=Nr(e.min,e.max-i,t.min)),pt(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),bo((t=>{if(!Bo(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(vr(i,o,r[t]))}))}addListeners(){if(!this.visualElement.current)return;Fo.set(this.visualElement,this);const e=yn(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Ne(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=mn(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(bo((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=vo,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function Bo(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Uo=e=>(t,n)=>{e&&cn.update((()=>e(t,n)))};const $o={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ho={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Et.test(e))return e;e=parseFloat(e)}return`${Wo(e,t.target.x)}% ${Wo(e,t.target.y)}%`}},Yo={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=_r.parse(e);if(o.length>5)return i;const a=_r.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=c;const u=vr(l,c,.5);return"number"===typeof o[2+s]&&(o[2+s]/=u),"number"===typeof o[3+s]&&(o[3+s]/=u),a(o)}};class qo extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var o;o=Go,Object.assign(nt,o),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),$o.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||cn.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ko(e){const[n,r]=function(){const e=(0,t.useContext)(_e);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,o=(0,t.useId)();return(0,t.useEffect)((()=>i(o)),[]),!n&&r?[!1,()=>r&&r(o)]:[!0]}(),i=(0,t.useContext)(Ke);return t.createElement(qo,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(Ge),isPresent:n,safeToRemove:r})}const Go={borderRadius:{...Ho,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ho,borderTopRightRadius:Ho,borderBottomLeftRadius:Ho,borderBottomRightRadius:Ho,boxShadow:Yo},Qo=["TopLeft","TopRight","BottomLeft","BottomRight"],Xo=Qo.length,Zo=e=>"string"===typeof e?parseFloat(e):e,Jo=e=>"number"===typeof e||Et.test(e);function ea(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const ta=ra(0,.5,rr),na=ra(.5,.95,an);function ra(e,t,n){return r=>r<e?0:r>t?1:n(Nr(e,t,r))}function ia(e,t){e.min=t.min,e.max=t.max}function oa(e,t){ia(e.x,t.x),ia(e.y,t.y)}function aa(e,t,n,r,i){return e=Po(e-=t,1/n,r),void 0!==i&&(e=Po(e,1/i,r)),e}function sa(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;jt.test(t)&&(t=parseFloat(t),t=vr(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=vr(o.min,o.max,r);e===o&&(s-=t),e.min=aa(e.min,t,n,s,i),e.max=aa(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const la=["x","scaleX","originX"],ca=["y","scaleY","originY"];function ua(e,t,n,r){sa(e.x,t,la,n?n.x:void 0,r?r.x:void 0),sa(e.y,t,ca,n?n.y:void 0,r?r.y:void 0)}function da(e){return 0===e.translate&&1===e.scale}function ha(e){return da(e.x)&&da(e.y)}function pa(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function fa(e){return so(e.x)/so(e.y)}class ma{constructor(){this.members=[]}add(e){Ci(this.members,e),e.scheduleRender()}remove(e){if(Pi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ga(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const va=(e,t)=>e.depth-t.depth;class ya{constructor(){this.children=[],this.isDirty=!1}add(e){Ci(this.children,e),this.isDirty=!0}remove(e){Pi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(va),this.isDirty=!1,this.children.forEach(e)}}const xa=["","X","Y","Z"],ba={visibility:"hidden"};let wa=0;const Sa={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ka(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=wa++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Sa.totalNodes=Sa.resolvedTargetDeltas=Sa.recalculatedProjection=0,this.nodes.forEach(Ca),this.nodes.forEach(Oa),this.nodes.forEach(Da),this.nodes.forEach(Pa),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Sa)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new ya)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ti),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(un(r),e(a-t))};return cn.read(r,!0),()=>un(r)}(r,250),$o.hasAnimatedSinceResize&&($o.hasAnimatedSinceResize=!1,this.nodes.forEach(za))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||Va,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!pa(this.targetLayout,i)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...wi(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||za(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,un(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(La),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Ra);this.isUpdating||this.nodes.forEach(Aa),this.isUpdating=!1,this.nodes.forEach(_a),this.nodes.forEach(ja),this.nodes.forEach(Ea),this.clearAllSnapshots();const e=performance.now();dn.delta=pt(0,1e3/60,e-dn.timestamp),dn.timestamp=e,dn.isProcessing=!0,hn.update.process(dn),hn.preRender.process(dn),hn.render.process(dn),dn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(Ta),this.sharedNodes.forEach(Ma)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,cn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){cn.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!ha(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||jo(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),$a((r=n).x),$a(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(zo(t.x,n.offset.x),zo(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};oa(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){if(i.isRoot){oa(t,e);const{scroll:n}=this.root;n&&(zo(t.x,-n.offset.x),zo(t.y,-n.offset.y))}zo(t.x,i.offset.x),zo(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};oa(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Mo(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),jo(e.latestValues)&&Mo(n,e.latestValues)}return jo(this.latestValues)&&Mo(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};oa(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!jo(e.latestValues))continue;ko(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};oa(r,e.measurePageBox()),ua(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return jo(this.latestValues)&&ua(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==dn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=dn.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},fo(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),oa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,ho(a.x,s.x,l.x),ho(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):oa(this.target,this.layout.layoutBox),Ao(this.target,this.targetDelta)):oa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},fo(this.relativeTargetOrigin,this.target,e.target),oa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Sa.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!ko(this.parent.latestValues)&&!Eo(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===dn.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;oa(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const i=o.instance;i&&i.style&&"contents"===i.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Mo(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ao(e,a)),r&&jo(o.latestValues)&&Mo(e,o.latestValues))}t.x=_o(t.x),t.y=_o(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;uo(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=ga(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Sa.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Fa));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Na(o.x,e.x,n),Na(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Ia(e.x,t.x,n.x,r),Ia(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),oa(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=vr(0,void 0!==n.opacity?n.opacity:1,ta(r)),e.opacityExit=vr(void 0!==t.opacity?t.opacity:1,0,na(r))):o&&(e.opacity=vr(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<Xo;a++){const i=`border${Qo[a]}Radius`;let o=ea(t,i),s=ea(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||Jo(o)===Jo(s)?(e[i]=Math.max(vr(Zo(o),Zo(s),r),0),(jt.test(s)||jt.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=vr(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(un(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=cn.update((()=>{$o.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=at(e)?e:_i(e);return r.start(ki("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Wa(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=so(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=so(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}oa(t,n),Mo(t,i),uo(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ma);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<xa.length;i++){const t="rotate"+xa[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ba;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=nn(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nn(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!jo(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=ga(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const c in nt){if(void 0===a[c])continue;const{correct:e,applyTo:t}=nt[c],n="none"===r.transform?a[c]:e(a[c],o);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=o===this?nn(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Ra),this.root.sharedNodes.clear()}}}function ja(e){e.updateLayout()}function Ea(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?bo((e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=so(r);r.min=t[e].min,r.max=r.min+i})):Wa(i,n.layoutBox,t)&&bo((r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],a=so(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};uo(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?uo(s,e.applyTransform(r,!0),n.measuredBox):uo(s,t,n.layoutBox);const l=!ha(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};fo(a,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};fo(s,t,o.layoutBox),pa(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Ca(e){Sa.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Pa(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ta(e){e.clearSnapshot()}function Ra(e){e.clearMeasurements()}function Aa(e){e.isLayoutDirty=!1}function _a(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function za(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Oa(e){e.resolveTargetDelta()}function Da(e){e.calcProjection()}function La(e){e.resetRotation()}function Ma(e){e.removeLeadSnapshot()}function Na(e,t,n){e.translate=vr(t.translate,0,n),e.scale=vr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ia(e,t,n,r){e.min=vr(t.min,n.min,r),e.max=vr(t.max,n.max,r)}function Fa(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Va={duration:.45,ease:[.4,0,.1,1]},Ba=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Ua=Ba("applewebkit/")&&!Ba("chrome/")?Math.round:an;function $a(e){e.min=Ua(e.min),e.max=Ua(e.max)}function Wa(e,t,n){return"position"===e||"preserve-aspect"===e&&!lo(fa(t),fa(n),.2)}const Ha=ka({attachResizeListener:(e,t)=>mn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ya={current:void 0},qa=ka({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ya.current){const e=new Ha({});e.mount(window),e.setOptions({layoutScroll:!0}),Ya.current=e}return Ya.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Ka={pan:{Feature:class extends Cn{constructor(){super(...arguments),this.removePointerDownListener=an}onPointerDown(e){this.session=new eo(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Io(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Uo(e),onStart:Uo(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&cn.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=yn(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Cn{constructor(e){super(e),this.removeGroupControls=an,this.removeListeners=an,this.controls=new Vo(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||an}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:qa,MeasureLayout:Ko}},Ga=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Qa(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Vn(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Ga.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Ei(e)?parseFloat(e):e}return dt(i)?Qa(i,t,n+1):i}const Xa=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Za=e=>Xa.has(e),Ja=e=>e===ft||e===Et,es=(e,t)=>parseFloat(e.split(", ")[t]),ts=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return es(o[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?es(t[1],e):0}},ns=new Set(["x","y","z"]),rs=rt.filter((e=>!ns.has(e)));const is={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:ts(4,13),y:ts(5,14)};is.translateX=is.x,is.translateY=is.y;const os=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(Za);let o=[],a=!1;const s=[];if(i.forEach((i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],u=Di(c);const d=t[i];let h;if(en(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=Di(c);for(let n=t;n<e&&null!==d[n];n++)h?Vn(Di(d[n])===h,"All keyframes must be of the same type"):(h=Di(d[n]),Vn(h===u||Ja(u)&&Ja(h),"Keyframes must be of the same dimension as the current value"))}else h=Di(d);if(u!==h)if(Ja(u)&&Ja(h)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&h===Et&&(t[i]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===h||void 0===h?void 0:h.transform)&&(0===c||0===d)?0===c?l.set(h.transform(c)):t[i]=u.transform(d):(a||(o=function(e){const t=[];return rs.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=is[e](r,o)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=is[n](l,o)})),e})(t,e,s);return o.length&&o.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),ze&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function as(e,t,n,r){return(e=>Object.keys(e).some(Za))(t)?os(e,t,n,r):{target:t,transitionEnd:r}}const ss=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!dt(t))return;const n=Qa(t,i);n&&e.set(n)}));for(const o in r){const e=r[o];if(!dt(e))continue;const t=Qa(e,i);t&&(r[o]=t,n||(n={}),void 0===n[o]&&(n[o]=e))}return{target:r,transitionEnd:n}}(e,t,r);return as(e,t=i.target,n,r=i.transitionEnd)},ls={current:null},cs={current:!1};const us=new WeakMap,ds=Object.keys(qe),hs=ds.length,ps=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],fs=Be.length;class ms{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>cn.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=Ue(n),this.isVariantNode=$e(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&at(e)&&(e.set(s[d],!1),ji(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,us.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),cs.current||function(){if(cs.current=!0,ze)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ls.current=e.matches;e.addListener(t),t()}else ls.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ls.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){us.delete(this.current),this.projection&&this.projection.unmount(),un(this.notifyUpdate),un(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=it.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&cn.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),i()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,o,{children:a,...s}=e;for(let l=0;l<hs;l++){const e=ds[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=qe[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(o=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:o,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||o&&Ne(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<ps.length;n++){const t=ps[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(at(o))e.addValue(i,o),ji(r)&&r.add(i);else if(at(a))e.addValue(i,_i(o,{owner:e})),ji(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(o)}else{const t=e.getStaticValue(i);e.addValue(i,_i(void 0!==t?t:o,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<fs;t++){const n=Be[t],r=this.props[n];(Ie(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=_i(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Jt(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||at(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Ti),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class gs extends ms{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...o}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const i in e){const e=Fi(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(o,r||{},this);if(a&&(i&&(i=a(i)),o&&(o=a(o)),s&&(s=a(s))),n){!function(e,t,n){var r,i;const o=Object.keys(t).filter((t=>!e.hasValue(t))),a=o.length;if(a)for(let s=0;s<a;s++){const a=o[s],l=t[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),void 0!==c&&null!==c&&("string"===typeof c&&(Ei(c)||xi(c))?c=parseFloat(c):!Mi(c)&&_r.test(l)&&(c=yi(a,l)),e.addValue(a,_i(c,{owner:e})),void 0===n[a]&&(n[a]=c),null!==c&&e.setBaseTarget(a,c))}}(this,o,s);const e=ss(this,o,s,i);i=e.transitionEnd,o=e.target}return{transition:r,transitionEnd:i,...o}}}class vs extends gs{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(it.has(t)){const e=vi(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(ut(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return No(e,n)}build(e,t,n,r){_t(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Xt(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;at(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){Kt(e,t,n,r)}}class ys extends gs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(it.has(t)){const e=vi(t);return e&&e.default||0}return t=Gt.has(t)?t:Le(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Zt(e,t)}build(e,t,n,r){$t(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){Qt(e,t,0,r)}mount(e){this.isSVGTag=Ht(e.tagName),super.mount(e)}}const xs=(e,t)=>tt(e)?new ys(t,{enableHardwareAcceleration:!1}):new vs(t,{enableHardwareAcceleration:!0}),bs={...Zi,...Mn,...Ka,...{layout:{ProjectionNode:qa,MeasureLayout:Ko}}},ws=Je(((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...tt(e)?pn:fn,preloadedFeatures:n,useRender:qt(i),createVisualElement:r,Component:e}}(e,t,bs,xs)));var Ss=function(){return Ss=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ss.apply(this,arguments)};Object.create;function ks(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var js=n(324),Es=n.n(js),Cs="-ms-",Ps="-moz-",Ts="-webkit-",Rs="comm",As="rule",_s="decl",zs="@keyframes",Os=Math.abs,Ds=String.fromCharCode,Ls=Object.assign;function Ms(e){return e.trim()}function Ns(e,t){return(e=t.exec(e))?e[0]:e}function Is(e,t,n){return e.replace(t,n)}function Fs(e,t,n){return e.indexOf(t,n)}function Vs(e,t){return 0|e.charCodeAt(t)}function Bs(e,t,n){return e.slice(t,n)}function Us(e){return e.length}function $s(e){return e.length}function Ws(e,t){return t.push(e),e}function Hs(e,t){return e.filter((function(e){return!Ns(e,t)}))}var Ys=1,qs=1,Ks=0,Gs=0,Qs=0,Xs="";function Zs(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ys,column:qs,length:a,return:"",siblings:s}}function Js(e,t){return Ls(Zs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function el(e){for(;e.root;)e=Js(e.root,{children:[e]});Ws(e,e.siblings)}function tl(){return Qs=Gs>0?Vs(Xs,--Gs):0,qs--,10===Qs&&(qs=1,Ys--),Qs}function nl(){return Qs=Gs<Ks?Vs(Xs,Gs++):0,qs++,10===Qs&&(qs=1,Ys++),Qs}function rl(){return Vs(Xs,Gs)}function il(){return Gs}function ol(e,t){return Bs(Xs,e,t)}function al(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sl(e){return Ys=qs=1,Ks=Us(Xs=e),Gs=0,[]}function ll(e){return Xs="",e}function cl(e){return Ms(ol(Gs-1,hl(91===e?e+2:40===e?e+1:e)))}function ul(e){for(;(Qs=rl())&&Qs<33;)nl();return al(e)>2||al(Qs)>3?"":" "}function dl(e,t){for(;--t&&nl()&&!(Qs<48||Qs>102||Qs>57&&Qs<65||Qs>70&&Qs<97););return ol(e,il()+(t<6&&32==rl()&&32==nl()))}function hl(e){for(;nl();)switch(Qs){case e:return Gs;case 34:case 39:34!==e&&39!==e&&hl(Qs);break;case 40:41===e&&hl(e);break;case 92:nl()}return Gs}function pl(e,t){for(;nl()&&e+Qs!==57&&(e+Qs!==84||47!==rl()););return"/*"+ol(t,Gs-1)+"*"+Ds(47===e?e:nl())}function fl(e){for(;!al(rl());)nl();return ol(e,Gs)}function ml(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function gl(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case _s:return e.return=e.return||e.value;case Rs:return"";case zs:return e.return=e.value+"{"+ml(e.children,r)+"}";case As:if(!Us(e.value=e.props.join(",")))return""}return Us(n=ml(e.children,r))?e.return=e.value+"{"+n+"}":""}function vl(e,t,n){switch(function(e,t){return 45^Vs(e,0)?(((t<<2^Vs(e,0))<<2^Vs(e,1))<<2^Vs(e,2))<<2^Vs(e,3):0}(e,t)){case 5103:return Ts+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ts+e+e;case 4789:return Ps+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ts+e+Ps+e+Cs+e+e;case 5936:switch(Vs(e,t+11)){case 114:return Ts+e+Cs+Is(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ts+e+Cs+Is(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ts+e+Cs+Is(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ts+e+Cs+e+e;case 6165:return Ts+e+Cs+"flex-"+e+e;case 5187:return Ts+e+Is(e,/(\w+).+(:[^]+)/,Ts+"box-$1$2"+Cs+"flex-$1$2")+e;case 5443:return Ts+e+Cs+"flex-item-"+Is(e,/flex-|-self/g,"")+(Ns(e,/flex-|baseline/)?"":Cs+"grid-row-"+Is(e,/flex-|-self/g,""))+e;case 4675:return Ts+e+Cs+"flex-line-pack"+Is(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ts+e+Cs+Is(e,"shrink","negative")+e;case 5292:return Ts+e+Cs+Is(e,"basis","preferred-size")+e;case 6060:return Ts+"box-"+Is(e,"-grow","")+Ts+e+Cs+Is(e,"grow","positive")+e;case 4554:return Ts+Is(e,/([^-])(transform)/g,"$1"+Ts+"$2")+e;case 6187:return Is(Is(Is(e,/(zoom-|grab)/,Ts+"$1"),/(image-set)/,Ts+"$1"),e,"")+e;case 5495:case 3959:return Is(e,/(image-set\([^]*)/,Ts+"$1$`$1");case 4968:return Is(Is(e,/(.+:)(flex-)?(.*)/,Ts+"box-pack:$3"+Cs+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ts+e+e;case 4200:if(!Ns(e,/flex-|baseline/))return Cs+"grid-column-align"+Bs(e,t)+e;break;case 2592:case 3360:return Cs+Is(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Ns(e.props,/grid-\w+-end/)}))?~Fs(e+(n=n[t].value),"span",0)?e:Cs+Is(e,"-start","")+e+Cs+"grid-row-span:"+(~Fs(n,"span",0)?Ns(n,/\d+/):+Ns(n,/\d+/)-+Ns(e,/\d+/))+";":Cs+Is(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Ns(e.props,/grid-\w+-start/)}))?e:Cs+Is(Is(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Is(e,/(.+)-inline(.+)/,Ts+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Us(e)-1-t>6)switch(Vs(e,t+1)){case 109:if(45!==Vs(e,t+4))break;case 102:return Is(e,/(.+:)(.+)-([^]+)/,"$1"+Ts+"$2-$3$1"+Ps+(108==Vs(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Fs(e,"stretch",0)?vl(Is(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Is(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,s){return Cs+n+":"+r+s+(i?Cs+n+"-span:"+(o?a:+a-+r)+s:"")+e}));case 4949:if(121===Vs(e,t+6))return Is(e,":",":"+Ts)+e;break;case 6444:switch(Vs(e,45===Vs(e,14)?18:11)){case 120:return Is(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ts+(45===Vs(e,14)?"inline-":"")+"box$3$1"+Ts+"$2$3$1"+Cs+"$2box$3")+e;case 100:return Is(e,":",":"+Cs)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Is(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _s:return void(e.return=vl(e.value,e.length,n));case zs:return ml([Js(e,{value:Is(e.value,"@","@"+Ts)})],r);case As:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Ns(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":el(Js(e,{props:[Is(t,/:(read-\w+)/,":-moz-$1")]})),el(Js(e,{props:[t]})),Ls(e,{props:Hs(n,r)});break;case"::placeholder":el(Js(e,{props:[Is(t,/:(plac\w+)/,":"+Ts+"input-$1")]})),el(Js(e,{props:[Is(t,/:(plac\w+)/,":-moz-$1")]})),el(Js(e,{props:[Is(t,/:(plac\w+)/,Cs+"input-$1")]})),el(Js(e,{props:[t]})),Ls(e,{props:Hs(n,r)})}return""}))}}function xl(e){return ll(bl("",null,null,null,[""],e=sl(e),0,[0],e))}function bl(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,h=0,p=0,f=0,m=1,g=1,v=1,y=0,x="",b=i,w=o,S=r,k=x;g;)switch(f=y,y=nl()){case 40:if(108!=f&&58==Vs(k,d-1)){-1!=Fs(k+=Is(cl(y),"&","&\f"),"&\f",Os(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=cl(y);break;case 9:case 10:case 13:case 32:k+=ul(f);break;case 92:k+=dl(il()-1,7);continue;case 47:switch(rl()){case 42:case 47:Ws(Sl(pl(nl(),il()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=Us(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=Is(k,/\f/g,"")),p>0&&Us(k)-d&&Ws(p>32?kl(k+";",r,n,d-1,l):kl(Is(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Ws(S=wl(k,t,n,c,u,i,s,x,b=[],w=[],d,o),o),123===y)if(0===u)bl(k,t,S,S,b,o,d,s,w);else switch(99===h&&110===Vs(k,3)?100:h){case 100:case 108:case 109:case 115:bl(e,S,S,r&&Ws(wl(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:bl(k,S,S,S,[""],w,0,s,w)}}c=u=p=0,m=v=1,x=k="",d=a;break;case 58:d=1+Us(k),p=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==tl())continue;switch(k+=Ds(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Us(k)-1)*v,v=1;break;case 64:45===rl()&&(k+=cl(nl())),h=rl(),u=d=Us(x=k+=fl(il())),y++;break;case 45:45===f&&2==Us(k)&&(m=0)}}return o}function wl(e,t,n,r,i,o,a,s,l,c,u,d){for(var h=i-1,p=0===i?o:[""],f=$s(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=Bs(e,h+1,h=Os(g=a[m])),b=e;y<f;++y)(b=Ms(g>0?p[y]+" "+x:Is(x,/&\f/g,p[y])))&&(l[v++]=b);return Zs(e,t,n,0===i?As:s,l,c,u,d)}function Sl(e,t,n,r){return Zs(e,t,n,Rs,Ds(Qs),Bs(e,2,-2),0,r)}function kl(e,t,n,r,i){return Zs(e,t,n,_s,Bs(e,0,r),Bs(e,r+1,-1),r,i)}var jl={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},El="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Cl="active",Pl="data-styled-version",Tl="6.1.17",Rl="/*!sc*/\n",Al="undefined"!=typeof window&&"HTMLElement"in window,_l=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),zl=(new Set,Object.freeze([])),Ol=Object.freeze({});function Dl(e,t,n){return void 0===n&&(n=Ol),e.theme!==n.theme&&e.theme||t||n.theme}var Ll=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ml=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nl=/(^-|-$)/g;function Il(e){return e.replace(Ml,"-").replace(Nl,"")}var Fl=/(a)(d)/gi,Vl=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vl(t%52)+n;return(Vl(t%52)+n).replace(Fl,"$1-$2")}var Ul,$l=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wl=function(e){return $l(5381,e)};function Hl(e){return Bl(Wl(e)>>>0)}function Yl(e){return e.displayName||e.name||"Component"}function ql(e){return"string"==typeof e&&!0}var Kl="function"==typeof Symbol&&Symbol.for,Gl=Kl?Symbol.for("react.memo"):60115,Ql=Kl?Symbol.for("react.forward_ref"):60112,Xl={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ec=((Ul={})[Ql]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ul[Gl]=Jl,Ul);function tc(e){return("type"in(t=e)&&t.type.$$typeof)===Gl?Jl:"$$typeof"in e?ec[e.$$typeof]:Xl;var t}var nc=Object.defineProperty,rc=Object.getOwnPropertyNames,ic=Object.getOwnPropertySymbols,oc=Object.getOwnPropertyDescriptor,ac=Object.getPrototypeOf,sc=Object.prototype;function lc(e,t,n){if("string"!=typeof t){if(sc){var r=ac(t);r&&r!==sc&&lc(e,r,n)}var i=rc(t);ic&&(i=i.concat(ic(t)));for(var o=tc(e),a=tc(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Zl||n&&n[l]||a&&l in a||o&&l in o)){var c=oc(t,l);try{nc(e,l,c)}catch(e){}}}}return e}function cc(e){return"function"==typeof e}function uc(e){return"object"==typeof e&&"styledComponentId"in e}function dc(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hc(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function pc(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fc(e,t,n){if(void 0===n&&(n=!1),!n&&!pc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fc(e[r],t[r]);else if(pc(t))for(var r in t)e[r]=fc(e[r],t[r]);return e}function mc(e,t){Object.defineProperty(e,"toString",{value:t})}function gc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var vc=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw gc(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Rl);return t},e}(),yc=new Map,xc=new Map,bc=1,wc=function(e){if(yc.has(e))return yc.get(e);for(;xc.has(bc);)bc++;var t=bc++;return yc.set(e,t),xc.set(t,e),t},Sc=function(e,t){bc=t+1,yc.set(e,t),xc.set(t,e)},kc="style[".concat(El,"][").concat(Pl,'="').concat(Tl,'"]'),jc=new RegExp("^".concat(El,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ec=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Cc=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Rl),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(jc);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Sc(u,c),Ec(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Pc=function(e){for(var t=document.querySelectorAll(kc),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(El)!==Cl&&(Cc(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Tc(){return n.nc}var Rc=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(El,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(El,Cl),r.setAttribute(Pl,Tl);var a=Tc();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Ac=function(){function e(e){this.element=Rc(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw gc(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),_c=function(){function e(e){this.element=Rc(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),zc=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Oc=Al,Dc={isServer:!Al,useCSSOMInjection:!_l},Lc=function(){function e(e,t,n){void 0===e&&(e=Ol),void 0===t&&(t={});var r=this;this.options=Ss(Ss({},Dc),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Al&&Oc&&(Oc=!1,Pc(this)),mc(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return xc.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(El,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Rl)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return wc(e)},e.prototype.rehydrate=function(){!this.server&&Al&&Pc(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ss(Ss({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new zc(n):t?new Ac(n):new _c(n)}(this.options),new vc(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(wc(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(wc(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(wc(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Mc=/&/g,Nc=/^\s*\/\/.*$/gm;function Ic(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ic(e.children,t)),e}))}function Fc(e){var t,n,r,i=void 0===e?Ol:e,o=i.options,a=void 0===o?Ol:o,s=i.plugins,l=void 0===s?zl:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===As&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Mc,n).replace(r,c))})),a.prefix&&u.push(yl),u.push(gl);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Nc,""),c=xl(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Ic(c,a.namespace));var d,h=[];return ml(c,function(e){var t=$s(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),h};return d.hash=l.length?l.reduce((function(e,t){return t.name||gc(15),$l(e,t.name)}),5381).toString():"",d}var Vc=new Lc,Bc=Fc(),Uc=t.createContext({shouldForwardProp:void 0,styleSheet:Vc,stylis:Bc}),$c=(Uc.Consumer,t.createContext(void 0));function Wc(){return(0,t.useContext)(Uc)}function Hc(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Wc().styleSheet,a=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)((function(){return Fc({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Es()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return t.createElement(Uc.Provider,{value:l},t.createElement($c.Provider,{value:s},e.children))}var Yc=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Bc);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,mc(this,(function(){throw gc(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Bc),this.name+e.hash},e}(),qc=function(e){return e>="A"&&e<="Z"};function Kc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;qc(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gc=function(e){return null==e||!1===e||""===e},Qc=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Gc(o)&&(Array.isArray(o)&&o.isCss||cc(o)?r.push("".concat(Kc(i),":"),o,";"):pc(o)?r.push.apply(r,ks(ks(["".concat(i," {")],Qc(o),!1),["}"],!1)):r.push("".concat(Kc(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in jl||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xc(e,t,n,r){return Gc(e)?[]:uc(e)?[".".concat(e.styledComponentId)]:cc(e)?!cc(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Xc(e(t),t,n,r):e instanceof Yc?n?(e.inject(n,r),[e.getName(r)]):[e]:pc(e)?Qc(e):Array.isArray(e)?Array.prototype.concat.apply(zl,e.map((function(e){return Xc(e,t,n,r)}))):[e.toString()];var i}function Zc(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cc(n)&&!uc(n))return!1}return!0}var Jc=Wl(Tl),eu=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Zc(e),this.componentId=t,this.baseHash=$l(Jc,t),this.baseStyle=n,Lc.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=dc(r,this.staticRulesId);else{var i=hc(Xc(this.rules,e,t,n)),o=Bl($l(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=dc(r,o),this.staticRulesId=o}else{for(var s=$l(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=hc(Xc(u,e,t,n));s=$l(s,d+c),l+=d}}if(l){var h=Bl(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=dc(r,h)}}return r},e}(),tu=t.createContext(void 0);tu.Consumer;var nu={};new Set;function ru(e,n,r){var i=uc(e),o=e,a=!ql(e),s=n.attrs,l=void 0===s?zl:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Il(e);nu[n]=(nu[n]||0)+1;var r="".concat(n,"-").concat(Hl(Tl+n+nu[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,h=void 0===d?function(e){return ql(e)?"styled.".concat(e):"Styled(".concat(Yl(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Il(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new eu(r,p,i?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(tu),d=Wc(),h=e.shouldForwardProp||d.shouldForwardProp,p=Dl(n,u,a)||Ol,f=function(e,t,n){for(var r,i=Ss(Ss({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=cc(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?dc(i[s],a[s]):"style"===s?Ss(Ss({},i[s]),a[s]):a[s]}return t.className&&(i.className=dc(i.className,t.className)),i}(i,n,p),m=f.as||c,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===p||("forwardedAs"===v?g.as=f.forwardedAs:h&&!h(v,m)||(g[v]=f[v]));var y=function(e,t){var n=Wc();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),x=dc(s,l);return y&&(x+=" "+y),f.className&&(x+=" "+f.className),g[ql(m)&&!Ll.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}x.displayName=h;var b=t.forwardRef(x);return b.attrs=f,b.componentStyle=y,b.displayName=h,b.shouldForwardProp=m,b.foldedComponentIds=i?dc(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=p,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)fc(e,i[r],!0);return e}({},o.defaultProps,e):e}}),mc(b,(function(){return".".concat(b.styledComponentId)})),a&&lc(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function iu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ou=function(e){return Object.assign(e,{isCss:!0})};function au(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cc(e)||pc(e))return ou(Xc(iu(zl,ks([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Xc(r):ou(Xc(iu(r,t)))}function su(e,t,n){if(void 0===n&&(n=Ol),!t)throw gc(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,au.apply(void 0,ks([r],i,!1)))};return r.attrs=function(r){return su(e,t,Ss(Ss({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return su(e,t,Ss(Ss({},n),r))},r}var lu=function(e){return su(ru,e)},cu=lu;Ll.forEach((function(e){cu[e]=lu(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Zc(e),Lc.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(hc(Xc(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Lc.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Tc(),r=hc([n&&'nonce="'.concat(n,'"'),"".concat(El,'="true"'),"".concat(Pl,'="').concat(Tl,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw gc(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw gc(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[El]="",n[Pl]=Tl,n.dangerouslySetInnerHTML={__html:r},n),o=Tc();return o&&(i.nonce=o),[t.createElement("style",Ss({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Lc({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw gc(2);return t.createElement(Hc,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw gc(3)}})(),"__sc-".concat(El,"__");var uu=n(579);const du=cu.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>{let{scrolled:t}=e;return t?"0rem 2rem":"0.8rem 2rem"}};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  background-color: ${e=>{let{scrolled:t}=e;return t?"rgba(0, 0, 0, 0.7)":"transparent"}};
  backdrop-filter: ${e=>{let{scrolled:t}=e;return t?"blur(8px)":"none"}};
  -webkit-backdrop-filter: ${e=>{let{scrolled:t}=e;return t?"blur(8px)":"none"}};
  box-shadow: ${e=>{let{scrolled:t}=e;return t?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"}};
`,hu=cu(Ce)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-light);
  img {
    height: ${e=>{let{scrolled:t}=e;return t?"60px":"120px"}};
    margin-right: ${e=>{let{scrolled:t}=e;return t?"12px":"24px"}};
    transition: height 0.3s ease, margin-right 0.3s ease;
  }
`,pu=cu.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`,fu=cu(Ce)`
  margin: 0 1.5rem;
  color: var(--text-light);
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0px;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`,mu=cu(Ce)`
  margin-left: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--secondary-color);
  color: var(--text-light);
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`,gu=cu.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    color: var(--text-light);
    font-size: 1.5rem;
  }
`,vu=cu.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
  border-radius: 5px;
  
  &:nth-child(1) {
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(-45deg) translate(-5px, 6px)":"none"}};
  }
  
  &:nth-child(2) {
    opacity: ${e=>{let{isOpen:t}=e;return t?"0":"1"}};
  }
  
  &:nth-child(3) {
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(45deg) translate(-5px, -6px)":"none"}};
  }
`,yu=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,uu.jsxs)(du,{scrolled:r,children:[(0,uu.jsx)(hu,{to:"/",scrolled:r,children:(0,uu.jsx)("img",{src:"/images/airpowerlogo2.png",alt:"Air-Power USA Logo"})}),(0,uu.jsxs)(gu,{onClick:()=>{n(!e)},children:[(0,uu.jsx)(vu,{isOpen:e}),(0,uu.jsx)(vu,{isOpen:e}),(0,uu.jsx)(vu,{isOpen:e})]}),(0,uu.jsxs)(pu,{isOpen:e,children:[(0,uu.jsx)(fu,{to:"/",children:"Home"}),(0,uu.jsx)(fu,{to:"/about",children:"About"}),(0,uu.jsx)(fu,{to:"/how-it-works",children:"How It Works"}),(0,uu.jsx)(fu,{to:"/applications",children:"Applications"}),(0,uu.jsx)(fu,{to:"/products",children:"Products"}),(0,uu.jsx)(mu,{to:"/investors",children:"Investors"})]})]})};var xu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=t.createContext&&t.createContext(xu),wu=function(){return wu=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},wu.apply(this,arguments)},Su=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function ku(e){return e&&e.map((function(e,n){return t.createElement(e.tag,wu({key:n},e.attr),ku(e.child))}))}function ju(e){return function(n){return t.createElement(Eu,wu({attr:wu({},e.attr)},n),ku(e.child))}}function Eu(e){var n=function(n){var r,i=e.attr,o=e.size,a=e.title,s=Su(e,["attr","size","title"]),l=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",wu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:wu(wu({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==bu?t.createElement(bu.Consumer,null,(function(e){return n(e)})):n(xu)}function Cu(e){return ju({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Pu(e){return ju({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function Tu(e){return ju({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function Ru(e){return ju({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Au(e){return ju({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}const _u=cu.footer`
  background-color: #0a0a0a;
  color: var(--text-light);
  padding: 4rem 0 2rem;
`,zu=cu.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Ou=cu.div`
  display: flex;
  flex-direction: column;
`,Du=cu.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  img {
    height: 150px;
    margin: 0 auto;
  }
`,Lu=cu.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 30px;
      height: 2px;
      background-color: var(--secondary-color);
    }
  }
`,Mu=cu(Ce)`
  margin-bottom: 0.8rem;
  transition: var(--transition);
  &:hover {
    color: var(--secondary-color);
    transform: translateX(5px);
  }
`,Nu=cu.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    margin-right: 10px;
    color: var(--secondary-color);
  }
`,Iu=cu.div`
  display: flex;
  margin-top: 1rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    margin-right: 1rem;
    transition: var(--transition);
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
    }
    svg {
      color: white;
      font-size: 1.2rem;
    }
  }
`,Fu=cu.div`
  height: 1px;
  background-color: #333;
  margin: 2rem auto;
  max-width: 1200px;
`,Vu=cu.div`
  text-align: center;
  color: #999;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  font-size: 0.9rem;
  p {
    margin-bottom: 0.5rem;
  }
`,Bu=cu.div`
  font-size: 0.8rem;
  color: #777;
  max-width: 800px;
  margin: 1rem auto 0;
  text-align: center;
`,Uu=()=>(0,uu.jsxs)(_u,{children:[(0,uu.jsxs)(zu,{children:[(0,uu.jsxs)(Ou,{children:[(0,uu.jsx)(Du,{children:(0,uu.jsx)("img",{src:"/images/airpowerlogo2.png",alt:"Air-Power USA Logo"})}),(0,uu.jsx)("p",{children:"Clean Power from Thin Air."}),(0,uu.jsx)("p",{children:"Zero-emission energy systems powered by compressed air and integrated storage."}),(0,uu.jsxs)(Iu,{children:[(0,uu.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,uu.jsx)(Cu,{})}),(0,uu.jsx)("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:(0,uu.jsx)(Pu,{})})]})]}),(0,uu.jsx)(Ou,{children:(0,uu.jsxs)(Lu,{children:[(0,uu.jsx)("h4",{children:"Quick Links"}),(0,uu.jsx)(Mu,{to:"/",children:"Home"}),(0,uu.jsx)(Mu,{to:"/about",children:"About Us"}),(0,uu.jsx)(Mu,{to:"/how-it-works",children:"How It Works"}),(0,uu.jsx)(Mu,{to:"/applications",children:"Applications"}),(0,uu.jsx)(Mu,{to:"/products",children:"Products"})]})}),(0,uu.jsx)(Ou,{children:(0,uu.jsxs)(Lu,{children:[(0,uu.jsx)("h4",{children:"Contact Us"}),(0,uu.jsxs)(Nu,{children:[(0,uu.jsx)(Tu,{}),(0,uu.jsx)("a",{href:"mailto:info@airpowerusa.com",children:"info@airpowerusa.com"})]}),(0,uu.jsxs)(Nu,{children:[(0,uu.jsx)(Au,{}),(0,uu.jsx)("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})]})]})}),(0,uu.jsx)(Ou,{children:(0,uu.jsxs)(Lu,{children:[(0,uu.jsx)("h4",{children:"Investors"}),(0,uu.jsx)(Mu,{to:"/investors",children:"Investment Opportunities"}),(0,uu.jsx)(Mu,{to:"/investors#deck",children:"Request Investor Deck"}),(0,uu.jsx)(Mu,{to:"/contact",children:"Contact our Team"})]})})]}),(0,uu.jsx)(Fu,{}),(0,uu.jsx)(Vu,{children:(0,uu.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Air-Power USA. All rights reserved."]})}),(0,uu.jsx)(Bu,{children:(0,uu.jsx)("p",{children:"This website contains forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995. All statements other than statements of historical facts are forward-looking statements, which are subject to risks and uncertainties."})})]});function $u(e){return ju({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"polyline",attr:{points:"19 12 12 19 5 12"}}]})(e)}const Wu=cu.span`
  /* Example: Add an underline */
  text-decoration: underline;
  text-decoration-color: var(--accent-color); /* Or another suitable color */
  text-decoration-thickness: 2px; /* Adjust thickness as needed */
  text-underline-offset: 4px; /* Adjust offset as needed */

  /* Example: Add a subtle gradient (uncomment if preferred) */
  /* background: linear-gradient(to right, var(--accent-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`,Hu=cu.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0; /* Behind overlay, above canvas */
`,Yu=cu.div`
  height: 100vh;
  width: 100%;
  /* TODO: Replace with a high-res image or video background */
  /* Example image: background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/your-hero-image.jpg'); */
  /* Example video: Add a <video> element below or use a library */
  background-color: #111; /* Fallback color */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  /* Dark overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Adjusted overlay gradient */
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    z-index: 1;
  }

  /* Radial glow effect (REMOVING THIS BLOCK as it conflicts with the dark overlay) */
  /*
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    padding-bottom: 150%;
    background: radial-gradient(ellipse at center, rgba(74, 144, 226, 0.15) 0%, rgba(74, 144, 226, 0) 70%);
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    opacity: 0.8;
  }
  */
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
    z-index: 1;
  }
`,qu=cu.div`
  text-align: center;
  max-width: 800px;
  z-index: 2;
  position: relative;
  padding: 0 2rem;
`,Ku=cu(ws.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Gu=cu(ws.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #eee;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Qu=cu(ws.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Xu=cu(Ce)`
  padding: 0.6rem 1.5rem; /* Adjusted padding */
  background-color: var(--secondary-color);
  color: white;
  border-radius: 6px; /* Reduced border radius */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  display: inline-block;
  border: none; /* Flat design */
  
  &:hover {
    background-color: var(--accent-color);
    transform: scale(1.03); /* Scale up slightly */
    filter: brightness(1.1); /* Increase brightness */
    /* Removed translateY and box-shadow for cleaner hover */
  }
`,Zu=cu(Ce)`
  padding: 0.6rem 1.5rem; /* Adjusted padding */
  background-color: transparent;
  color: white;
  border: 1px solid var(--secondary-color); /* Adjusted border thickness */
  border-radius: 6px; /* Reduced border radius */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: rgba(74, 144, 226, 0.1); /* Subtle background */
    border-color: var(--accent-color);
    transform: scale(1.03); /* Scale up slightly */
    /* Removed translateY and box-shadow */
  }
`,Ju=cu(ws.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  color: #ccc;
`,ed=cu.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Behind video */
  pointer-events: none;
  opacity: 0.3;
`,td=()=>{const e=(0,t.useRef)(null),n=(0,t.useRef)(null);(0,t.useEffect)((()=>{const t=e.current;if(!t)return;const r=t.getContext("2d");let i=t.width=window.innerWidth,o=t.height=window.innerHeight,a=[];const s=400;class l{constructor(){this.x=Math.random()*i,this.y=Math.random()*o,this.angle=.1*(Math.random()-.5),this.history=[],this.color=`rgba(74, 144, 226, ${.3*Math.random()+.1})`,this.lineWidth=1*Math.random()+.2,this.speed=.8+.2*(Math.random()-.5)}update(){this.angle+=.005*(Math.random()-.5),this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.history.push({x:this.x,y:this.y}),this.history.length>s&&this.history.shift(),this.x<-200&&(this.x=i+200),this.x>i+200&&(this.x=-200),this.y<-200&&(this.y=o+200),this.y>o+200&&(this.y=-200)}draw(e){if(!(this.history.length<2)){e.beginPath(),e.moveTo(this.history[0].x,this.history[0].y);for(let t=1;t<this.history.length;t++)e.lineTo(this.history[t].x,this.history[t].y);e.strokeStyle=this.color,e.lineWidth=this.lineWidth,e.stroke()}}}const c=()=>{a=[];for(let e=0;e<10;e++)a.push(new l)},u=()=>{r.clearRect(0,0,i,o),a.forEach((e=>{e.update(),e.draw(r)})),n.current=requestAnimationFrame(u)},d=()=>{i=t.width=window.innerWidth,o=t.height=window.innerHeight,c()};return c(),u(),window.addEventListener("resize",d),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",d)}}),[]);return(0,uu.jsxs)(Yu,{children:[(0,uu.jsx)(ed,{ref:e}),(0,uu.jsxs)(Hu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[(0,uu.jsx)("source",{src:"/videos/military-truck-hero_1.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,uu.jsxs)(qu,{children:[(0,uu.jsxs)(Ku,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:["Clean Power from ",(0,uu.jsx)(Wu,{children:"Thin Air."})]}),(0,uu.jsx)(Gu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:"Deployable zero-emission energy, powered by compressed air and engineered for anywhere the grid can't reach."}),(0,uu.jsxs)(Qu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[(0,uu.jsx)(Xu,{to:"/investors",children:"Request Investor Deck"}),(0,uu.jsx)(Zu,{to:"/contact",children:"Join the Energy Revolution"})]})]}),(0,uu.jsx)(Ju,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.5},onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:(0,uu.jsx)(ws.div,{animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:(0,uu.jsx)($u,{size:24})})})]})};var nd=Object.defineProperty,rd=(e,t,n)=>((e,t,n)=>t in e?nd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),id=new Map,od=new WeakMap,ad=0,sd=void 0;function ld(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(od.has(e)||(ad+=1,od.set(e,ad.toString())),od.get(e)):"0"}(e.root):e[t]}`)).toString()}function cd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:sd;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=ld(e);let n=id.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},id.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),id.delete(i))}}t.Component;function ud(){let{threshold:e,delay:n,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[h,p]=t.useState(null),f=t.useRef(u),[m,g]=t.useState({inView:!!l,entry:void 0});f.current=u,t.useEffect((()=>{if(s||!h)return;let t;return t=cd(h,((e,n)=>{g({inView:e,entry:n}),f.current&&f.current(e,n),n.isIntersecting&&a&&t&&(t(),t=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:n},c),()=>{t&&t()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,r,c,n]);const v=null==(d=m.entry)?void 0:d.target,y=t.useRef(void 0);h||!v||a||s||y.current===v||(y.current=v,g({inView:!!l,entry:void 0}));const x=[p,m.inView,m.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}const dd=cu.section`
  padding: 6rem 0;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('/images/pattern-bg.png') repeat;
    opacity: 0.05;
    z-index: 0;
  }
`,hd=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,pd=cu.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,fd=cu.div`
  @media (max-width: 992px) {
    order: 2;
  }
`,md=cu.div`
  @media (max-width: 992px) {
    order: 1;
  }
`,gd=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,vd=cu(ws.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #eee;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,yd=cu(ws.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`,xd=cu(ws.div)`
  display: flex;
  align-items: flex-start;
  
  svg {
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin-right: 1rem;
    min-width: 24px;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`,bd=cu(ws.img)`
  width: 100%;
  transform: scale(1.1);
  transform-origin: center;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,wd=()=>{const[e,t]=ud({threshold:.2,triggerOnce:!0}),n={hidden:{},visible:{transition:{staggerChildren:.2}}},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return(0,uu.jsx)(dd,{children:(0,uu.jsx)(hd,{ref:e,children:(0,uu.jsxs)(pd,{children:[(0,uu.jsx)(fd,{children:(0,uu.jsxs)(ws.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",children:[(0,uu.jsx)(gd,{variants:r,children:"Revolutionary Clean Energy Technology"}),(0,uu.jsx)(vd,{variants:r,children:"Air-Power USA is pioneering a patented compressed air engine + generator system that delivers zero-emission energy with built-in battery storage (BESS)."}),(0,uu.jsx)(vd,{variants:r,children:"Our core innovation uses ambient air as a never-ending energy source, producing clean power and cold air as byproduct."}),(0,uu.jsxs)(yd,{variants:n,children:[(0,uu.jsxs)(xd,{variants:r,children:[(0,uu.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,uu.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,uu.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Zero Emissions"}),(0,uu.jsx)("p",{children:"No combustion. No pollution. Just clean air in, clean power out."})]})]}),(0,uu.jsxs)(xd,{variants:r,children:[(0,uu.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,uu.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Reliable Energy"}),(0,uu.jsx)("p",{children:"Consistent power delivery \u2014 no sun or fuel required."})]})]}),(0,uu.jsxs)(xd,{variants:r,children:[(0,uu.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,uu.jsx)("path",{d:"M23 6l-9.5 9.5-5-5L1 18"}),(0,uu.jsx)("path",{d:"M17 6h6v6"})]}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Cost Effective"}),(0,uu.jsx)("p",{children:"Lower lifetime costs vs. diesel, solar, or hydrogen systems."})]})]}),(0,uu.jsxs)(xd,{variants:r,children:[(0,uu.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,uu.jsx)("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),(0,uu.jsx)("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Cold Air Byproduct"}),(0,uu.jsx)("p",{children:"Exhaust air at -20\xb0C to -40\xb0C enables direct-use cooling."})]})]})]})]})}),(0,uu.jsx)(md,{children:(0,uu.jsx)(ws.div,{initial:{opacity:0,scale:.9},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.8},children:(0,uu.jsx)(bd,{src:"/images/cae-mock.png",alt:"Compressed Air Energy System Mockup"})})})]})})})},Sd=cu.section`
  padding: 6rem 0;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
`,kd=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,jd=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,Ed=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Cd=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Pd=(cu.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,cu.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--secondary-color);
    transition: var(--transition);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 100%;
      opacity: 0.1;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-light);
    position: relative;
    z-index: 1;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
  
  svg {
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`,cu.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`,cu(ws.div)`
  margin-top: 5rem;
  width: 100%;
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1.2rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid #333;
      
      &:first-child {
        font-weight: 600;
      }
    }
    
    th {
      background-color: rgba(0, 0, 0, 0.3);
      font-weight: 700;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }
    
    td {
      font-size: 0.95rem;
      color: #ddd;
      
      &.positive {
        color: #4caf50;
      }
      
      &.negative {
        color: #f44336;
      }
    }
    
    tr:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`),Td=cu.div`
  max-width: 900px;
  margin: 0 auto 3rem;
  display: flex;
  justify-content: center;
`,Rd=cu.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
`,Ad=()=>{const[e,t]=ud({threshold:.2,triggerOnce:!0});return(0,uu.jsx)(Sd,{children:(0,uu.jsxs)(kd,{ref:e,children:[(0,uu.jsxs)(jd,{children:[(0,uu.jsx)(Ed,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"Our Revolutionary Solution"}),(0,uu.jsx)(Cd,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Air-Power USA's patented compressed air technology delivers clean, reliable, and efficient energy solutions with multiple benefits."})]}),(0,uu.jsx)(Td,{children:(0,uu.jsx)(Rd,{src:"/images/cae-flowchart.png",alt:"Compressed Air Energy System Flowchart"})}),(0,uu.jsx)(Pd,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6,delay:.4},children:(0,uu.jsxs)("table",{children:[(0,uu.jsx)("thead",{children:(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("th",{children:"Feature"}),(0,uu.jsx)("th",{children:"Air-Power USA"}),(0,uu.jsx)("th",{children:"Diesel Generator"}),(0,uu.jsx)("th",{children:"Solar/Wind"})]})}),(0,uu.jsxs)("tbody",{children:[(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:"Fuel Cost"}),(0,uu.jsx)("td",{className:"positive",children:"Free (Air)"}),(0,uu.jsx)("td",{className:"negative",children:"High"}),(0,uu.jsx)("td",{className:"positive",children:"Free"})]}),(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:"Emissions"}),(0,uu.jsx)("td",{className:"positive",children:"Zero"}),(0,uu.jsx)("td",{className:"negative",children:"High"}),(0,uu.jsx)("td",{className:"positive",children:"Zero"})]}),(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:"Reliability"}),(0,uu.jsx)("td",{className:"positive",children:"High"}),(0,uu.jsx)("td",{className:"positive",children:"High"}),(0,uu.jsx)("td",{className:"negative",children:"Intermittent"})]}),(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:"Storage Built-in"}),(0,uu.jsx)("td",{className:"positive",children:"Yes (BESS)"}),(0,uu.jsx)("td",{className:"negative",children:"No"}),(0,uu.jsx)("td",{className:"negative",children:"Add-on Needed"})]}),(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:"Cooling Output"}),(0,uu.jsx)("td",{className:"positive",children:"Yes"}),(0,uu.jsx)("td",{className:"negative",children:"No"}),(0,uu.jsx)("td",{className:"negative",children:"No"})]})]})]})})]})})},_d=cu.section`
  padding: 6rem 0;
  background-color: #080808;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/tech-pattern.png');
    opacity: 0.02;
    z-index: 0;
  }
`,zd=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,Od=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,Dd=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ld=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Md=cu.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
`,Nd=cu.div`
  position: relative;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 40px;
    width: 4px;
    height: 100%;
    background-color: rgba(74, 144, 226, 0.3);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`,Id=cu(ws.div)`
  display: flex;
  margin-bottom: 6rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:nth-child(odd) {
    .step-content {
      flex-direction: row-reverse;
      text-align: right;
      
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: left;
      }
    }
    
    .step-image {
      margin-left: 2rem;
      margin-right: 0;
      
      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1.5rem;
      }
    }
    
    .step-details {
      align-items: flex-end;
      
      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }
  }
`,Fd=cu.div`
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  margin-left: 40px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.4);
  
  @media (max-width: 768px) {
    margin: 0 0 0 30px;
  }
`,Vd=cu.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  padding-left: 80px;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
`,Bd=cu.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ud=cu.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
`,$d=cu.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
  max-width: 500px;
`,Wd=cu.div`
  flex: 1;
  margin-right: 2rem;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    filter: brightness(1.2) contrast(1.1);
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1.5rem;
    
    img {
      max-width: 100%;
    }
  }
`,Hd=cu.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-left: 3px solid var(--secondary-color);
  padding: 1.5rem;
  margin-top: 1rem;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`,Yd=cu.div`
  margin-top: 4rem;
  text-align: center;
`,qd=cu(ws.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,Kd=()=>{const[e,t]=ud({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};return(0,uu.jsx)(_d,{children:(0,uu.jsxs)(zd,{ref:e,children:[(0,uu.jsxs)(Od,{children:[(0,uu.jsx)(Dd,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"How Air-Power Technology Works"}),(0,uu.jsx)(Ld,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Our patented closed-loop system converts compressed air into clean energy through an innovative process."})]}),(0,uu.jsx)(Md,{children:(0,uu.jsx)(Nd,{children:(0,uu.jsxs)(ws.div,{variants:{hidden:{},visible:{transition:{staggerChildren:.3}}},initial:"hidden",animate:t?"visible":"hidden",children:[(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"1"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/compressed-air-tanks.png",alt:"Compressed Air Tanks"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"Compressed Air Storage"}),(0,uu.jsx)($d,{children:"Pressurized air is stored in specialized tanks that serve as the fuel supply for the system. These tanks efficiently fill in 7-10 minutes and maintain pressure for extended periods."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"Key Insight"}),(0,uu.jsx)("p",{children:"Stores pressurized air used to power the Compressed Air Engine, creating a clean and unlimited energy source."})]})]})]})]}),(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"2"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/compressed-air-engine.png",alt:"Compressed Air Engine"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"Compressed Air Engine"}),(0,uu.jsx)($d,{children:"Our proprietary engine converts the stored compressed air into mechanical power. This mechanical energy is used to drive equipment directly or to generate electricity via a connected generator."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"How It's Different"}),(0,uu.jsx)("p",{children:"Our patented design maximizes energy extraction from compressed air with significantly higher efficiency than conventional pneumatic motors."})]})]})]})]}),(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"3"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/generator-system.png",alt:"Generator System"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"Electricity Generation"}),(0,uu.jsx)($d,{children:"The generator converts the mechanical energy from the compressed air engine into electrical power. This electricity can be used immediately to power equipment or stored in the integrated BESS system for later use."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"Dual Capability"}),(0,uu.jsx)("p",{children:"Produces electricity to power equipment directly or store in the BESS, ensuring continuous power availability even during peak demand."})]})]})]})]}),(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"4"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/bess-storage system.png",alt:"BESS Storage System"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"BESS Energy Storage"}),(0,uu.jsx)($d,{children:"Our integrated Battery Energy Storage System (BESS) captures and stores excess energy, creating a reserve for critical applications, backup power, and to maintain the closed-loop system operation."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"Smart Management"}),(0,uu.jsx)("p",{children:"Advanced energy management system optimizes power storage and distribution, ensuring optimal performance in all conditions."})]})]})]})]}),(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"5"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/closed-loop-system.png",alt:"Closed Loop System"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"Closed-Loop Operation"}),(0,uu.jsx)($d,{children:"The system operates as a closed loop, allowing power generated to be redirected back to the main compressor to refill the air tanks. This creates a self-sustaining energy cycle with minimal external input once initiated."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"Sustainability Factor"}),(0,uu.jsx)("p",{children:"This closed-loop design ensures long-term operation with little to no external energy input, perfect for remote or off-grid applications."})]})]})]})]}),(0,uu.jsxs)(Id,{variants:n,children:[(0,uu.jsx)(Fd,{children:"6"}),(0,uu.jsxs)(Vd,{className:"step-content",children:[(0,uu.jsx)(Wd,{className:"step-image",children:(0,uu.jsx)("img",{src:"/images/cold-air-app.png",alt:"Cold Air Applications"})}),(0,uu.jsxs)(Bd,{className:"step-details",children:[(0,uu.jsx)(Ud,{children:"Cold Air Utilization"}),(0,uu.jsx)($d,{children:"As a byproduct, the system produces cold air exhaust (-20\xb0C to -40\xb0C) which can be captured and utilized for various cooling applications including air conditioning, refrigeration, and data center cooling."}),(0,uu.jsxs)(Hd,{children:[(0,uu.jsx)("h4",{children:"Dual Benefit"}),(0,uu.jsx)("p",{children:'The cold air exhaust provides an additional value stream, effectively offering cooling capabilities "for free" alongside electricity generation.'})]})]})]})]})]})})}),(0,uu.jsx)(Yd,{children:(0,uu.jsx)(qd,{href:"/contact",initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:1},children:"Schedule a Technology Demo"})})]})})},Gd=cu.section`
  padding: 6rem 0;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(30, 60, 100, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 0;
  }
`,Qd=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,Xd=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,Zd=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Jd=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,eh=cu.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,th=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    
    .application-image img {
      transform: scale(1.05);
    }
  }
`,nh=cu.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background-color: #000;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
    filter: brightness(1.2) contrast(1.1);
  }
`,rh=cu.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,ih=cu.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`,oh=cu.p`
  font-size: 0.95rem;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 1rem;
`,ah=cu.ul`
  list-style: none;
  margin-top: 1rem;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: #ccc;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--secondary-color);
      font-weight: bold;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,sh=cu.a`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
  
  &::after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-color);
    
    &::after {
      transform: translateX(5px);
    }
  }
`,lh=cu.div`
  margin-top: 4rem;
  text-align: center;
`,ch=cu(ws.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,uh=()=>{const[e,t]=ud({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}};return(0,uu.jsx)(Gd,{children:(0,uu.jsxs)(Qd,{ref:e,children:[(0,uu.jsxs)(Xd,{children:[(0,uu.jsx)(Zd,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"Power for Endless Applications"}),(0,uu.jsx)(Jd,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Air-Power USA's technology offers versatile solutions across multiple industries and use cases."})]}),(0,uu.jsx)(eh,{children:(0,uu.jsx)(ws.div,{variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",className:"grid-container",style:{display:"contents"},children:[{title:"Disaster Relief",description:"Rapid deployment power systems for emergency response in disaster zones, providing electricity and cooling.",image:"/images/disaster-relief.png",features:["Immediate power generation in crisis areas","Mobile units for quick deployment","Cold air for emergency cooling needs","Independent operation without fuel supply chains"]},{title:"Off-Grid Communities",description:"Sustainable power solutions for remote villages and communities without access to traditional power infrastructure.",image:"/images/off-grid.png",features:["Self-sustaining power generation","Minimal maintenance requirements","Scalable to community needs","Zero environmental impact"]},{title:"EV Charging Stations",description:"Clean power generation for electric vehicle charging infrastructure, reducing grid dependency and enabling remote charging.",image:"/images/ev-charging.png",features:["Zero-emission power for EVs","Rapid charging capabilities","Grid-independent operation","Complementary to solar installations"]},{title:"Data Centers",description:"Combined power and cooling solution for energy-intensive data centers, dramatically reducing operational costs and environmental impact.",image:"/images/data-center.png",features:["Dual benefit: power generation and cooling","Significant reduction in cooling costs","Backup power capabilities","Lower PUE (Power Usage Effectiveness)"]},{title:"Agriculture & Grow Operations",description:"Integrated power and climate control for greenhouses, indoor farming, and agricultural processing facilities.",image:"/images/grow-op.png",features:["Power for grow lights and equipment","Cold air for climate control","Water condensation from cold air exhaust","Reduced operating costs"]},{title:"Military & Defense",description:"Tactical power solutions for defense applications, forward operating bases, and mission-critical installations.",image:"/images/military-defense.png",features:["Reduced logistics footprint","Silent operation capabilities","No thermal signature","Ruggedized for field deployment"]},{title:"Microgrids",description:"Reliable power infrastructure for community microgrids, industrial facilities, and island communities.",image:"/images/micro-grid.png",features:["Stable power generation","Integrated storage solution","Complementary to renewable sources","Grid stabilization capabilities"]},{title:"Marine Vessels",description:"Clean energy systems for shipping, cruise lines, and maritime operations, reducing emissions and providing onboard cooling.",image:"/images/marine-vessel.png",features:["Emissions reduction for maritime compliance","Refrigeration for cargo vessels","Air conditioning for passenger ships","Reliable backup power"]},{title:"Commercial Energy Storage",description:"Large-scale energy storage and management systems for commercial buildings, manufacturing, and institutional facilities.",image:"/images/commercial-energy.png",features:["Peak shaving capabilities","Demand response integration","Backup power during outages","Reduced utility costs"]}].map(((e,t)=>(0,uu.jsxs)(th,{variants:n,children:[(0,uu.jsx)(nh,{className:"application-image",children:(0,uu.jsx)("img",{src:e.image,alt:e.title})}),(0,uu.jsxs)(rh,{children:[(0,uu.jsx)(ih,{children:e.title}),(0,uu.jsx)(oh,{children:e.description}),(0,uu.jsx)(ah,{children:e.features.map(((e,t)=>(0,uu.jsx)("li",{children:e},t)))}),(0,uu.jsx)(sh,{href:`/applications#${e.title.toLowerCase().replace(/\s+/g,"-")}`,children:"Learn more about this application \u2192"})]})]},t)))})}),(0,uu.jsx)(lh,{children:(0,uu.jsx)(ch,{href:"/contact",initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.5},children:"Discuss Your Application Needs"})})]})})},dh=cu.section`
  padding: 6rem 0;
  background-color: #080808;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 80%, rgba(74, 144, 226, 0.1), transparent 40%);
    z-index: 0;
  }
`,hh=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,ph=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,fh=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,mh=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,gh=cu.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,vh=cu.button`
  padding: 1rem 2rem;
  background-color: ${e=>{let{active:t}=e;return t?"var(--secondary-color)":"rgba(255, 255, 255, 0.05)"}};
  color: ${e=>{let{active:t}=e;return t?"white":"#ccc"}};
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${e=>{let{active:t}=e;return t?"var(--secondary-color)":"rgba(255, 255, 255, 0.1)"}};
    transform: translateY(-3px);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,yh=cu(ws.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,xh=cu.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 992px) {
    order: 1;
  }
`,bh=cu.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    order: 2;
  }
`,wh=cu.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
`,Sh=cu.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,kh=cu.div`
  margin: 1.5rem 0;
`,jh=cu.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: var(--secondary-color);
    min-width: 24px;
    margin-right: 1rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
    
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }
    
    p {
      font-size: 0.9rem;
      color: #aaa;
    }
  }
`,Eh=cu.div`
  margin: 2rem 0;
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40px;
      height: 2px;
      background-color: var(--secondary-color);
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
    }
    
    td {
      padding: 0.8rem 0;
      font-size: 0.95rem;
      
      &:first-child {
        color: #aaa;
        width: 40%;
      }
      
      &:last-child {
        color: white;
        font-weight: 500;
      }
    }
  }
`,Ch=cu.div`
  margin-top: 2rem;
`,Ph=cu.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,Th=()=>{const[e,n]=(0,t.useState)(0),[r,i]=ud({threshold:.1,triggerOnce:!0}),o=[{title:"50kW Air Truck Unit",description:"Our compact and mobile power solution designed for field deployments, emergency response, and remote operation. The 50kW Air Truck Unit combines power generation with cold air output in a transportable package.",image:"/images/air-truck-unit.jpg",features:[{title:"Mobile Design",description:"Mounted on a truck chassis for rapid deployment to any location."},{title:"Dual Output",description:"Generates both electricity and cold air simultaneously."},{title:"Integrated BESS",description:"Built-in battery storage for consistent power delivery."},{title:"Field Ready",description:"Ruggedized for harsh environments and challenging conditions."}],specs:[{name:"Power Output",value:"50 kW continuous"},{name:"Cold Air Temperature",value:"-20\xb0C to -40\xb0C"},{name:"BESS Capacity",value:"100 kWh"},{name:"Runtime",value:"24+ hours on full charge"},{name:"Recharge Time",value:"7-10 minutes"},{name:"Noise Level",value:"< 65 dB at 7 meters"},{name:"Dimensions",value:"Standard truck bed (6.5 ft)"},{name:"Weight",value:"Approximately 2,500 kg"}]},{title:"1.5MW BESS System",description:"Our utility-scale energy solution for microgrids, communities, and industrial applications. The 1.5MW system delivers substantial power with integrated storage, dramatically reducing land use compared to traditional clean energy sources.",image:"/images/bess-system.jpg",features:[{title:"High Capacity",description:"Powers up to 450 homes with clean, sustainable energy."},{title:"Compact Footprint",description:"Minimal land use compared to equivalent solar or wind installations."},{title:"Scalable Design",description:"Modular construction allows for expansion as needs grow."},{title:"Grid Integration",description:"Seamless connection to existing infrastructure with stabilization features."}],specs:[{name:"Power Output",value:"1.5 MW continuous"},{name:"BESS Capacity",value:"3 MWh"},{name:"Cooling Capacity",value:"500 tons (1,760 kW)"},{name:"System Footprint",value:"40 ft x 60 ft"},{name:"Installation Time",value:"2-3 weeks"},{name:"Expected Lifespan",value:"20+ years"},{name:"Maintenance Interval",value:"Quarterly inspection"},{name:"Grid Compatibility",value:"Standard connections with island mode capability"}]}],a=o[e],s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,uu.jsx)(dh,{children:(0,uu.jsxs)(hh,{ref:r,children:[(0,uu.jsxs)(ph,{children:[(0,uu.jsx)(fh,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"Our Featured Products"}),(0,uu.jsx)(mh,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Explore our innovative clean energy solutions designed for various applications and scales."})]}),(0,uu.jsx)(gh,{children:o.map(((t,r)=>(0,uu.jsx)(vh,{active:e===r,onClick:()=>n(r),children:t.title},r)))}),(0,uu.jsxs)(yh,{initial:"hidden",animate:i?"visible":"hidden",variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,staggerChildren:.1}}},exit:{opacity:0},children:[(0,uu.jsx)(xh,{children:(0,uu.jsx)(ws.img,{src:a.image,alt:a.title,variants:s})}),(0,uu.jsxs)(bh,{children:[(0,uu.jsxs)(ws.div,{variants:s,children:[(0,uu.jsx)(wh,{children:a.title}),(0,uu.jsx)(Sh,{children:a.description})]}),(0,uu.jsx)(kh,{children:a.features.map(((e,t)=>(0,uu.jsx)(ws.div,{variants:s,children:(0,uu.jsxs)(jh,{children:[(0,uu.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,uu.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,uu.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:e.title}),(0,uu.jsx)("p",{children:e.description})]})]})},t)))}),(0,uu.jsx)(ws.div,{variants:s,children:(0,uu.jsxs)(Eh,{children:[(0,uu.jsx)("h4",{children:"Technical Specifications"}),(0,uu.jsx)("table",{children:(0,uu.jsx)("tbody",{children:a.specs.map(((e,t)=>(0,uu.jsxs)("tr",{children:[(0,uu.jsx)("td",{children:e.name}),(0,uu.jsx)("td",{children:e.value})]},t)))})})]})}),(0,uu.jsx)(ws.div,{variants:s,children:(0,uu.jsx)(Ch,{children:(0,uu.jsx)(Ph,{href:"/contact",children:"Request Product Information"})})})]})]},e)]})})},Rh=cu.section`
  padding: 6rem 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
    z-index: 0;
  }
`,Ah=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,_h=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,zh=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Oh=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Dh=cu.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Lh=cu.div`
  display: flex;
  flex-direction: column;
`,Mh=cu(ws.h3)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`,Nh=cu(ws.p)`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,Ih=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(74, 144, 226, 0.2);
`,Fh=cu.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1.3rem;
    color: var(--secondary-color);
  }
  
  span {
    background-color: rgba(74, 144, 226, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: var(--secondary-color);
    font-weight: 600;
  }
`,Vh=cu.div`
  margin-bottom: 1.5rem;
  
  ul {
    list-style: none;
    
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      span:first-child {
        color: #aaa;
      }
      
      span:last-child {
        font-weight: 500;
      }
    }
  }
`,Bh=cu.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`,Uh=cu.div`
  background-color: var(--secondary-color);
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,$h=cu.form`
  padding: 2rem;
`,Wh=cu.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #ddd;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }
`,Hh=cu.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  input {
    margin-top: 0.3rem;
    margin-right: 0.8rem;
    width: auto;
  }
  
  label {
    font-size: 0.9rem;
    color: #ddd;
    margin-bottom: 0;
  }
`,Yh=cu.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,qh=cu(ws.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Kh=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`,Gh=cu(ws.div)`
  margin-top: 3rem;
`,Qh=cu.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`,Xh=cu.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: rgba(74, 144, 226, 0.3);
  }
`,Zh=cu(ws.div)`
  position: relative;
  padding-bottom: 2rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    border: 4px solid #0a0a0a;
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }
  
  p {
    font-size: 0.95rem;
    color: #ccc;
    line-height: 1.6;
  }
`,Jh=cu.div`
  margin-top: 4rem;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-size: 0.8rem;
  color: #999;
  line-height: 1.6;
`,ep=()=>{const[e,n]=(0,t.useState)({name:"",email:"",phone:"",investmentAmount:"",accredited:!1,message:""}),r=t=>{const{name:r,value:i,type:o,checked:a}=t.target;n({...e,[r]:"checkbox"===o?a:i})},[i,o]=ud({threshold:.1,triggerOnce:!0}),a={hidden:{},visible:{transition:{staggerChildren:.1}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,uu.jsx)(Rh,{children:(0,uu.jsxs)(Ah,{ref:i,children:[(0,uu.jsxs)(_h,{children:[(0,uu.jsx)(zh,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"Investor Opportunities"}),(0,uu.jsx)(Oh,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Join us as we build the future of scalable clean energy. Air-Power USA offers a unique investment opportunity in a revolutionary technology."})]}),(0,uu.jsxs)(Dh,{children:[(0,uu.jsx)(Lh,{children:(0,uu.jsxs)(ws.div,{variants:a,initial:"hidden",animate:o?"visible":"hidden",children:[(0,uu.jsx)(Mh,{variants:s,children:"Be Part of the Energy Revolution"}),(0,uu.jsx)(Nh,{variants:s,children:"Air-Power USA is raising capital to accelerate the commercialization of our patented compressed air power generation technology. With strong intellectual property protection and a clear path to market, we offer early investors a unique opportunity to participate in the clean energy transition."}),(0,uu.jsx)(Nh,{variants:s,children:"Our technology addresses multiple high-growth markets including power generation, energy storage, cooling systems, and off-grid applications with a single innovative solution."}),(0,uu.jsxs)(Ih,{variants:s,children:[(0,uu.jsxs)(Fh,{children:[(0,uu.jsx)("h4",{children:"Current Investment Round"}),(0,uu.jsx)("span",{children:"Round I"})]}),(0,uu.jsx)(Vh,{children:(0,uu.jsxs)("ul",{children:[(0,uu.jsxs)("li",{children:[(0,uu.jsx)("span",{children:"Share Price"}),(0,uu.jsx)("span",{children:"$2.00/share"})]}),(0,uu.jsxs)("li",{children:[(0,uu.jsx)("span",{children:"Minimum Investment"}),(0,uu.jsx)("span",{children:"$10,000"})]}),(0,uu.jsxs)("li",{children:[(0,uu.jsx)("span",{children:"Bonus"}),(0,uu.jsx)("span",{children:"100 preferred shares per $10k invested"})]}),(0,uu.jsxs)("li",{children:[(0,uu.jsx)("span",{children:"Exit Strategy"}),(0,uu.jsx)("span",{children:"OTC \u2192 Nasdaq IPO planned"})]})]})})]}),(0,uu.jsxs)(qh,{variants:a,children:[(0,uu.jsxs)(Kh,{variants:s,children:[(0,uu.jsx)("h3",{children:"$28B"}),(0,uu.jsx)("p",{children:"Generator Market Size"})]}),(0,uu.jsxs)(Kh,{variants:s,children:[(0,uu.jsx)("h3",{children:"$15B"}),(0,uu.jsx)("p",{children:"Cooling Market Size"})]}),(0,uu.jsxs)(Kh,{variants:s,children:[(0,uu.jsx)("h3",{children:"$45B"}),(0,uu.jsx)("p",{children:"EV and BESS Expansion"})]}),(0,uu.jsxs)(Kh,{variants:s,children:[(0,uu.jsx)("h3",{children:"42%"}),(0,uu.jsx)("p",{children:"CAGR in Battery Infrastructure"})]})]}),(0,uu.jsxs)(Gh,{variants:s,children:[(0,uu.jsx)(Qh,{children:"Development Roadmap"}),(0,uu.jsxs)(Xh,{children:[(0,uu.jsxs)(Zh,{variants:s,children:[(0,uu.jsx)("h4",{children:"Phase I: Launch and Development"}),(0,uu.jsx)("p",{children:"Launch San Diego facility, complete Mobile Airpack development, obtain U.S. certification for commercial use."})]}),(0,uu.jsxs)(Zh,{variants:s,children:[(0,uu.jsx)("h4",{children:"Phase II: Manufacturing Scale-up"}),(0,uu.jsx)("p",{children:"Expand manufacturing capabilities, begin custom air tank production, and grow presence in U.S. and international markets."})]}),(0,uu.jsxs)(Zh,{variants:s,children:[(0,uu.jsx)("h4",{children:"Phase III: Global Expansion"}),(0,uu.jsx)("p",{children:"Pursue IPO opportunity, develop specialized systems for military/NATO applications, and establish strong presence in European markets."})]})]})]})]})}),(0,uu.jsxs)(Bh,{children:[(0,uu.jsxs)(Uh,{children:[(0,uu.jsx)("h3",{children:"Secure Your Investment Position"}),(0,uu.jsx)("p",{children:"Complete the form below to receive our detailed investment packet and schedule a consultation."})]}),(0,uu.jsxs)($h,{onSubmit:t=>{t.preventDefault(),console.log(e),alert("Thank you for your interest! An investment advisor will contact you shortly.")},children:[(0,uu.jsxs)(Wh,{children:[(0,uu.jsx)("label",{htmlFor:"name",children:"Full Name *"}),(0,uu.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:r,required:!0})]}),(0,uu.jsxs)(Wh,{children:[(0,uu.jsx)("label",{htmlFor:"email",children:"Email Address *"}),(0,uu.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:r,required:!0})]}),(0,uu.jsxs)(Wh,{children:[(0,uu.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,uu.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:r})]}),(0,uu.jsxs)(Wh,{children:[(0,uu.jsx)("label",{htmlFor:"investmentAmount",children:"Potential Investment Amount"}),(0,uu.jsxs)("select",{id:"investmentAmount",name:"investmentAmount",value:e.investmentAmount,onChange:r,children:[(0,uu.jsx)("option",{value:"",children:"Select an amount"}),(0,uu.jsx)("option",{value:"$10,000 - $50,000",children:"$10,000 - $50,000"}),(0,uu.jsx)("option",{value:"$50,000 - $100,000",children:"$50,000 - $100,000"}),(0,uu.jsx)("option",{value:"$100,000 - $250,000",children:"$100,000 - $250,000"}),(0,uu.jsx)("option",{value:"$250,000 - $500,000",children:"$250,000 - $500,000"}),(0,uu.jsx)("option",{value:"$500,000+",children:"$500,000+"})]})]}),(0,uu.jsxs)(Hh,{children:[(0,uu.jsx)("input",{type:"checkbox",id:"accredited",name:"accredited",checked:e.accredited,onChange:r}),(0,uu.jsx)("label",{htmlFor:"accredited",children:"I am an accredited investor as defined by the SEC"})]}),(0,uu.jsxs)(Wh,{children:[(0,uu.jsx)("label",{htmlFor:"message",children:"Questions or Comments"}),(0,uu.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:r})]}),(0,uu.jsx)(Yh,{type:"submit",children:"Get Investment Packet"})]})]})]}),(0,uu.jsx)(Jh,{children:(0,uu.jsx)("p",{children:"This information is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer will be made only pursuant to appropriate offering documents and subscription agreements. Investment in Air-Power USA involves substantial risk, including the possible loss of principal. Past performance is not indicative of future results."})})]})})},tp=cu.section`
  padding: 6rem 0;
  background-color: #080808;
  position: relative;
  overflow: hidden;
`,np=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,rp=cu.div`
  text-align: center;
  margin-bottom: 4rem;
`,ip=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,op=cu(ws.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ap=cu.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,sp=cu.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 992px) {
    order: 2;
  }
`,lp=cu.div`
  background-color: var(--secondary-color);
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,cp=cu.form`
  padding: 2rem;
`,up=cu.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #ddd;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }
`,dp=cu.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,hp=cu.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    order: 1;
  }
`,pp=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 40px;
      height: 2px;
      background-color: var(--secondary-color);
    }
  }
`,fp=cu.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,mp=cu.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    color: var(--secondary-color);
    min-width: 20px;
    margin-right: 1rem;
    margin-top: 4px;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      color: var(--text-light);
    }
    
    p, a {
      font-size: 0.95rem;
      color: #ccc;
      line-height: 1.6;
    }
    
    a {
      transition: var(--transition);
      
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`,gp=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 40px;
      height: 2px;
      background-color: var(--secondary-color);
    }
  }
`,vp=cu.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,yp=cu.div`
  h4 {
    font-size: 1.1rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
    line-height: 1.6;
  }
`,xp=cu.div`
  margin-top: 2rem;
  display: flex;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    margin-right: 1rem;
    transition: var(--transition);
    
    svg {
      color: var(--secondary-color);
      font-size: 1.2rem;
    }
    
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
      
      svg {
        color: white;
      }
    }
  }
`,bp=()=>{const[e,n]=(0,t.useState)({name:"",email:"",phone:"",subject:"",message:""}),r=t=>{const{name:r,value:i}=t.target;n({...e,[r]:i})},[i,o]=ud({threshold:.1,triggerOnce:!0}),a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,uu.jsx)(tp,{children:(0,uu.jsxs)(np,{ref:i,children:[(0,uu.jsxs)(rp,{children:[(0,uu.jsx)(ip,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:"Get In Touch"}),(0,uu.jsx)(op,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.2},children:"Have questions about our technology or investment opportunities? Our team is ready to assist you."})]}),(0,uu.jsxs)(ap,{children:[(0,uu.jsxs)(sp,{children:[(0,uu.jsxs)(lp,{children:[(0,uu.jsx)("h3",{children:"Send Us a Message"}),(0,uu.jsx)("p",{children:"Fill out the form below and we'll get back to you as soon as possible."})]}),(0,uu.jsxs)(cp,{onSubmit:t=>{t.preventDefault(),console.log(e),alert("Thank you for your message! We'll get back to you shortly.")},children:[(0,uu.jsxs)(up,{children:[(0,uu.jsx)("label",{htmlFor:"name",children:"Full Name *"}),(0,uu.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:r,required:!0})]}),(0,uu.jsxs)(up,{children:[(0,uu.jsx)("label",{htmlFor:"email",children:"Email Address *"}),(0,uu.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:r,required:!0})]}),(0,uu.jsxs)(up,{children:[(0,uu.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,uu.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:r})]}),(0,uu.jsxs)(up,{children:[(0,uu.jsx)("label",{htmlFor:"subject",children:"Subject *"}),(0,uu.jsxs)("select",{id:"subject",name:"subject",value:e.subject,onChange:r,required:!0,children:[(0,uu.jsx)("option",{value:"",children:"Select a subject"}),(0,uu.jsx)("option",{value:"General Inquiry",children:"General Inquiry"}),(0,uu.jsx)("option",{value:"Investment Opportunity",children:"Investment Opportunity"}),(0,uu.jsx)("option",{value:"Partnership Request",children:"Partnership Request"}),(0,uu.jsx)("option",{value:"Technical Information",children:"Technical Information"}),(0,uu.jsx)("option",{value:"Media Inquiry",children:"Media Inquiry"})]})]}),(0,uu.jsxs)(up,{children:[(0,uu.jsx)("label",{htmlFor:"message",children:"Message *"}),(0,uu.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:r,required:!0})]}),(0,uu.jsx)(dp,{type:"submit",children:"Send Message"})]})]}),(0,uu.jsx)(hp,{children:(0,uu.jsxs)(ws.div,{variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},initial:"hidden",animate:o?"visible":"hidden",children:[(0,uu.jsxs)(pp,{variants:a,children:[(0,uu.jsx)("h3",{children:"Contact Information"}),(0,uu.jsxs)(fp,{children:[(0,uu.jsxs)(mp,{children:[(0,uu.jsx)(Ru,{}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Headquarters"}),(0,uu.jsx)("p",{children:"San Diego, California, United States"})]})]}),(0,uu.jsxs)(mp,{children:[(0,uu.jsx)(Au,{}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Phone Number"}),(0,uu.jsx)("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})]})]}),(0,uu.jsxs)(mp,{children:[(0,uu.jsx)(Tu,{}),(0,uu.jsxs)("div",{children:[(0,uu.jsx)("h4",{children:"Email Address"}),(0,uu.jsx)("a",{href:"mailto:info@airpowerusa.com",children:"info@airpowerusa.com"})]})]})]}),(0,uu.jsxs)(xp,{children:[(0,uu.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,uu.jsx)(Cu,{})}),(0,uu.jsx)("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:(0,uu.jsx)(Pu,{})})]})]}),(0,uu.jsxs)(gp,{variants:a,children:[(0,uu.jsx)("h3",{children:"Global Locations"}),(0,uu.jsxs)(vp,{children:[(0,uu.jsxs)(yp,{children:[(0,uu.jsx)("h4",{children:"San Diego"}),(0,uu.jsxs)("p",{children:["Main headquarters &",(0,uu.jsx)("br",{}),"Manufacturing facility"]})]}),(0,uu.jsxs)(yp,{children:[(0,uu.jsx)("h4",{children:"Montreal"}),(0,uu.jsxs)("p",{children:["Research & Development",(0,uu.jsx)("br",{}),"Engineering center"]})]}),(0,uu.jsxs)(yp,{children:[(0,uu.jsx)("h4",{children:"Amsterdam"}),(0,uu.jsxs)("p",{children:["European operations &",(0,uu.jsx)("br",{}),"Distribution center"]})]}),(0,uu.jsxs)(yp,{children:[(0,uu.jsx)("h4",{children:"Versailles"}),(0,uu.jsxs)("p",{children:["European regulatory &",(0,uu.jsx)("br",{}),"Compliance office"]})]})]})]})]})})]})]})})},wp=()=>(0,uu.jsxs)("div",{children:[(0,uu.jsx)(td,{}),(0,uu.jsx)(wd,{}),(0,uu.jsx)(Ad,{}),(0,uu.jsx)(Kd,{}),(0,uu.jsx)(uh,{}),(0,uu.jsx)(Th,{}),(0,uu.jsx)(ep,{}),(0,uu.jsx)(bp,{})]}),Sp=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,kp=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/about-hero.svg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,jp=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,Ep=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Cp=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Pp=cu.section`
  padding: 5rem 0;
  background-color: ${e=>e.dark?"#080808":"#0d0d0d"};
`,Tp=cu.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Rp=cu(ws.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ap=cu.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,_p=cu.div`
  @media (max-width: 992px) {
    order: ${e=>e.reverse?1:2};
  }
`,zp=cu.div`
  @media (max-width: 992px) {
    order: ${e=>e.reverse?2:1};
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`,Op=cu(ws.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Dp=cu.div`
  margin-top: 3rem;
`,Lp=cu.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Mp=cu(ws.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`,Np=cu.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`,Ip=cu.div`
  padding: 1.5rem;
`,Fp=cu.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-light);
`,Vp=cu.h4`
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`,Bp=cu.p`
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.6;
`,Up=()=>{const[e,t]=ud({threshold:.2,triggerOnce:!0}),[n,r]=ud({threshold:.2,triggerOnce:!0}),[i,o]=ud({threshold:.2,triggerOnce:!0}),a={hidden:{},visible:{transition:{staggerChildren:.1}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return(0,uu.jsxs)(Sp,{children:[(0,uu.jsx)(kp,{children:(0,uu.jsxs)(jp,{children:[(0,uu.jsx)(Ep,{children:"About Air-Power USA"}),(0,uu.jsx)(Cp,{children:"Pioneering the future of clean energy through revolutionary compressed air technology."})]})}),(0,uu.jsx)(Pp,{children:(0,uu.jsx)(Tp,{ref:e,children:(0,uu.jsxs)(ws.div,{variants:a,initial:"hidden",animate:t?"visible":"hidden",children:[(0,uu.jsx)(Rp,{variants:s,children:"Our Mission"}),(0,uu.jsxs)(Ap,{children:[(0,uu.jsxs)(_p,{children:[(0,uu.jsx)(Op,{variants:s,children:"At Air-Power USA, our mission is to revolutionize the energy landscape by providing sustainable, efficient, and environmentally friendly power solutions that harness the potential of compressed air technology."}),(0,uu.jsx)(Op,{variants:s,children:"We are committed to developing and deploying innovative energy systems that reduce carbon emissions, eliminate toxic waste, and provide reliable power to communities, businesses, and critical infrastructure worldwide."}),(0,uu.jsx)(Op,{variants:s,children:"Our vision is a world where clean, affordable energy is accessible to all, powering economic growth while preserving our planet for future generations. We believe our patented compressed air engine and integrated BESS technology represents a significant step toward this vision."})]}),(0,uu.jsx)(zp,{children:(0,uu.jsx)(ws.img,{src:"/images/mission-image.jpg",alt:"Air-Power USA Mission",variants:s})})]})]})})}),(0,uu.jsx)(Pp,{dark:!0,children:(0,uu.jsx)(Tp,{ref:n,children:(0,uu.jsxs)(ws.div,{variants:a,initial:"hidden",animate:r?"visible":"hidden",children:[(0,uu.jsx)(Rp,{variants:s,children:"Our Story"}),(0,uu.jsxs)(Ap,{children:[(0,uu.jsx)(zp,{reverse:!0,children:(0,uu.jsx)(ws.img,{src:"/images/story-image.jpg",alt:"Air-Power USA Story",variants:s})}),(0,uu.jsxs)(_p,{reverse:!0,children:[(0,uu.jsx)(Op,{variants:s,children:"Air-Power USA was founded in 2018 by a team of engineers and clean energy experts who recognized the untapped potential of compressed air as an energy source. Our journey began with a simple question: Could we create a more efficient way to convert air pressure into usable electricity?"}),(0,uu.jsx)(Op,{variants:s,children:"After years of research, development, and testing, we patented our revolutionary compressed air engine design that achieves unprecedented efficiency in converting air pressure to mechanical energy. Combined with our integrated Battery Energy Storage System (BESS), we created a complete power solution that offers clean energy generation with zero emissions."}),(0,uu.jsx)(Op,{variants:s,children:"Today, Air-Power USA is at the forefront of compressed air energy technology, with operations in the United States and Europe. We continue to innovate and expand our product line to serve diverse applications, from mobile power units to utility-scale energy systems."})]})]})]})})}),(0,uu.jsx)(Pp,{children:(0,uu.jsx)(Tp,{ref:i,children:(0,uu.jsxs)(ws.div,{variants:a,initial:"hidden",animate:o?"visible":"hidden",children:[(0,uu.jsx)(Rp,{variants:s,children:"Leadership Team"}),(0,uu.jsx)(Op,{variants:s,children:"Our leadership team brings together expertise from energy, technology, and business sectors to drive our mission forward. Each member is committed to advancing clean energy solutions and growing Air-Power USA into a global leader in sustainable power generation."}),(0,uu.jsx)(Dp,{children:(0,uu.jsx)(Lp,{children:[{name:"Damien Plum",role:"President",bio:"With over 20 years in clean energy technologies, Damien has led multiple successful startups and brought innovative products to market.",image:"/images/team-damien.jpg"},{name:"Peter Sollenne",role:"Chief Financial Officer",bio:"Peter brings extensive experience in corporate finance, capital raising, and strategic financial planning from both startups and Fortune 500 companies.",image:"/images/team-peter.jpg"},{name:"Open Position",role:"Chief Technology Officer",bio:"We are currently seeking an exceptional CTO to lead our engineering team and drive technology development. Contact us to learn more.",image:"/images/team-open.jpg"}].map(((e,t)=>(0,uu.jsxs)(Mp,{variants:s,children:[(0,uu.jsx)(Np,{children:(0,uu.jsx)("img",{src:e.image,alt:e.name})}),(0,uu.jsxs)(Ip,{children:[(0,uu.jsx)(Fp,{children:e.name}),(0,uu.jsx)(Vp,{children:e.role}),(0,uu.jsx)(Bp,{children:e.bio})]})]},t)))})})]})})})]})},$p=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,Wp=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/how-it-works-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,Hp=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,Yp=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,qp=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Kp=()=>(0,uu.jsxs)($p,{children:[(0,uu.jsx)(Wp,{children:(0,uu.jsxs)(Hp,{children:[(0,uu.jsx)(Yp,{children:"How Our Technology Works"}),(0,uu.jsx)(qp,{children:"Explore the revolutionary compressed air power generation process that drives our clean energy solutions."})]})}),(0,uu.jsx)(Kd,{})]}),Gp=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,Qp=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/applications-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,Xp=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,Zp=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Jp=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ef=()=>(0,uu.jsxs)(Gp,{children:[(0,uu.jsx)(Qp,{children:(0,uu.jsxs)(Xp,{children:[(0,uu.jsx)(Zp,{children:"Applications"}),(0,uu.jsx)(Jp,{children:"Discover how Air-Power USA's technology can be implemented across diverse industries and use cases."})]})}),(0,uu.jsx)(uh,{})]}),tf=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,nf=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/products-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,rf=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,of=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,af=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,sf=()=>(0,uu.jsxs)(tf,{children:[(0,uu.jsx)(nf,{children:(0,uu.jsxs)(rf,{children:[(0,uu.jsx)(of,{children:"Our Products"}),(0,uu.jsx)(af,{children:"Explore our innovative clean energy products designed for various applications and scales."})]})}),(0,uu.jsx)(Th,{})]}),lf=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,cf=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/investors-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,uf=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,df=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,hf=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,pf=()=>(0,uu.jsxs)(lf,{children:[(0,uu.jsx)(cf,{children:(0,uu.jsxs)(uf,{children:[(0,uu.jsx)(df,{children:"Investor Relations"}),(0,uu.jsx)(hf,{children:"Join us as we build the future of clean energy. Explore investment opportunities with Air-Power USA."})]})}),(0,uu.jsx)(ep,{})]}),ff=cu.div`
  padding-top: 80px; /* For fixed navbar */
`,mf=cu.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/contact-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,gf=cu.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`,vf=cu.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,yf=cu.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,xf=()=>(0,uu.jsxs)(ff,{children:[(0,uu.jsx)(mf,{children:(0,uu.jsxs)(gf,{children:[(0,uu.jsx)(vf,{children:"Contact Us"}),(0,uu.jsx)(yf,{children:"Have questions or want to learn more about our technology? Reach out to our team today."})]})}),(0,uu.jsx)(bp,{})]});const bf=function(){return(0,uu.jsx)(ke,{children:(0,uu.jsxs)("div",{className:"App",children:[(0,uu.jsx)(yu,{}),(0,uu.jsx)(ws.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,uu.jsxs)(ve,{children:[(0,uu.jsx)(me,{path:"/",element:(0,uu.jsx)(wp,{})}),(0,uu.jsx)(me,{path:"/about",element:(0,uu.jsx)(Up,{})}),(0,uu.jsx)(me,{path:"/how-it-works",element:(0,uu.jsx)(Kp,{})}),(0,uu.jsx)(me,{path:"/applications",element:(0,uu.jsx)(ef,{})}),(0,uu.jsx)(me,{path:"/products",element:(0,uu.jsx)(sf,{})}),(0,uu.jsx)(me,{path:"/investors",element:(0,uu.jsx)(pf,{})}),(0,uu.jsx)(me,{path:"/contact",element:(0,uu.jsx)(xf,{})})]})}),(0,uu.jsx)(Uu,{})]})})};i.createRoot(document.getElementById("root")).render((0,uu.jsx)(t.StrictMode,{children:(0,uu.jsx)(bf,{})}))})()})();
//# sourceMappingURL=main.bc5293c8.js.map