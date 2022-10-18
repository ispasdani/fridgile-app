function g0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ot={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),v0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),Zc=Symbol.iterator;function k0(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var hh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ph=Object.assign,mh={};function ao(e,t,n){this.props=e,this.context=t,this.refs=mh,this.updater=n||hh}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gh(){}gh.prototype=ao.prototype;function Nu(e,t,n){this.props=e,this.context=t,this.refs=mh,this.updater=n||hh}var bu=Nu.prototype=new gh;bu.constructor=Nu;ph(bu,ao.prototype);bu.isPureReactComponent=!0;var Jc=Array.isArray,xh=Object.prototype.hasOwnProperty,_u={current:null},vh={key:!0,ref:!0,__self:!0,__source:!0};function yh(e,t,n){var r,o={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)xh.call(t,r)&&!vh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:xs,type:e,key:s,ref:i,props:o,_owner:_u.current}}function N0(e,t){return{$$typeof:xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ed=/\/+/g;function Ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function oi(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xs:case v0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ra(i,0):r,Jc(o)?(n="",e!=null&&(n=e.replace(ed,"$&/")+"/"),oi(o,t,n,"",function(u){return u})):o!=null&&(Fu(o)&&(o=N0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ed,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Jc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ra(s,a);i+=oi(s,t,n,l,o)}else if(l=k0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ra(s,a++),i+=oi(s,t,n,l,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Fs(e,t,n){if(e==null)return e;var r=[],o=0;return oi(e,r,"","",function(s){return t.call(n,s,o++)}),r}function _0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},si={transition:null},F0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:si,ReactCurrentOwner:_u};W.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=ao;W.Fragment=y0;W.Profiler=C0;W.PureComponent=Nu;W.StrictMode=w0;W.Suspense=I0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ph({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=_u.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xh.call(t,l)&&!vh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xs,type:e.type,key:o,ref:s,props:r,_owner:i}};W.createContext=function(e){return e={$$typeof:$0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S0,_context:e},e.Consumer=e};W.createElement=yh;W.createFactory=function(e){var t=yh.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:E0,render:e}};W.isValidElement=Fu;W.lazy=function(e){return{$$typeof:R0,_payload:{_status:-1,_result:e},_init:_0}};W.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=si.transition;si.transition={};try{e()}finally{si.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return ze.current.useCallback(e,t)};W.useContext=function(e){return ze.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};W.useEffect=function(e,t){return ze.current.useEffect(e,t)};W.useId=function(){return ze.current.useId()};W.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return ze.current.useMemo(e,t)};W.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};W.useRef=function(e){return ze.current.useRef(e)};W.useState=function(e){return ze.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return ze.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(ot);const O0=x0(ot.exports);var cl={},wh={exports:{}},ut={},Ch={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,L){var B=k.length;k.push(L);e:for(;0<B;){var X=B-1>>>1,ne=k[X];if(0<o(ne,L))k[X]=L,k[B]=ne,B=X;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],B=k.pop();if(B!==L){k[0]=B;e:for(var X=0,ne=k.length,pn=ne>>>1;X<pn;){var Zt=2*(X+1)-1,Wn=k[Zt],Wt=Zt+1,_s=k[Wt];if(0>o(Wn,B))Wt<ne&&0>o(_s,Wn)?(k[X]=_s,k[Wt]=B,X=Wt):(k[X]=Wn,k[Zt]=B,X=Zt);else if(Wt<ne&&0>o(_s,B))k[X]=_s,k[Wt]=B,X=Wt;else break e}}return L}function o(k,L){var B=k.sortIndex-L.sortIndex;return B!==0?B:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,p=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=k)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function w(k){if(x=!1,y(k),!p)if(n(l)!==null)p=!0,ke(C);else{var L=n(u);L!==null&&Be(w,L.startTime-k)}}function C(k,L){p=!1,x&&(x=!1,m(E),E=-1),h=!0;var B=f;try{for(y(L),d=n(l);d!==null&&(!(d.expirationTime>L)||k&&!M());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var ne=X(d.expirationTime<=L);L=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),y(L)}else r(l);d=n(l)}if(d!==null)var pn=!0;else{var Zt=n(u);Zt!==null&&Be(w,Zt.startTime-L),pn=!1}return pn}finally{d=null,f=B,h=!1}}var I=!1,$=null,E=-1,F=5,R=-1;function M(){return!(e.unstable_now()-R<F)}function V(){if($!==null){var k=e.unstable_now();R=k;var L=!0;try{L=$(!0,k)}finally{L?ue():(I=!1,$=null)}}else I=!1}var ue;if(typeof g=="function")ue=function(){g(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=V,ue=function(){de.postMessage(null)}}else ue=function(){v(V,0)};function ke(k){$=k,I||(I=!0,ue())}function Be(k,L){E=v(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,ke(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var B=f;f=L;try{return k()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=f;f=k;try{return L()}finally{f=B}},e.unstable_scheduleCallback=function(k,L,B){var X=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,k={id:c++,callback:L,priorityLevel:k,startTime:B,expirationTime:ne,sortIndex:-1},B>X?(k.sortIndex=B,t(u,k),n(l)===null&&k===n(u)&&(x?(m(E),E=-1):x=!0,Be(w,B-X))):(k.sortIndex=ne,t(l,k),p||h||(p=!0,ke(C))),k},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(k){var L=f;return function(){var B=f;f=L;try{return k.apply(this,arguments)}finally{f=B}}}})(Sh);(function(e){e.exports=Sh})(Ch);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=ot.exports,lt=Ch.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eh=new Set,qo={};function pr(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(qo[e]=t,e=0;e<t.length;e++)Eh.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,P0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,td={},nd={};function D0(e){return dl.call(nd,e)?!0:dl.call(td,e)?!1:P0.test(e)?nd[e]=!0:(td[e]=!0,!1)}function A0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L0(e,t,n,r){if(t===null||typeof t>"u"||A0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ou,Pu);Te[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ou,Pu);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ou,Pu);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Du(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L0(t,n,o,r)&&(n=null),r||o===null?D0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Th=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Rh=Symbol.for("react.offscreen"),rd=Symbol.iterator;function So(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ka;function Fo(e){if(ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ka=t&&t[1]||""}return`
`+ka+e}var Na=!1;function ba(e,t){if(!e||Na)return"";Na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,a=s.length-1;1<=i&&0<=a&&o[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==s[a]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{Na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fo(e):""}function M0(e){switch(e.tag){case 5:return Fo(e.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return e=ba(e.type,!1),e;case 11:return e=ba(e.type.render,!1),e;case 1:return e=ba(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rr:return"Fragment";case Tr:return"Portal";case fl:return"Profiler";case Au:return"StrictMode";case hl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Th:return(e.displayName||"Context")+".Consumer";case Ih:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mu:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function B0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U0(e){var t=kh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=U0(e))}function Nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bh(e,t){t=t.checked,t!=null&&Du(e,"checked",t,!1)}function xl(e,t){bh(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oo=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Oo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function _h(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ds,Oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){V0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function Ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function Dh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var W0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(W0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Ur=null,Vr=null;function ld(e){if(e=ws(e)){if(typeof El!="function")throw Error(T(280));var t=e.stateNode;t&&(t=ra(t),El(e.stateNode,e.type,t))}}function Ah(e){Ur?Vr?Vr.push(e):Vr=[e]:Ur=e}function Lh(){if(Ur){var e=Ur,t=Vr;if(Vr=Ur=null,ld(e),t)for(e=0;e<t.length;e++)ld(t[e])}}function Mh(e,t){return e(t)}function Bh(){}var _a=!1;function Uh(e,t,n){if(_a)return e(t,n);_a=!0;try{return Mh(e,t,n)}finally{_a=!1,(Ur!==null||Vr!==null)&&(Bh(),Lh())}}function Yo(e,t){var n=e.stateNode;if(n===null)return null;var r=ra(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Il=!1;if(an)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Il=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Il=!1}function z0(e,t,n,r,o,s,i,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Vo=!1,yi=null,wi=!1,Tl=null,G0={onError:function(e){Vo=!0,yi=e}};function H0(e,t,n,r,o,s,i,a,l){Vo=!1,yi=null,z0.apply(G0,arguments)}function X0(e,t,n,r,o,s,i,a,l){if(H0.apply(this,arguments),Vo){if(Vo){var u=yi;Vo=!1,yi=null}else throw Error(T(198));wi||(wi=!0,Tl=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(mr(e)!==e)throw Error(T(188))}function j0(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return ud(o),e;if(s===r)return ud(o),t;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=s;break}if(a===r){i=!0,r=o,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,r=o;break}if(a===r){i=!0,r=s,n=o;break}a=a.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Wh(e){return e=j0(e),e!==null?zh(e):null}function zh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zh(e);if(t!==null)return t;e=e.sibling}return null}var Gh=lt.unstable_scheduleCallback,cd=lt.unstable_cancelCallback,K0=lt.unstable_shouldYield,q0=lt.unstable_requestPaint,le=lt.unstable_now,Q0=lt.unstable_getCurrentPriorityLevel,Uu=lt.unstable_ImmediatePriority,Hh=lt.unstable_UserBlockingPriority,Ci=lt.unstable_NormalPriority,Y0=lt.unstable_LowPriority,Xh=lt.unstable_IdlePriority,Ji=null,jt=null;function Z0(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:t1,J0=Math.log,e1=Math.LN2;function t1(e){return e>>>=0,e===0?32:31-(J0(e)/e1|0)|0}var As=64,Ls=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Po(a):(s&=i,s!==0&&(r=Po(s)))}else i=n&~o,i!==0?r=Po(i):s!==0&&(r=Po(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),o=1<<n,r|=e[n],t&=~o;return r}function n1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Dt(s),a=1<<i,l=o[i];l===-1?((a&n)===0||(a&r)!==0)&&(o[i]=n1(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jh(){var e=As;return As<<=1,(As&4194240)===0&&(As=64),e}function Fa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function o1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Dt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Kh(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qh,Wu,Qh,Yh,Zh,kl=!1,Ms=[],En=null,In=null,Tn=null,Zo=new Map,Jo=new Map,yn=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(t.pointerId)}}function Eo(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ws(t),t!==null&&Wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function i1(e,t,n,r,o){switch(t){case"focusin":return En=Eo(En,e,t,n,r,o),!0;case"dragenter":return In=Eo(In,e,t,n,r,o),!0;case"mouseover":return Tn=Eo(Tn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return Zo.set(s,Eo(Zo.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Jo.set(s,Eo(Jo.get(s)||null,e,t,n,r,o)),!0}return!1}function Jh(e){var t=qn(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vh(n),t!==null){e.blockedOn=t,Zh(e.priority,function(){Qh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=ws(n),t!==null&&Wu(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){ii(e)&&n.delete(t)}function a1(){kl=!1,En!==null&&ii(En)&&(En=null),In!==null&&ii(In)&&(In=null),Tn!==null&&ii(Tn)&&(Tn=null),Zo.forEach(fd),Jo.forEach(fd)}function Io(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,a1)))}function es(e){function t(o){return Io(o,e)}if(0<Ms.length){Io(Ms[0],e);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Io(En,e),In!==null&&Io(In,e),Tn!==null&&Io(Tn,e),Zo.forEach(t),Jo.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Jh(n),n.blockedOn===null&&yn.shift()}var Wr=dn.ReactCurrentBatchConfig,$i=!0;function l1(e,t,n,r){var o=H,s=Wr.transition;Wr.transition=null;try{H=1,zu(e,t,n,r)}finally{H=o,Wr.transition=s}}function u1(e,t,n,r){var o=H,s=Wr.transition;Wr.transition=null;try{H=4,zu(e,t,n,r)}finally{H=o,Wr.transition=s}}function zu(e,t,n,r){if($i){var o=Nl(e,t,n,r);if(o===null)Wa(e,t,r,Ei,n),dd(e,r);else if(i1(o,e,t,n,r))r.stopPropagation();else if(dd(e,r),t&4&&-1<s1.indexOf(e)){for(;o!==null;){var s=ws(o);if(s!==null&&qh(s),s=Nl(e,t,n,r),s===null&&Wa(e,t,r,Ei,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else Wa(e,t,r,null,n)}}var Ei=null;function Nl(e,t,n,r){if(Ei=null,e=Bu(r),e=qn(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ei=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Uu:return 1;case Hh:return 4;case Ci:case Y0:return 16;case Xh:return 536870912;default:return 16}default:return 16}}var Cn=null,Gu=null,ai=null;function tp(){if(ai)return ai;var e,t=Gu,n=t.length,r,o="value"in Cn?Cn.value:Cn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return ai=o.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bs(){return!0}function hd(){return!1}function ct(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bs:hd,this.isPropagationStopped=hd,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=ct(lo),ys=se({},lo,{view:0,detail:0}),c1=ct(ys),Oa,Pa,To,ea=se({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(Oa=e.screenX-To.screenX,Pa=e.screenY-To.screenY):Pa=Oa=0,To=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),pd=ct(ea),d1=se({},ea,{dataTransfer:0}),f1=ct(d1),h1=se({},ys,{relatedTarget:0}),Da=ct(h1),p1=se({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),m1=ct(p1),g1=se({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x1=ct(g1),v1=se({},lo,{data:0}),md=ct(v1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C1[e])?!!t[e]:!1}function Xu(){return S1}var $1=se({},ys,{key:function(e){if(e.key){var t=y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=ct($1),I1=se({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=ct(I1),T1=se({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),R1=ct(T1),k1=se({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=ct(k1),b1=se({},ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=ct(b1),F1=[9,13,27,32],ju=an&&"CompositionEvent"in window,Wo=null;an&&"documentMode"in document&&(Wo=document.documentMode);var O1=an&&"TextEvent"in window&&!Wo,np=an&&(!ju||Wo&&8<Wo&&11>=Wo),xd=String.fromCharCode(32),vd=!1;function rp(e,t){switch(e){case"keyup":return F1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function P1(e,t){switch(e){case"compositionend":return op(t);case"keypress":return t.which!==32?null:(vd=!0,xd);case"textInput":return e=t.data,e===xd&&vd?null:e;default:return null}}function D1(e,t){if(kr)return e==="compositionend"||!ju&&rp(e,t)?(e=tp(),ai=Gu=Cn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return np&&t.locale!=="ko"?null:t.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A1[e.type]:t==="textarea"}function sp(e,t,n,r){Ah(r),t=Ii(t,"onChange"),0<t.length&&(n=new Hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zo=null,ts=null;function L1(e){gp(e,0)}function ta(e){var t=_r(e);if(Nh(t))return e}function M1(e,t){if(e==="change")return t}var ip=!1;if(an){var Aa;if(an){var La="oninput"in document;if(!La){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),La=typeof wd.oninput=="function"}Aa=La}else Aa=!1;ip=Aa&&(!document.documentMode||9<document.documentMode)}function Cd(){zo&&(zo.detachEvent("onpropertychange",ap),ts=zo=null)}function ap(e){if(e.propertyName==="value"&&ta(ts)){var t=[];sp(t,ts,e,Bu(e)),Uh(L1,t)}}function B1(e,t,n){e==="focusin"?(Cd(),zo=t,ts=n,zo.attachEvent("onpropertychange",ap)):e==="focusout"&&Cd()}function U1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(ts)}function V1(e,t){if(e==="click")return ta(t)}function W1(e,t){if(e==="input"||e==="change")return ta(t)}function z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:z1;function ns(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function Sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var n=Sd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function up(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function G1(e){var t=up(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lp(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=$d(n,s);var i=$d(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var H1=an&&"documentMode"in document&&11>=document.documentMode,Nr=null,bl=null,Go=null,_l=!1;function Ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Nr==null||Nr!==vi(r)||(r=Nr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&ns(Go,r)||(Go=r,r=Ii(bl,"onSelect"),0<r.length&&(t=new Hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},Ma={},cp={};an&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function na(e){if(Ma[e])return Ma[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cp)return Ma[e]=t[n];return e}var dp=na("animationend"),fp=na("animationiteration"),hp=na("animationstart"),pp=na("transitionend"),mp=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){mp.set(e,t),pr(t,[e])}for(var Ba=0;Ba<Id.length;Ba++){var Ua=Id[Ba],X1=Ua.toLowerCase(),j1=Ua[0].toUpperCase()+Ua.slice(1);Ln(X1,"on"+j1)}Ln(dp,"onAnimationEnd");Ln(fp,"onAnimationIteration");Ln(hp,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(pp,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X0(r,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&o.isPropagationStopped())break e;Td(o,a,u),s=l}else for(i=0;i<r.length;i++){if(a=r[i],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&o.isPropagationStopped())break e;Td(o,a,u),s=l}}}if(wi)throw e=Tl,wi=!1,Tl=null,e}function J(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[Vs]){e[Vs]=!0,Eh.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,Va("selectionchange",!1,t))}}function xp(e,t,n,r){switch(ep(t)){case 1:var o=l1;break;case 4:o=u1;break;default:o=zu}n=o.bind(null,t,n,e),o=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wa(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;a!==null;){if(i=qn(a),i===null)return;if(l=i.tag,l===5||l===6){r=s=i;continue e}a=a.parentNode}}r=r.return}Uh(function(){var u=s,c=Bu(n),d=[];e:{var f=mp.get(e);if(f!==void 0){var h=Hu,p=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":h=E1;break;case"focusin":p="focus",h=Da;break;case"focusout":p="blur",h=Da;break;case"beforeblur":case"afterblur":h=Da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=f1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=R1;break;case dp:case fp:case hp:h=m1;break;case pp:h=N1;break;case"scroll":h=c1;break;case"wheel":h=_1;break;case"copy":case"cut":case"paste":h=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=gd}var x=(t&4)!==0,v=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var g=u,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Yo(g,m),w!=null&&x.push(os(g,w,y)))),v)break;g=g.return}0<x.length&&(f=new h(f,p,null,n,c),d.push({event:f,listeners:x}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==$l&&(p=n.relatedTarget||n.fromElement)&&(qn(p)||p[ln]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=u,p=p?qn(p):null,p!==null&&(v=mr(p),p!==v||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=u),h!==p)){if(x=pd,w="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=gd,w="onPointerLeave",m="onPointerEnter",g="pointer"),v=h==null?f:_r(h),y=p==null?f:_r(p),f=new x(w,g+"leave",h,n,c),f.target=v,f.relatedTarget=y,w=null,qn(c)===u&&(x=new x(m,g+"enter",p,n,c),x.target=y,x.relatedTarget=v,w=x),v=w,h&&p)t:{for(x=h,m=p,g=0,y=x;y;y=Cr(y))g++;for(y=0,w=m;w;w=Cr(w))y++;for(;0<g-y;)x=Cr(x),g--;for(;0<y-g;)m=Cr(m),y--;for(;g--;){if(x===m||m!==null&&x===m.alternate)break t;x=Cr(x),m=Cr(m)}x=null}else x=null;h!==null&&Rd(d,f,h,x,!1),p!==null&&v!==null&&Rd(d,v,p,x,!0)}}e:{if(f=u?_r(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=M1;else if(yd(f))if(ip)C=W1;else{C=U1;var I=B1}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=V1);if(C&&(C=C(e,u))){sp(d,C,n,c);break e}I&&I(e,f,u),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&vl(f,"number",f.value)}switch(I=u?_r(u):window,e){case"focusin":(yd(I)||I.contentEditable==="true")&&(Nr=I,bl=u,Go=null);break;case"focusout":Go=bl=Nr=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ed(d,n,c);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":Ed(d,n,c)}var $;if(ju)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else kr?rp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(np&&n.locale!=="ko"&&(kr||E!=="onCompositionStart"?E==="onCompositionEnd"&&kr&&($=tp()):(Cn=c,Gu="value"in Cn?Cn.value:Cn.textContent,kr=!0)),I=Ii(u,E),0<I.length&&(E=new md(E,e,null,n,c),d.push({event:E,listeners:I}),$?E.data=$:($=op(n),$!==null&&(E.data=$)))),($=O1?P1(e,n):D1(e,n))&&(u=Ii(u,"onBeforeInput"),0<u.length&&(c=new md("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=$))}gp(d,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Yo(e,n),s!=null&&r.unshift(os(e,s,o)),s=Yo(e,t),s!=null&&r.push(os(e,s,o))),e=e.return}return r}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Yo(n,s),l!=null&&i.unshift(os(n,l,a))):o||(l=Yo(n,s),l!=null&&i.push(os(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var q1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(Q1,"")}function Ws(e,t,n){if(t=kd(t),kd(e)!==t&&n)throw Error(T(425))}function Ti(){}var Fl=null,Ol=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(e){return Nd.resolve(null).then(e).catch(J1)}:Dl;function J1(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);es(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Xt="__reactFiber$"+uo,ss="__reactProps$"+uo,ln="__reactContainer$"+uo,Al="__reactEvents$"+uo,ev="__reactListeners$"+uo,tv="__reactHandles$"+uo;function qn(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bd(e);e!==null;){if(n=e[Xt])return n;e=bd(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[Xt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ra(e){return e[ss]||null}var Ll=[],Fr=-1;function Mn(e){return{current:e}}function ee(e){0>Fr||(e.current=Ll[Fr],Ll[Fr]=null,Fr--)}function Q(e,t){Fr++,Ll[Fr]=e.current,e.current=t}var Pn={},Pe=Mn(Pn),qe=Mn(!1),sr=Pn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Ri(){ee(qe),ee(Pe)}function _d(e,t,n){if(Pe.current!==Pn)throw Error(T(168));Q(Pe,t),Q(qe,n)}function vp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,B0(e)||"Unknown",o));return se({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,sr=Pe.current,Q(Pe,e),Q(qe,qe.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=vp(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,ee(qe),ee(Pe),Q(Pe,e)):ee(qe),Q(qe,n)}var en=null,oa=!1,Ga=!1;function yp(e){en===null?en=[e]:en.push(e)}function nv(e){oa=!0,yp(e)}function Bn(){if(!Ga&&en!==null){Ga=!0;var e=0,t=H;try{var n=en;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,oa=!1}catch(o){throw en!==null&&(en=en.slice(e+1)),Gh(Uu,Bn),o}finally{H=t,Ga=!1}}return null}var Or=[],Pr=0,Ni=null,bi=0,ht=[],pt=0,ir=null,nn=1,rn="";function Gn(e,t){Or[Pr++]=bi,Or[Pr++]=Ni,Ni=e,bi=t}function wp(e,t,n){ht[pt++]=nn,ht[pt++]=rn,ht[pt++]=ir,ir=e;var r=nn;e=rn;var o=32-Dt(r)-1;r&=~(1<<o),n+=1;var s=32-Dt(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,nn=1<<32-Dt(t)+o|n<<o|r,rn=s+e}else nn=1<<s|n<<o|r,rn=e}function qu(e){e.return!==null&&(Gn(e,1),wp(e,1,0))}function Qu(e){for(;e===Ni;)Ni=Or[--Pr],Or[Pr]=null,bi=Or[--Pr],Or[Pr]=null;for(;e===ir;)ir=ht[--pt],ht[pt]=null,rn=ht[--pt],ht[pt]=null,nn=ht[--pt],ht[pt]=null}var at=null,st=null,te=!1,_t=null;function Cp(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,st=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(te){var t=st;if(t){var n=t;if(!Od(e,t)){if(Ml(e))throw Error(T(418));t=Rn(n.nextSibling);var r=at;t&&Od(e,t)?Cp(r,n):(e.flags=e.flags&-4097|2,te=!1,at=e)}}else{if(Ml(e))throw Error(T(418));e.flags=e.flags&-4097|2,te=!1,at=e}}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function zs(e){if(e!==at)return!1;if(!te)return Pd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=st)){if(Ml(e))throw Sp(),Error(T(418));for(;t;)Cp(e,t),t=Rn(t.nextSibling)}if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?Rn(e.stateNode.nextSibling):null;return!0}function Sp(){for(var e=st;e;)e=Rn(e.nextSibling)}function qr(){st=at=null,te=!1}function Yu(e){_t===null?_t=[e]:_t.push(e)}var rv=dn.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _i=Mn(null),Fi=null,Dr=null,Zu=null;function Ju(){Zu=Dr=Fi=null}function ec(e){var t=_i.current;ee(_i),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){Fi=e,Zu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Fi===null)throw Error(T(308));Dr=e,Fi.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var Qn=null;function tc(e){Qn===null?Qn=[e]:Qn.push(e)}function $p(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tc(t)):(n.next=o.next,o.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,un(e,n)}return o=r.interleaved,o===null?(t.next=t,tc(r)):(t.next=o.next,o.next=t),r.interleaved=t,un(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}function Dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oi(e,t,n,r){var o=e.updateQueue;vn=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,i===null?s=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==i&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=o.baseState;i=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,x=a;switch(f=t,h=n,x.tag){case 1:if(p=x.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=se({},d,f);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,i|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);lr|=i,e.lanes=i,e.memoizedState=d}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Ip=new $h.Component().refs;function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),o=bn(e),s=sn(r,o);s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,o),t!==null&&(At(t,e,o,r),ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),o=bn(e),s=sn(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,o),t!==null&&(At(t,e,o,r),ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=bn(e),o=sn(n,r);o.tag=2,t!=null&&(o.callback=t),t=kn(e,o,r),t!==null&&(At(t,e,r,n),ui(t,e,r))}};function Ld(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(o,s):!0}function Tp(e,t,n){var r=!1,o=Pn,s=t.contextType;return typeof s=="object"&&s!==null?s=St(s):(o=Qe(t)?sr:Pe.current,r=t.contextTypes,s=(r=r!=null)?Kr(e,o):Pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ip,nc(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=St(s):(s=Qe(t)?sr:Pe.current,o.context=Kr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vl(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&sa.enqueueReplaceState(o,o.state,null),Oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=o.refs;a===Ip&&(a=o.refs={}),i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bd(e){var t=e._init;return t(e._payload)}function Rp(e){function t(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function o(m,g){return m=_n(m,g),m.index=0,m.sibling=null,m}function s(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,y,w){return g===null||g.tag!==6?(g=Ya(y,m.mode,w),g.return=m,g):(g=o(g,y),g.return=m,g)}function l(m,g,y,w){var C=y.type;return C===Rr?c(m,g,y.props.children,w,y.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&Bd(C)===g.type)?(w=o(g,y.props),w.ref=Ro(m,g,y),w.return=m,w):(w=mi(y.type,y.key,y.props,null,m.mode,w),w.ref=Ro(m,g,y),w.return=m,w)}function u(m,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Za(y,m.mode,w),g.return=m,g):(g=o(g,y.children||[]),g.return=m,g)}function c(m,g,y,w,C){return g===null||g.tag!==7?(g=nr(y,m.mode,w,C),g.return=m,g):(g=o(g,y),g.return=m,g)}function d(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ya(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:return y=mi(g.type,g.key,g.props,null,m.mode,y),y.ref=Ro(m,null,g),y.return=m,y;case Tr:return g=Za(g,m.mode,y),g.return=m,g;case xn:var w=g._init;return d(m,w(g._payload),y)}if(Oo(g)||So(g))return g=nr(g,m.mode,y,null),g.return=m,g;Gs(m,g)}return null}function f(m,g,y,w){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(m,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Os:return y.key===C?l(m,g,y,w):null;case Tr:return y.key===C?u(m,g,y,w):null;case xn:return C=y._init,f(m,g,C(y._payload),w)}if(Oo(y)||So(y))return C!==null?null:c(m,g,y,w,null);Gs(m,y)}return null}function h(m,g,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(g,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Os:return m=m.get(w.key===null?y:w.key)||null,l(g,m,w,C);case Tr:return m=m.get(w.key===null?y:w.key)||null,u(g,m,w,C);case xn:var I=w._init;return h(m,g,y,I(w._payload),C)}if(Oo(w)||So(w))return m=m.get(y)||null,c(g,m,w,C,null);Gs(g,w)}return null}function p(m,g,y,w){for(var C=null,I=null,$=g,E=g=0,F=null;$!==null&&E<y.length;E++){$.index>E?(F=$,$=null):F=$.sibling;var R=f(m,$,y[E],w);if(R===null){$===null&&($=F);break}e&&$&&R.alternate===null&&t(m,$),g=s(R,g,E),I===null?C=R:I.sibling=R,I=R,$=F}if(E===y.length)return n(m,$),te&&Gn(m,E),C;if($===null){for(;E<y.length;E++)$=d(m,y[E],w),$!==null&&(g=s($,g,E),I===null?C=$:I.sibling=$,I=$);return te&&Gn(m,E),C}for($=r(m,$);E<y.length;E++)F=h($,m,E,y[E],w),F!==null&&(e&&F.alternate!==null&&$.delete(F.key===null?E:F.key),g=s(F,g,E),I===null?C=F:I.sibling=F,I=F);return e&&$.forEach(function(M){return t(m,M)}),te&&Gn(m,E),C}function x(m,g,y,w){var C=So(y);if(typeof C!="function")throw Error(T(150));if(y=C.call(y),y==null)throw Error(T(151));for(var I=C=null,$=g,E=g=0,F=null,R=y.next();$!==null&&!R.done;E++,R=y.next()){$.index>E?(F=$,$=null):F=$.sibling;var M=f(m,$,R.value,w);if(M===null){$===null&&($=F);break}e&&$&&M.alternate===null&&t(m,$),g=s(M,g,E),I===null?C=M:I.sibling=M,I=M,$=F}if(R.done)return n(m,$),te&&Gn(m,E),C;if($===null){for(;!R.done;E++,R=y.next())R=d(m,R.value,w),R!==null&&(g=s(R,g,E),I===null?C=R:I.sibling=R,I=R);return te&&Gn(m,E),C}for($=r(m,$);!R.done;E++,R=y.next())R=h($,m,E,R.value,w),R!==null&&(e&&R.alternate!==null&&$.delete(R.key===null?E:R.key),g=s(R,g,E),I===null?C=R:I.sibling=R,I=R);return e&&$.forEach(function(V){return t(m,V)}),te&&Gn(m,E),C}function v(m,g,y,w){if(typeof y=="object"&&y!==null&&y.type===Rr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Os:e:{for(var C=y.key,I=g;I!==null;){if(I.key===C){if(C=y.type,C===Rr){if(I.tag===7){n(m,I.sibling),g=o(I,y.props.children),g.return=m,m=g;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&Bd(C)===I.type){n(m,I.sibling),g=o(I,y.props),g.ref=Ro(m,I,y),g.return=m,m=g;break e}n(m,I);break}else t(m,I);I=I.sibling}y.type===Rr?(g=nr(y.props.children,m.mode,w,y.key),g.return=m,m=g):(w=mi(y.type,y.key,y.props,null,m.mode,w),w.ref=Ro(m,g,y),w.return=m,m=w)}return i(m);case Tr:e:{for(I=y.key;g!==null;){if(g.key===I)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(m,g.sibling),g=o(g,y.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Za(y,m.mode,w),g.return=m,m=g}return i(m);case xn:return I=y._init,v(m,g,I(y._payload),w)}if(Oo(y))return p(m,g,y,w);if(So(y))return x(m,g,y,w);Gs(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(m,g.sibling),g=o(g,y),g.return=m,m=g):(n(m,g),g=Ya(y,m.mode,w),g.return=m,m=g),i(m)):n(m,g)}return v}var Qr=Rp(!0),kp=Rp(!1),Cs={},Kt=Mn(Cs),is=Mn(Cs),as=Mn(Cs);function Yn(e){if(e===Cs)throw Error(T(174));return e}function rc(e,t){switch(Q(as,t),Q(is,e),Q(Kt,Cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}ee(Kt),Q(Kt,t)}function Yr(){ee(Kt),ee(is),ee(as)}function Np(e){Yn(as.current);var t=Yn(Kt.current),n=wl(t,e.type);t!==n&&(Q(is,e),Q(Kt,n))}function oc(e){is.current===e&&(ee(Kt),ee(is))}var re=Mn(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function sc(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var ci=dn.ReactCurrentDispatcher,Xa=dn.ReactCurrentBatchConfig,ar=0,oe=null,fe=null,ge=null,Di=!1,Ho=!1,ls=0,ov=0;function Ne(){throw Error(T(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function ac(e,t,n,r,o,s){if(ar=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ci.current=e===null||e.memoizedState===null?lv:uv,e=n(r,o),Ho){s=0;do{if(Ho=!1,ls=0,25<=s)throw Error(T(301));s+=1,ge=fe=null,t.updateQueue=null,ci.current=cv,e=n(r,o)}while(Ho)}if(ci.current=Ai,t=fe!==null&&fe.next!==null,ar=0,ge=fe=oe=null,Di=!1,t)throw Error(T(300));return e}function lc(){var e=ls!==0;return ls=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function $t(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ge===null?oe.memoizedState:ge.next;if(t!==null)ge=t,fe=e;else{if(e===null)throw Error(T(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function us(e,t){return typeof t=="function"?t(e):t}function ja(e){var t=$t(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var a=i=null,l=null,u=s;do{var c=u.lane;if((ar&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,i=r):l=l.next=d,oe.lanes|=c,lr|=c}u=u.next}while(u!==null&&u!==s);l===null?i=r:l.next=a,Lt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,oe.lanes|=s,lr|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=$t(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Lt(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function bp(){}function _p(e,t){var n=oe,r=$t(),o=t(),s=!Lt(r.memoizedState,o);if(s&&(r.memoizedState=o,je=!0),r=r.queue,uc(Pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,cs(9,Op.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(T(349));(ar&30)!==0||Fp(n,t,o)}return o}function Fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Op(e,t,n,r){t.value=n,t.getSnapshot=r,Dp(t)&&Ap(e)}function Pp(e,t,n){return n(function(){Dp(t)&&Ap(e)})}function Dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Ap(e){var t=un(e,1);t!==null&&At(t,e,1,-1)}function Ud(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=av.bind(null,oe,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lp(){return $t().memoizedState}function di(e,t,n,r){var o=Gt();oe.flags|=e,o.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function ia(e,t,n,r){var o=$t();r=r===void 0?null:r;var s=void 0;if(fe!==null){var i=fe.memoizedState;if(s=i.destroy,r!==null&&ic(r,i.deps)){o.memoizedState=cs(t,n,s,r);return}}oe.flags|=e,o.memoizedState=cs(1|t,n,s,r)}function Vd(e,t){return di(8390656,8,e,t)}function uc(e,t){return ia(2048,8,e,t)}function Mp(e,t){return ia(4,2,e,t)}function Bp(e,t){return ia(4,4,e,t)}function Up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vp(e,t,n){return n=n!=null?n.concat([e]):null,ia(4,4,Up.bind(null,t,e),n)}function cc(){}function Wp(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gp(e,t,n){return(ar&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n):(Lt(n,t)||(n=jh(),oe.lanes|=n,lr|=n,e.baseState=!0),t)}function sv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Xa.transition;Xa.transition={};try{e(!1),t()}finally{H=n,Xa.transition=r}}function Hp(){return $t().memoizedState}function iv(e,t,n){var r=bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xp(e))jp(t,n);else if(n=$p(e,t,n,r),n!==null){var o=We();At(n,e,r,o),Kp(n,t,r)}}function av(e,t,n){var r=bn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xp(e))jp(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(o.hasEagerState=!0,o.eagerState=a,Lt(a,i)){var l=t.interleaved;l===null?(o.next=o,tc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=$p(e,t,o,r),n!==null&&(o=We(),At(n,e,r,o),Kp(n,t,r))}}function Xp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function jp(e,t){Ho=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}var Ai={readContext:St,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},lv={readContext:St,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,Up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iv.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:Ud,useDebugValue:cc,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Ud(!1),t=e[0];return e=sv.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=Gt();if(te){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ve===null)throw Error(T(349));(ar&30)!==0||Fp(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Vd(Pp.bind(null,r,s,e),[e]),r.flags|=2048,cs(9,Op.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Gt(),t=ve.identifierPrefix;if(te){var n=rn,r=nn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ov++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uv={readContext:St,useCallback:Wp,useContext:St,useEffect:uc,useImperativeHandle:Vp,useInsertionEffect:Mp,useLayoutEffect:Bp,useMemo:zp,useReducer:ja,useRef:Lp,useState:function(){return ja(us)},useDebugValue:cc,useDeferredValue:function(e){var t=$t();return Gp(t,fe.memoizedState,e)},useTransition:function(){var e=ja(us)[0],t=$t().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:_p,useId:Hp,unstable_isNewReconciler:!1},cv={readContext:St,useCallback:Wp,useContext:St,useEffect:uc,useImperativeHandle:Vp,useInsertionEffect:Mp,useLayoutEffect:Bp,useMemo:zp,useReducer:Ka,useRef:Lp,useState:function(){return Ka(us)},useDebugValue:cc,useDeferredValue:function(e){var t=$t();return fe===null?t.memoizedState=e:Gp(t,fe.memoizedState,e)},useTransition:function(){var e=Ka(us)[0],t=$t().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:_p,useId:Hp,unstable_isNewReconciler:!1};function Zr(e,t){try{var n="",r=t;do n+=M0(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function qp(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mi||(Mi=!0,Jl=r),zl(e,t)},n}function Qp(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Iv.bind(null,e,t,n),t.then(e,e))}function zd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var fv=dn.ReactCurrentOwner,je=!1;function Ue(e,t,n,r){t.child=e===null?kp(t,null,n,r):Qr(t,e.child,n,r)}function Hd(e,t,n,r,o){n=n.render;var s=t.ref;return zr(t,o),r=ac(e,t,n,r,s,o),n=lc(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,cn(e,t,o)):(te&&n&&qu(t),t.flags|=1,Ue(e,t,r,o),t.child)}function Xd(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Yp(e,t,s,r,o)):(e=mi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(i,r)&&e.ref===t.ref)return cn(e,t,o)}return t.flags|=1,e=_n(s,r),e.ref=t.ref,e.return=t,t.child=e}function Yp(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(ns(s,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,cn(e,t,o)}return Gl(e,t,n,r,o)}function Zp(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Lr,nt),nt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Lr,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Lr,nt),nt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(Lr,nt),nt|=r;return Ue(e,t,o,n),t.child}function Jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,o){var s=Qe(n)?sr:Pe.current;return s=Kr(t,s),zr(t,o),n=ac(e,t,n,r,s,o),r=lc(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,cn(e,t,o)):(te&&r&&qu(t),t.flags|=1,Ue(e,t,n,o),t.child)}function jd(e,t,n,r,o){if(Qe(n)){var s=!0;ki(t)}else s=!1;if(zr(t,o),t.stateNode===null)fi(e,t),Tp(t,n,r),Wl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=Qe(n)?sr:Pe.current,u=Kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Md(t,i,r,u),vn=!1;var f=t.memoizedState;i.state=f,Oi(t,r,i,o),l=t.memoizedState,a!==r||f!==l||qe.current||vn?(typeof c=="function"&&(Vl(t,n,c,r),l=t.memoizedState),(a=vn||Ld(t,n,a,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ep(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:kt(t.type,a),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=Qe(n)?sr:Pe.current,l=Kr(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Md(t,i,r,l),vn=!1,f=t.memoizedState,i.state=f,Oi(t,r,i,o);var p=t.memoizedState;a!==d||f!==p||qe.current||vn?(typeof h=="function"&&(Vl(t,n,h,r),p=t.memoizedState),(u=vn||Ld(t,n,u,r,f,p,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,p,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,p,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,s,o)}function Hl(e,t,n,r,o,s){Jp(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Fd(t,n,!1),cn(e,t,s);r=t.stateNode,fv.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Qr(t,e.child,null,s),t.child=Qr(t,null,a,s)):Ue(e,t,a,s),t.memoizedState=r.state,o&&Fd(t,n,!0),t.child}function em(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),rc(e,t.containerInfo)}function Kd(e,t,n,r,o){return qr(),Yu(o),t.flags|=256,Ue(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function tm(e,t,n){var r=t.pendingProps,o=re.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(re,o&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ua(i,r,0,null),e=nr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=jl(n),t.memoizedState=Xl,e):dc(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return hv(e,t,i,r,a,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_n(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?s=_n(a,s):(s=nr(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?jl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return s=e.child,e=s.sibling,r=_n(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dc(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hs(e,t,n,r){return r!==null&&Yu(r),Qr(t,e.child,null,n),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hv(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(T(422))),Hs(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=ua({mode:"visible",children:r.children},o,0,null),s=nr(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Qr(t,e.child,null,i),t.child.memoizedState=jl(i),t.memoizedState=Xl,s);if((t.mode&1)===0)return Hs(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=qa(s,r,void 0),Hs(e,t,i,r)}if(a=(i&e.childLanes)!==0,je||a){if(r=ve,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,un(e,o),At(r,e,o,-1))}return xc(),r=qa(Error(T(421))),Hs(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tv.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,st=Rn(o.nextSibling),at=t,te=!0,_t=null,e!==null&&(ht[pt++]=nn,ht[pt++]=rn,ht[pt++]=ir,nn=e.id,rn=e.overflow,ir=t),t=dc(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function Qa(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function nm(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Ue(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qa(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Qa(t,!0,n,null,s);break;case"together":Qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pv(e,t,n){switch(t.tag){case 3:em(t),qr();break;case 5:Np(t);break;case 1:Qe(t.type)&&ki(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(_i,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?tm(e,t,n):(Q(re,re.current&1),e=cn(e,t,n),e!==null?e.sibling:null);Q(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return nm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Zp(e,t,n)}return cn(e,t,n)}var rm,Kl,om,sm;rm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};om=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Yn(Kt.current);var s=null;switch(n){case"input":o=gl(e,o),r=gl(e,r),s=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":o=yl(e,o),r=yl(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ti)}Cl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ko(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mv(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Qe(t.type)&&Ri(),be(t),null;case 3:return r=t.stateNode,Yr(),ee(qe),ee(Pe),sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(nu(_t),_t=null))),Kl(e,t),be(t),null;case 5:oc(t);var o=Yn(as.current);if(n=t.type,e!==null&&t.stateNode!=null)om(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return be(t),null}if(e=Yn(Kt.current),zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Xt]=t,r[ss]=s,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Do.length;o++)J(Do[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":od(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":id(r,s),J("invalid",r)}Cl(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,a,e),o=["children",""+a]):qo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&J("scroll",r)}switch(n){case"input":Ps(r),sd(r,s,!0);break;case"textarea":Ps(r),ad(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ti)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Xt]=t,e[ss]=r,rm(e,t,!1,!1),t.stateNode=e;e:{switch(i=Sl(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Do.length;o++)J(Do[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":od(e,r),o=gl(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),J("invalid",e);break;case"textarea":id(e,r),o=yl(e,r),J("invalid",e);break;default:o=r}Cl(n,o),a=o;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dh(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Oh(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(e,l):typeof l=="number"&&Qo(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",e):l!=null&&Du(e,s,l,i))}switch(n){case"input":Ps(e),sd(e,r,!1);break;case"textarea":Ps(e),ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Br(e,!!r.multiple,s,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ti)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Yn(as.current),Yn(Kt.current),zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(s=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return be(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sp(),qr(),t.flags|=98560,s=!1;else if(s=zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Xt]=t}else qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else _t!==null&&(nu(_t),_t=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?pe===0&&(pe=3):xc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Yr(),Kl(e,t),e===null&&rs(t.stateNode.containerInfo),be(t),null;case 10:return ec(t.type._context),be(t),null;case 17:return Qe(t.type)&&Ri(),be(t),null;case 19:if(ee(re),s=t.memoizedState,s===null)return be(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)ko(s,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Pi(e),i!==null){for(t.flags|=128,ko(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(re,re.current&1|2),t.child}e=e.sibling}s.tail!==null&&le()>Jr&&(t.flags|=128,r=!0,ko(s,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!te)return be(t),null}else 2*le()-s.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,ko(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=le(),t.sibling=null,n=re.current,Q(re,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function gv(e,t){switch(Qu(t),t.tag){case 1:return Qe(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(),ee(qe),ee(Pe),sc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return oc(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Yr(),null;case 10:return ec(t.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var Xs=!1,_e=!1,xv=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Qd=!1;function vv(e,t){if(Fl=$i,e=up(),Ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(a=i+o),d!==s||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===o&&(a=i),f===s&&++c===r&&(l=i),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},$i=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var p=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,v=p.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:kt(t.type,x),v);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return p=Qd,Qd=!1,p}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ql(t,n,s)}o=o.next}while(o!==r)}}function aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[ss],delete t[Al],delete t[ev],delete t[tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function am(e){return e.tag===5||e.tag===3||e.tag===4}function Yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ti));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var $e=null,Nt=!1;function mn(e,t,n){for(n=n.child;n!==null;)lm(e,t,n),n=n.sibling}function lm(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:_e||Ar(n,t);case 6:var r=$e,o=Nt;$e=null,mn(e,t,n),$e=r,Nt=o,$e!==null&&(Nt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Nt?(e=$e,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),es(e)):za($e,n.stateNode));break;case 4:r=$e,o=Nt,$e=n.stateNode.containerInfo,Nt=!0,mn(e,t,n),$e=r,Nt=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&((s&2)!==0||(s&4)!==0)&&ql(n,t,i),o=o.next}while(o!==r)}mn(e,t,n);break;case 1:if(!_e&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,mn(e,t,n),_e=r):mn(e,t,n);break;default:mn(e,t,n)}}function Zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xv),t.forEach(function(r){var o=Rv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Nt=!1;break e;case 3:$e=a.stateNode.containerInfo,Nt=!0;break e;case 4:$e=a.stateNode.containerInfo,Nt=!0;break e}a=a.return}if($e===null)throw Error(T(160));lm(s,i,o),$e=null,Nt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)um(t,e),t=t.sibling}function um(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),zt(e),r&4){try{Xo(3,e,e.return),aa(3,e)}catch(x){ie(e,e.return,x)}try{Xo(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:Rt(t,e),zt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(Rt(t,e),zt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var o=e.stateNode;try{Qo(o,"")}catch(x){ie(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bh(o,s),Sl(a,i);var u=Sl(a,s);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?Dh(o,d):c==="dangerouslySetInnerHTML"?Oh(o,d):c==="children"?Qo(o,d):Du(o,c,d,u)}switch(a){case"input":xl(o,s);break;case"textarea":_h(o,s);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Br(o,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Br(o,!!s.multiple,s.defaultValue,!0):Br(o,!!s.multiple,s.multiple?[]:"",!1))}o[ss]=s}catch(x){ie(e,e.return,x)}}break;case 6:if(Rt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(x){ie(e,e.return,x)}}break;case 3:if(Rt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:Rt(t,e),zt(e);break;case 13:Rt(t,e),zt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(pc=le())),r&4&&Zd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,Rt(t,e),_e=u):Rt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(P=e,c=e.child;c!==null;){for(d=P=c;P!==null;){switch(f=P,h=f.child,f.tag){case 0:case 11:case 14:case 15:Xo(4,f,f.return);break;case 1:Ar(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(x){ie(r,n,x)}}break;case 5:Ar(f,f.return);break;case 22:if(f.memoizedState!==null){ef(d);continue}}h!==null?(h.return=f,P=h):ef(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ph("display",i))}catch(x){ie(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ie(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rt(t,e),zt(e),r&4&&Zd(e);break;case 21:break;default:Rt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(am(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qo(o,""),r.flags&=-33);var s=Yd(e);Zl(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Yd(e);Yl(e,a,i);break;default:throw Error(T(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yv(e,t,n){P=e,cm(e)}function cm(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Xs;if(!i){var a=o.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Xs;var u=_e;if(Xs=i,(_e=l)&&!u)for(P=o;P!==null;)i=P,l=i.child,i.tag===22&&i.memoizedState!==null?tf(o):l!==null?(l.return=i,P=l):tf(o);for(;s!==null;)P=s,cm(s),s=s.sibling;P=o,Xs=a,_e=u}Jd(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,P=s):Jd(e)}}function Jd(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ad(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ad(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&es(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}_e||t.flags&512&&Ql(t)}catch(f){ie(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ef(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function tf(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aa(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ie(t,o,l)}}var s=t.return;try{Ql(t)}catch(l){ie(t,s,l)}break;case 5:var i=t.return;try{Ql(t)}catch(l){ie(t,i,l)}}}catch(l){ie(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var wv=Math.ceil,Li=dn.ReactCurrentDispatcher,fc=dn.ReactCurrentOwner,Ct=dn.ReactCurrentBatchConfig,G=0,ve=null,ce=null,Ie=0,nt=0,Lr=Mn(0),pe=0,ds=null,lr=0,la=0,hc=0,jo=null,Xe=null,pc=0,Jr=1/0,Jt=null,Mi=!1,Jl=null,Nn=null,js=!1,Sn=null,Bi=0,Ko=0,eu=null,hi=-1,pi=0;function We(){return(G&6)!==0?le():hi!==-1?hi:hi=le()}function bn(e){return(e.mode&1)===0?1:(G&2)!==0&&Ie!==0?Ie&-Ie:rv.transition!==null?(pi===0&&(pi=jh()),pi):(e=H,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e)}function At(e,t,n,r){if(50<Ko)throw Ko=0,eu=null,Error(T(185));vs(e,n,r),((G&2)===0||e!==ve)&&(e===ve&&((G&2)===0&&(la|=n),pe===4&&wn(e,Ie)),Ye(e,r),n===1&&G===0&&(t.mode&1)===0&&(Jr=le()+500,oa&&Bn()))}function Ye(e,t){var n=e.callbackNode;r1(e,t);var r=Si(e,e===ve?Ie:0);if(r===0)n!==null&&cd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cd(n),t===1)e.tag===0?nv(nf.bind(null,e)):yp(nf.bind(null,e)),Z1(function(){(G&6)===0&&Bn()}),n=null;else{switch(Kh(r)){case 1:n=Uu;break;case 4:n=Hh;break;case 16:n=Ci;break;case 536870912:n=Xh;break;default:n=Ci}n=vm(n,dm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dm(e,t){if(hi=-1,pi=0,(G&6)!==0)throw Error(T(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=Si(e,e===ve?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ui(e,r);else{t=r;var o=G;G|=2;var s=hm();(ve!==e||Ie!==t)&&(Jt=null,Jr=le()+500,tr(e,t));do try{$v();break}catch(a){fm(e,a)}while(1);Ju(),Li.current=s,G=o,ce!==null?t=0:(ve=null,Ie=0,t=pe)}if(t!==0){if(t===2&&(o=Rl(e),o!==0&&(r=o,t=tu(e,o))),t===1)throw n=ds,tr(e,0),wn(e,r),Ye(e,le()),n;if(t===6)wn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Cv(o)&&(t=Ui(e,r),t===2&&(s=Rl(e),s!==0&&(r=s,t=tu(e,s))),t===1))throw n=ds,tr(e,0),wn(e,r),Ye(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Hn(e,Xe,Jt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=pc+500-le(),10<t)){if(Si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dl(Hn.bind(null,e,Xe,Jt),t);break}Hn(e,Xe,Jt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Dt(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wv(r/1960))-r,10<r){e.timeoutHandle=Dl(Hn.bind(null,e,Xe,Jt),r);break}Hn(e,Xe,Jt);break;case 5:Hn(e,Xe,Jt);break;default:throw Error(T(329))}}}return Ye(e,le()),e.callbackNode===n?dm.bind(null,e):null}function tu(e,t){var n=jo;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&nu(t)),e}function nu(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Lt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~hc,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function nf(e){if((G&6)!==0)throw Error(T(327));Gr();var t=Si(e,0);if((t&1)===0)return Ye(e,le()),null;var n=Ui(e,t);if(e.tag!==0&&n===2){var r=Rl(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=ds,tr(e,0),wn(e,t),Ye(e,le()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,Xe,Jt),Ye(e,le()),null}function mc(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Jr=le()+500,oa&&Bn())}}function ur(e){Sn!==null&&Sn.tag===0&&(G&6)===0&&Gr();var t=G;G|=1;var n=Ct.transition,r=H;try{if(Ct.transition=null,H=1,e)return e()}finally{H=r,Ct.transition=n,G=t,(G&6)===0&&Bn()}}function gc(){nt=Lr.current,ee(Lr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Y1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Yr(),ee(qe),ee(Pe),sc();break;case 5:oc(r);break;case 4:Yr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:ec(r.type._context);break;case 22:case 23:gc()}n=n.return}if(ve=e,ce=e=_n(e.current,null),Ie=nt=t,pe=0,ds=null,hc=la=lr=0,Xe=jo=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}Qn=null}return e}function fm(e,t){do{var n=ce;try{if(Ju(),ci.current=Ai,Di){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Di=!1}if(ar=0,ge=fe=oe=null,Ho=!1,ls=0,fc.current=null,n===null||n.return===null){pe=1,ds=t,ce=null;break}e:{var s=e,i=n.return,a=n,l=t;if(t=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=zd(i);if(h!==null){h.flags&=-257,Gd(h,i,a,s,t),h.mode&1&&Wd(s,u,t),t=h,l=u;var p=t.updateQueue;if(p===null){var x=new Set;x.add(l),t.updateQueue=x}else p.add(l);break e}else{if((t&1)===0){Wd(s,u,t),xc();break e}l=Error(T(426))}}else if(te&&a.mode&1){var v=zd(i);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Gd(v,i,a,s,t),Yu(Zr(l,a));break e}}s=l=Zr(l,a),pe!==4&&(pe=2),jo===null?jo=[s]:jo.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=qp(s,l,t);Dd(s,m);break e;case 1:a=l;var g=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Nn===null||!Nn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Qp(s,a,t);Dd(s,w);break e}}s=s.return}while(s!==null)}mm(n)}catch(C){t=C,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function hm(){var e=Li.current;return Li.current=Ai,e===null?Ai:e}function xc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||(lr&268435455)===0&&(la&268435455)===0||wn(ve,Ie)}function Ui(e,t){var n=G;G|=2;var r=hm();(ve!==e||Ie!==t)&&(Jt=null,tr(e,t));do try{Sv();break}catch(o){fm(e,o)}while(1);if(Ju(),G=n,Li.current=r,ce!==null)throw Error(T(261));return ve=null,Ie=0,pe}function Sv(){for(;ce!==null;)pm(ce)}function $v(){for(;ce!==null&&!K0();)pm(ce)}function pm(e){var t=xm(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?mm(e):ce=t,fc.current=null}function mm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=mv(n,t,nt),n!==null){ce=n;return}}else{if(n=gv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Hn(e,t,n){var r=H,o=Ct.transition;try{Ct.transition=null,H=1,Ev(e,t,n,r)}finally{Ct.transition=o,H=r}return null}function Ev(e,t,n,r){do Gr();while(Sn!==null);if((G&6)!==0)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(o1(e,s),e===ve&&(ce=ve=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||js||(js=!0,vm(Ci,function(){return Gr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ct.transition,Ct.transition=null;var i=H;H=1;var a=G;G|=4,fc.current=null,vv(e,n),um(n,e),G1(Ol),$i=!!Fl,Ol=Fl=null,e.current=n,yv(n),q0(),G=a,H=i,Ct.transition=s}else e.current=n;if(js&&(js=!1,Sn=e,Bi=o),s=e.pendingLanes,s===0&&(Nn=null),Z0(n.stateNode),Ye(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mi)throw Mi=!1,e=Jl,Jl=null,e;return(Bi&1)!==0&&e.tag!==0&&Gr(),s=e.pendingLanes,(s&1)!==0?e===eu?Ko++:(Ko=0,eu=e):Ko=0,Bn(),null}function Gr(){if(Sn!==null){var e=Kh(Bi),t=Ct.transition,n=H;try{if(Ct.transition=null,H=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Bi=0,(G&6)!==0)throw Error(T(331));var o=G;for(G|=4,P=e.current;P!==null;){var s=P,i=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Xo(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var f=c.sibling,h=c.return;if(im(c),c===u){P=null;break}if(f!==null){f.return=h,P=f;break}P=h}}}var p=s.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&i!==null)i.return=s,P=i;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var g=e.current;for(P=g;P!==null;){i=P;var y=i.child;if((i.subtreeFlags&2064)!==0&&y!==null)y.return=i,P=y;else e:for(i=g;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:aa(9,a)}}catch(C){ie(a,a.return,C)}if(a===i){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(G=o,Bn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{H=n,Ct.transition=t}}return!1}function rf(e,t,n){t=Zr(n,t),t=qp(e,t,1),e=kn(e,t,1),t=We(),e!==null&&(vs(e,1,t),Ye(e,t))}function ie(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Zr(n,e),e=Qp(t,e,1),t=kn(t,e,1),e=We(),t!==null&&(vs(t,1,e),Ye(t,e));break}}t=t.return}}function Iv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Ie&n)===n&&(pe===4||pe===3&&(Ie&130023424)===Ie&&500>le()-pc?tr(e,0):hc|=n),Ye(e,t)}function gm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var n=We();e=un(e,t),e!==null&&(vs(e,t,n),Ye(e,n))}function Tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gm(e,n)}function Rv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),gm(e,n)}var xm;xm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return je=!1,pv(e,t,n);je=(e.flags&131072)!==0}else je=!1,te&&(t.flags&1048576)!==0&&wp(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fi(e,t),e=t.pendingProps;var o=Kr(t,Pe.current);zr(t,n),o=ac(null,t,r,e,o,n);var s=lc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(s=!0,ki(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nc(t),o.updater=sa,t.stateNode=o,o._reactInternals=t,Wl(t,r,e,n),t=Hl(null,t,r,!0,s,n)):(t.tag=0,te&&s&&qu(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nv(r),e=kt(r,e),o){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=jd(null,t,r,e,n);break e;case 11:t=Hd(null,t,r,e,n);break e;case 14:t=Xd(null,t,r,kt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Gl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),jd(e,t,r,o,n);case 3:e:{if(em(t),e===null)throw Error(T(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Ep(e,t),Oi(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Zr(Error(T(423)),t),t=Kd(e,t,r,n,o);break e}else if(r!==o){o=Zr(Error(T(424)),t),t=Kd(e,t,r,n,o);break e}else for(st=Rn(t.stateNode.containerInfo.firstChild),at=t,te=!0,_t=null,n=kp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===o){t=cn(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Np(t),e===null&&Bl(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Pl(r,o)?i=null:s!==null&&Pl(r,s)&&(t.flags|=32),Jp(e,t),Ue(e,t,i,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return tm(e,t,n);case 4:return rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Hd(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,Q(_i,r._currentValue),r._currentValue=i,s!==null)if(Lt(s.value,i)){if(s.children===o.children&&!qe.current){t=cn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ul(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(T(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ul(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zr(t,n),o=St(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),Xd(e,t,r,o,n);case 15:return Yp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),fi(e,t),t.tag=1,Qe(r)?(e=!0,ki(t)):e=!1,zr(t,n),Tp(t,r,o),Wl(t,r,o,n),Hl(null,t,r,!0,e,n);case 19:return nm(e,t,n);case 22:return Zp(e,t,n)}throw Error(T(156,t.tag))};function vm(e,t){return Gh(e,t)}function kv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new kv(e,t,n,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Mu)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")vc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rr:return nr(n.children,o,s,t);case Au:i=8,o|=8;break;case fl:return e=gt(12,n,t,o|2),e.elementType=fl,e.lanes=s,e;case hl:return e=gt(13,n,t,o),e.elementType=hl,e.lanes=s,e;case pl:return e=gt(19,n,t,o),e.elementType=pl,e.lanes=s,e;case Rh:return ua(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ih:i=10;break e;case Th:i=9;break e;case Lu:i=11;break e;case Mu:i=14;break e;case xn:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=gt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function nr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function ua(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Rh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ya(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Za(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fa(0),this.expirationTimes=Fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yc(e,t,n,r,o,s,i,a,l){return e=new bv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(s),e}function _v(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ym(e){if(!e)return Pn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Qe(n))return vp(e,n,t)}return t}function wm(e,t,n,r,o,s,i,a,l){return e=yc(n,r,!0,e,o,s,i,a,l),e.context=ym(null),n=e.current,r=We(),o=bn(n),s=sn(r,o),s.callback=t!=null?t:null,kn(n,s,o),e.current.lanes=o,vs(e,o,r),Ye(e,r),e}function ca(e,t,n,r){var o=t.current,s=We(),i=bn(o);return n=ym(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(o,t,i),e!==null&&(At(e,o,i,s),ui(e,o,i)),i}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){of(e,t),(e=e.alternate)&&of(e,t)}function Fv(){return null}var Cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cc(e){this._internalRoot=e}da.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ca(e,t,null,null)};da.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){ca(null,e,null,null)}),t[ln]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Jh(e)}};function Sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function Ov(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=Vi(i);s.call(u)}}var i=wm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=i,e[ln]=i.current,rs(e.nodeType===8?e.parentNode:e),ur(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Vi(l);a.call(u)}}var l=yc(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=l,e[ln]=l.current,rs(e.nodeType===8?e.parentNode:e),ur(function(){ca(t,l,n,r)}),l}function ha(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var a=o;o=function(){var l=Vi(i);a.call(l)}}ca(t,i,e,o)}else i=Ov(n,t,e,o,r);return Vi(i)}qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Po(t.pendingLanes);n!==0&&(Vu(t,n|1),Ye(t,le()),(G&6)===0&&(Jr=le()+500,Bn()))}break;case 13:ur(function(){var r=un(e,1);if(r!==null){var o=We();At(r,e,1,o)}}),wc(e,1)}};Wu=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=We();At(t,e,134217728,n)}wc(e,134217728)}};Qh=function(e){if(e.tag===13){var t=bn(e),n=un(e,t);if(n!==null){var r=We();At(n,e,t,r)}wc(e,t)}};Yh=function(){return H};Zh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};El=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ra(r);if(!o)throw Error(T(90));Nh(r),xl(r,o)}}}break;case"textarea":_h(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};Mh=mc;Bh=ur;var Pv={usingClientEntryPoint:!1,Events:[ws,_r,ra,Ah,Lh,mc]},No={findFiberByHostInstance:qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dv={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wh(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||Fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Ji=Ks.inject(Dv),jt=Ks}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(t))throw Error(T(200));return _v(e,t,null,n)};ut.createRoot=function(e,t){if(!Sc(e))throw Error(T(299));var n=!1,r="",o=Cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yc(e,1,!1,null,null,n,!1,r,o),e[ln]=t.current,rs(e.nodeType===8?e.parentNode:e),new Cc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Wh(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return ur(e)};ut.hydrate=function(e,t,n){if(!fa(t))throw Error(T(200));return ha(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Sc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=Cm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=wm(t,null,e,1,n!=null?n:null,o,!1,s,i),e[ln]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new da(t)};ut.render=function(e,t,n){if(!fa(t))throw Error(T(200));return ha(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!fa(e))throw Error(T(40));return e._reactRootContainer?(ur(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ut.unstable_batchedUpdates=mc;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fa(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ha(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(wh);var af=wh.exports;cl.createRoot=af.createRoot,cl.hydrateRoot=af.hydrateRoot;const Sm=""+new URL("fridgeIcon.97012f15.svg",import.meta.url).href,$m=""+new URL("shoppingListIcon.70620fbc.svg",import.meta.url).href,Em=""+new URL("addIcon.7c9d948d.svg",import.meta.url).href,Im=""+new URL("recipesIcon.d15338b0.svg",import.meta.url).href,Tm=""+new URL("profileIcon.2de9275c.svg",import.meta.url).href,Rm=""+new URL("fridgeIconOrange.0b78ac9d.svg",import.meta.url).href,km=""+new URL("shoppingListIconOrange.b2fcba21.svg",import.meta.url).href,Nm=""+new URL("recipesIconOrange.7631000b.svg",import.meta.url).href,bm=""+new URL("profileIconOrange.f8914b28.svg",import.meta.url).href;var pa={exports:{}},ma={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=ot.exports,Lv=Symbol.for("react.element"),Mv=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,Uv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vv={key:!0,ref:!0,__self:!0,__source:!0};function _m(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Bv.call(t,r)&&!Vv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Lv,type:e,key:s,ref:i,props:o,_owner:Uv.current}}ma.Fragment=Mv;ma.jsx=_m;ma.jsxs=_m;(function(e){e.exports=ma})(pa);const Wv=pa.exports.Fragment,U=pa.exports.jsx,rt=pa.exports.jsxs,zv=()=>{const[e,t]=ot.exports.useState(!1),[n,r]=ot.exports.useState(!1),[o,s]=ot.exports.useState(!1),[i,a]=ot.exports.useState(!1),[l,u]=ot.exports.useState(!1),c=()=>{u(!0),setTimeout(()=>{u(!1)},5e3)};return U(Wv,{children:l?rt("div",{className:"NavbarMobile",children:[rt("div",{className:"NavBtnContainerMobile",onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[e?U("img",{src:Rm,className:"NavBtnsMobile"}):U("img",{src:Sm,className:"NavBtnsMobile"}),U("p",{children:"My Fridge"})]}),rt("div",{className:"NavBtnContainerMobile NavBtnContainerMobileShoppingList",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[n?U("img",{src:km,className:"NavBtnsMobile"}):U("img",{src:$m,className:"NavBtnsMobile"}),U("p",{children:"Shopping List"})]}),rt("div",{className:"NavBtnContainerMobile ",children:[U("img",{src:Em,alt:"",className:"NavBtnsMobile NavBtnMobileMiddle"}),U("p",{children:"Add Food"})]}),rt("div",{className:"NavBtnContainerMobile",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:[o?U("img",{src:Nm,alt:"",className:"NavBtnsMobile"}):U("img",{src:Im,alt:"",className:"NavBtnsMobile"}),U("p",{children:"Recipes"})]}),rt("div",{className:"NavBtnContainerMobile",onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},children:[i?U("img",{src:bm,alt:"",className:"NavBtnsMobile"}):U("img",{src:Tm,alt:"",className:"NavBtnsMobile"}),U("p",{children:"My profile"})]})]}):U("div",{className:"ClosedMobileNavbar",onClick:()=>{c()},children:U("span",{})})})};const Gv=()=>{const[e,t]=ot.exports.useState(!1),[n,r]=ot.exports.useState(!1),[o,s]=ot.exports.useState(!1),[i,a]=ot.exports.useState(!1);return rt("div",{className:"NavbarDesktop",children:[rt("div",{className:"NavBtnContainerDesktop",onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[e?U("img",{src:Rm,className:"NavBtnsDesktop"}):U("img",{src:Sm,className:"NavBtnsDesktop"}),U("p",{children:"My Fridge"})]}),rt("div",{className:"NavBtnContainerDesktop NavBtnContainerShoppingListDesktop",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[n?U("img",{src:km,className:"NavBtnsDesktop"}):U("img",{src:$m,className:"NavBtnsDesktop"}),U("p",{children:"Shopping List"})]}),rt("div",{className:"NavBtnContainerDesktop NavBtnContainerMiddleDesktop",children:[U("p",{children:"Add Food"}),U("img",{src:Em,alt:"",className:"NavBtns NavBtnMiddleDesktop"})]}),rt("div",{className:"NavBtnContainerDesktop",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:[o?U("img",{src:Nm,alt:"",className:"NavBtnsDesktop"}):U("img",{src:Im,alt:"",className:"NavBtnsDesktop"}),U("p",{children:"Recipes"})]}),rt("div",{className:"NavBtnContainerDesktop",onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},children:[i?U("img",{src:bm,alt:"",className:"NavBtnsDesktop"}):U("img",{src:Tm,alt:"",className:"NavBtnsDesktop"}),U("p",{children:"My profile"})]})]})};const Hv=e=>rt("div",{className:"PageTemplate",children:[U(Gv,{}),U(zv,{}),U("div",{className:"Content",children:e.children})]});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xv=1e-7,jv=1e-4;class Kv{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Fm{refCount(t){return He("refCount")}incRef(t){return He("incRef")}timerAvailable(){return!0}time(t){return He("time")}read(t){return He("read")}readSync(t){return He("readSync")}readToGPU(t,n){return He("readToGPU")}numDataIds(){return He("numDataIds")}disposeData(t,n){return He("disposeData")}write(t,n,r){return He("write")}move(t,n,r,o,s){return He("move")}createTensorFromTexture(t,n,r){return He("createTensorFromTexture")}memory(){return He("memory")}floatPrecision(){return He("floatPrecision")}epsilon(){return this.floatPrecision()===32?Xv:jv}dispose(){return He("dispose")}}function He(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wi(e,t,n){return Math.max(e,Math.min(t,n))}function $c(e){return e%2===0?e:e+1}function bo(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function qv(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function O(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Om(e,t,n=""){O(we(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function eo(e,t=[],n=!1){if(t==null&&(t=[]),Array.isArray(e)||qt(e)&&!n)for(let r=0;r<e.length;++r)eo(e[r],t,n);else t.push(e);return t}function b(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function we(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function zi(e){return e%1===0}function ru(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function Hr(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function lf(e,t=o=>0,n,r){return new Promise((o,s)=>{let i=0;const a=()=>{if(e()){o();return}i++;const l=t(i);if(n!=null&&i>=n){s();return}r!=null?r(a,l):setTimeout(a,l)};a()})}function Qv(e,t){let n=1,r=-1;for(let s=0;s<e.length;++s)if(e[s]>=0)n*=e[s];else if(e[s]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${s}`);r=s}else if(e[s]<0)throw Error(`Shapes can not be < 0. Found ${e[s]} at dim ${s}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const o=e.slice();return o[r]=t/n,o}function Ae(e,t){const n=t.length;return e=e==null?t.map((r,o)=>o):[].concat(e),O(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),O(e.every(r=>zi(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function gr(e,t){const n=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||o?null:Ae(t,e).sort();let i=0;for(let a=0;a<e.length;++a){if(s!=null){if(s[i]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(s[i]==null||s[i]>a)&&e[a]===1&&(n.push(e[a]),r.push(a)),s[i]<=a&&i++}e[a]!==1&&(n.push(e[a]),r.push(a))}return{newShape:n,keptDims:r}}function Dn(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Ee(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Yv(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Zv(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Jv(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function qt(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function ou(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function ey(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function ga(e){return typeof e=="string"||e instanceof String}function ty(e){return typeof e=="boolean"}function ny(e){return typeof e=="number"}function xa(e){return Array.isArray(e)?xa(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":ny(e)?"float32":ga(e)?"string":ty(e)?"bool":"float32"}function uf(e){return!!(e&&e.constructor&&e.call&&e.apply)}function su(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function ye(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Pm(e,t,n,r=!1){const o=new Array;if(t.length===1){const s=t[0]*(r?2:1);for(let i=0;i<s;i++)o[i]=n[e+i]}else{const s=t[0],i=t.slice(1),a=i.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<s;l++)o[l]=Pm(e+l*a,i,n,r)}return o}function cf(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((o,s)=>o*s)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Pm(0,e,t,n)}function ry(e,t){const n=An(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function An(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function Dm(e){e.forEach(t=>{O(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function iu(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let o=0;o<e.length-1;++o)r+=n[o]*e[o];return r}function Ec(e,t,n){if(t===0)return[];if(t===1)return[e];const r=new Array(t);for(let o=0;o<r.length-1;++o)r[o]=Math.floor(e/n[o]),e-=r[o]*n[o];return r[r.length-1]=e,r}function Am(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const df="tfjsflags";class oy{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=sy,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const o=this.urlFlags[t];S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(Am(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);df in t&&t[df].split(",").forEach(r=>{const[o,s]=r.split(":");this.urlFlags[o]=ay(o,s)})}}function sy(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(iy(t,r[0],r[1]),r.join("="))),t}function iy(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function ay(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function S(){return Lm}let Lm=null;function ly(e){Lm=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ja;function Mm(){if(Ja==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Ja=e}return Ja}function uy(){const e=Mm();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function Ic(e,t){const n=uy();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const cy="Abs",dy="Acos",fy="Acosh",Bm="Add",hy="AddN",py="All",my="Any",gy="ArgMax",xy="ArgMin",vy="Asin",yy="Asinh",wy="Atan",Cy="Atanh",Sy="Atan2",$y="AvgPool",Ey="AvgPoolGrad",Iy="AvgPool3D",Ty="AvgPool3DGrad",Ry="BatchMatMul",ky="BatchToSpaceND",Ny="Bincount",by="BroadcastArgs",Tc="Cast",_y="Ceil",Fy="ClipByValue",Um="Complex",Oy="ComplexAbs",Py="Concat",Dy="Conv2D",Ay="Conv2DBackpropFilter",Ly="Conv2DBackpropInput",My="Conv3D",By="Conv3DBackpropFilterV2",Uy="Conv3DBackpropInputV2",Vy="Cos",Wy="Cosh",zy="Cumprod",Gy="Cumsum",Hy="CropAndResize",Xy="DenseBincount",jy="DepthToSpace",Ky="DepthwiseConv2dNative",qy="DepthwiseConv2dNativeBackpropFilter",Qy="DepthwiseConv2dNativeBackpropInput",Yy="Diag",Zy="Dilation2D",Jy="RealDiv",ew="Einsum",Vm="Elu",tw="EluGrad",nw="Erf",rw="Equal",ow="Exp",sw="ExpandDims",iw="Expm1",aw="FFT",lw="Fill",uw="FlipLeftRight",cw="Floor",dw="FloorDiv",fw="FusedBatchNorm",hw="GatherV2",pw="GatherNd",mw="Greater",gw="GreaterEqual",Rc="Identity",xw="IFFT",vw="Imag",yw="IsFinite",ww="IsInf",Cw="IsNan",Wm="LeakyRelu",Sw="Less",$w="LessEqual",Ew="LinSpace",Iw="Log",Tw="Log1p",Rw="LogicalAnd",kw="LogicalNot",Nw="LogicalOr",bw="LRN",_w="LRNGrad",Fw="Max",Ow="Maximum",Pw="MaxPool",Dw="MaxPoolGrad",Aw="MaxPool3D",Lw="MaxPool3DGrad",Mw="MaxPoolWithArgmax",Bw="Mean",Uw="Min",Vw="Minimum",Ww="MirrorPad",zw="Mod",Gw="Multinomial",zm="Multiply",Hw="Neg",Xw="NotEqual",jw="NonMaxSuppressionV3",Kw="NonMaxSuppressionV4",qw="NonMaxSuppressionV5",Qw="OnesLike",Yw="OneHot",Zw="Pack",Jw="PadV2",eC="Pow",Gm="Prelu",tC="Prod",nC="RaggedGather",rC="RaggedRange",oC="RaggedTensorToTensor",sC="Range",iC="Real",aC="Reciprocal",Hm="Relu",Xm="Reshape",lC="ResizeNearestNeighbor",uC="ResizeNearestNeighborGrad",cC="ResizeBilinear",dC="ResizeBilinearGrad",jm="Relu6",fC="Reverse",hC="Round",pC="Rsqrt",mC="ScatterNd",gC="SearchSorted",xC="Select",vC="Selu",yC="Slice",wC="Sin",CC="Sinh",SC="Sign",Km="Sigmoid",$C="Softplus",EC="Sqrt",qm="Sum",IC="SpaceToBatchND",TC="SplitV",RC="Softmax",kC="SparseFillEmptyRows",NC="SparseReshape",bC="SparseSegmentMean",_C="SparseSegmentSum",FC="SparseToDense",OC="SquaredDifference",PC="Square",DC="StridedSlice",AC="StringNGrams",LC="StringSplit",MC="StringToHashBucketFast",BC="Sub",UC="Tan",VC="Tanh",Qm="Tile",WC="TopK",zC="Transform",GC="Transpose",HC="Unique",XC="Unpack",jC="UnsortedSegmentSum",KC="ZerosLike",Ym="Step",qC="FromPixels",QC="RotateWithOffset",YC="_FusedMatMul",ZC="FusedConv2D",JC="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pt(...e){S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(...e)}function eS(...e){S().getBool("IS_TEST")||S().getBool("PROD")||console.log(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gi=Ic("kernelRegistry",()=>new Map),tS=Ic("gradRegistry",()=>new Map);function ff(e,t){const n=Zm(e,t);return Gi.get(n)}function hf(e){return tS.get(e)}function pf(e){const t=Gi.entries(),n=[];for(;;){const{done:r,value:o}=t.next();if(r)break;const[s,i]=o,[a]=s.split("_");a===e&&n.push(i)}return n}function nS(e){const{kernelName:t,backendName:n}=e,r=Zm(t,n);Gi.has(r)&&Pt(`The kernel '${t}' for backend '${n}' is already registered`),Gi.set(r,e)}function Zm(e,t){return`${t}_${e}`}var au=Y,xt=null;try{xt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Y(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}Y.prototype.__isLong__;Object.defineProperty(Y.prototype,"__isLong__",{value:!0});function et(e){return(e&&e.__isLong__)===!0}Y.isLong=et;var mf={},gf={};function xr(e,t){var n,r,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(r=gf[e],r)?r:(n=Z(e,(e|0)<0?-1:0,!0),o&&(gf[e]=n),n)):(e|=0,(o=-128<=e&&e<128)&&(r=mf[e],r)?r:(n=Z(e,e<0?-1:0,!1),o&&(mf[e]=n),n))}Y.fromInt=xr;function vt(e,t){if(isNaN(e))return t?Zn:yt;if(t){if(e<0)return Zn;if(e>=Jm)return ng}else{if(e<=-vf)return Ke;if(e+1>=vf)return tg}return e<0?vt(-e,t).neg():Z(e%to|0,e/to|0,t)}Y.fromNumber=vt;function Z(e,t,n){return new Y(e,t,n)}Y.fromBits=Z;var Hi=Math.pow;function kc(e,t,n){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return yt;if(typeof t=="number"?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return kc(e.substring(1),t,n).neg();for(var o=vt(Hi(n,8)),s=yt,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+a),n);if(a<8){var u=vt(Hi(n,a));s=s.mul(u).add(vt(l))}else s=s.mul(o),s=s.add(vt(l))}return s.unsigned=t,s}Y.fromString=kc;function Bt(e,t){return typeof e=="number"?vt(e,t):typeof e=="string"?kc(e,t):Z(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}Y.fromValue=Bt;var xf=1<<16,rS=1<<24,to=xf*xf,Jm=to*to,vf=Jm/2,yf=xr(rS),yt=xr(0);Y.ZERO=yt;var Zn=xr(0,!0);Y.UZERO=Zn;var Mr=xr(1);Y.ONE=Mr;var eg=xr(1,!0);Y.UONE=eg;var lu=xr(-1);Y.NEG_ONE=lu;var tg=Z(-1,2147483647,!1);Y.MAX_VALUE=tg;var ng=Z(-1,-1,!0);Y.MAX_UNSIGNED_VALUE=ng;var Ke=Z(0,-2147483648,!1);Y.MIN_VALUE=Ke;var N=Y.prototype;N.toInt=function(){return this.unsigned?this.low>>>0:this.low};N.toNumber=function(){return this.unsigned?(this.high>>>0)*to+(this.low>>>0):this.high*to+(this.low>>>0)};N.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Ke)){var n=vt(t),r=this.div(n),o=r.mul(n).sub(this);return r.toString(t)+o.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=vt(Hi(t,6),this.unsigned),i=this,a="";;){var l=i.div(s),u=i.sub(l.mul(s)).toInt()>>>0,c=u.toString(t);if(i=l,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};N.getHighBits=function(){return this.high};N.getHighBitsUnsigned=function(){return this.high>>>0};N.getLowBits=function(){return this.low};N.getLowBitsUnsigned=function(){return this.low>>>0};N.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Ke)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,n=31;n>0&&(t&1<<n)==0;n--);return this.high!=0?n+33:n+1};N.isZero=function(){return this.high===0&&this.low===0};N.eqz=N.isZero;N.isNegative=function(){return!this.unsigned&&this.high<0};N.isPositive=function(){return this.unsigned||this.high>=0};N.isOdd=function(){return(this.low&1)===1};N.isEven=function(){return(this.low&1)===0};N.equals=function(t){return et(t)||(t=Bt(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};N.eq=N.equals;N.notEquals=function(t){return!this.eq(t)};N.neq=N.notEquals;N.ne=N.notEquals;N.lessThan=function(t){return this.comp(t)<0};N.lt=N.lessThan;N.lessThanOrEqual=function(t){return this.comp(t)<=0};N.lte=N.lessThanOrEqual;N.le=N.lessThanOrEqual;N.greaterThan=function(t){return this.comp(t)>0};N.gt=N.greaterThan;N.greaterThanOrEqual=function(t){return this.comp(t)>=0};N.gte=N.greaterThanOrEqual;N.ge=N.greaterThanOrEqual;N.compare=function(t){if(et(t)||(t=Bt(t)),this.eq(t))return 0;var n=this.isNegative(),r=t.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};N.comp=N.compare;N.negate=function(){return!this.unsigned&&this.eq(Ke)?Ke:this.not().add(Mr)};N.neg=N.negate;N.add=function(t){et(t)||(t=Bt(t));var n=this.high>>>16,r=this.high&65535,o=this.low>>>16,s=this.low&65535,i=t.high>>>16,a=t.high&65535,l=t.low>>>16,u=t.low&65535,c=0,d=0,f=0,h=0;return h+=s+u,f+=h>>>16,h&=65535,f+=o+l,d+=f>>>16,f&=65535,d+=r+a,c+=d>>>16,d&=65535,c+=n+i,c&=65535,Z(f<<16|h,c<<16|d,this.unsigned)};N.subtract=function(t){return et(t)||(t=Bt(t)),this.add(t.neg())};N.sub=N.subtract;N.multiply=function(t){if(this.isZero())return yt;if(et(t)||(t=Bt(t)),xt){var n=xt.mul(this.low,this.high,t.low,t.high);return Z(n,xt.get_high(),this.unsigned)}if(t.isZero())return yt;if(this.eq(Ke))return t.isOdd()?Ke:yt;if(t.eq(Ke))return this.isOdd()?Ke:yt;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(yf)&&t.lt(yf))return vt(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,o=this.high&65535,s=this.low>>>16,i=this.low&65535,a=t.high>>>16,l=t.high&65535,u=t.low>>>16,c=t.low&65535,d=0,f=0,h=0,p=0;return p+=i*c,h+=p>>>16,p&=65535,h+=s*c,f+=h>>>16,h&=65535,h+=i*u,f+=h>>>16,h&=65535,f+=o*c,d+=f>>>16,f&=65535,f+=s*u,d+=f>>>16,f&=65535,f+=i*l,d+=f>>>16,f&=65535,d+=r*c+o*u+s*l+i*a,d&=65535,Z(h<<16|p,d<<16|f,this.unsigned)};N.mul=N.multiply;N.divide=function(t){if(et(t)||(t=Bt(t)),t.isZero())throw Error("division by zero");if(xt){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var n=(this.unsigned?xt.div_u:xt.div_s)(this.low,this.high,t.low,t.high);return Z(n,xt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Zn:yt;var r,o,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Zn;if(t.gt(this.shru(1)))return eg;s=Zn}else{if(this.eq(Ke)){if(t.eq(Mr)||t.eq(lu))return Ke;if(t.eq(Ke))return Mr;var i=this.shr(1);return r=i.div(t).shl(1),r.eq(yt)?t.isNegative()?Mr:lu:(o=this.sub(t.mul(r)),s=r.add(o.div(t)),s)}else if(t.eq(Ke))return this.unsigned?Zn:yt;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=yt}for(o=this;o.gte(t);){r=Math.max(1,Math.floor(o.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(r)/Math.LN2),l=a<=48?1:Hi(2,a-48),u=vt(r),c=u.mul(t);c.isNegative()||c.gt(o);)r-=l,u=vt(r,this.unsigned),c=u.mul(t);u.isZero()&&(u=Mr),s=s.add(u),o=o.sub(c)}return s};N.div=N.divide;N.modulo=function(t){if(et(t)||(t=Bt(t)),xt){var n=(this.unsigned?xt.rem_u:xt.rem_s)(this.low,this.high,t.low,t.high);return Z(n,xt.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};N.mod=N.modulo;N.rem=N.modulo;N.not=function(){return Z(~this.low,~this.high,this.unsigned)};N.and=function(t){return et(t)||(t=Bt(t)),Z(this.low&t.low,this.high&t.high,this.unsigned)};N.or=function(t){return et(t)||(t=Bt(t)),Z(this.low|t.low,this.high|t.high,this.unsigned)};N.xor=function(t){return et(t)||(t=Bt(t)),Z(this.low^t.low,this.high^t.high,this.unsigned)};N.shiftLeft=function(t){return et(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Z(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Z(0,this.low<<t-32,this.unsigned)};N.shl=N.shiftLeft;N.shiftRight=function(t){return et(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Z(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Z(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};N.shr=N.shiftRight;N.shiftRightUnsigned=function(t){if(et(t)&&(t=t.toInt()),t&=63,t===0)return this;var n=this.high;if(t<32){var r=this.low;return Z(r>>>t|n<<32-t,n>>>t,this.unsigned)}else return t===32?Z(n,0,this.unsigned):Z(n>>>t-32,0,this.unsigned)};N.shru=N.shiftRightUnsigned;N.shr_u=N.shiftRightUnsigned;N.toSigned=function(){return this.unsigned?Z(this.low,this.high,!1):this};N.toUnsigned=function(){return this.unsigned?this:Z(this.low,this.high,!0)};N.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};N.toBytesLE=function(){var t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};N.toBytesBE=function(){var t=this.high,n=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};Y.fromBytes=function(t,n,r){return r?Y.fromBytesLE(t,n):Y.fromBytesBE(t,n)};Y.fromBytesLE=function(t,n){return new Y(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,n)};Y.fromBytesBE=function(t,n){return new Y(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],n)};const oS=g0({__proto__:null,default:au},[au]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jn=au||oS;function va(e){return jn.fromString(e,!0,16)}const rg=va("c3a5c85c97cb3127"),Xn=va("b492b66fbe98f273"),Fe=va("9ae16a3b2f90404f");function uu(e){return e.xor(e.shru(47))}function og(e,t,n){const r=e.slice(t,t+n);return jn.fromBytes(Array.from(r),!0,!0)}function K(e,t){return og(e,t,8)}function wf(e,t){return og(e,t,4)}function he(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Fn(e,t,n=va("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let o=t.xor(r).mul(n);return o=o.xor(o.shru(47)),o=o.mul(n),o}function sS(e,t,n,r,o,s){o=o.add(e),s=he(s.add(o).add(r),21);const i=o;return o=o.add(t),o=o.add(n),s=s.add(he(o,44)),[o.add(r),s.add(i)]}function qs(e,t,n,r){return sS(K(e,t),K(e,t+8),K(e,t+16),K(e,t+24),n,r)}function iS(e,t=e.length){if(t>=8){const n=Fe.add(t*2),r=K(e,0).add(Fe),o=K(e,t-8),s=he(o,37).mul(n).add(r),i=he(r,25).add(o).mul(n);return Fn(s,i,n)}if(t>=4){const n=Fe.add(t*2),r=wf(e,0);return Fn(r.shl(3).add(t),wf(e,t-4),n)}if(t>0){const n=e[0],r=e[t>>1],o=e[t-1],s=n+(r<<8),i=t+(o<<2);return uu(Fe.mul(s).xor(rg.mul(i))).mul(Fe)}return Fe}function aS(e,t=e.length){const n=Fe.add(t*2),r=K(e,0).mul(Xn),o=K(e,8),s=K(e,t-8).mul(n),i=K(e,t-16).mul(Fe);return Fn(he(r.add(o),43).add(he(s,30)).add(i),r.add(he(o.add(Fe),18)).add(s),n)}function lS(e,t=e.length){const n=Fe.add(t*2),r=K(e,0).mul(Fe),o=K(e,8),s=K(e,t-8).mul(n),i=K(e,t-16).mul(Fe),a=he(r.add(o),43).add(he(s,30)).add(i),l=Fn(a,r.add(he(o.add(Fe),18)).add(s),n),u=K(e,16).mul(n),c=K(e,24),d=a.add(K(e,t-32)).mul(n),f=l.add(K(e,t-24)).mul(n);return Fn(he(u.add(c),43).add(he(d,30)).add(f),u.add(he(c.add(r),18)).add(d),n)}function uS(e,t=e.length){const n=jn.fromNumber(81,!0);if(t<=32)return t<=16?iS(e,t):aS(e,t);if(t<=64)return lS(e,t);let r=n,o=n.mul(Xn).add(113),s=uu(o.mul(Fe).add(113)).mul(Fe),i=[jn.UZERO,jn.UZERO],a=[jn.UZERO,jn.UZERO];r=r.mul(Fe).add(K(e,0));let l=0;const u=(t-1>>6)*64,c=u+(t-1&63)-63;do r=he(r.add(o).add(i[0]).add(K(e,l+8)),37).mul(Xn),o=he(o.add(i[1]).add(K(e,l+48)),42).mul(Xn),r=r.xor(a[1]),o=o.add(i[0]).add(K(e,l+40)),s=he(s.add(a[0]),33).mul(Xn),i=qs(e,l,i[1].mul(Xn),r.add(a[0])),a=qs(e,l+32,s.add(a[1]),o.add(K(e,l+16))),[s,r]=[r,s],l+=64;while(l!==u);const d=Xn.add(s.and(255).shl(1));return l=c,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),r=he(r.add(o).add(i[0]).add(K(e,l+8)),37).mul(d),o=he(o.add(i[1]).add(K(e,l+48)),42).mul(d),r=r.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(K(e,l+40))),s=he(s.add(a[0]),33).mul(d),i=qs(e,l,i[1].mul(d),r.add(a[0])),a=qs(e,l+32,s.add(a[1]),o.add(K(e,l+16))),[s,r]=[r,s],Fn(Fn(i[0],a[0],d).add(uu(o).mul(rg)).add(s),Fn(i[1],a[1],d).add(r),d)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function co(e,t){return t==="string"?rr(e):ya([e],t)}function cS(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function ya(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=eo(e)),S().getBool("DEBUG")&&Yv(e,t),cS(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function bt(){return S().platform.now()}function rr(e,t="utf-8"){return t=t||"utf-8",S().platform.encode(e,t)}function no(e,t="utf-8"){return t=t||"utf-8",S().platform.decode(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dS{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new hS)}profileKernel(t,n,r){let o;const s=()=>{o=r()};let i;const a=bt();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(const u of o)u.dataSync();i=Promise.resolve({kernelMs:bt()-a})}if(S().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<o.length;u++){const c=o[u];c.data().then(d=>{fS(d,c.dtype,t)})}return{kernelName:t,outputs:o,inputs:n,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:o,inputs:s,extraInfo:i}=t;r.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(n,a,l[0],l[1],s,l[2])})})}}function fS(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const o=e[r];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${n}'`),!0}return!1}class hS{logKernelProfile(t,n,r,o,s,i){const a=typeof o=="number"?Hr(`${o}ms`,9):o.error,l=Hr(t,25),u=n.rank,c=n.size,d=Hr(n.shape.toString(),14);let f="";for(const h in s){const p=s[h];if(p!=null){const x=p.shape||n.shape,v=x.length;f+=`${h}: ${v}D ${v>0?x:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${d}	%c${c}	%c${f}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pS(e,t,n){const r={},o={};for(let l=0;l<t.length;l++)r[t[l].id]=!0;for(let l=0;l<e.length;l++){const u=e[l],c=u.inputs;for(const d in c){const f=c[d];let h=!1;for(let p=0;p<t.length;p++)if(r[f.id]){u.outputs.forEach(x=>r[x.id]=!0),h=!0,o[u.id]=!0;break}if(h)break}}const s={};s[n.id]=!0;const i={};for(let l=e.length-1;l>=0;l--){const u=e[l],c=u.inputs;for(let d=0;d<u.outputs.length;d++)if(s[u.outputs[d].id]){for(const f in c)s[c[f].id]=!0,i[u.id]=!0;break}}const a=[];for(let l=0;l<e.length;l++){const u=e[l];if(o[u.id]&&i[u.id]){const c={};for(const f in u.inputs){const h=u.inputs[f];r[h.id]&&(c[f]=h)}const d=Object.assign({},u);d.inputs=c,d.outputs=u.outputs,a.push(d)}}return a}function mS(e,t,n,r){for(let o=t.length-1;o>=0;o--){const s=t[o],i=[];if(s.outputs.forEach(l=>{const u=e[l.id];u!=null?i.push(u):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const a=s.gradient(i);for(const l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const u=n(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=s.inputs[l];if(!we(u.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(e[c.id]==null)e[c.id]=u;else{const d=e[c.id];e[c.id]=r(d,u),d.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cf=20,_o=3,el=7;function gS(e,t,n,r){const o=ye(t),s=xS(e,t,n,o),i=t.length,a=gi(e,t,n,o,s),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function xS(e,t,n,r){const o=b(t),s=r[r.length-1],i=new Array(s).fill(0),a=t.length,l=n==="complex64"?Lo(e):e;if(a>1)for(let u=0;u<o/s;u++){const c=u*s;for(let d=0;d<s;d++)i[d]=Math.max(i[d],Ao(l[c+d],0,n).length)}return i}function Ao(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(el))} + ${parseFloat(e[1].toFixed(el))}j`:ga(e)?r=`'${e}'`:n==="bool"?r=sg(e):r=parseFloat(e.toFixed(el)).toString(),Hr(r,t)}function sg(e){return e===0?"false":"true"}function gi(e,t,n,r,o,s=!0){const i=n==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(n==="complex64"){const x=Lo(e);return[Ao(x[0],0,n)]}return n==="bool"?[sg(e[0])]:[e[0].toString()]}if(l===1){if(a>Cf){const v=_o*i;let m=Array.from(e.slice(0,v)),g=Array.from(e.slice((a-_o)*i,a*i));return n==="complex64"&&(m=Lo(m),g=Lo(g)),["["+m.map((y,w)=>Ao(y,o[w],n)).join(", ")+", ..., "+g.map((y,w)=>Ao(y,o[a-_o+w],n)).join(", ")+"]"]}const x=n==="complex64"?Lo(e):Array.from(e);return["["+x.map((v,m)=>Ao(v,o[m],n)).join(", ")+"]"]}const u=t.slice(1),c=r.slice(1),d=r[0]*i,f=[];if(a>Cf){for(let x=0;x<_o;x++){const v=x*d,m=v+d;f.push(...gi(e.slice(v,m),u,n,c,o,!1))}f.push("...");for(let x=a-_o;x<a;x++){const v=x*d,m=v+d;f.push(...gi(e.slice(v,m),u,n,c,o,x===a-1))}}else for(let x=0;x<a;x++){const v=x*d,m=v+d;f.push(...gi(e.slice(v,m),u,n,c,o,x===a-1))}const h=l===2?",":"";f[0]="["+f[0]+h;for(let x=1;x<f.length-1;x++)f[x]=" "+f[x]+h;let p=`,
`;for(let x=2;x<l;x++)p+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(s?"":p),f}function Lo(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cu{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=b(t),r!=null){const o=r.length;O(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Ee(n,this.size),this.strides=ye(t)}set(t,...n){n.length===0&&(n=[0]),O(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const o of t){if(o<0||o>=this.shape[n]){const s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}n++}let r=t[t.length-1];for(let o=0;o<t.length-1;++o)r+=this.strides[o]*t[o];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return Ft().makeTensor(this.values,this.shape,this.dtype)}}let Ft=null,Er=null;function vS(e){Ft=e}function yS(e){Er=e}class mt{constructor(t,n,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=b(t),this.strides=ye(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Er.buffer(this.shape,this.dtype,t)}bufferSync(){return Er.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return cf(this.shape,t,this.dtype==="complex64")}arraySync(){return cf(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Ft().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>no(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Ft().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Ft().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>no(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Ft().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Ft().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Er.print(this,t)}clone(){return this.throwIfDisposed(),Er.clone(this)}toString(t=!1){const n=this.dataSync();return gS(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Er.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),Ft().makeVariable(this,t,n,r)}}Object.defineProperty(mt,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function wS(){return Ic("Tensor",()=>mt)}wS();class du extends mt{constructor(t,n,r,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!we(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Ft().disposeTensor(this),this.dataId=t.dataId,Ft().incRef(this,null)}dispose(){Ft().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(du,Symbol.hasInstance,{value:e=>e instanceof mt&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Sf;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Sf||(Sf={}));var fu;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(fu||(fu={}));var hu;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(hu||(hu={}));var pu;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(pu||(pu={}));var mu;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(mu||(mu={}));const CS={float32:pu,int32:fu,bool:hu,complex64:mu};function Qt(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return CS[e][t]}function Nc(e){return Qt(e,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SS(e,t){if(e.dtype===t.dtype)return[e,t];const n=Qt(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function $S(e){const t=[];return ig(e,t,new Set),t}function ig(e,t,n){if(e==null)return;if(e instanceof mt){t.push(e);return}if(!ES(e))return;const r=e;for(const o in r){const s=r[o];n.has(s)||(n.add(s),ig(s,t,n))}}function ES(e){return Array.isArray(e)||typeof e=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tl(e){return e.kernelName!=null}class $f{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class ro{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new $f}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(Pt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new dS(this.backendInstance),!0}setupRegisteredKernels(){pf(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){pf(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Fm)&&typeof r.then=="function"){const o=++this.pendingBackendInitId,s=r.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Pt(`Initialization of backend ${t} failed`),Pt(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return Pt(`Initialization of backend ${t} failed`),Pt(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:o,asyncInit:s}=this.initializeBackend(r);if(s||o)return{name:r,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),o=r.backend,s=this.readSync(n),i=o.refCount(n);o.disposeData(n,!0),r.backend=t,t.move(n,s,r.shape,r.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let o;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(o),()=>(o=n(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,n,r){t();try{const o=r();return n(),o}catch(o){throw n(),o}}nextTensorId(){return ro.nextTensorId++}nextVariableId(){return ro.nextVariableId++}clone(t){const n=j.runKernel(Rc,{x:t}),r={x:t},o=i=>({x:()=>{const a="float32",l={x:i},u={dtype:a};return j.runKernel(Tc,l,u)}}),s=[];return this.addTapeNode(this.state.activeScope.name,r,[n],o,s,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(ff(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const o=this.backend.numDataIds();let s=0;r.forEach(l=>{s+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-n-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const o=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const u=tl(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(tl(t)){const{kernelName:p,inputs:x,attrs:v}=t;this.backendName==null&&this.backend;const m=ff(p,this.backendName);O(m!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const g=this.backend.numDataIds();l=m.kernelFunc({inputs:x,attrs:v,backend:this.backend});const y=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,g,y);const w=y.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(p,x,w);r=this.saveTensorsForBackwardMode(C)}return w}}else{const{forwardFunc:p}=t,x=v=>{!o||(r=v.map(m=>this.keep(this.clone(m))))};a=()=>{const v=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,x));const m=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,v,m),m}}const{inputs:c,attrs:d}=t,f=tl(t)?null:t.backwardsFunc;let h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(h=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),n=h.outputs)}),o&&this.addTapeNode(u,c,n,f,r,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(p=>c[p]!=null?c[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const o=hf(t);if(o!=null){const s=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(O(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(u=>n[u])):a=s.map(u=>n[u]);const l=r.filter((u,c)=>i[c]);return a.concat(l)}return[]}makeTensor(t,n,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;let s=t;r==="string"&&ga(t[0])&&(s=t.map(l=>rr(l)));const i=o.write(s,n,r),a=new mt(n,r,i,this.nextTensorId());if(this.trackTensor(a,o),r==="string"){const l=this.state.tensorInfo.get(i),u=ey(s);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,n,r,o){r=r||"float32";const s={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(s,o)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:o,dtype:s}=t,i=new mt(o,s,r,this.nextTensorId());return this.trackTensor(i,n),i}makeVariable(t,n=!0,r,o){r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const s=new du(t,n,r,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*ou(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof du||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*ou(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,o,s,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:s},l=hf(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=u=>(u=u.map((c,d)=>{if(c==null){const f=r[d],h=An(f.size,f.dtype);return this.makeTensor(h,f.shape,f.dtype)}return c}),o(u.length>1?u:u[0],s,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=$S(t),r=new Set(n.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){const i=this.state.activeScope.track[s];!i.kept&&!r.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(s=>{!s.kept&&s.scopeId===o.id&&this.track(s)})}gradients(t,n,r,o=!1){if(O(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));O(s instanceof mt,()=>"The result y returned by f() must be a tensor.");const i=pS(this.state.activeTape,n,s);if(!o&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[s.id]=r==null?IS(s.shape):r,mS(a,i,u=>this.tidy(u),TS);const l=n.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:s,grads:l}})}customGrad(t){return O(uf(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{O(n.every(a=>a instanceof mt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const o={};n.forEach((a,l)=>{o[l]=a});const s=(a,l)=>(r=t(...n,l),O(r.value instanceof mt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),O(uf(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),i=(a,l)=>{const u=r.gradFunc(a,l),c=Array.isArray(u)?u:[u];O(c.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),O(c.every(f=>f instanceof mt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return c.forEach((f,h)=>{d[h]=()=>f}),d};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=bt(),r=await this.backend.time(t);return r.wallMs=bt()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new $f;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}ro.nextTensorId=0;ro.nextVariableId=0;function IS(e){const t=ry(b(e),"float32");return j.makeTensor(t,e,"float32")}function ag(){const e=Mm();if(e._tfengine==null){const t=new oy(e);e._tfengine=new ro(t)}return ly(e._tfengine.ENV),vS(()=>e._tfengine),e._tfengine}const j=ag();function TS(e,t){const n={a:e,b:t};return j.runKernel(Bm,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RS(){return typeof navigator<"u"&&navigator!=null}function lg(e){if(e||RS()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function ug(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ze=S();Ze.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ze.registerFlag("IS_BROWSER",()=>ug());Ze.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ze.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ze.registerFlag("PROD",()=>!1);Ze.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ze.getBool("DEBUG"));Ze.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ze.registerFlag("IS_TEST",()=>!1);Ze.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Ze.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ze.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Ze.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ze.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kS(e,t){let n=e;if(qt(e))return t==="string"?[]:[e.length];if(typeof e=="object"&&"texture"in e){const o=e.channels||"RGBA";return[e.height,e.width*o.length]}if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||qt(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&S().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&cg(e,r,[]),r}function cg(e,t,n){if(n=n||[],!Array.isArray(e)&&!qt(e)){O(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}O(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),O(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let o=0;o<e.length;++o)cg(e[o],r,n.concat(o))}function Ef(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function Re(e,t,n,r="numeric"){if(e instanceof mt)return Ef(r,e.dtype,t,n),e;let o=xa(e);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),Ef(r,o,t,n),e==null||!qt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const l=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const s=kS(e,o);!qt(e)&&!Array.isArray(e)&&(e=[e]);const a=o!=="string"?ya(e,o):eo(e,[],!0);return j.makeTensor(a,s,o)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const NS="__op";function tt(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+NS;const o=(...s)=>{j.startScope(n);try{const i=r(...s);return Am(i)&&console.error("Cannot return a Promise inside of tidy."),j.endScope(i),i}catch(i){throw j.endScope(null),i}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bS(e,t){const n=Re(e,"real","complex"),r=Re(t,"imag","complex");Om(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const o={real:n,imag:r};return j.runKernel(Um,o)}const _S=tt({complex_:bS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FS(e,t,n,r){if(r==null&&(r=xa(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof e=="object"&&"texture"in e){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from texture only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return e.channels=e.channels||"RGBA",j.backend.createTensorFromTexture(e,t||n,r)}if(!qt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Dm(t);const o=b(t),s=b(n);O(o===s,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${s}`);for(let i=0;i<n.length;++i){const a=n[i],l=i===n.length-1?a!==b(t.slice(i)):!0;O(n[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!qt(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?ya(e,r):eo(e,[],!0),j.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bc=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function If(e){return bc?Buffer.byteLength(e):new Blob([e]).size}function OS(e){if(bc)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,o=t.length;r<o;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function PS(e){if(bc){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function DS(e){if(e.length===1)return e[0];let t=0;e.forEach(o=>{t+=o.byteLength});const n=new Uint8Array(t);let r=0;return e.forEach(o=>{n.set(new Uint8Array(o),r),r+=o.byteLength}),n.buffer}function dg(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function AS(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function LS(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),AS(e,n,r)}function wa(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:If(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:If(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function MS(e){const t=[];for(const n of e)t.push(...n.weights);return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class me{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return me.instance==null&&(me.instance=new me),me.instance}static registerSaveRouter(t){me.getInstance().saveRouters.push(t)}static registerLoadRouter(t){me.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return me.getHandlers(t,"save")}static getLoadHandlers(t,n){return me.getHandlers(t,"load",n)}static getHandlers(t,n,r){const o=[];return(n==="load"?me.getInstance().loadRouters:me.getInstance().saveRouters).forEach(i=>{const a=i(t,r);a!==null&&o.push(a)}),o}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu="tensorflowjs",xu=1,Jn="models_store",$n="model_info_store";function fg(){if(!S().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function vu(e){const t=e.result;t.createObjectStore(Jn,{keyPath:"modelPath"}),t.createObjectStore($n,{keyPath:"modelPath"})}class cr{constructor(t){if(this.indexedDB=fg(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,o)=>{const s=this.indexedDB.open(gu,xu);s.onupgradeneeded=()=>vu(s),s.onsuccess=()=>{const i=s.result;if(n==null){const a=i.transaction(Jn,"readonly"),u=a.objectStore(Jn).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=c=>(i.close(),o(u.error)),a.oncomplete=()=>i.close()}else{const a=wa(n),l=i.transaction($n,"readwrite");let u=l.objectStore($n);const c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a});let d;c.onsuccess=()=>{d=i.transaction(Jn,"readwrite");const h=d.objectStore(Jn).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a});h.onsuccess=()=>r({modelArtifactsInfo:a}),h.onerror=p=>{u=l.objectStore($n);const x=u.delete(this.modelPath);x.onsuccess=()=>(i.close(),o(h.error)),x.onerror=v=>(i.close(),o(h.error))}},c.onerror=f=>(i.close(),o(c.error)),l.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},s.onerror=i=>o(s.error)})}}cr.URL_SCHEME="indexeddb://";const hg=e=>S().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(cr.URL_SCHEME)?BS(e.slice(cr.URL_SCHEME.length)):null;me.registerSaveRouter(hg);me.registerLoadRouter(hg);function BS(e){return new cr(e)}function US(e){return e.startsWith(cr.URL_SCHEME)?e.slice(cr.URL_SCHEME.length):e}class VS{constructor(){this.indexedDB=fg()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(gu,xu);r.onupgradeneeded=()=>vu(r),r.onsuccess=()=>{const o=r.result,s=o.transaction($n,"readonly"),a=s.objectStore($n).getAll();a.onsuccess=()=>{const l={};for(const u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),n(a.error)),s.oncomplete=()=>o.close()},r.onerror=o=>n(r.error)})}async removeModel(t){return t=US(t),new Promise((n,r)=>{const o=this.indexedDB.open(gu,xu);o.onupgradeneeded=()=>vu(o),o.onsuccess=()=>{const s=o.result,i=s.transaction($n,"readwrite"),a=i.objectStore($n),l=a.get(t);let u;l.onsuccess=()=>{if(l.result==null)return s.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const c=a.delete(t),d=()=>{u=s.transaction(Jn,"readwrite");const h=u.objectStore(Jn).delete(t);h.onsuccess=()=>n(l.result.modelArtifactsInfo),h.onerror=p=>r(l.error)};c.onsuccess=d,c.onerror=f=>(d(),s.close(),r(l.error))}},l.onerror=c=>(s.close(),r(l.error)),i.oncomplete=()=>{u==null?s.close():u.oncomplete=()=>s.close()}},o.onerror=s=>r(o.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tn="/",Ir="tensorflowjs_models",pg="info",WS="model_topology",zS="weight_specs",GS="weight_data",HS="model_metadata";function mg(e){return{info:[Ir,e,pg].join(tn),topology:[Ir,e,WS].join(tn),weightSpecs:[Ir,e,zS].join(tn),weightData:[Ir,e,GS].join(tn),modelMetadata:[Ir,e,HS].join(tn)}}function gg(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function XS(e){const t=e.split(tn);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(tn)}function jS(e){return e.startsWith(dr.URL_SCHEME)?e.slice(dr.URL_SCHEME.length):e}class dr{constructor(t){if(!S().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=mg(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=wa(t);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,OS(t.weightData));const s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:o}}catch{throw gg(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=o;const s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){const a=JSON.parse(s);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(n.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=PS(i),n}}dr.URL_SCHEME="localstorage://";const xg=e=>S().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(dr.URL_SCHEME)?KS(e.slice(dr.URL_SCHEME.length)):null;me.registerSaveRouter(xg);me.registerLoadRouter(xg);function KS(e){return new dr(e)}class qS{constructor(){O(S().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),O(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Ir+tn,r=tn+pg;for(let o=0;o<this.LS.length;++o){const s=this.LS.key(o);if(s.startsWith(n)&&s.endsWith(r)){const i=XS(s);t[i]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=jS(t);const n=mg(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return gg(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tf="://";class Ht{constructor(){this.managers={}}static getInstance(){return Ht.instance==null&&(Ht.instance=new Ht),Ht.instance}static registerManager(t,n){O(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Tf)&&(t=t.slice(0,t.indexOf(Tf))),O(t.length>0,()=>"scheme must not be an empty string.");const r=Ht.getInstance();O(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=Ht.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(Ht.getInstance().managers)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class QS{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!S().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const o=this.functionRefs[r.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(S().get("IS_BROWSER")){S().setPlatform("browser",new QS);try{Ht.registerManager(dr.URL_SCHEME,new qS)}catch{}try{Ht.registerManager(cr.URL_SCHEME,new VS)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YS={importFetch:()=>require("node-fetch")};let nl;class ZS{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return S().global.fetch!=null?S().global.fetch(t,n):(nl==null&&(nl=YS.importFetch()),nl(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}}S().get("IS_NODE")&&!S().get("IS_BROWSER")&&S().setPlatform("node",new ZS);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ce(e,t="float32",n){return t=t||"float32",Dm(e),new cu(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JS(e,t){const n=Re(e,"x","cast");if(!Zv(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},o={dtype:t};return j.runKernel(Tc,r,o)}const vg=tt({cast_:JS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e$(e){const n={x:Re(e,"x","clone","string_or_numeric")};return j.runKernel(Rc,n)}const yg=tt({clone_:e$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ag();const n$={buffer:Ce,cast:vg,clone:yg,print:t$};yS(n$);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r$="model",o$=".json",s$=".weights.bin";function Rf(e){return new Promise(t=>setTimeout(t)).then(e)}class fr{constructor(t){if(!S().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(fr.URL_SCHEME)&&(t=t.slice(fr.URL_SCHEME.length)),(t==null||t.length===0)&&(t=r$),this.modelJsonFileName=t+o$,this.weightDataFileName=t+s$}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=dg(t,r),s=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await Rf(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=n,await Rf(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:wa(t)}}}}fr.URL_SCHEME="downloads://";const i$=e=>S().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(fr.URL_SCHEME)?a$(e.slice(fr.URL_SCHEME.length)):null;me.registerSaveRouter(i$);function a$(e="model"){return new fr(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(e,t,n,r){i(e),n=n==null?0:n,r=r==null?1:r,a(n,r);let o=0;const s=l=>(l.then(u=>{const c=n+ ++o/e.length*(r-n);return t(c),u}),l);function i(l){O(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){O(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),O(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),O(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(e.map(s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function l$(e,t){t==null&&(t={});const n=t.fetchFunc==null?S().platform.fetch:t.fetchFunc,r=e.map(d=>n(d,t.requestInit,{isBinary:!0})),o=0,s=.5,a=(t.onProgress==null?await Promise.all(r):await kf(r,t.onProgress,o,s)).map(d=>d.arrayBuffer()),l=.5,u=1;return t.onProgress==null?await Promise.all(a):await kf(a,t.onProgress,l,u)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u$="application/octet-stream",c$="application/json";class _c{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(O(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=S().platform.fetch,O(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&O(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=dg(t,r);n.body.append("model.json",new Blob([JSON.stringify(o)],{type:c$}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:u$}),"model.weights.bin");const s=await this.fetch(this.path,n);if(s.ok)return{modelArtifactsInfo:wa(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const r=n.modelTopology,o=n.weightsManifest;if(r==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return LS(n,s=>this.loadWeights(s))}async loadWeights(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,o]=d$(n),s=this.weightPathPrefix||r,i=MS(t),a=[],l=[];for(const c of t)for(const d of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(d)):a.push(s+d+o);this.weightUrlConverter&&a.push(...await Promise.all(l));const u=await l$(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,DS(u)]}}_c.URL_SCHEME_REGEX=/^https?:\/\//;function d$(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),o=n>t?e.substring(n):"";return[r+"/",o]}function Nf(e){return e.match(_c.URL_SCHEME_REGEX)!=null}const wg=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>Nf(r)):n=Nf(e),n)return f$(e,t)}return null};me.registerSaveRouter(wg);me.registerLoadRouter(wg);function f$(e,t){return new _c(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gn(){return j}function Cg(e,t){return j.tidy(e,t)}function h$(e,t,n=1){return j.registerBackend(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xi(e,t){const n=e.length,r=[];for(let o=0;o<n;o++){const s=n-1-o,i=e[s]||1;(t[t.length-1-o]||1)>1&&i===1&&r.unshift(s)}return r}function Sg(e,t){const n=[];for(let r=0;r<t.length;r++){const o=e[e.length-r-1],s=t.length-r-1,i=t[s];(o==null||o===1&&i>1)&&n.unshift(s)}return n}function Ve(e,t){const n=[],r=Math.max(e.length,t.length);for(let o=0;o<r;o++){let s=e[e.length-o-1];s==null&&(s=1);let i=t[t.length-o-1];if(i==null&&(i=1),s===1)n.unshift(i);else if(i===1)n.unshift(s);else if(s!==i){const a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else n.unshift(s)}return n}function $g(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(b(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const o=t.shape,s=o[o.length-1];let i=1;for(let d=0;d<o.length-1;++d)i*=o[d];const a=e.shape,l=o.slice();l.pop();let u=1;for(let d=s;d<n;++d)u*=a[d],l.push(a[d]);const c=[...ye(e.shape).map(d=>d/u),1].slice(0,s);return[l,i,u,c]}function Eg(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(s+` update.rank < ${o}. `);if(e.length<r+(n.rank-o))throw new Error(s+` Output shape length < ${r+(n.rank-o)}`);if(n.rank!==o+e.length-r)throw new Error(s+` update.rank != ${o+e.length-r}`);for(let i=0;i<o;++i)if(n.shape[i]!==t.shape[i])throw new Error(s+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<n.rank-o;++i)if(n.shape[i+o]!==e[i+r])throw new Error(s+` updates.shape[${i+o}] (${n.shape[i+o]}) != shape[${i+o}] (${e[i+o]})`)}function p$(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Eg(n,t,e)}function Fc(e,t,n){const r=t.shape.length,o=r>1?t.shape[r-1]:1,s=n.length;let i=1;for(let d=o;d<s;++d)i*=n[d];const a=o<1?1:o,l=b(t.shape)/a,u=[...ye(n.slice(0,o)),1],c=b(n);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:u,outputSize:c}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=-2,m$=-1;function Ig(e,t,n){const r=e.shape.length;O(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),O(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let o=0;o<r;++o)O(t[o]+n[o]<=e.shape[o],()=>`Error in slice${r}D: begin[${o}] + size[${o}] (${t[o]+n[o]}) would overflow input.shape[${o}] (${e.shape[o]})`)}function g$(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function Tg(e,t,n){const r=[];for(let o=0;o<e.length;o++)r[o]=Math.ceil((t[o]-e[o])/n[o]);return r}function Rg(e,t,n,r){const o=[...e];for(let s=o.length;s<r.length;s++)o.push(1);for(let s=0;s<n;s++)s===0?o[t]=1:(o.splice(t,0,1),o.pop());return o}function kg(e,t,n){return n<=e?n:n-(t-1)}function Ng(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function x$(e,t,n,r,o,s,i,a,l){const u=e.length;let c=new Array(u),d=new Array(u),f=new Array(u);if(t.length&&n>0){const h=t[0],p=n+1;c=bg(i,h,p,r,e),d=_g(a,h,p,o,e),f=Rg(s,h,p,e)}else for(let h=0;h<u;h++)c[h]=Og(i,r,s,e,h,l),d[h]=Pg(a,o,s,e,h,l),f[h]=Fg(s,h,l);return{begin:c,end:d,strides:f}}function bg(e,t,n,r,o){const s=[...o],i=Ng(n,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{const l=kg(t,n,a);let u=r[l];e&1<<l&&(u=0),s[a]=u}return s}function _g(e,t,n,r,o){const s=[...o],i=Ng(n,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{const l=kg(t,n,a);let u=r[l];e&1<<l&&(u=Number.MAX_SAFE_INTEGER),s[a]=u}for(let a=0;a<s.length;a++){const l=o[a];s[a]<0&&(s[a]+=l),s[a]=Wi(0,s[a],o[a])}return s}function Fg(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Og(e,t,n,r,o,s){let i=t[o];const a=n[o]||1;(e&1<<o||s&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=r[o];return i<0&&(i+=l),i=Wi(0,i,l-1),i}function Pg(e,t,n,r,o,s){let i=t[o];const a=n[o]||1;(e&1<<o||s&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=r[o];return i<0&&(i+=l),a>0?i=Wi(0,i,l):i=Wi(-1,i,l-1),i}function Oc(e,t,n){let r=n.length;for(let o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(let o=r+1;o<n.length;o++)if(t[o]>0||n[o]!==e[o])return!1;return!0}function Pc(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Dg(e,t,n){let r;const o=e.shape.length;typeof t=="number"?r=[t,...new Array(o-1).fill(0)]:t.length<o?r=t.concat(new Array(o-t.length).fill(0)):r=t.slice(),r.forEach(i=>{O(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return n==null?s=new Array(o).fill(-1):typeof n=="number"?s=[n,...new Array(o-1).fill(-1)]:n.length<o?s=n.concat(new Array(o-n.length).fill(-1)):s=n,s=s.map((i,a)=>i>=0?i:(O(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),e.shape[a]-r[a])),[r,s]}function Ag(e,t,n,r,o,s,i,a,l){let u;if(r==null?(u=new Array(t.length),u.fill(1)):u=r,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const d={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:u.slice(),beginMask:o,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let y=0;y<d.dims;y++)c&&(1<<y&a)!==0&&d.numAddAxisAfterEllipsis++,1<<y&i&&(c=!0);c||(d.ellipsisMask|=1<<d.dims,d.dims++);const f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};v$(d,f);let h=!0,p=!0,x=!0;const v=[],m=[];for(let y=0;y<e.length;++y){if(f.strides[y]===0)throw Error(`strides[${y}] must be non-zero`);const w=!!(f.shrinkAxisMask&1<<y),C=e[y];if(C===-1){v.push(w?1:-1);continue}const I=[f.beginMask&1<<y,f.endMask&1<<y],$=[f.strides[y]>0?0:-1,f.strides[y]>0?C:C-1];if(w&&f.strides[y]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&f.strides[y]===1;const E=!!(f.beginMask&1<<y&&f.endMask&1<<y);if(f.beginValid&&f.endValid){if(w){const V=f.begin[y]<0?C+f.begin[y]:f.begin[y];if(f.begin[y]=V,f.end[y]=f.begin[y]+1,V<0||V>=C)throw Error(`slice index ${f.begin[y]} of dimension ${y} out of bounds.`)}else f.begin[y]=bf(f.begin[y],0,f.strides[y],C,I,$),f.end[y]=bf(f.end[y],1,f.strides[y],C,I,$);const M=f.strides[y]===1&&f.begin[y]===0&&f.end[y]===C;h=h&&M,p=p&&(y===0&&f.strides[y]===1||M)}else h=h&&f.strides[y]===1&&E,p=p&&(y===0&&f.strides[y]===1||E);let F,R=!1;if(f.beginValid&&f.endValid?(F=f.end[y]-f.begin[y],R=!0):w?(F=1,R=!0):E&&C>=0&&(f.strides[y]<0?F=-C:F=C,R=!0),R){let M;F===0||F<0!=f.strides[y]<0?M=0:M=Math.trunc(F/f.strides[y])+(F%f.strides[y]!==0?1:0),v.push(M)}else v.push(-1)}for(let y=0;y<f.finalShapeGatherIndices.length;++y){const w=f.finalShapeGatherIndices[y];w>=0?m.push(v[w]):w===yu&&m.push(1)}return{finalShapeSparse:m.filter((y,w)=>f.finalShapeGatherIndices[w]!==yu),finalShape:m,isIdentity:h,sliceDim0:p,isSimpleSlice:x,begin:f.begin,end:f.end,strides:f.strides}}function v$(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const o=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<o;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(yu),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(m$),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function bf(e,t,n,r,o,s){if(o[t])return n>0?s[t]:s[t+1&1];{const i=e<0?r+e:e;return i<s[0]?s[0]:i>s[1]?s[1]:i}}const y$=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Ig,maskToAxes:g$,computeOutShape:Tg,stridesWithElidedDims:Rg,getNormalizedAxes:x$,startIndicesWithElidedDims:bg,stopIndicesWithElidedDims:_g,stridesForAxis:Fg,startForAxis:Og,stopForAxis:Pg,isSliceContinous:Oc,computeFlatOffset:Pc,parseSliceParams:Dg,sliceInfo:Ag},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w$(e,t){let n=Re(e,"a","mul"),r=Re(t,"b","mul");[n,r]=SS(n,r);const o={a:n,b:r};return j.runKernel(zm,o)}const C$=tt({mul_:w$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lg(e,t,n,r,o="NHWC",s){const i=e[3],a=[...t,i],l=po(o);return Ut(e,a,n,s,r,null,null,l)}function fo(e,t,n,r,o,s,i="channelsLast"){const[a,l]=ji(t);let u;if(i==="channelsLast")u=[a,l,e[3],e[3]];else if(i==="channelsFirst")u=[a,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ut(e,u,n,r,o,s,!1,i)}function Ss(e,t,n,r,o,s,i="NDHWC"){const[a,l,u]=wu(t);let c,d;if(i==="NDHWC")d="channelsLast",c=[a,l,u,e[4],e[4]];else if(i==="NCDHW")d="channelsFirst",c=[a,l,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return $s(e,c,n,r,o,!1,d,s)}function Ut(e,t,n,r,o,s,i=!1,a="channelsLast"){let[l,u,c,d]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,d]=e;else if(a==="channelsFirst")[l,d,u,c]=e;else throw new Error(`Unknown dataFormat ${a}`);const[f,h,,p]=t,[x,v]=ji(n),[m,g]=ji(r),y=Xr(f,m),w=Xr(h,g),{padInfo:C,outHeight:I,outWidth:$}=E$(o,u,c,x,v,y,w,s,a),E=i?p*d:p;let F;return a==="channelsFirst"?F=[l,E,I,$]:a==="channelsLast"&&(F=[l,I,$,E]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:d,outHeight:I,outWidth:$,outChannels:E,padInfo:C,strideHeight:x,strideWidth:v,filterHeight:f,filterWidth:h,effectiveFilterHeight:y,effectiveFilterWidth:w,dilationHeight:m,dilationWidth:g,inShape:e,outShape:F,filterShape:t}}function $s(e,t,n,r,o,s=!1,i="channelsLast",a){let[l,u,c,d,f]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,d,f]=e;else if(i==="channelsFirst")[l,f,u,c,d]=e;else throw new Error(`Unknown dataFormat ${i}`);const[h,p,x,,v]=t,[m,g,y]=wu(n),[w,C,I]=wu(r),$=Xr(h,w),E=Xr(p,C),F=Xr(x,I),{padInfo:R,outDepth:M,outHeight:V,outWidth:ue}=I$(o,u,c,d,m,g,y,$,E,F,a),ae=s?v*f:v;let de;return i==="channelsFirst"?de=[l,ae,M,V,ue]:i==="channelsLast"&&(de=[l,M,V,ue,ae]),{batchSize:l,dataFormat:i,inDepth:u,inHeight:c,inWidth:d,inChannels:f,outDepth:M,outHeight:V,outWidth:ue,outChannels:ae,padInfo:R,strideDepth:m,strideHeight:g,strideWidth:y,filterDepth:h,filterHeight:p,filterWidth:x,effectiveFilterDepth:$,effectiveFilterHeight:E,effectiveFilterWidth:F,dilationDepth:w,dilationHeight:C,dilationWidth:I,inShape:e,outShape:de,filterShape:t}}function S$(e,t,n,r,o){r==null&&(r=Dc(e,t,n));const s=e[0],i=e[1],a=or((s-t+2*r)/n+1,o),l=or((i-t+2*r)/n+1,o);return[a,l]}function $$(e,t,n,r,o,s){o==null&&(o=Dc(e,t,r));const i=e[0],a=e[1],l=e[2],u=or((i-t+2*o)/r+1,s),c=or((a-t+2*o)/r+1,s),d=or((l-t+2*o)/r+1,s);return[u,c,d,n]}function Dc(e,t,n,r=1){const o=Xr(t,r);return Math.floor((e[0]*(n-1)-n+o)/2)}function ji(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function wu(e){return typeof e=="number"?[e,e,e]:e}function Xr(e,t){return t<=1?e:e+(e-1)*(t-1)}function E$(e,t,n,r,o,s,i,a,l){let u,c,d;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const h=S$([t,n],s,r,e,a);c=h[0],d=h[1]}else if(e==="same"){c=Math.ceil(t/r),d=Math.ceil(n/o);const f=Math.max(0,(c-1)*r+s-t),h=Math.max(0,(d-1)*o+i-n),p=Math.floor(f/2),x=f-p,v=Math.floor(h/2),m=h-v;u={top:p,bottom:x,left:v,right:m,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/r),d=Math.ceil((n-i+1)/o);else if(typeof e=="object"){const f=l==="channelsLast"?e[1][0]:e[2][0],h=l==="channelsLast"?e[1][1]:e[2][1],p=l==="channelsLast"?e[2][0]:e[3][0],x=l==="channelsLast"?e[2][1]:e[3][1];u={top:f,bottom:h,left:p,right:x,type:f===0&&h===0&&p===0&&x===0?"VALID":"EXPLICIT"},c=or((t-s+f+h)/r+1,a),d=or((n-i+p+x)/o+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:c,outWidth:d}}function I$(e,t,n,r,o,s,i,a,l,u,c){let d,f,h,p;if(typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const v=$$([t,n,r,1],a,1,o,e,c);f=v[0],h=v[1],p=v[2]}else if(e==="same"){f=Math.ceil(t/o),h=Math.ceil(n/s),p=Math.ceil(r/i);const x=(f-1)*o+a-t,v=(h-1)*s+l-n,m=(p-1)*i+u-r,g=Math.floor(x/2),y=x-g,w=Math.floor(v/2),C=v-w,I=Math.floor(m/2),$=m-I;d={top:w,bottom:C,left:I,right:$,front:g,back:y,type:"SAME"}}else if(e==="valid")d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((t-a+1)/o),h=Math.ceil((n-l+1)/s),p=Math.ceil((r-u+1)/i);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:h,outWidth:p}}function or(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Cu(e){const[t,n,r]=ji(e);return t===1&&n===1&&r===1}function ho(e,t){return Cu(e)||Cu(t)}function po(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function T$(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")O(zi(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(o=>{O(zi(o),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${o}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R$(e,t){const r={x:Re(e,"x","reshape","string_or_numeric")},o={shape:t};return j.runKernel(Xm,r,o)}const Ac=tt({reshape_:R$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k$(e){const n={x:Re(e,"x","sigmoid","float32")};return j.runKernel(Km,n)}const N$=tt({sigmoid_:k$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b$(e,t){let n=Re(e,"broadcastTo","x");const r=n.shape;if(t.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const u=n.shape.slice();for(;u.length<t.length;)u.unshift(1);n=Ac(n,u)}const o=n.shape,s=Array.from(t);for(let u=t.length-1;u>=0;u--)if(o[u]===t[u])s[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(s.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return yg(n);const a={x:n},l={reps:s};return j.runKernel(Qm,a,l)}const _$=tt({broadcastTo_:b$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F$(e){const n={x:Re(e,"x","elu","float32")};return j.runKernel(Vm,n)}const O$=tt({elu_:F$});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lc(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Mg(e,t,n){const r=e.length+t.length,o=[];let s=0,i=0;for(let a=0;a<r;a++)n.indexOf(a)===-1?o.push(e[s++]):o.push(t[i++]);return o}function Yt(e,t){const n=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&n.push(e[s]);const o=t.map(s=>e[s]);return[n,o]}function fn(e,t){const n=t.map(r=>1);return Mg(e,n,t)}function Vt(e,t,n){O(Lc(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Et(e,t){if(Lc(e,t))return null;const n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(r=>n.push(r)),n}function Mc(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function It(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P$(e,t){if((qt(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&qt(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return FS(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D$(e,t=null,n=!1){let r=Re(e,"x","sum");r.dtype==="bool"&&(r=vg(r,"int32"));const o={x:r},s={axis:t,keepDims:n};return j.runKernel(qm,o,s)}const A$=tt({sum_:D$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L$(e,t=.2){const r={x:Re(e,"x","leakyRelu")},o={alpha:t};return j.runKernel(Wm,r,o)}const M$=tt({leakyRelu_:L$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Su(e,t="float32"){if(t==="complex64"){const r=Su(e,"float32"),o=Su(e,"float32");return _S(r,o)}const n=An(b(e),t);return j.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B$(e,t){const n=Re(e,"x","prelu"),r=Re(t,"alpha","prelu"),o={x:n,alpha:r};return j.runKernel(Gm,o)}const U$=tt({prelu_:B$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V$(e){const n={x:Re(e,"x","relu")};return j.runKernel(Hm,n)}const W$=tt({relu_:V$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z$(e){const n={x:Re(e,"x","relu6")};return j.runKernel(jm,n)}const G$=tt({relu6_:z$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H$(e,t=0){const r={x:Re(e,"x","step")},o={alpha:t};return j.runKernel(Ym,r,o)}const X$=tt({step_:H$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j$(e,t){const n=[];for(let s=0;s<t.length;s++)t[s]&&n.push(s);const r=Ce(e,"int32"),o=Ce([n.length,e.length],"int32");for(let s=0;s<n.length;s++){const i=r.indexToLoc(n[s]),a=s*e.length;o.values.set(i,a)}return o.toTensor()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K$(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return C$(e,X$(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function q$(e,t){let n=t;const r=Sg(e.shape,t.shape);return r.length>0&&(n=A$(n,r)),Ac(n,e.shape)}function Q$(e,t,n,r){if(t==="linear")return e;if(t==="relu")return W$(e);if(t==="elu")return O$(e);if(t==="relu6")return G$(e);if(t==="prelu")return U$(e,n);if(t==="leakyrelu")return M$(e,r);if(t==="sigmoid")return N$(e);throw new Error(`Unknown fused activation ${t}.`)}const Y$=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z$(e,t,n){const r=J$(e,t,n),o=r<0?-(r+1):r;e.splice(o,0,t)}function J$(e,t,n){return tE(e,t,n||eE)}function eE(e,t){return e>t?1:e<t?-1:0}function tE(e,t,n){let r=0,o=e.length,s=0,i=!1;for(;r<o;){s=r+(o-r>>>1);const a=n(t,e[s]);a>0?r=s+1:(o=s,i=!a)}return i?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nE(e,t,n,r,o){return Bc(e,t,n,r,o,0)}function rE(e,t,n,r,o,s){return Bc(e,t,n,r,o,0,!1,s,!0)}function oE(e,t,n,r,o,s){return Bc(e,t,n,r,o,s,!0)}function Bc(e,t,n,r,o,s,i=!1,a=!1,l=!1){const u=[];for(let v=0;v<t.length;v++)t[v]>o&&u.push({score:t[v],boxIndex:v,suppressBeginIndex:0});u.sort(_f);const c=s>0?-.5/s:0,d=[],f=[];for(;d.length<n&&u.length>0;){const v=u.pop(),{score:m,boxIndex:g,suppressBeginIndex:y}=v;if(m<o)break;let w=!1;for(let C=d.length-1;C>=y;--C){const I=sE(e,g,d[C]);if(I>=r){w=!0;break}if(v.score=v.score*iE(r,c,I),v.score<=o)break}v.suppressBeginIndex=d.length,w||(v.score===m?(d.push(g),f.push(v.score)):v.score>o&&Z$(u,v,_f))}const h=d.length,p=n-h;a&&p>0&&(d.push(...new Array(p).fill(0)),f.push(...new Array(p).fill(0)));const x={selectedIndices:d};return i&&(x.selectedScores=f),l&&(x.validOutputs=h),x}function sE(e,t,n){const r=e.subarray(t*4,t*4+4),o=e.subarray(n*4,n*4+4),s=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),d=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),h=(a-s)*(l-i),p=(d-u)*(f-c);if(h<=0||p<=0)return 0;const x=Math.max(s,u),v=Math.max(i,c),m=Math.min(a,d),g=Math.min(l,f),y=Math.max(m-x,0)*Math.max(g-v,0);return y/(h+p-y)}function iE(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function _f(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aE=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function lE(){return new Promise(e=>aE(()=>e()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(e,t){const n=e[0].length;e.forEach((o,s)=>{O(o.length===n,()=>`Error in concat${n}D: rank of tensors[${s}] must be the same as the rank of the rest (${n})`)}),O(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=e[0];e.forEach((o,s)=>{for(let i=0;i<n;i++)O(i===t||o[i]===r[i],()=>`Error in concat${n}D: Shape of tensors[${s}] (${o}) does not match the shape of the rest (${r}) along the non-concatenated axis ${s}.`)})}function hr(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ot;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(Ot||(Ot={}));function Ug(e,t,n){let r=new Array;if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let o=1;o<n.length;++o){const s=n[o],i=r[r.length-n.length+o],a=r[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+e}] = ${s} but shape[${o+e}] = ${a}`)}else r[i]=s}return r}function Vg(e){const t={FIRST_DIM_SIZE:Ot.FIRST_DIM_SIZE,VALUE_ROWIDS:Ot.VALUE_ROWIDS,ROW_LENGTHS:Ot.ROW_LENGTHS,ROW_SPLITS:Ot.ROW_SPLITS,ROW_LIMITS:Ot.ROW_LIMITS,ROW_STARTS:Ot.ROW_STARTS},n=[];for(const r of e)if(r in t)n.push(t[r]);else break;return n}function Wg(e){return e.length===0?0:e[0]===Ot.FIRST_DIM_SIZE?e.length-1:e.length}function zg(e,t){if(e==null||t==null)return;const n=e.length,r=t.length;if(n>=r)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let o=0;o<Math.min(n,r-1);++o){const s=e[o],i=t[o+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-e.length}] = ${s} but ragged tensor input.flatValues.shape[${o-e.length}] = ${i}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uc=30;function Ca(e){return e<=Uc?e:su(e,Math.floor(Math.sqrt(e)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(e,t,n){const r=n*(typeof e=="number"?e:e[0]),o=t*(typeof e=="number"?e:e[1]);return[r,o]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vc(e,t,n,r=!0){let o=[];if(r)o=o.concat(t.slice(0)),o.push(e[0]/n),o=o.concat(e.slice(1));else{o=o.concat(e[0]);const s=t.length;for(let i=0;i<s;++i)o=o.concat([e[i+1]/t[i],t[i]]);o=o.concat(e.slice(s+1))}return o}function Wc(e,t,n=!0){const r=[];if(n){r.push(t);for(let o=t+1;o<e;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{const o=[],s=[];for(let i=1;i<e;++i)i>=t*2+1||i%2===1?s.push(i):o.push(i);r.push(...o),r.push(0),r.push(...s)}return r}function zc(e,t,n,r=!0){const o=[];r?o.push(e[0]/n):o.push(e[0]*n);for(let s=1;s<e.length;++s)s<=t.length?r?o.push(t[s-1]*e[s]):o.push(e[s]/t[s-1]):o.push(e[s]);return o}function Hg(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function Xg(e,t,n){const r=e.slice(0,1);for(let o=0;o<n;++o)r.push(e[o+1]-t[o][0]-t[o][1]);return r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jg=1.7580993408473768,Kg=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qg=.3275911,Qg=.254829592,Yg=-.284496736,Zg=1.421413741,Jg=-1.453152027,ex=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function uE(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function cE(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let o=0;o<e.length;o+=4)n[Math.floor(o/4)]=e[o],r[Math.floor(o/4)]=e[o+1];return{real:n,imag:r}}function dE(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let o=2;o<e.length;o+=4)n[Math.floor(o/4)]=e[o],r[Math.floor(o/4)]=e[o+1];return{real:n,imag:r}}function fE(e,t){const n=e[t*2],r=e[t*2+1];return{real:n,imag:r}}function hE(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function pE(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let o=0;o<Math.ceil(e/2);o++){const s=(t?2:-2)*Math.PI*(o/e);n[o]=Math.cos(s),r[o]=Math.sin(s)}return{real:n,imag:r}}function mE(e,t,n){const r=(n?2:-2)*Math.PI*(e/t),o=Math.cos(r),s=Math.sin(r);return{real:o,imag:s}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rl="->",gE=/->/g,Ff=",",Of="...";function tx(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(gE,"").length)/rl.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${rl}").`);const[r,o]=e.split(rl);O(r.indexOf(Of)===-1,()=>`The ellipsis notation ("${Of}") is not supported yet.`);const s=r.split(Ff),i=s.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let f=0;f<o.length;++f){const h=o[f];if(!s.some(p=>p.indexOf(h)!==-1))throw new Error(`Output subscripts contain the label ${h} not present in the input subscripts.`);a.indexOf(h)===-1&&a.push(h)}for(let f=0;f<r.length;++f){const h=r[f];a.indexOf(h)===-1&&h!==Ff&&a.push(h)}const l=new Array(s.length);for(let f=0;f<i;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let h=0;h<s[f].length;++h)l[f].push(a.indexOf(s[f][h]))}const u=a.length,c=o.length,d=[];for(let f=c;f<u;++f)d.push(f);return{allDims:a,summedDims:d,idDims:l}}function nx(e,t){let n=new Array(e);n.fill(-1);for(let o=0;o<t.length;++o)n[t[o]]=o;const r=[];for(let o=0;o<e;++o)n[o]===-1&&r.push(o);return n=n.filter(o=>o!==-1),{permutationIndices:n,expandDims:r}}function rx(e,t,n){const r=new Array(e);for(let o=0;o<n.length;++o){const s=n[o].shape;for(let i=0;i<t[o].length;++i)r[t[o][i]]===void 0?r[t[o][i]]=s[i]:O(r[t[o][i]]===s[i],()=>`Expected dimension ${r[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function ox(e,t){const n=e,r=[];let o=0;e.length===0&&n.push(-1),o=e.length+1;for(let i=0;i<o;++i)r.push([]);const s=[];for(let i=0;i<n.length;++i){const a=n[i],l=xE(t,a);for(const u of l)s.indexOf(u)===-1&&(r[i].push(u),s.push(u))}return{path:n,steps:r}}function sx(e){return e.every((t,n)=>t===n)}function xE(e,t){const n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function ix(e,t,n=0){let r=[];if(typeof t=="number")O(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(e.shape[n]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);O(o<=1,()=>"There should be only one negative value in split array.");const s=t.indexOf(-1);if(s!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[s]=e.shape[n]-i}O(e.shape[n]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ax(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function lx(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function ux(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cx(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function dx(e,t){return`size ${e} must be non-negative, not ${t}`}function fx(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function hx(e,t){const n=b(e),r=b(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${t}`}function px(e,t){const n=b(e),r=b(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eu(){return"segment ids must be >= 0"}function mx(){return"segment ids are not increasing"}function gx(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function xx(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vx(e,t){let n=!1,r;for(e<=Uc?(r=e,n=!0):r=su(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=su(e,r+1);return r}function yx(e,t,n){const r=[],o=e.length;for(let s=0;s<o;s++)s!==t?r.push(e[s]):r.push(n);return r}function wx(e,t,n,r){const o=t.shape.length,s=e.shape.length;if(r!==0&&(r<-o||r>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${r}`);if(r<0&&(r+=o),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${s}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let d=0;d<r;++d)if(e.shape[d]!==t.shape[d])throw new Error(`x.shape[${d}]: ${e.shape[d]} should be equal to indices.shape[${d}]: ${t.shape[d]}.`);const i=e.shape[n],a=[];let l=1,u=1,c=1;for(let d=0;d<r;++d)a.push(e.shape[d]),l*=e.shape[d];for(let d=r;d<n;d++)a.push(e.shape[d]),u*=e.shape[d];for(let d=r;d<o;d++)a.push(t.shape[d]);for(let d=n+1;d<s;d++)a.push(e.shape[d]),c*=e.shape[d];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:i,outputShape:a}}const vE=Object.freeze(Object.defineProperty({__proto__:null,segOpComputeOptimalWindowSize:vx,computeOutShape:yx,collectGatherOpShapeInfo:wx},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fs(e){try{return e.map(t=>no(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Cx(e){return e.map(t=>rr(t))}const yE=Object.freeze(Object.defineProperty({__proto__:null,slice_util:y$,segment_util:vE,fromUint8ToStringArray:fs,fromStringArrayToUint8:Cx,upcastType:Qt,axesAreInnerMostDims:Lc,combineLocations:Mg,computeOutAndReduceShapes:Yt,expandShapeToKeepDim:fn,assertAxesAreInnerMostDims:Vt,getAxesPermutation:Et,getUndoAxesPermutation:Mc,getInnerMostAxes:It,getBroadcastDims:Xi,getReductionAxes:Sg,assertAndGetBroadcastShape:Ve,assertParamsConsistent:Bg,computeOutShape:hr,computeDilation2DInfo:Lg,computePool2DInfo:fo,computePool3DInfo:Ss,computeConv2DInfo:Ut,computeConv3DInfo:$s,computeDefaultPad:Dc,tupleValuesAreOne:Cu,eitherStridesOrDilationsAreOne:ho,convertConv2DDataFormat:po,checkPadOnDimRoundingMode:T$,getFusedDyActivation:K$,getFusedBiasGradient:q$,applyActivation:Q$,shouldFuse:Y$,get RowPartitionType(){return Ot},combineRaggedTensorToTensorShapes:Ug,getRowPartitionTypesHelper:Vg,getRaggedRank:Wg,validateDefaultValueShape:zg,PARALLELIZE_THRESHOLD:Uc,computeOptimalWindowSize:Ca,getImageCenter:Gg,getReshaped:Vc,getPermuted:Wc,getReshapedPermuted:zc,getSliceBeginCoords:Hg,getSliceSize:Xg,prepareAndValidate:$g,validateUpdateShape:Eg,validateInput:p$,calculateShapes:Fc,SELU_SCALEALPHA:jg,SELU_SCALE:Kg,ERF_P:qg,ERF_A1:Qg,ERF_A2:Yg,ERF_A3:Zg,ERF_A4:Jg,ERF_A5:ex,warn:Pt,log:eS,mergeRealAndImagArrays:$u,splitRealAndImagArrays:uE,complexWithEvenIndex:cE,complexWithOddIndex:dE,getComplexWithIndex:fE,assignToTypedArray:hE,exponents:pE,exponent:mE,decodeEinsumEquation:tx,getEinsumPermutation:nx,checkEinsumDimSizes:rx,getEinsumComputePath:ox,isIdentityPermutation:sx,prepareSplitSize:ix,getSparseFillEmptyRowsIndicesDenseShapeMismatch:ax,getSparseFillEmptyRowsNegativeIndexErrorMessage:lx,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:ux,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:cx,getSparseReshapeNegativeOutputDimErrorMessage:dx,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:fx,getSparseReshapeInputOutputMultipleErrorMessage:hx,getSparseReshapeInputOutputMismatchErrorMessage:px,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Eu,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:mx,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:gx,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:xx},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kn={},Qs={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function wE(e,t){Kn[e]=t}function Mt(e,t){if(!(e in Kn)||t!=null){const r=SE(e,t);if(r!==null)Kn[e]=r;else return console.log("Could not get context for WebGL version",e),null}const n=Kn[e];return n==null||n.isContextLost()?(delete Kn[e],Mt(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Kn[e])}function CE(e){if(typeof OffscreenCanvas<"u"&&e===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function SE(e,t){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=t==null?CE(e):t;return n.addEventListener("webglcontextlost",r=>{r.preventDefault(),delete Kn[e]},!1),S().getBool("SOFTWARE_WEBGL_ENABLED")&&(Qs.failIfMajorPerformanceCaveat=!1),e===1?n.getContext("webgl",Qs)||n.getContext("experimental-webgl",Qs):n.getContext("webgl2",Qs)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var hs;(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(hs||(hs={}));var it;(function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"})(it||(it={}));var xe;(function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(xe||(xe={}));function Es(e,t){return[t,e]}function $E(e,t){return e*t}function Ys(e){const t=b(e),n=Math.ceil(t/4);return ru(n)}function mo(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function EE(e,t){const[n,r]=mo(e,t);return n*r*4}function Gc(e,t){const n=e;let r,o,s,i,a,l,u,c,d,f;return S().getNumber("WEBGL_VERSION")===2?(r=n.R32F,o=n.R16F,s=n.RGBA16F,i=n.RGBA32F,a=n.RED,u=4,c=1,d=n.HALF_FLOAT,f=n.FLOAT,l=n.RGBA8):(r=e.RGBA,o=e.RGBA,s=e.RGBA,i=n.RGBA,a=e.RGBA,u=4,c=4,d=t!=null?t.HALF_FLOAT_OES:null,f=e.FLOAT,l=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:d,textureTypeFloat:f}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D(e,t){const n=t();return S().getBool("DEBUG")&&IE(e),n}function IE(e){const t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+NE(e,t))}const TE=596e-10,RE=65504;function kE(e){return!!(S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||TE<Math.abs(e)&&Math.abs(e)<RE)}function NE(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Zs(e,t){return hn(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function bE(e,t){const n=hn(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(D(e,()=>e.shaderSource(n,t)),D(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function _E(e,t){const n=hn(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(D(e,()=>e.shaderSource(n,t)),D(e,()=>e.compileShader(n)),S().get("ENGINE_COMPILE_ONLY"))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw Sx(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const FE=/ERROR: [0-9]+:([0-9]+):/g;function Sx(e,t){const n=FE.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}const r=+n[1],o=e.split(`
`),s=o.length.toString().length+2,i=o.map((d,f)=>Hr((f+1).toString(),s)+d);let a=0;for(let d=0;d<i.length;d++)a=Math.max(i[d].length,a);const l=i.slice(0,r-1),u=i.slice(r-1,r),c=i.slice(r);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Hr(u[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function OE(e){return hn(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function PE(e,t){if(D(e,()=>e.linkProgram(t)),!S().get("ENGINE_COMPILE_ONLY")&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function ol(e,t){if(D(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function DE(e,t){const n=hn(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return D(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),D(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function AE(e,t){const n=hn(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return D(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),D(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function LE(e){return hn(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function ME(e,t){const n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){const r=`[${e}x${t}]`;throw new Error("Requested texture size "+r+" is invalid.")}if(e>n||t>n){const r=`[${e}x${t}]`,o=`[${n}x${n}]`;throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+o+".")}}function BE(e){return hn(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Pf(e,t,n,r,o,s,i){const a=e.getAttribLocation(t,n);return a===-1?!1:(D(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),D(e,()=>e.vertexAttribPointer(a,o,e.FLOAT,!1,s,i)),D(e,()=>e.enableVertexAttribArray(a)),!0)}function UE(e,t,n){HE(e,n),D(e,()=>e.activeTexture(e.TEXTURE0+n)),D(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function VE(e,t,n){return hn(e,()=>e.getUniformLocation(t,n),'uniform "'+n+'" not present in program.')}function WE(e,t,n){return e.getUniformLocation(t,n)}function zE(e,t,n,r){D(e,()=>UE(e,t,r)),D(e,()=>e.uniform1i(n,r))}function sl(e,t,n){D(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),D(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Df(e,t){D(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),D(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function Js(e){const t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+GE(e,t))}function GE(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function hn(e,t,n){const r=D(e,()=>t());if(r==null)throw new Error(n);return r}function HE(e,t){const n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){const o=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${o}.`)}}function oo(e,t=2){return b(e.slice(0,e.length-t))}function so(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function ei(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[oo(e),...so(e)]),t}function XE(e,t=!1){let n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE"),r=S().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");r===1/0&&S().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(r=n/2),t&&(n=n*2,r=r*2,e=e.map((a,l)=>l>=e.length-2?$c(e[l]):e[l]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=gr(e).newShape);let o=b(e),s=null;e.length<=1&&o<=n?s=[1,o]:e.length===2&&e[0]<=n&&e[1]<=n?s=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?s=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?s=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?s=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(s=[e[0],e[1]*e[2]*e[3]]);const i=s!=null&&Math.max(...s)>r&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(s==null||i)if(t){const a=oo(e);let l=2,u=2;e.length&&([l,u]=so(e)),o=a*(l/2)*(u/2),s=ru(o).map(c=>c*2)}else s=ru(o);return s}function ti(e){return e%2===0}function Ki(e,t){if(e=e.slice(-2),t=t.slice(-2),we(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){const n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||ti(n)&&ti(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&ti(e[0])&&ti(t[0])}let il,al;function jE(e){if(il==null){const t=Mt(e);il=t.getParameter(t.MAX_TEXTURE_SIZE)}return il}function KE(e){if(al==null){const t=Mt(e);al=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,al)}function qE(e){if(e===0)return 0;let t;const n=Mt(e);return wt(n,"EXT_disjoint_timer_query_webgl2")&&e===2?t=2:wt(n,"EXT_disjoint_timer_query")?t=1:t=0,t}function wt(e,t){return e.getExtension(t)!=null}function Af(e){try{if(Mt(e)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function QE(e){if(e===0)return!1;const t=Mt(e);if(e===1){if(!wt(t,"OES_texture_float"))return!1}else if(!wt(t,"EXT_color_buffer_float"))return!1;return Iu(t)}function YE(e){if(e===0)return!1;const t=Mt(e);if(e===1){if(!wt(t,"OES_texture_float")||!wt(t,"WEBGL_color_buffer_float"))return!1}else{if(wt(t,"EXT_color_buffer_float"))return Iu(t);const r="EXT_color_buffer_half_float";if(wt(t,r)){const o=t.getExtension(r);return ZE(t,o)}return!1}return Iu(t)}function Iu(e){const t=Gc(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);const r=1,o=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,r,o,0,t.textureFormatFloat,t.textureTypeFloat,null);const s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(s),i}function ZE(e,t){const n=Gc(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const o=1,s=1;e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,o,s,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function JE(e){return e!==2?!1:Mt(e).fenceSync!=null}function Is(e,t){Array.isArray(e)||(e=[e]),e.forEach(n=>{n!=null&&O(n.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A=S();A.registerFlag("HAS_WEBGL",()=>A.getNumber("WEBGL_VERSION")>0);A.registerFlag("WEBGL_VERSION",()=>Af(2)?2:Af(1)?1:0);A.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);A.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>A.get("WEBGL_VERSION")===2);A.registerFlag("WEBGL_CPU_FORWARD",()=>!0);A.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);A.registerFlag("WEBGL_PACK",()=>A.getBool("HAS_WEBGL"));A.registerFlag("WEBGL_PACK_NORMALIZATION",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_CLIP",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_PACK_REDUCE",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_LAZILY_UNPACK",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_CONV_IM2COL",()=>A.getBool("WEBGL_PACK"));A.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>jE(A.getNumber("WEBGL_VERSION")));A.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>KE(A.getNumber("WEBGL_VERSION")));A.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const e=A.getNumber("WEBGL_VERSION");return e===0?0:qE(e)});A.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>A.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!lg());A.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>QE(A.getNumber("WEBGL_VERSION")));A.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>A.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:A.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));A.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>YE(A.getNumber("WEBGL_VERSION")));A.registerFlag("WEBGL_FENCE_API_ENABLED",()=>JE(A.getNumber("WEBGL_VERSION")));A.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>A.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);A.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)});A.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>lg()?1:-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)});A.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);A.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);A.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);A.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);A.registerFlag("WEBGL_EXP_CONV",()=>!1);A.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>A.getBool("IS_TEST"));A.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);A.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);A.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Le(){let e,t,n,r,o,s,i,a,l,u;return S().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",n="out",r="in",o="texture",s="outputColor",i="out vec4 outputColor;",a=S().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",n="varying",r="varying",o="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:o,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vr(e,t,n="index"){const r=ye(t);return r.map((o,s)=>{const i=`int ${e[s]} = ${n} / ${o}`,a=s===r.length-1?`int ${e[s+1]} = ${n} - ${e[s]} * ${o}`:`index -= ${e[s]} * ${o}`;return`${i}; ${a};`}).join("")}function Sa(e,t,n="index"){const r=ye(t);return r.map((o,s)=>{const i=`int ${e[s]} = ${n} / outShapeStrides[${s}]`,a=s===r.length-1?`int ${e[s+1]} = ${n} - ${e[s]} * outShapeStrides[${s}]`:`index -= ${e[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function e2(e,t){const n=e.length,r=e.map(s=>`${t}[${s}]`),o=new Array(n-1);o[n-2]=r[n-1];for(let s=n-3;s>=0;--s)o[s]=`(${o[s+1]} * ${r[s+1]})`;return o}function t2(e,t,n="index"){const r=e.map((s,i)=>i),o=e2(r,t);return o.map((s,i)=>{const a=`int ${e[i]} = ${n} / ${o[i]}`,l=i===o.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${o[i]}`:`index -= ${e[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function Hc(e){const t=ye(e).map(n=>n.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Xc(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const $x=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{getBroadcastDims:Ex}=yE;function n2(e,t,n){const r=[];if(e.forEach(h=>{const p=b(h.shapeInfo.logicalShape);if(h.shapeInfo.isUniform?r.push(`uniform float ${h.name}${p>1?`[${p}]`:""};`):(r.push(`uniform sampler2D ${h.name};`),r.push(`uniform int offset${h.name};`)),n.enableShapeUniforms){const{uniformShape:x}=jc(n.packedInputs,h.shapeInfo.logicalShape,h.shapeInfo.texShape);switch(x.length){case 1:r.push(`uniform int ${h.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${h.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${h.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${h.name}Shape;`);break}r.push(`uniform ivec2 ${h.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;");break}r.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach(h=>{r.push(`uniform ${h.type} ${h.name}${h.arrayIndex?`[${h.arrayIndex}]`:""};`)});const o=r.join(`
`),s=e.map(h=>r2(h,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),i=t.texShape,a=Le(),l=i2(a);let u,c,d=u2(a);return t.isPacked?(u=o2(t.logicalShape,i,n.enableShapeUniforms),c=l2(a)):(u=s2(t.logicalShape,i,n.enableShapeUniforms),c=a2(a)),n.packedInputs&&(d+=h2),[d,l,c,o,u,s,n.userCode].join(`
`)}function go(e,t=!1){const n=e.shapeInfo.logicalShape;switch(n.length){case 0:return I2(e,t);case 1:return R2(e,t);case 2:return N2(e,t);case 3:return _2(e,t);case 4:return O2(e,t);case 5:return P2(e);case 6:return D2(e);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Ix(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return E2(e);case 1:return T2(e,t);case 2:return k2(e,t);case 3:return b2(e,t);default:return F2(e,t)}}function r2(e,t,n=!1,r){let o="";n?o+=Ix(e,r):o+=go(e,r);const s=e.shapeInfo.logicalShape,i=t.logicalShape;return s.length<=i.length&&(n?o+=A2(e,t):o+=L2(e,t)),o}function o2(e,t,n){switch(e.length){case 0:return Tx();case 1:return p2(e,t,n);case 2:return S2(e,t,n);case 3:return g2(e,t,n);default:return v2(e,t,n)}}function s2(e,t,n){switch(e.length){case 0:return Tx();case 1:return m2(e,t,n);case 2:return $2(e,t,n);case 3:return x2(e,t,n);case 4:return y2(e,t,n);case 5:return w2(e,t);case 6:return C2(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function i2(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function a2(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function l2(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function u2(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${c2}
    ${d2}
    ${f2}
  `}const c2=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,d2=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,f2=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,h2=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Tx(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function p2(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function m2(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function g2(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(e[2]/2),s=o*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function x2(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Sa(["r","c","d"],e)}
    return ivec3(r, c, d);
  }
`;const r=vr(["r","c","d"],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function v2(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(e[e.length-1]/2),s=o*Math.ceil(e[e.length-2]/2);let i=s,a="",l="b, r, c";for(let u=2;u<e.length-1;u++)i*=e[e.length-u-1],a=`
      int b${u} = index / ${i};
      index -= b${u} * ${i};
    `+a,l=`b${u}, `+l;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${e.length}(${l});
    }
  `}function y2(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Sa(["r","c","d","d2"],e)}
      return ivec4(r, c, d, d2);
    }
  `;const r=vr(["r","c","d","d2"],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function w2(e,t){const n=vr(["r","c","d","d2","d3"],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function C2(e,t){const n=vr(["r","c","d","d2","d3","d4"],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function S2(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(we(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;const o=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function $2(e,t,n){return we(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function yr(e){return`offset${e}`}function E2(e){const t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),r=Le();return`
    vec4 ${n}() {
      return ${r.texture2D}(${t}, halfCR);
    }
  `}function I2(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;const[o,s]=e.shapeInfo.texShape;if(o===1&&s===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;const i=yr(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${i});
      return sampleTexture(${n}, uv);
    }
  `;const[a,l]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${n}, uv);
    }
  `}function T2(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e.shapeInfo.texShape,s=Le();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${n}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${n}, uv);
    }
  `}function R2(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${xo(e)}
      }
    `;const o=e.shapeInfo.texShape,s=o[0],i=o[1];if(i===1&&s===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;const a=yr(n);return i===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${n}, uv);
      }
    `:s===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${a});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${n}, uv);
    }
  `}function k2(e,t){const n=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape,i=s[0],a=s[1],l=Le();if(s!=null&&we(n,s))return t?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${l.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${r}, uv);
    }
  `;const u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(n[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${r}, uv);
    }
  `}function N2(e,t){const n=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape;if(s!=null&&we(n,s)){if(t)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;const f=s[0],h=s[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${h}.0, ${f}.0);
      return sampleTexture(${r}, uv);
    }
  `}const{newShape:i,keptDims:a}=gr(n),l=i;if(l.length<n.length){const f=vo(e,l),h=["row","col"];return`
      ${go(f,t)}
      float ${o}(int row, int col) {
        return ${o}(${yo(h,a)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${xo(e)}
      }
    `;const u=s[0],c=s[1],d=yr(r);return c===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${r}, uv);
    }
  `:u===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${u}, ${c}, index);
    return sampleTexture(${r}, uv);
  }
`}function b2(e,t){const n=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(n[0]===1){const f=n.slice(1),h=[1,2],p=vo(e,f),x=["b","row","col"];return`
        ${Ix(p,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${yo(x,h)});
        }
      `}const a=Le();if(t)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${r}, uv);
    }
  `;const l=i[0],u=i[1],c=Math.ceil(n[2]/2),d=c*Math.ceil(n[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${u}, ${d}, ${c}, b, row, col);
      return ${a.texture2D}(${r}, uv);
    }
  `}function _2(e,t){const n=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=n[1]*n[2],i=n[2],{newShape:a,keptDims:l}=gr(n),u=a;if(u.length<n.length){const x=vo(e,u),v=["row","col","depth"];return`
        ${go(x,t)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${yo(v,l)});
        }
      `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${xo(e)}
      }
    `;const c=e.shapeInfo.texShape,d=c[0],f=c[1],h=e.shapeInfo.flatOffset;if(f===s&&h==null)return t?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===i&&h==null)return t?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;const p=yr(r);return t?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${p};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function F2(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=Le();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${n}, uv);
    }
  `;const s=e.shapeInfo.logicalShape,i=s.length,a=e.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=l[0],c=l[1],d=Math.ceil(s[i-1]/2);let f=d*Math.ceil(s[i-2]/2),h="int b, int row, int col",p=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let x=2;x<i-1;x++)h=`int b${x}, `+h,f*=s[i-x-1],p=`b${x} * ${f} + `+p;return`
    vec4 ${r}(${h}) {
      int index = ${p};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${u});
      return ${o.texture2D}(${n}, uv);
    }
  `}function O2(e,t){const n=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=n[3],i=n[2]*s,a=n[1]*i,{newShape:l,keptDims:u}=gr(n);if(l.length<n.length){const g=vo(e,l),y=["row","col","depth","depth2"];return`
      ${go(g,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${yo(y,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${xo(e)}
      }
    `;const c=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],h=d[1],p=`int stride2 = ${r}Shape[3];`,x=`int stride1 = ${r}Shape[2] * stride2;`,v=`int stride0 = ${r}Shape[1] * stride1;`;if(h===a&&c==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${p}
        ${x}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(h===s&&c==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;const m=yr(r);return t?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${x}
      ${v}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${m});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${f}, ${h}, index + ${m});
      return sampleTexture(${r}, uv);
    }
  `}function P2(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t[4],s=t[3]*o,i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:u}=gr(t);if(l.length<t.length){const x=vo(e,l),v=["row","col","depth","depth2","depth3"];return`
      ${go(x)}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${yo(v,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${o})) +
          depth3;
        ${xo(e)}
      }
    `;const c=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],h=d[1];if(h===a&&c==null)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(h===o&&c==null)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;const p=yr(n);return`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${o} + depth3 + ${p};
      vec2 uv = uvFromFlat(${f}, ${h}, index);
      return sampleTexture(${n}, uv);
    }
  `}function D2(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:o,keptDims:s}=gr(t);if(o.length<t.length){const v=vo(e,o),m=["row","col","depth","depth2","depth3","depth4"];return`
      ${go(v)}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${yo(m,s)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,u=t[2]*l,c=t[1]*u;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${u}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${xo(e)}
      }
    `;const d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,h=f[0],p=f[1];if(p===c&&d==null)return`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(p===i&&d==null)return`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;const x=yr(n);return`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${u} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${x};
      vec2 uv = uvFromFlat(${h}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function xo(e){const t=e.name,n=b(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function A2(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",s=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=Ex(e.shapeInfo.logicalShape,t.logicalShape),l=q(i),u=i-s;let c;const d=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map(g=>`coords.${d[g+u]} = 0;`).join(`
`);let f="";i<2&&s>0?f="coords":f=e.shapeInfo.logicalShape.map((g,y)=>`coords.${d[y+u]}`).join(", ");let h="return outputValue;";const x=b(e.shapeInfo.logicalShape)===1,m=b(t.logicalShape)===1;if(s===1&&!x&&!m)h=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(x&&!m)i===1?h=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:h=`
        return vec4(outputValue.x);
      `;else if(a.length){const g=s-2,y=s-1;a.indexOf(g)>-1&&a.indexOf(y)>-1?h="return vec4(outputValue.x);":a.indexOf(g)>-1?h="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(y)>-1&&(h="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${r}(${f});
      ${h}
    }
  `}function L2(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",s=t.texShape,i=e.shapeInfo.texShape,a=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&a===l&&e.shapeInfo.flatOffset==null&&we(i,s))return`
      float ${o}() {
        return sampleTexture(${n}, resultUV);
      }
    `;const u=q(l),c=Ex(e.shapeInfo.logicalShape,t.logicalShape),d=l-a;let f;const h=["x","y","z","w","u","v"];a===0?f="":l<2&&c.length>=1?f="coords = 0;":f=c.map(x=>`coords.${h[x+d]} = 0;`).join(`
`);let p="";return l<2&&a>0?p="coords":p=e.shapeInfo.logicalShape.map((x,v)=>`coords.${h[v+d]}`).join(", "),`
    float ${o}() {
      ${u} coords = getOutputCoords();
      ${f}
      return get${r}(${p});
    }
  `}function q(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function jc(e,t,n){const{newShape:r,keptDims:o}=gr(t),s=t.length,i=e&&s===3&&t[0]===1,a=i?t.slice(1):r,l=!e&&s>1&&!we(t,n)&&r.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function vo(e,t){const n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function yo(e,t){return t.map(n=>e[n]).join(", ")}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M2(e,t,n,r){const o=n.map((c,d)=>{const f={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(f.flatOffset=c.texData.slice.flatOffset),{name:t.variableNames[d],shapeInfo:f}}),s=o.map(c=>c.shapeInfo),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},a=n2(o,i,t),l=_E(e.gl,a),u=e.createProgram(l);return S().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i},Rx(e,t,u))}function Rx(e,t,n){const r={},o={},s={},i=[];let a,l,u,c=null,d=null;d=e.getUniformLocation(n,"NAN",!1),S().getNumber("WEBGL_VERSION")===1&&(c=e.getUniformLocation(n,"INFINITY",!1));const f=!1;for(let h=0;h<t.variableNames.length;h++){const p=t.variableNames[h];r[p]=e.getUniformLocation(n,p,f),r[`offset${p}`]=e.getUniformLocation(n,`offset${p}`,f),t.enableShapeUniforms&&(o[`${p}Shape`]=e.getUniformLocation(n,`${p}Shape`,f),s[`${p}TexShape`]=e.getUniformLocation(n,`${p}TexShape`,f))}return t.enableShapeUniforms&&(a=e.getUniformLocation(n,"outShape",f),u=e.getUniformLocation(n,"outShapeStrides",f),l=e.getUniformLocation(n,"outTexShape",f)),t.customUniforms&&t.customUniforms.forEach((h,p)=>{i[p]=e.getUniformLocation(n,h.name,f)}),{uniformLocations:r,customUniformLocations:i,infLoc:c,nanLoc:d,inShapesLocations:o,inTexShapesLocations:s,outShapeLocation:a,outShapeStridesLocation:u,outTexShapeLocation:l}}function Lf(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((n,r)=>{const o=n.logicalShape,s=t[r],i=s.shape;if(!we(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(n.isUniform&&s.isUniform)return;const a=n.texShape,l=s.isUniform?null:s.texData.texShape;if(!we(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function B2(e,t,n,r,o){t.program.enableShapeUniforms||(Lf(t.inShapeInfos,n),Lf([t.outShapeInfo],[r]));const s=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):e.setOutputMatrixTexture(s.texture,i[0],i[1]),e.setProgram(t.webGLProgram),S().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach((l,u)=>{const c=t.program.variableNames[u],d=t.uniformLocations[c],f=t.uniformLocations[`offset${c}`],h=t.inShapesLocations[`${c}Shape`],p=t.inTexShapesLocations[`${c}TexShape`];if(h){const{uniformShape:x}=jc(t.program.packedInputs,l.shape,l.texData.texShape);switch(x.length){case 1:e.gl.uniform1iv(h,new Int32Array(x));break;case 2:e.gl.uniform2iv(h,new Int32Array(x));break;case 3:e.gl.uniform3iv(h,new Int32Array(x));break;case 4:e.gl.uniform4iv(h,new Int32Array(x));break}}if(p&&e.gl.uniform2i(p,l.texData.texShape[0],l.texData.texShape[1]),d!=null){if(l.isUniform){if(b(l.shape)<2)e.gl.uniform1f(d,l.uniformValues[0]);else{let x=l.uniformValues;x instanceof Float32Array||(x=new Float32Array(x)),e.gl.uniform1fv(d,x)}return}l.texData.slice!=null&&f!=null&&e.gl.uniform1i(f,l.texData.slice.flatOffset),e.setInputMatrixTexture(l.texData.texture.texture,d,u)}});const a=t.outShapeLocation;if(a)switch(r.shape.length){case 1:e.gl.uniform1iv(a,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(a,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(a,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(a,new Int32Array(r.shape));break}if(t.outShapeStridesLocation){const l=ye(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&o&&t.program.customUniforms.forEach((l,u)=>{const c=t.customUniformLocations[u],d=o[u];if(l.type==="float")e.gl.uniform1fv(c,d);else if(l.type==="vec2")e.gl.uniform2fv(c,d);else if(l.type==="vec3")e.gl.uniform3fv(c,d);else if(l.type==="vec4")e.gl.uniform4fv(c,d);else if(l.type==="int")e.gl.uniform1iv(c,d);else if(l.type==="ivec2")e.gl.uniform2iv(c,d);else if(l.type==="ivec3")e.gl.uniform3iv(c,d);else if(l.type==="ivec4")e.gl.uniform4iv(c,d);else throw Error(`uniform type ${l.type} is not supported yet.`)}),e.executeProgram()}function U2(e,t,n){let r="";t.concat(n).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:u,uniformShape:c,keptDims:d}=jc(e.packedInputs,i.shape,l);let f="",h="",p="";if(c.length===1&&e.packedInputs){const C=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];f=`${C[0]>1}_${C[1]>1}`}else if(c.length===2&&!e.packedInputs)h=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!e.packedInputs){const C=ye(c);p=`${C[0]===l[1]}_${C[C.length-1]===l[1]}`}const x=i.shape.length,v=c.length===2&&we(i.shape,l),m=b(i.shape)===1,g=Xi(i.shape,n.shape),y=!e.packedInputs&&x===n.shape.length&&we(l,n.texData.texShape),w=e.packedInputs||c.length>2?"":`${l[0]>1}_${l[1]>1}`;r+=`${x}_${y}_${u?d:""}_${c.length}_${m}_${g}_${v}_${f}_${h}_${p}_${w}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;r+=`${i.shape}_${l}_${a}`}});const o=e.userCode;let s=e.constructor.name;return s+="_"+r+"_"+o+`${S().getNumber("WEBGL_VERSION")}`,s}function Me(e){return S().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class V2{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=hs.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Le();this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Sa(["r","c","d"],t):vr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class W2{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=hs.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Le();this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Sa(["r","c","d"],t):vr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class z2{constructor(t){this.variableNames=["A"],this.outTexUsage=it.DOWNLOAD;const n=Le();this.outputShape=t,this.userCode=`
      ${$x}

      void main() {
        float x = getAAtOutCoords();
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class G2{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=it.DOWNLOAD;const n=Le();this.outputShape=t,this.userCode=`
      ${$x}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H2={R:0,G:1,B:2,A:3};class Mf{constructor(t,n=!1,r="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=Le();this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length);let s="result";n&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<r.length;a++){const l=r[a];i+=`
          if(offset == ${a}) {
            result = values[${H2[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Xc():Hc(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${r.length});

        flatIndex = idiv(flatIndex, ${r.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${s}, 0., 0., 0.);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class X2{constructor(t,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=Le();this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length);let o="",s="result";n&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${r.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Xc():Hc(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${r.output} = ${s};
        }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j2(e){const t=Le(),n=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return bE(e,n)}function K2(e){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return DE(e,t)}function q2(e){const t=new Uint16Array([0,1,2,2,1,3]);return AE(e,t)}function Ts(e,t,n,r,o,s){ME(t,n);const i=LE(e),a=e.TEXTURE_2D;return D(e,()=>e.bindTexture(a,i)),D(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),D(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),D(e,()=>e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST)),D(e,()=>e.texParameteri(a,e.TEXTURE_MAG_FILTER,e.NEAREST)),S().getNumber("WEBGL_VERSION")===1?D(e,()=>e.texImage2D(a,0,r,t,n,0,o,s,null)):D(e,()=>e.texStorage2D(a,1,r,t,n)),D(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[n,t]}}function kx(e){return e.internalFormatFloat}function Q2(e,t,n,r){const[o,s]=Es(t,n);return Ts(e,o,s,kx(r),r.textureFormatFloat,e.FLOAT)}function Nx(e){return e.internalFormatHalfFloat}function Y2(e,t,n,r){const[o,s]=Es(t,n);return Ts(e,o,s,Nx(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function bx(e){return e.downloadTextureFormat}function Z2(e,t,n,r){const[o,s]=Es(t,n);return Ts(e,o,s,bx(r),e.RGBA,e.UNSIGNED_BYTE)}function _x(e){return e.internalFormatPackedFloat}function J2(e,t,n,r){const[o,s]=mo(t,n);return Ts(e,o,s,_x(r),e.RGBA,e.FLOAT)}function Fx(e){return e.internalFormatPackedHalfFloat}function eI(e,t,n,r){const[o,s]=mo(t,n);return Ts(e,o,s,Fx(r),e.RGBA,r.textureTypeHalfFloat)}function tI(e,t,n){return D(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Pf(e,t,"clipSpacePos",n,3,20,0)&&Pf(e,t,"uv",n,2,20,12)}function nI(e,t,n,r,o,s){D(e,()=>e.bindTexture(e.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(n*r*4),a=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(n*r*4),a=e.FLOAT,l=s.internalFormatPackedFloat),i.set(o),S().getNumber("WEBGL_VERSION")===2?D(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,a,i)):D(e,()=>e.texImage2D(e.TEXTURE_2D,0,l,n,r,0,e.RGBA,a,i)),D(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function rI(e,t,n){D(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?S().getNumber("WEBGL_VERSION")===2?D(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):D(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):S().getNumber("WEBGL_VERSION")===2?D(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):D(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),D(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function oI(e,t,n,r){const o=e.createBuffer();D(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,o));const a=4*4*t*n;return D(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),D(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),D(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),o}function sI(e,t,n){const r=e,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function iI(e,t,n,r){const[o,s]=Es(t,n),i=4,a=new Uint8Array($E(t*n,i));return D(e,()=>e.readPixels(0,0,o,s,r.downloadTextureFormat,e.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function aI(e,t,n,r,o,s,i,a){const l=e,u=new Float32Array(EE(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function lI(e,t,n){const r=new Float32Array(t*n*4);return D(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ll{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const n=S().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,wE(n,t)):this.gl=Mt(n);let r="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),S().getNumber("WEBGL_VERSION")===1){const s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Zs(this.gl,s),wt(this.gl,i))this.textureHalfFloatExtension=Zs(this.gl,i);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),wt(this.gl,o))this.colorBufferHalfFloatExtension=Zs(this.gl,o);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",wt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else if(wt(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=K2(this.gl),this.indexBuffer=q2(this.gl),this.framebuffer=BE(this.gl),this.textureConfig=Gc(this.gl,this.textureHalfFloatExtension)}get debug(){return S().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;D(t,()=>t.finish()),D(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),D(t,()=>t.deleteFramebuffer(this.framebuffer)),D(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),D(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),D(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,n){return this.throwIfDisposed(),Q2(this.gl,t,n,this.textureConfig)}createFloat16MatrixTexture(t,n){return this.throwIfDisposed(),Y2(this.gl,t,n,this.textureConfig)}createUnsignedBytesMatrixTexture(t,n){return this.throwIfDisposed(),Z2(this.gl,t,n,this.textureConfig)}uploadPixelDataToTexture(t,n){this.throwIfDisposed(),rI(this.gl,t,n)}uploadDenseMatrixToTexture(t,n,r,o){this.throwIfDisposed(),nI(this.gl,t,n,r,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,n){return this.throwIfDisposed(),eI(this.gl,t,n,this.textureConfig)}createPackedMatrixTexture(t,n){return this.throwIfDisposed(),J2(this.gl,t,n,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Df(this.gl,this.framebuffer),this.outputTexture=null),D(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,n,r){return this.downloadMatrixDriver(t,()=>iI(this.gl,n,r,this.textureConfig))}downloadPackedMatrixFromBuffer(t,n,r,o,s,i){return aI(this.gl,t,n,r,o,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,n){return sI(this.gl,t,n)}createBufferFromTexture(t,n,r){this.bindTextureToFrameBuffer(t);const o=oI(this.gl,n,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let n,r;if(S().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,s=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=()=>{const i=o.clientWaitSync(s,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},n=s}else S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(n,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:n,isFencePassed:r}}downloadMatrixFromPackedTexture(t,n,r){return this.downloadMatrixDriver(t,()=>lI(this.gl,n,r))}createProgram(t){this.throwIfDisposed();const n=this.gl;this.vertexShader==null&&(this.vertexShader=j2(n));const r=OE(n);return D(n,()=>n.attachShader(r,this.vertexShader)),D(n,()=>n.attachShader(r,t)),PE(n,r),this.debug&&ol(n,r),this.vertexAttrsAreBound||(this.setProgram(r),this.vertexAttrsAreBound=tI(n,this.program,this.vertexBuffer)),r}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&D(this.gl,()=>this.gl.deleteProgram(t))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ol(this.gl,this.program),D(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,n,r=!0){return this.throwIfDisposed(),r?VE(this.gl,t,n):WE(this.gl,t,n)}getAttributeLocation(t,n){return this.throwIfDisposed(),D(this.gl,()=>this.gl.getAttribLocation(t,n))}getUniformLocationNoThrow(t,n){return this.throwIfDisposed(),this.gl.getUniformLocation(t,n)}setInputMatrixTexture(t,n,r){this.throwIfDisposed(),this.throwIfNoProgram(),zE(this.gl,t,n,r)}setOutputMatrixTexture(t,n,r){this.setOutputMatrixTextureDriver(t,r,n)}setOutputPackedMatrixTexture(t,n,r){this.throwIfDisposed();const[o,s]=mo(n,r);this.setOutputMatrixTextureDriver(t,o,s)}setOutputMatrixWriteRegion(t,n,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,n)}setOutputPackedMatrixWriteRegion(t,n,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&ol(this.gl,this.program),Js(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;this.debug&&this.debugValidate(),D(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),D(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Zs(this.gl,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const r=this.gl,o=this.getQueryTimerExtensionWebGL2(),s=r.createQuery();return r.beginQuery(o.TIME_ELAPSED_EXT,s),s}const t=this.getQueryTimerExtensionWebGL1(),n=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,n),n}endQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const n=this.gl,r=this.getQueryTimerExtensionWebGL2();n.endQuery(r.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await lf(()=>this.disposed||this.isQueryAvailable(t,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,n){if(n===0)return null;if(n===2){const r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}else{const r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(t,r.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,n){if(n===0)return!0;if(n===2){const r=this.gl,o=this.getQueryTimerExtensionWebGL2(),s=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{const r=this.getQueryTimerExtensionWebGL1(),o=r.getQueryObjectEXT(t,r.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(n=>{this.addItemToPoll(()=>t.isFencePassed(),()=>n())})}pollItems(){const t=uI(this.itemsToPoll.map(n=>n.isDoneFn));for(let n=0;n<=t;++n){const{resolveFn:r}=this.itemsToPoll[n];r()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,n){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:n}),this.itemsToPoll.length>1)return;let r;"setTimeoutCustom"in S().platform&&(r=S().platform.setTimeoutCustom.bind(S().platform)),lf(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,r)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),sl(this.gl,t,this.framebuffer),this.debug&&Js(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(sl(this.gl,this.outputTexture,this.framebuffer),this.debug&&Js(this.gl)):Df(this.gl,this.framebuffer)}downloadMatrixDriver(t,n){this.bindTextureToFrameBuffer(t);const r=n();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(t,n,r){this.throwIfDisposed();const o=this.gl;sl(o,t,this.framebuffer),this.debug&&Js(o),this.outputTexture=t,D(o,()=>o.viewport(0,0,n,r)),D(o,()=>o.scissor(0,0,n,r))}setOutputMatrixWriteRegionDriver(t,n,r,o){this.throwIfDisposed(),D(this.gl,()=>this.gl.scissor(t,n,r,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function uI(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cI(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dt(e){return(t,n,r,o,s)=>{const i=Ve(t,n),a=i.length,l=ye(i),u=b(i),c=Dn(s,u),d=t.length,f=n.length,h=ye(t),p=ye(n),x=Xi(t,i),v=Xi(n,i);if(x.length+v.length===0)for(let m=0;m<c.length;++m)c[m]=e(r[m%r.length],o[m%o.length]);else for(let m=0;m<c.length;++m){const g=Ec(m,a,l),y=g.slice(-d);x.forEach($=>y[$]=0);const w=iu(y,d,h),C=g.slice(-f);v.forEach($=>C[$]=0);const I=iu(C,f,p);c[m]=e(r[w],o[I])}return[c,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dI(e,t,n,r){if(r==="int32"){const o=Int32Array.from(e);return[t,"int32",o]}if(r==="bool"){const o=ya([0],n),[s,i]=dt((a,l)=>a!==l?1:0)(t,[],e,o,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${n} to ${r}`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fI=dt((e,t)=>e+t);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hI(e,t,n,r,o){const s=b(r),i=An(o,n);for(let a=0;a<e.length;a++){const l=e[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(s>0?i[l]+=t[a]:i[l]+=1)}return i}function pI(e,t,n,r=!1){const o=e.shape[0],s=e.shape[1],i=Ce([o,n],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=e.get(a,l);if(u<0)throw new Error("Input x must be non-negative!");u>=n||(r?i.set(1,a,u):t.size>0?i.set(i.get(a,u)+t.get(a,l),a,u):i.set(i.get(a,u)+1,a,u))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Un(e){return(t,n,r)=>{const o=Dn(n,t.length);for(let s=0;s<t.length;++s)o[s]=e(t[s],r);return o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mI=Un(e=>Math.ceil(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gI(e,t,n,r){const o=Ee(n,b(t));if(r&&n!=="string"){let s=0;e.forEach(i=>{const a=b(i.shape);o.set(i.vals,s),s+=a})}else{let s=0;e.forEach(i=>{const a=n==="string"?fs(i.vals):i.vals;let l=0;for(let u=0;u<i.shape[0];++u){const c=u*t[1]+s;for(let d=0;d<i.shape[1];++d)o[c+d]=a[l++]}s+=i.shape[1]})}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xI=dt((e,t)=>e===t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vI=Un(e=>Math.exp(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yI=Un(e=>Math.expm1(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wI=Un(e=>Math.floor(e));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CI(e,t,n,r,o,s,i,a,l){const u=Ce([r,s],n);for(let c=0;c<r;c++){const d=[];let f=0;for(let h=0;h<o;h++){const p=e[c*o+h];f+=p*i[h],d.push(p)}if(f<0||f>=l/s)throw new Error(`Invalid indices: ${d} does not index into ${a}`);for(let h=0;h<s;h++)u.values[c*s+h]=t.get(...t.indexToLoc(f*s+h))}return u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SI(e,t,n){const r=Ce(n,e.dtype);for(let o=0;o<r.size;++o){const i=r.indexToLoc(o).slice(),a=i[0],l=i[2],u=t.locToIndex([a,l]);i[2]=t.values[u];const c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[o]=e.values[c])}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $I=dt((e,t)=>e>t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EI=dt((e,t)=>e>=t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const II=dt((e,t)=>e<t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TI=dt((e,t)=>e<=t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RI(e,t,n){const r=(t-e)/(n-1),o=An(n,"float32");o[0]=e;for(let s=1;s<o.length;s++)o[s]=o[s-1]+r;return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kI=Un(e=>Math.log(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NI(e,t,n,r){const o=Dn(r,b(n));for(let s=0;s<o.length;++s){const i=s*t;let a=e[i];for(let l=0;l<t;++l){const u=e[i+l];(Number.isNaN(u)||u>a)&&(a=u)}o[s]=a}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bI=dt((e,t)=>Math.max(e,t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _I=dt((e,t)=>Math.min(e,t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ox=dt((e,t)=>e*t);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FI(e,t,n){const r=co(-1,n);return Ox([],t,r,e,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OI=dt((e,t)=>e!==t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PI(e,t,n,r,o){const s=t.length,i=b(t),a=ye(t),l=ye(o),u=Dn(n,b(o));for(let c=0;c<i;++c){const d=Ec(c,s,a),f=new Array(d.length);for(let p=0;p<f.length;p++)f[p]=d[r[p]];const h=iu(f,s,l);u[h]=e[c]}return u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DI(e,t,n,r){const[o,s]=Yt(e,r),i=Qt(t,"int32"),a=An(b(o),i),l=b(s);for(let u=0;u<a.length;++u){const c=u*l;let d=1;for(let f=0;f<l;++f)d*=n[c+f];a[u]=d}return{outVals:a,outShape:o,outDtype:i}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AI(e,t,n){e.forEach((r,o)=>{if(r<0||r>=n){const s=Ec(o,t.length,ye(t)).join(",");throw new Error(`indices[${s}] = ${r} is not in [0, ${n})`)}})}function LI(e,t){for(let n=0;n<e.length;++n){const r=e[n],o=n===e.length-1?t:e[n+1].length;if(r.length===0)throw new Error("Ragged splits may not be empty");if(r[0]<0)throw new Error("Ragged splits must be non-negative");if(r[r.length-1]>o)throw new Error("Ragged splits must not point past values");for(let s=1;s<r.length;++s)if(r[s-1]>r[s])throw new Error("Ragged splits must be sorted in ascending order")}}function MI(e,t,n,r){const o=[];let s=0;const i=t.length-1+n.length,a=new Array(i).fill(null).map(()=>[0]);LI(n,r);let l=1;for(let u=0;u<t.length-1;++u){l*=t[u];const c=t[u+1];for(let d=1;d<l+1;++d)a[u].push(d*c)}for(let u=0;u<e.length;++u){let c=e[u],d=e[u]+1;for(let f=0;f<n.length;++f){const h=n[f],p=f+t.length-1;if(p>=0){const x=a[p],v=x[x.length-1]-h[c];for(let m=c;m<d;++m)a[p].push(h[m+1]+v)}c=h[c],d=h[d]}d!==c&&(o.push([c,d]),s+=d-c)}return{outSplits:a,valueSlices:o,numValues:s}}function BI(e){const t=[];for(let n=0;n<e.length;++n){const r=e[n].length,o=Ee("int32",r);t.push(o),e[n].forEach((s,i)=>o[i]=s)}return t}function Bf(e,t){const n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function UI(e,t,n,r,o,s){const i=Bf(t,2)[1],a=Bf(s,2)[1];let l=0;for(const u of n)for(let c=u[0];c<u[1];++c){for(let d=0;d<r;++d)o[l*a+d]=e[c*i+d];++l}}function VI(e,t,n,r,o){const s=t.slice();s[0]=o;const i=Ee(n,b(s)),a=e.length,l=a===0?0:a/t[0];return UI(e,t,r,l,i,s),[i,s]}function WI(e,t,n,r,o,s,i,a){if(e.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(AI(s,i,l),r.length===0)throw new Error("params.rank must be nonzero");const u=r[0],{outSplits:c,valueSlices:d,numValues:f}=MI(s,i,e,u),h=BI(c),p=VI(n,r,o,d,f);return[h,p[0],p[1]]}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uf=2147483647;function zI(e,t,n,r,o,s,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,u=i.length===0,c=[];a||c.push(t[0]),l||c.push(o[0]),u||c.push(i[0]);for(let v=1;v<c.length;++v)if(c[v]!==c[v-1])throw new Error("starts, limits, and deltas must have the same shape");const d=c.length===0?1:c[0],f=Ee("int32",d+1);f[0]=0;for(let v=0;v<d;++v){const m=a?e[0]:e[v],g=l?r[0]:r[v],y=u?s[0]:s[v];if(y===0)throw new Error("Requires delta != 0");let w;if(y>0&&g<m||y<0&&g>m)w=0;else if(w=Math.ceil(Math.abs((g-m)/y)),w>Uf)throw new Error(`Requires ((limit - start) / delta) <= ${Uf}`);f[v+1]=f[v]+w}const h=f[d],p=Ee(n,h);let x=0;for(let v=0;v<d;++v){const m=f[v+1]-f[v];let g=a?e[0]:e[v];const y=u?s[0]:s[v];for(let w=0;w<m;++w)p[x++]=g,g+=y}return[f,p]}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ft=Ot;class qi{constructor(t,n,r,o,s,i,a,l,u,c){this.shape=t,this.shapeShape=n,this.values=r,this.valuesShape=o,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=Vg(c),this.raggedRank=Wg(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===ft.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===ft.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case ft.VALUE_ROWIDS:return qi.getMaxWidthValueRowID(n);case ft.ROW_SPLITS:return qi.getMaxWidthRowSplit(n);default:throw new Error(`Cannot handle partition type ${ft[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const n=t.length;if(n===0||n===1)return 0;let r=0;for(let o=0;o<n-1;++o){const s=t[o+1]-t[o];s>r&&(r=s)}return r}static getMaxWidthValueRowID(t){const n=t.length;if(n===0)return 0;let r=0,o=t[0],s=0;for(let i=1;i<n;++i){const a=t[i];a!==o&&(o=a,s=Math.max(i-r,s),r=i)}return Math.max(n-r,s)}tensorShapeFromTensor(t,n,r=!0){if(n.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Wf(t,r)}calculateOutputSize(t){const n=this.valuesShape,r=this.defaultValueShape;zg(r,n);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Ug(this.raggedRank,o,n);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,n,r){const o=Math.min(t,r),s=[];let i=0;for(let a=0;a<o;++a,i+=n)s.push(i);for(let a=o;a<t;++a)s.push(-1);return O(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,n,r,o){const s=t.length,i=[];for(let a=0;a<s-1;++a){const l=t[a+1]-t[a];let u=Math.min(o,l),c=n[a];c===-1&&(u=0);for(let d=0;d<u;++d)i.push(c),c+=r;for(let d=0;d<l-u;++d)i.push(-1)}if(s>0&&i.length!==t[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,n,r,o){const s=t.length,i=[];if(s===0)return[];let a=0,l=t[0];if(l>=n.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${n.length}`);let u=n[l];i.push(u);for(let c=1;c<s;++c){const d=t[c];if(d===l)u>=0&&(++a,a<o?u+=r:u=-1);else{if(a=0,l=d,d>=n.length)throw new Error(`Got nextValueRowId=${d} which is not less than ${n.length}`);u=n[d]}i.push(u)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,n,r,o){const s=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case ft.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,n,r,o);case ft.ROW_SPLITS:if(s.length-1>n.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${n.length}`);return this.calculateOutputIndexRowSplit(s,n,r,o);default:throw new Error(`Unsupported partition type: ${ft[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const n=this.rowPartitionTypes[0];switch(n){case ft.FIRST_DIM_SIZE:return t[0];case ft.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case ft.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${ft[n]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const n=this.getFirstDimensionSize(),r=this.calculateOutputSize(n),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*r[l+1];const s=Wf(r,!1),i=Ee(this.valuesDType,b(s));if(o[0]*r[0]>0){let l=this.calculateFirstParentOutputIndex(n,o[0],r[0]);for(let u=1;u<=this.raggedRank;++u)l=this.calculateOutputIndex(u-1,l,o[u],r[u]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(t,n,r,o){if(r.length===0)return;const s=this.values,i=r;let a=o.slice();a=a.slice(t+1);const l=b(a),u=n.length;let c=this.defaultValue;if(c.length!==l&&c.length!==1){const p=this.defaultValueShape;Cg(()=>{const x=Ac(c,p);c=_$(x,a).dataSync()})}let d=0,f=0,h=0;for(let p=0;p<=u;++p){let x=p<u?n[p]:-1;if(x===h){++h;continue}if(f<h){const v=s.subarray(d*l),m=i.subarray(f*l),g=(h-f)*l;Vf(m,v,g)}if(p>=u){const v=r.length;x=Math.floor(v/l)}if(x>h)if(this.defaultValue.length===1)i.subarray(h*l,x*l).fill(this.defaultValue[0]),h=x;else for(;x>h;){const v=i.slice(h*l);Vf(v,c,l),++h}x<0?(d=p+1,f=h):(d=p,f=h,h=f+1)}}}function Vf(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function Wf(e,t){const n=[];for(let r of e){if(r<0){if(!t)throw new Error(`Dimension ${r} must be >= 0`);if(r<-1)throw new Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function GI(e,t,n,r,o,s,i,a,l,u){return new qi(e,t,n,r,o,s,i,a,l,u).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HI(e,t,n,r){const o=e===t,s=e<t&&n<0,i=t<e&&n>1;if(o||s||i)return An(0,r);const a=Math.abs(Math.ceil((t-e)/n)),l=An(a,r);t<e&&n===1&&(n=-1),l[0]=e;for(let u=1;u<l.length;u++)l[u]=l[u-1]+n;return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XI=Un(e=>1/Math.sqrt(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jI(e,t,n,r,o,s,i,a,l,u){const c=[r/o,o],d=e.values,f=t.values;if(r===0)return Ce(n,t.dtype);const h=Ce(c,t.dtype);typeof l=="string"||typeof l=="number"?h.values.fill(l):typeof l=="boolean"&&h.values.fill(+l);for(let p=0;p<s;p++){const x=[];let v=0;for(let m=0;m<i;m++){const g=d[p*i+m];x.push(g),v+=g*a[m]}if(v<0||v>=r/o)throw new Error(`Invalid indices: ${x} does not index into ${n}`);for(let m=0;m<o;m++)u?h.values[v*o+m]+=f[p*o+m]:h.values[v*o+m]=t.rank===0?f[0]:f[p*o+m]}return h}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KI=Un(e=>1/(1+Math.exp(-e)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qI(e,t,n,r,o){const s=Oc(r,t,n),i=b(n),a=ye(r);if(s){const d=Pc(t,a);return o==="string"?e.slice(d,d+i):e.subarray(d,d+i)}const l=o==="string"?fs(e):e,u=Ce(r,o,l),c=Ce(n,o);for(let d=0;d<c.size;++d){const f=c.indexToLoc(d),h=f.map((p,x)=>p+t[x]);c.set(u.get(...h),...f)}return o==="string"?Cx(c.values):c.values}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QI(e,t,n,r,o,s,i){const a=t[0],l=s[0],u=new Array(l),c=new Array(a),d=t[1];if(l===0){if(a!==0)throw new Error(ax(a));const v=Ee(n,0),m=Ee(o,0);return[v,[0,d],m,u,c]}let f=!0,h=0;const p=new Array(l).fill(0);for(let v=0;v<a;++v){const m=e[v*d];if(m<0)throw new Error(lx(v,m));if(m>=l)throw new Error(ux(v,m,l));++p[m],f=f&&m>=h,h=m}let x=!0;for(let v=0;v<l;++v){const m=p[v]===0;u[v]=m,x=x&&!m,p[v]=Math.max(p[v],1),v>0&&(p[v]+=p[v-1])}if(x&&f){const v=e,m=r;for(let g=0;g<a;++g)c[g]=g;return[v,[a,d],m,u,c]}else{const v=p[l-1],m=Ee(n,v*d),g=Ee(o,v),y=new Array(l).fill(0);for(let w=0;w<a;++w){const C=e[w*d],I=y[C],$=(C===0?0:p[C-1])+I;y[C]++;for(let E=0;E<d;++E)m[$*d+E]=e[w*d+E];g[$]=r[w],c[w]=$}for(let w=0;w<l;++w)if(y[w]===0){const I=w===0?0:p[w-1];m[I*d+0]=w;for(let $=1;$<d;++$)m[I*d+$]=0;g[I]=i}return[m,[v,d],g,u,c]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YI(e,t,n,r,o){const s=b(r),i=t[0],a=o.length,l=[];let u=1,c=-1;for(let v=0;v<a;++v){const m=o[v];if(m===-1){if(c!==-1)throw new Error(cx(c,v));c=v,l.push(1)}else{if(m<0)throw new Error(dx(v,m));u*=m,l.push(m)}}if(c!==-1){if(u<=0)throw new Error(fx());const v=Math.trunc(s/u);if(u*v!==s)throw new Error(hx(r,l));l[c]=v}if(b(l)!==s)throw new Error(px(r,l));const f=r.length,h=[];if(f>0){h[f-1]=1;for(let v=f-2;v>=0;--v)h[v]=h[v+1]*r[v+1]}const p=[];if(a>0){p[a-1]=1;for(let v=a-2;v>=0;--v)p[v]=p[v+1]*l[v+1]}const x=Ee(n,i*a);for(let v=0;v<i;++v){let m=0;for(let g=0;g<f;++g)m+=e[v*f+g]*h[g];for(let g=0;g<a;++g)x[v*a+g]=Math.trunc(m/p[g]),m%=p[g]}return[x,[i,a],l]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZI(e,t,n,r,o,s=!1,i=0){const a=r.length,l=[t[0],e.length/t[0]],u=l[1],d=a>0?o[a-1]+1:0;if(d<0)throw new Error(Eu());const f=t.slice();f[0]=d;const h=f.reduce((y,w)=>y*w,1),p=Ee(n,h);if(a===0)return d>0&&p.fill(i),[p,f];if(d<=0)throw new Error(Eu());let x=0,v=1,m=0,g=o[x];for(;;){let y=0;if(v<a){if(y=o[v],g===y){++v;continue}if(g>=y)throw new Error(mx())}if(g<0||g>=d)throw new Error(gx(g,d));g>m&&p.fill(i,m*u,g*u);for(let w=x;w<v;++w){const C=r[w];if(C<0||C>=l[0])throw new Error(xx(w,r[w],l[0]));for(let I=0;I<u;I++)p[g*u+I]+=e[C*u+I]}if(s)for(let w=0;w<u;w++)p[g*u+w]/=v-x;if(x=v,++v,m=g+1,g=y,v>a)break}return m<d&&p.fill(i,m*u,d*u),[p,f]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JI=Un(e=>Math.sqrt(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eT=dt((e,t)=>{const n=e-t;return n*n});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tT(e,t,n,r){const o=Ce(e,t.dtype);for(let s=0;s<o.size;s++){const i=o.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*n[l]+r[l];o.set(t.get(...a),...i)}return o}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nT{constructor(t,n,r,o,s,i){this.separator=rr(t),this.nGramWidths=n,this.leftPad=rr(r),this.rightPad=rr(o),this.padWidth=s,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,n){const r=this.getPadWidth(n);return Math.max(0,t+2*r-n+1)}createNGrams(t,n,r,o,s,i){for(let a=0;a<s;++a){const l=this.getPadWidth(i),u=Math.max(0,l-a),c=Math.max(0,l-(s-(a+1))),d=i-(u+c),f=n+(u>0?0:a-l);let h=0;h+=u*this.leftPad.length;for(let g=0;g<d;++g)h+=t[f+g].length;h+=c*this.rightPad.length,h+=(u+c+d-1)*this.separator.length,r[o+a]=new Uint8Array(h);const x=r[o+a];let v=0;const m=g=>g.forEach(y=>x[v++]=y);for(let g=0;g<u;++g)m(this.leftPad),m(this.separator);for(let g=0;g<d-1;++g)m(t[f+g]),m(this.separator);if(d>0){m(t[f+d-1]);for(let g=0;g<c;++g)m(this.separator),m(this.rightPad)}else{for(let g=0;g<c-1;++g)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(t,n){const r=t.length,o=n.length;if(o>0){let l=n[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let u=1;u<o;++u){let c=n[u]>=l;if(c=c&&n[u]<=r,!c)throw new Error(`Invalid split value ${n[u]}, must be in [${l}, ${r}]`);l=n[u]}if(l!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${l}`)}const s=o-1,i=Ee("int32",o);if(r===0||o===0){const l=new Array(r);for(let u=0;u<=s;++u)i[u]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){const u=n[l]-n[l-1];let c=0;this.nGramWidths.forEach(d=>{c+=this.getNumNGrams(u,d)}),this.preserveShort&&u>0&&c===0&&(c=1),i[l]=i[l-1]+c}const a=new Array(i[s]);for(let l=0;l<s;++l){const u=n[l];let c=i[l];if(this.nGramWidths.forEach(d=>{const f=n[l+1]-n[l],h=this.getNumNGrams(f,d);this.createNGrams(t,u,a,c,h,d),c+=h}),this.preserveShort&&c===i[l]){const d=n[l+1]-n[l];if(d===0)continue;const f=d+2*this.padWidth,h=1;this.createNGrams(t,u,a,c,h,f)}}return[a,i]}}function rT(e,t,n,r,o,s,i,a){return new nT(n,r,o,s,i,a).compute(e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oT(e,t,n,r){if(!e.length)return;if(t.length===0){for(let s=0;s<e.length;++s)r.push(e.subarray(s,s+1));return}if(t.length===1){const s=t[0];let i=e.indexOf(s);for(;i!==-1;){const a=e.subarray(0,i);(!n||a.length!==0)&&r.push(a),e=e.subarray(i+1),i=e.indexOf(s)}(!n||e.length!==0)&&r.push(e);return}let o=0;for(let s=0;s<e.length+1;s++)if(s===e.length||t.indexOf(e[s])!==-1){const i=e.subarray(o,s);(!n||i.length!==0)&&r.push(i),o=s+1}}function sT(e,t,n){const r=e.length,o=[];let s=0,i=0;const a=new Array(r);for(let f=0;f<r;++f){const h=o.length;oT(e[f],t,n,o);const p=o.length-h;a[f]=p,s+=p,i=Math.max(i,p)}const l=Ee("int32",s*2),u=new Array(s),c=[r,i];let d=0;for(let f=0;f<r;++f)for(let h=0;h<a[f];++h)l[d*2]=f,l[d*2+1]=h,u[d]=o[d],++d;return[l,u,c]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iT(e,t){const n=Ee("int32",e.length);for(let r=0;r<e.length;++r)n[r]=uS(e[r]).modulo(t).getLowBitsUnsigned();return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aT=dt((e,t)=>e-t);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lT(e,t){const n=new Array(e.rank);for(let o=0;o<n.length;o++)n[o]=e.shape[o]*t[o];const r=Ce(n,e.dtype);for(let o=0;o<r.values.length;++o){const s=r.indexToLoc(o),i=new Array(e.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%e.shape[l];const a=e.locToIndex(i);r.values[o]=e.values[a]}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mo=(e,t)=>{const n=t.value-e.value;return n===0?e.index-t.index:n};function Px(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){const a=r-n+1,l=t-n+1,u=Math.log(a),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(a-c)/a)*Math.sign(l-a/2),f=Math.max(n,Math.floor(t-l*c/a+d)),h=Math.min(r,Math.floor(t+(a-l)*c/a+d));Px(e,t,f,h)}const o=e[t];let s=n,i=r;for(bo(e,n,t),Mo(e[r],o)>0&&bo(e,n,r);s<i;){for(bo(e,s,i),s++,i--;Mo(e[s],o)<0;)s=s+1;for(;Mo(e[i],o)>0;)i=i-1}Mo(e[n],o)===0?bo(e,n,i):(i=i+1,bo(e,i,r)),i<=t&&(n=i+1),t<=i&&(r=i-1)}}function uT(e,t,n,r,o){const s=t[t.length-1],[i,a]=[e.length/s,s],l=Dn(n,i*r),u=Dn("int32",i*r);for(let d=0;d<i;d++){const f=d*a,h=e.subarray(f,f+a);let p=new Array(h.length);h.forEach((g,y)=>p[y]={value:g,index:y}),r<p.length&&(Px(p,r),p=p.slice(0,r)),o&&p.sort(Mo);const x=d*r,v=l.subarray(x,x+r),m=u.subarray(x,x+r);for(let g=0;g<r;g++)v[g]=p[g].value,m[g]=p[g].index}const c=t.slice();return c[c.length-1]=r,[Ce(c,n,l),Ce(c,"int32",u)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cT(e,t,n,r){const o=Ae(t,n)[0],s=[1,n[0],1];for(let p=0;p<o;p++)s[0]*=n[p];s[1]=n[o];for(let p=o+1;p<n.length;p++)s[2]*=n[p];const i={},a=new Int32Array(n[o]),l=new cu(s,r,e),u=[],c=s[0]===1&&s[2]===1;for(let p=0;p<n[o];p++){let x;if(c)x=e[p].toString();else{const v=[];for(let m=0;m<s[0];m++)for(let g=0;g<s[2];g++)v.push(l.get(m,p,g));x=v.join(",")}if(i[x]!==void 0)a[p]=i[x];else{const v=Object.keys(i).length;i[x]=v,a[p]=v,u.push(p)}}const d=s.slice();d[1]=Object.keys(i).length;const f=new cu(d,r);u.forEach((p,x)=>{for(let v=0;v<s[0];v++)for(let m=0;m<s[2];m++)f.set(l.get(v,p,m),v,x,m)});const h=n.slice();return h[o]=d[1],{outputValues:f.values,outputShape:h,indices:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dT=Object.freeze(Object.defineProperty({__proto__:null,simpleAbsImpl:cI,addImpl:fI,bincountImpl:hI,bincountReduceImpl:pI,castImpl:dI,ceilImpl:mI,concatImpl:gI,equalImpl:xI,expImpl:vI,expm1Impl:yI,floorImpl:wI,gatherNdImpl:CI,gatherV2Impl:SI,greaterImpl:$I,greaterEqualImpl:EI,lessImpl:II,lessEqualImpl:TI,linSpaceImpl:RI,logImpl:kI,maxImpl:NI,maximumImpl:bI,minimumImpl:_I,multiplyImpl:Ox,negImpl:FI,notEqualImpl:OI,prodImpl:DI,raggedGatherImpl:WI,raggedRangeImpl:zI,raggedTensorToTensorImpl:GI,rangeImpl:HI,rsqrtImpl:XI,scatterImpl:jI,sigmoidImpl:KI,sliceImpl:qI,sparseFillEmptyRowsImpl:QI,sparseReshapeImpl:YI,sparseSegmentReductionImpl:ZI,sqrtImpl:JI,squaredDifferenceImpl:eT,stridedSliceImpl:tT,stringNGramsImpl:rT,stringSplitImpl:sT,stringToHashBucketFastImpl:iT,subImpl:aT,tileImpl:lT,topKImpl:uT,transposeImpl:PI,uniqueImpl:cT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:fT,bincountImpl:Dx,bincountReduceImpl:hT,castImpl:pT,ceilImpl:mT,concatImpl:gT,equalImpl:xT,expImpl:vT,expm1Impl:yT,floorImpl:wT,gatherNdImpl:CT,gatherV2Impl:ST,greaterImpl:$T,greaterEqualImpl:ET,lessImpl:IT,lessEqualImpl:TT,linSpaceImpl:RT,logImpl:kT,maxImpl:NT,maximumImpl:bT,minimumImpl:_T,multiplyImpl:FT,negImpl:OT,notEqualImpl:PT,prodImpl:DT,raggedGatherImpl:AT,raggedRangeImpl:LT,raggedTensorToTensorImpl:MT,rangeImpl:BT,rsqrtImpl:UT,scatterImpl:VT,sigmoidImpl:WT,simpleAbsImpl:Ax,sliceImpl:zT,sparseFillEmptyRowsImpl:GT,sparseReshapeImpl:HT,sparseSegmentReductionImpl:Lx,sqrtImpl:XT,stridedSliceImpl:jT,stringNGramsImpl:KT,stringSplitImpl:qT,stringToHashBucketFastImpl:QT,subImpl:YT,tileImpl:ZT,topKImpl:JT,transposeImpl:Kc,uniqueImpl:eR}=dT;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mx(e,t){return["x","y","z","w","u","v"].slice(0,t).map(n=>`${e}.${n}`)}function Oe(e,t){return t===1?[e]:Mx(e,t)}function tR(e,t){if(e===1)return"rc";let n="";for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=",");return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nR{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Me(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const n=Oe("rc",this.rank),r=q(this.rank),o=this.getOutOfBoundsCondition(n),s=this.getSetup(n),i=this.getOutput(n);this.userCode=`
        void main() {
          ${r} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const n=[];for(let r=0;r<=1;r++)for(let o=0;o<=1;o++){let s=`${r===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${t[t.length-1-i]},`+s;n.push(s)}return n}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let n="";for(let r=this.rank-2;r<this.rank;r++)n+=`${t[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(n+="||");return n}getSetup(t){if(this.rank===1)return"";const n=t.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${n[0]};
      int c = ${n[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${r};
      bool rEdge = rp1 >= ${o};
    `}getOutput(t){const n=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${n[0]}),
            cEdge ? 0. : getA(${n[1]}),
            rEdge ? 0. : getA(${n[2]}),
            rEdge || cEdge ? 0. : getA(${n[3]})`}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bx{constructor(t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length);let r="";for(let o=0;o<4;o++){let s="thisRC = rc;";o%2===1&&(s+="thisRC.z += 1;"),o>1&&(s+="thisRC.y += 1;"),r+=`
        ${s}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${rR(n,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Xc():Hc(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${r}

        setOutput(result);
      }
    `}}function rR(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?t2(["r","c","d"],"inputShape"):vr(["r","c","d"],e)}
      return ivec3(r, c, d);
    }
  `}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oR{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(t,n,r){const o=Gf(n,r),s=Hf(t,o,r);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);const i=zf(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[s].shift();return this.usedTextures[s].push(l),l}let a;return o===xe.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===xe.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===xe.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===xe.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===xe.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,n,r,o){if(this.freeTextures==null)return;const s=Gf(r,o),i=Hf(n,s,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=zf(n,s,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=S().get("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const u=this.usedTextures[i],c=u.indexOf(t);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function sR(e,t){const n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function zf(e,t,n,r,o){const s=iR(t,r);let i;if(o){const[l,u]=mo(e[0],e[1]);i=l*u}else{const[l,u]=Es(e[0],e[1]);i=l*u}const a=sR(n,s);return i*a}function iR(e,t){switch(e){case xe.PACKED_2X2_FLOAT32:return _x(t);case xe.PACKED_2X2_FLOAT16:return Fx(t);case xe.UNPACKED_FLOAT32:return kx(t);case xe.UNPACKED_FLOAT16:return Nx(t);case xe.PACKED_4X1_UNSIGNED_BYTE:return bx(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function aR(e){return S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?xe.PACKED_2X2_FLOAT32:xe.UNPACKED_FLOAT32:e?xe.PACKED_2X2_FLOAT16:xe.UNPACKED_FLOAT16}function Gf(e,t){if(e===it.UPLOAD)return xe.PACKED_2X2_FLOAT32;if(e===it.RENDER||e==null)return aR(t);if(e===it.DOWNLOAD||e===it.PIXELS)return xe.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function Hf(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class on{constructor(t,n){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${n}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Tt="if (isnan(x)) return x;",lR="return x;",Xf="return abs(x);",uR="return (x >= 0.0) ? x : (exp(x) - 1.0);",cR=Tt+`
  return (x < 0.0) ? 0.0 : x;
`,dR=Tt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Sr="return x;",fR="return 1.0 / (1.0 + exp(-1.0 * x));";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hR="return x;",pR=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,mR=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,gR=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,xR="return 1.0 / (1.0 + exp(-1.0 * x));";class er{constructor(t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${n}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vR{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length);const n=t.length,r=Oe("rc",n),o=q(n),s=tR(n,r),i=r.slice(-2),a=n<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yR=j$,wR=1e-7,CR=1e-4,ni={};function SR(e){return e in ni||(ni[e]={}),ni[e]}const $R=S().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),ER=600;function IR(){return S().global.screen==null?1024:S().global.screen.height*S().global.screen.width*window.devicePixelRatio*ER/1024/1024}class $a extends Fm{constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!S().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(t!=null){if(t instanceof ll)n=t;else{const r=Mt(S().getNumber("WEBGL_VERSION"),t);n=new ll(r)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const r=Mt(S().getNumber("WEBGL_VERSION"));n=new ll(r),this.binaryCache=SR(S().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new oR(this.gpgpu),this.numMBBeforeWarning=IR(),this.texData=new Kv(this,gn())}nextDataId(){return $a.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,n,r,o,s,i){const a=this.makeTensorInfo(n,r),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,s]},l.texShape=[o,s];const u=ei(n),c=new Mf(u,!1,i),d=this.runWebGLProgram(c,[a],r,[[o,s]]);return d.shape=n,l.texture=null,this.disposeIntermediateTensorInfo(a),d.dataId}write(t,n,r){if((S().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||S().getBool("DEBUG"))&&this.checkNumericalProblems(t),r==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:n,dtype:r,values:t,usage:it.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const n=this.texData.get(t);n.refCount++}decRef(t){if(this.texData.has(t)){const n=this.texData.get(t);n.refCount--}}move(t,n,r,o,s){if(S().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:r,dtype:o,values:n,usage:it.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const n=this.texData.get(t),{values:r,dtype:o,complexTensorInfos:s,slice:i,shape:a,isPacked:l}=n;if(i!=null){let f;l?f=new er(a,Sr):f=new on(a,Sr);const h=this.runWebGLProgram(f,[{dataId:t,shape:a,dtype:o}],o),p=this.readSync(h.dataId);return this.disposeIntermediateTensorInfo(h),p}if(r!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return r;const u=this.activeTimers!=null;let c;u&&(c=bt());let d;if(o==="complex64"){const f=this.readSync(s.real.dataId),h=this.readSync(s.imag.dataId);d=$u(f,h)}else d=this.getValuesFromTexture(t);return u&&(this.downloadWaitMs+=bt()-c),this.convertAndCacheOnCPU(t,d)}async read(t){if(this.pendingRead.has(t)){const p=this.pendingRead.get(t);return new Promise(x=>p.push(x))}const n=this.texData.get(t),{values:r,shape:o,slice:s,dtype:i,complexTensorInfos:a,isPacked:l}=n;if(s!=null){let p;l?p=new er(o,Sr):p=new on(o,Sr);const x=this.runWebGLProgram(p,[{dataId:t,shape:o,dtype:i}],i),v=this.read(x.dataId);return this.disposeIntermediateTensorInfo(x),v}if(r!=null)return this.convertAndCacheOnCPU(t);if(S().getBool("DEBUG")&&!S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&S().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null,c;if(i!=="complex64"&&S().get("WEBGL_BUFFER_SUPPORTED")){c=this.decode(t);const p=this.texData.get(c.dataId);u=this.gpgpu.createBufferFromTexture(p.texture.texture,...Ys(o))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let d;if(i==="complex64"){const p=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),x=p[0],v=p[1];d=$u(x,v)}else if(u==null)d=this.getValuesFromTexture(t);else{const p=b(o);d=this.gpgpu.downloadFloat32MatrixFromBuffer(u,p)}if(c!=null&&this.disposeIntermediateTensorInfo(c),u!=null){const p=this.gpgpu.gl;D(p,()=>p.deleteBuffer(u))}const f=this.convertAndCacheOnCPU(t,d),h=this.pendingRead.get(t);return this.pendingRead.delete(t),h.forEach(p=>p(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&gn().removeDataId(t,this),this.pendingDeletes--),f}readToGPU(t,n={}){const r=this.texData.get(t),{values:o,shape:s,slice:i,dtype:a,isPacked:l,texture:u}=r;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let h;l?h=new er(s,Sr):h=new on(s,Sr);const p=this.runWebGLProgram(h,[{dataId:t,shape:s,dtype:a}],a),x=this.readToGPU(p,n);return this.disposeIntermediateTensorInfo(p),x}if(u==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const c=this.decode(t,n.customTexShape),d=gn().makeTensorFromTensorInfo(c),f=this.texData.get(c.dataId);return Object.assign({tensorRef:d},f.texture)}bufferSync(t){const n=this.readSync(t.dataId);if(t.dtype==="string")try{const r=n.map(o=>no(o));return Ce(t.shape,t.dtype,r)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Ce(t.shape,t.dtype,n)}checkNumericalProblems(t){if(t!=null)for(let n=0;n<t.length;n++){const r=t[n];if(!kE(r))throw S().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${r} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${r} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:n,dtype:r,isPacked:o}=this.texData.get(t),s=b(n);if(S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const f=this.decode(t),h=this.texData.get(f.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(h.texture.texture,...Ys(n)).subarray(0,s);return this.disposeIntermediateTensorInfo(f),p}const i=S().getBool("WEBGL_PACK")&&o===!0,a=i?ei(n):n,l=i?new G2(a):new z2(a),u=this.runWebGLProgram(l,[{shape:a,dtype:r,dataId:t}],"float32"),c=this.texData.get(u.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(u),d}timerAvailable(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const n=this.activeTimers,r=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=r,o=!0):this.activeTimers.push(r),this.activeTimers=r,t();const s=eo(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=eo(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=n,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(s);a.kernelMs=qv(l),a.getExtraProfileInfo=()=>l.map((u,c)=>({name:i[c],ms:u})).map(u=>`${u.name}: ${u.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:bt(),endMs:null}}endTimer(t){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=bt(),t)}async getQueryTime(t){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const n=t;return n.endMs-n.startMs}disposeData(t,n=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(n?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!n&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:r}=this.texData.get(t);return r!=null&&(this.disposeData(r.real.dataId,n),this.disposeData(r.imag.dataId,n)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:n,dtype:r,texShape:o,usage:s,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,u=this.dataRefCount.get(l);u>1?this.dataRefCount.set(l,u-1):(this.dataRefCount.delete(l),n!=null&&(this.numBytesInGPU-=this.computeBytes(o,r),this.textureManager.releaseTexture(n,o,s,i)));const c=this.texData.get(t);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,n=$R){return S().getBool("WEBGL_CPU_FORWARD")&&t.every(r=>this.texData.get(r.dataId).texture==null&&b(r.shape)<n)}getGPGPUContext(){return this.gpgpu}where(t){Pt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=t.dataSync();return yR(t.shape,n)}packedUnaryOp(t,n,r){const o=new er(t.shape,n),s=this.compileAndRun(o,[t],r);return gn().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=Ax(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(S().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Xf,t.dtype);const n=new on(t.shape,Xf),r=this.compileAndRun(n,[t]);return gn().makeTensorFromTensorInfo(r)}makeTensorInfo(t,n,r){let o;if(n==="string"&&r!=null&&r.length>0&&ga(r[0])){const s=r.map(i=>rr(i));o=this.write(s,t,n)}else o=this.write(r,t,n);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:n}}makeOutput(t,n,r){return gn().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,r),this)}unpackTensor(t){const n=new vR(t.shape);return this.runWebGLProgram(n,[t],t.dtype)}packTensor(t){const n=new nR(t.shape),r=!0;return this.runWebGLProgram(n,[t],t.dtype,null,r)}packedReshape(t,n){const r=[oo(t.shape),...so(t.shape)],o={dtype:t.dtype,shape:r,dataId:t.dataId},s=[oo(n),...so(n)],i=new Bx(s,r),a=!0,l=[r],u=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:u.dataId,shape:n,dtype:u.dtype}}decode(t,n){const r=this.texData.get(t),{isPacked:o,shape:s,dtype:i}=r;if(n!=null){const f=b(s),h=n[0]*n[1]*4;O(f<=h,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=ei(s);let l;o?l=new W2(a):l=new V2(a);const u=!0,c=[n!=null?n:Ys(a)],d=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,c,u,n);return{dtype:i,shape:s,dataId:d.dataId}}runWebGLProgram(t,n,r,o,s=!1,i){const a=this.makeTensorInfo(t.outputShape,r),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===hs.DENSE){const m=i!=null?i:Ys(t.outputShape);l.texShape=m.map(g=>g*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),b(a.shape)===0)return l.values=Dn(a.dtype,0),a;const u=[],c=n.map(m=>{if(m.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let g=this.texData.get(m.dataId);if(g.texture==null){if(!t.packedInputs&&b(m.shape)<=S().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:m.shape,texData:null,isUniform:!0,uniformValues:g.values};t.packedInputs&&(g.isPacked=!0,g.shape=m.shape)}if(this.uploadToGPU(m.dataId),!!g.isPacked!=!!t.packedInputs)m=g.isPacked?this.unpackTensor(m):this.packTensor(m),u.push(m),g=this.texData.get(m.dataId);else if(g.isPacked&&!Ki(g.shape,m.shape)){const y=m,w=m.shape;m.shape=g.shape,m=this.packedReshape(m,w),u.push(m),g=this.texData.get(m.dataId),y.shape=w}return{shape:m.shape,texData:g,isUniform:!1}});this.uploadToGPU(a.dataId);const d={shape:a.shape,texData:l,isUniform:!1},f=U2(t,c,d),h=this.getAndSaveBinary(f,()=>M2(this.gpgpu,t,c,d)),p=this.activeTimers!=null;let x;p&&(x=this.startTimer()),S().get("ENGINE_COMPILE_ONLY")||B2(this.gpgpu,h,c,d,o),u.forEach(m=>this.disposeIntermediateTensorInfo(m)),p&&(x=this.endTimer(x),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(x)}));const v=S().get("WEBGL_FLUSH_THRESHOLD");if(v>0){const m=bt();m-this.lastGlFlushTime>v&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=m)}if(!S().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&s===!1){const m=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),m}return a}compileAndRun(t,n,r,o,s=!1){return r=r||n[0].dtype,this.runWebGLProgram(t,n,r,o,s)}getAndSaveBinary(t,n){return t in this.binaryCache||(this.binaryCache[t]=n()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(S().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(n=>{this.gpgpu.deleteProgram(this.binaryCache[n].webGLProgram),delete this.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Cg(()=>{if(!S().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=S().getBool("DEBUG");S().set("DEBUG",!1);const n=this.abs(P$(1e-8)).dataSync()[0];if(S().set("DEBUG",t),n>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?wR:CR}uploadToGPU(t){const n=this.texData.get(t),{shape:r,dtype:o,values:s,texture:i,usage:a,isPacked:l}=n;if(i!=null)return;const u=this.activeTimers!=null;let c;u&&(c=bt());let d=n.texShape;if(d==null&&(d=XE(r,l),n.texShape=d),s!=null){const f=ei(r);let h,p=d[1],x=d[0];const v=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(l||!v)&&([p,x]=mo(d[0],d[1])),l?h=new X2(f,v):h=new Mf(f,v);const m=v?[x,p]:d,g=this.makeTensorInfo(m,o),y=this.texData.get(g.dataId);v?y.usage=it.PIXELS:y.usage=it.UPLOAD,y.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),p,x,s);const w=[[x,p]],C=!0,I=this.runWebGLProgram(h,[g],o,w,C),$=this.texData.get(I.dataId);n.texShape=$.texShape,n.isPacked=$.isPacked,n.usage=$.usage,S().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(n.texture=$.texture,n.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(g),u&&(this.uploadWaitMs+=bt()-c)}else{const f=this.acquireTexture(d,a,o,l);n.texture=f}}convertAndCacheOnCPU(t,n){const r=this.texData.get(t),{dtype:o}=r;return this.releaseGPUData(t),n!=null&&(r.values=TR(n,o)),r.values}acquireTexture(t,n,r,o){if(this.numBytesInGPU+=this.computeBytes(t,r),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,n,o)}computeBytes(t,n){return t[0]*t[1]*ou(n)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,n]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(n));return Promise.all(t)}else{for(const[,n]of Object.entries(this.binaryCache)){const r=new Promise(o=>{try{this.checkCompletion_(n),o(!0)}catch(s){throw s}});t.push(r)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await lE(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Sx(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,t]of Object.entries(this.binaryCache)){const{uniformLocations:n,customUniformLocations:r,infLoc:o,nanLoc:s,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:l,outShapeStridesLocation:u,outTexShapeLocation:c}=Rx(this.gpgpu,t.program,t.webGLProgram);t.uniformLocations=n,t.customUniformLocations=r,t.infLoc=o,t.nanLoc=s,t.inShapesLocations=i,t.inTexShapesLocations=a,t.outShapeLocation=l,t.outShapeStridesLocation=u,t.outTexShapeLocation=c}}createTensorFromTexture(t,n,r){const{texture:o,height:s,width:i,channels:a}=t,l=gn().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const u=l.writeTexture(o,n,r,s,i,a);return gn().makeTensorFromDataId(u,n,r,l)}}$a.nextDataId=0;function TR(e,t){if(t==="float32"||t==="complex64")return e;if(t==="int32"||t==="bool"){const n=t==="int32"?new Int32Array(e.length):new Uint8Array(e.length);for(let r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}else throw new Error(`Unknown dtype ${t}`)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ug()&&h$("webgl",()=>new $a,2);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qc=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class io{constructor(t,n,r){this.variableNames=["A","B"],this.outputShape=Ve(n,r),this.enableShapeUniforms=Me(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rs=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class ks{constructor(t,n,r,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ve(n,r);const s=this.outputShape.length;this.enableShapeUniforms=Me(s);let i="";if(o)if(s===0||b(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${q(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Oe("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Je(e){const{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}const RR={kernelName:Rc,backendName:"webgl",kernelFunc:Je};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vn(e){const{inputs:t,backend:n}=e,{real:r,imag:o}=t,s=n.makeTensorInfo(r.shape,"complex64"),i=n.texData.get(s.dataId),a=Je({inputs:{x:r},backend:n}),l=Je({inputs:{x:o},backend:n});return i.complexTensorInfos={real:a,imag:l},s}const kR={kernelName:Um,backendName:"webgl",kernelFunc:Vn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ux="return (a < 0.) ? b * a : a;",Vx=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function NR(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{alpha:s}=r,i=n.makeTensorInfo([],"float32",co(s,"float32")),a=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ks(Vx,o.shape,i.shape):new io(Ux,o.shape,i.shape),l=n.runWebGLProgram(a,[o,i],"float32");return n.disposeIntermediateTensorInfo(i),l}const bR={kernelName:Wm,backendName:"webgl",kernelFunc:NR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wx="return (a < 0.) ? b * a : a;",zx=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function _R(e){const{inputs:t,backend:n}=e,{x:r,alpha:o}=t,s=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ks(zx,r.shape,o.shape):new io(Wx,r.shape,o.shape);return n.runWebGLProgram(s,[r,o],"float32")}const FR={kernelName:Gm,backendName:"webgl",kernelFunc:_R};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wo="if (isnan(x)) return x;";function z({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:o,backend:s})=>{const{x:i}=o,a=s,l=r||i.dtype;if(a.shouldExecuteOnCPU([i])&&n!=null){const d=a.texData.get(i.dataId),f=n(d.values,l);return a.makeTensorInfo(i.shape,l,f)}const u=S().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let c;return u?c=new er(i.shape,t):c=new on(i.shape,e),a.runWebGLProgram(c,[i],l)}}function Se({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:o,dtype:s}){return({inputs:i,backend:a})=>{const{a:l,b:u}=i,c=a;if(r&&l.dtype==="complex64"){const p=c.texData.get(l.dataId),x=c.texData.get(u.dataId),[v,m]=[[p.complexTensorInfos.real,x.complexTensorInfos.real],[p.complexTensorInfos.imag,x.complexTensorInfos.imag]].map(y=>{const[w,C]=y,I={dataId:w.dataId,dtype:w.dtype,shape:l.shape},$={dataId:C.dataId,dtype:C.dtype,shape:u.shape},E=new io(e,l.shape,u.shape);return c.runWebGLProgram(E,[I,$],Qt(w.dtype,C.dtype))}),g=Vn({inputs:{real:v,imag:m},backend:c});return c.disposeIntermediateTensorInfo(v),c.disposeIntermediateTensorInfo(m),g}const d=s||Qt(l.dtype,u.dtype);if((l.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([l,u]))&&o!=null){const p=c.texData.get(l.dataId).values,x=c.texData.get(u.dataId).values,v=l.dtype==="string"?fs(p):p,m=l.dtype==="string"?fs(x):x,[g,y]=o(l.shape,u.shape,v,m,d),w=c.makeTensorInfo(y,d),C=c.texData.get(w.dataId);return C.values=g,w}const f=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let h;return f?h=new ks(t,l.shape,u.shape,n):h=new io(e,l.shape,u.shape),c.runWebGLProgram(h,[l,u],d)}}function ps(e,t=!1){if(e==="linear")return t?hR:lR;if(e==="relu")return t?mR:cR;if(e==="elu")return t?pR:uR;if(e==="relu6")return t?gR:dR;if(e==="prelu")return t?zx:Wx;if(e==="leakyrelu")return t?Vx:Ux;if(e==="sigmoid")return t?xR:fR;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gx{constructor(t,n,r,o=!1,s=!1,i=!1,a=null,l=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=Me(this.outputShape.length);const c=o?t[1]:t[2],d=Math.ceil(c/2),f=o?"i * 2, rc.y":"rc.y, i * 2",h=s?"rc.z, i * 2":"i * 2, rc.z",p=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],x=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let v="",m="";a&&(l?v=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?v=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:v=`vec4 activation(vec4 x) {
          ${a}
        }`,m="result = activation(result);");const g=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let y="rc.x",w="rc.x";t[0]<n[0]?y=`int(min(float(rc.x), ${t[0]-1}.))`:n[0]<t[0]&&(w=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`
      ${v}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${d}; i++) {
          int batchA = ${y};
          int batchB = ${w};
          vec4 a = getMatrixA(batchA, ${f});
          vec4 b = getMatrixB(batchB, ${h});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${x[0]});
          result += (${p[1]} * ${x[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${g}

        ${m}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jf={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Kf{constructor(t,n,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Ve(n,r),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qf="return a * b;";function Qc(e){const{inputs:t,backend:n}=e,{a:r,b:o}=t,s=Qt(r.dtype,o.dtype);if(r.dtype==="complex64"){const a=n.texData.get(r.dataId),l=n.texData.get(o.dataId),u=new Kf(jf.REAL,r.shape,o.shape),c=new Kf(jf.IMAG,r.shape,o.shape),d=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:r.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],f=n.runWebGLProgram(u,d,"float32"),h=n.runWebGLProgram(c,d,"float32"),p=Vn({inputs:{real:f,imag:h},backend:n});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(h),p}if(n.shouldExecuteOnCPU([r,o])){const a=n.texData.get(r.dataId),l=n.texData.get(o.dataId),[u,c]=FT(r.shape,o.shape,a.values,l.values,s),d=n.makeTensorInfo(c,s),f=n.texData.get(d.dataId);return f.values=u,d}let i;return S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new ks(qf,r.shape,o.shape):i=new io(qf,r.shape,o.shape),n.runWebGLProgram(i,[r,o],s)}const OR={kernelName:zm,backendName:"webgl",kernelFunc:Qc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PR(e,t,n){const r=[oo(e.shape),...so(e.shape)],o={dtype:e.dtype,shape:r,dataId:e.dataId},s=[oo(t),...so(t)],i=new Bx(s,r),a=!0,l=[r],u=n.runWebGLProgram(i,[o],e.dtype,l,a);return{dataId:u.dataId,shape:t,dtype:u.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{shape:s}=r,i=n,a=b(o.shape),l=Qv(s,a),u=b(l);O(a===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const c=i.texData.get(o.dataId);return c.isPacked&&!Ki(o.shape,l)&&!(c.texture!==null&&Ki(c.shape,l))?PR(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const DR={kernelName:Xm,backendName:"webgl",kernelFunc:_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qf{constructor(t,n){this.variableNames=["x"];const{windowSize:r,batchSize:o,inSize:s,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(r/4)*4,l=r%4;let u="sumValue += dot(values, ones);";if(n!=null){const d=1/n;u=`sumValue += dot(values * ${zi(d)?d.toPrecision(2):d}, ones);`}let c="";s%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class AR{constructor(t,n){this.variableNames=["x"];const{windowSize:r,batchSize:o,inSize:s,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";n==="prod"?a="1.0":n==="min"?(a="1.0 / 1e-20",l="min"):n==="max"&&(a="-1.0 / 1e-20",l="max");let u=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="sum"?u="sumValue":n==="prod"?u="prodValue":n==="all"?u="allValue":n==="any"&&(u="anyValue");const c=Math.floor(r/4)*4,d=r%4;let f=`
      if (${n==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${n==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${n==="min"} || ${n==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,h="vec4";n==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):n==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");let p="";s%r>0&&(p=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${f}
        }

        int inIdx = inOffset + ${c};
        if (${d===1}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${d===2}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${d===3}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${f}
        }
        setOutput(${u});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LR(e){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const n=t.length?t[t.length-1].outSize:e[1],r=Ca(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function wr(e,t,n,r){const o=LR(e.shape);let s=e;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:u}=o[i];let c,d;n==="mean"?c=i===0?new Qf({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},a):new Qf({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u}):c=new AR({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},n),d=s,s=r.runWebGLProgram(c,[s],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return s}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class MR{constructor(t,n){this.variableNames=["A"];const r=new Array(t.length);for(let i=0;i<r.length;i++)r[i]=t[n[i]];this.outputShape=r,this.rank=r.length;const o=q(this.rank),s=BR(n);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}}function BR(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(t);for(let o=0;o<e.length;o++)r[e[o]]=n[o];return r.join()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class UR{constructor(t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const r=new Array(t.length);for(let c=0;c<r.length;c++)r[c]=t[n[c]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=q(this.rank),s=Mx("rc",this.rank),i=new Array(this.rank);for(let c=0;c<n.length;c++)i[n[c]]=s[c];const a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${r[this.rank-1]}`,u=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${u};
      if(${l}) {
        result[1] = ${u};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${r[this.rank-2]}) {
        result[2] = ${u};
        if(${l}) {
          result[3] = ${u};
        }
      }
      setOutput(result);
    }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ea(e,t,n){const r=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new UR(e.shape,t):new MR(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VR(e,t,n,r){const o=t,s=e.shape.length,i=Ae(o,e.shape);let a=i;const l=Et(a,s),u=l!=null;let c=e;u&&(c=Ea(e,l,r),a=It(a.length,s)),Vt("sum",a,s);const[d,f]=Yt(c.shape,a);let h=d;n&&(h=fn(d,i));const p=b(f),v=b(e.shape)/p,m=_({inputs:{x:c},attrs:{shape:[v,p]},backend:r}),g=Nc(e.dtype),y=wr(m,g,"sum",r),w=_({inputs:{x:y},attrs:{shape:h},backend:r});return r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(y),u&&r.disposeIntermediateTensorInfo(c),w}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ia(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,keepDims:i}=r;return VR(o,s,i,n)}const WR={kernelName:qm,backendName:"webgl",kernelFunc:Ia};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{perm:s}=r,i=n,a=o.shape.length,l=new Array(a);for(let c=0;c<l.length;c++)l[c]=o.shape[s[c]];let u;if(i.shouldExecuteOnCPU([o])){const d=i.texData.get(o.dataId).values,f=Kc(d,o.shape,o.dtype,s,l);u=i.makeTensorInfo(l,o.dtype);const h=i.texData.get(u.dataId);h.values=f}else u=Ea(o,s,i);return u}const zR={kernelName:GC,backendName:"webgl",kernelFunc:De};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hx=1e3;function Qi({a:e,b:t,transposeA:n,transposeB:r,backend:o,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const u=e.shape.length,c=t.shape.length,d=n?e.shape[u-2]:e.shape[u-1],f=r?t.shape[c-1]:t.shape[c-2],h=n?e.shape[u-1]:e.shape[u-2],p=r?t.shape[c-2]:t.shape[c-1],x=e.shape.slice(0,-2),v=t.shape.slice(0,-2),m=b(x),g=b(v),w=Ve(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([h,p]);O(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);const C=n?[m,d,h]:[m,h,d],I=r?[g,p,f]:[g,f,p],$=_({inputs:{x:e},backend:o,attrs:{shape:C}}),E=_({inputs:{x:t},backend:o,attrs:{shape:I}}),F=[$,E],R=Math.max(m,g),M=n?$.shape[1]:$.shape[2],V=s!=null,ue=i!=null,ae=l==="leakyrelu",de=l!=null?ps(l,!0):null,ke=V||ue||ae||de!=null;let Be;if((h===1||p===1)&&M>Hx&&ke===!1){let L=$,B=E;n&&(L=De({inputs:{x:$},backend:o,attrs:{perm:[0,2,1]}}),F.push(L)),r&&(B=De({inputs:{x:E},backend:o,attrs:{perm:[0,2,1]}}),F.push(B));const X=p!==1,ne=p===1;let pn=L;X&&(pn=_({inputs:{x:L},backend:o,attrs:{shape:[R,M,1]}}),F.push(pn));const Zt=p===1?2:1;let Wn=B;ne&&(Wn=_({inputs:{x:B},backend:o,attrs:{shape:[R,1,M]}}),F.push(Wn));const Wt=Qc({inputs:{a:pn,b:Wn},backend:o});Be=Ia({inputs:{x:Wt},backend:o,attrs:{axis:Zt,keepDims:!0}}),F.push(Wt)}else{const L=Qt(e.dtype,t.dtype),B=new Gx(C,I,[R,h,p],n,r,V,de,ue,ae),X=[$,E];if(s!=null&&X.push(s),ue&&X.push(i),ae){const ne=o.makeTensorInfo([],"float32",co(a,"float32"));X.push(ne),F.push(ne)}Be=o.runWebGLProgram(B,X,L)}const k=_({inputs:{x:Be},backend:o,attrs:{shape:w}});F.push(Be);for(const L of F)o.disposeIntermediateTensorInfo(L);return k}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GR(e){const{inputs:t,backend:n,attrs:r}=e,{a:o,b:s,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:d}=r;return Qi({a:o,b:s,transposeA:l,transposeB:u,backend:n,bias:i,preluActivationWeights:a,leakyreluAlpha:d,activation:c})}const HR={kernelName:YC,backendName:"webgl",kernelFunc:GR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yf="return abs(x);";function XR(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!=="complex64"){const s=n.texData.get(r.dataId),i=Ax(s.values);return n.makeTensorInfo(r.shape,r.dtype,i)}let o;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new er(r.shape,Yf):o=new on(r.shape,Yf),n.runWebGLProgram(o,[r],r.dtype)}const jR={kernelName:cy,backendName:"webgl",kernelFunc:XR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KR=Tt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,qR=z({opSnippet:KR}),QR={kernelName:dy,backendName:"webgl",kernelFunc:qR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YR=Tt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,ZR=z({opSnippet:YR}),JR={kernelName:fy,backendName:"webgl",kernelFunc:ZR};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zf="return a + b;",ek=Se({opSnippet:Zf,packedOpSnippet:Zf,supportsComplex:!0,cpuKernelImpl:fT}),tk={kernelName:Bm,backendName:"webgl",kernelFunc:ek};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nk{constructor(t,n){this.outputShape=[],this.outputShape=t,this.variableNames=n.map((s,i)=>`T${i}`);const r=[];this.variableNames.forEach(s=>{r.push(`float v${s} = get${s}AtOutCoords();`)});const o=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${r.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rk{constructor(t,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=n.map((s,i)=>`T${i}`);const r=[];this.variableNames.forEach(s=>{r.push(`vec4 v${s} = get${s}AtOutCoords();`)});const o=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${r.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xi(e){const{inputs:t,backend:n}=e,r=t;if(r.length===1)return Je({inputs:{x:r[0]},backend:n});if(r.length>S().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(r.length/2),u=xi({inputs:r.slice(0,l),backend:n}),c=xi({inputs:r.slice(l),backend:n});return xi({inputs:[u,c],backend:n})}const o=r.map(l=>l.dtype).reduce((l,u)=>Qt(l,u)),s=r.map(l=>l.shape),a=S().getBool("WEBGL_PACK")?new rk(r[0].shape,s):new nk(r[0].shape,s);return n.runWebGLProgram(a,r,o)}const ok={kernelName:hy,backendName:"webgl",kernelFunc:xi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sk(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,keepDims:i}=r,a=o.shape.length,l=Ae(s,o.shape);let u=l;const c=Et(u,a);let d=o;c!=null&&(d=De({inputs:{x:o},backend:n,attrs:{perm:c}}),u=It(u.length,a)),Vt("all",u,a);const[f,h]=Yt(d.shape,u),p=b(h),x=_({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),v=wr(x,x.dtype,"all",n);let m;if(i){const g=fn(f,l);m=_({inputs:{x:v},backend:n,attrs:{shape:g}})}else m=_({inputs:{x:v},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(v),c!=null&&n.disposeIntermediateTensorInfo(d),m}const ik={kernelName:py,backendName:"webgl",kernelFunc:sk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ak(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,keepDims:i}=r,a=o.shape.length,l=Ae(s,o.shape);let u=l;const c=Et(u,a);let d=o;c!=null&&(d=De({inputs:{x:o},backend:n,attrs:{perm:c}}),u=It(u.length,a)),Vt("any",u,a);const[f,h]=Yt(d.shape,u),p=b(h),x=_({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),v=wr(x,x.dtype,"any",n);let m;if(i){const g=fn(f,l);m=_({inputs:{x:v},backend:n,attrs:{shape:g}})}else m=_({inputs:{x:v},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(v),c!=null&&n.disposeIntermediateTensorInfo(d),m}const lk={kernelName:my,backendName:"webgl",kernelFunc:ak};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uk{constructor(t,n,r){this.variableNames=["A"];const{windowSize:o,batchSize:s,outSize:i}=t;r||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];const a=n==="max"?">":"<",l=r?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ck{constructor(t,n,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,O(t.length>2,()=>`Packed arg${r.charAt(0).toUpperCase()+r.slice(1)} supports only inputs with rank above 2.`);const s=t[t.length-1],i=Math.ceil(s/n);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,u=q(l),c=Oe("coords",l);let d,f;if(i===1){f=l+1;const E=q(f);d=`
        ${E} sourceLocR = ${E}(${c.join()}, 0);
        ++${c[l-1]};
        ${E} sourceLocG = ${E}(${c.join()}, 0);
        ++${c[l-2]};
        ${E} sourceLocA = ${E}(${c.join()}, 0);
        --${c[l-1]};
        ${E} sourceLocB = ${E}(${c.join()}, 0);
        --${c[l-2]};`}else f=l,d=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;const h=["x","y","z","w","u","v"].slice(0,f),p="."+h[f-1],x=h.map(E=>"int "+E),v=Oe("sourceLocR",f-1).concat("inIdx.r"),m=Oe("sourceLocG",f-1).concat("inIdx.g"),g=Oe("sourceLocB",f-1).concat("inIdx.b"),y=Oe("sourceLocA",f-1).concat("inIdx.a"),w=r==="max"?"greaterThan":"lessThan",C=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${v.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${y.join()})));`,I=`vec4(
            getAChannel(${v.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${g.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${y.join()}) : 0.)`,$=o?"":`
      float getBestIndicesAChannel(${x.join()}) {
        return getChannel(getBestIndicesA(${h.join()}),
                                          vec2(${h.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${x.join()}) {
        return getChannel(getA(${h.join()}),
                               vec2(${h.slice(-2).join()}));
      }
      ${$}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${a[l-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${n};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${n}; i++) {
          inIdx = srcIdx;
          ${C}
          vec4 candidate = ${I};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${w}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xx(e,t,n,r=null){let o=t.shape[0],s=t.shape[1];r!=null&&(o=r.shape[0],s=r.shape[1]);const i=Ca(s),a={windowSize:i,inSize:s,batchSize:o,outSize:Math.ceil(s/i)},l=new uk(a,n,r==null),u=[t];r!=null&&u.push(r);const c=e.runWebGLProgram(l,u,"int32");if(c.shape[1]===1)return c;const d=Xx(e,t,n,c);return e.disposeIntermediateTensorInfo(c),d}function jx(e,t,n,r=null){const o=r!=null?r.shape:t.shape,s=o[o.length-1],i=Ca(s),a=new ck(o,i,n,r==null),l=r==null?[t]:[t,r],u=e.runWebGLProgram(a,l,"int32");if(u.shape.length===t.shape.length){const c=jx(e,t,n,u);return e.disposeIntermediateTensorInfo(u),c}return u}function Kx(e,t,n,r){const o=[n];if(Vt("arg"+r.charAt(0).toUpperCase()+r.slice(1),o,t.shape.length),!S().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const s=[],i=e.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=e.unpackTensor(t),s.push(l));const[u,c]=Yt(l.shape,o),d=b(c),f=_({inputs:{x:l},backend:e,attrs:{shape:[-1,d]}});s.push(f);const h=Xx(e,f,r);s.push(h);const p=_({inputs:{x:h},backend:e,attrs:{shape:u}});return s.forEach(x=>e.disposeIntermediateTensorInfo(x)),p}return jx(e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dk(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s}=r;let i=Ae(s,o.shape);const a=Et(i,o.shape.length);let l=o;const u=[];a!=null&&(l=De({inputs:{x:o},backend:n,attrs:{perm:a}}),u.push(l),i=It(i.length,l.shape.length)),Vt("argMax",[i[0]],l.shape.length);const c=Kx(n,l,i[0],"max");return u.forEach(d=>n.disposeIntermediateTensorInfo(d)),c}const fk={kernelName:gy,backendName:"webgl",kernelFunc:dk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hk(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s}=r;let i=Ae(s,o.shape);const a=Et(i,o.shape.length);let l=o;const u=[];a!=null&&(l=De({inputs:{x:o},backend:n,attrs:{perm:a}}),u.push(l),i=It(i.length,l.shape.length)),Vt("argMin",[i[0]],l.shape.length);const c=Kx(n,l,i[0],"min");return u.forEach(d=>n.disposeIntermediateTensorInfo(d)),c}const pk={kernelName:xy,backendName:"webgl",kernelFunc:hk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mk=Tt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,gk=z({opSnippet:mk}),xk={kernelName:vy,backendName:"webgl",kernelFunc:gk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vk=Tt+"return log(x + sqrt(x * x + 1.0));",yk=z({opSnippet:vk}),wk={kernelName:yy,backendName:"webgl",kernelFunc:yk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ck=Tt+`
  return atan(x);
`,Sk=z({opSnippet:Ck}),$k={kernelName:wy,backendName:"webgl",kernelFunc:Sk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ek=qc+`
  return atan(a, b);
`,Ik=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Rs+`
  return result;
`,Tk=Se({opSnippet:Ek,packedOpSnippet:Ik}),Rk={kernelName:Sy,backendName:"webgl",kernelFunc:Tk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kk=Tt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Nk=z({opSnippet:kk}),bk={kernelName:Cy,backendName:"webgl",kernelFunc:Nk};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ms{constructor(t,n,r,o=!1,s=!1){if(this.variableNames=["x"],n==="avg"&&r)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,u=t.dilationHeight,c=t.dilationWidth,d=t.effectiveFilterHeight,f=t.effectiveFilterWidth,h=t.padInfo.top,p=t.padInfo.left;this.outputShape=t.outShape;const x=n==="avg",v=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,m=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let g="0.0";if(x||(g="-1.0 / 1e-20"),r){const E=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${h}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${E} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?s?v:m:`wR * ${f} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const y="max";let w=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(w="avgValue / count");const C=Math.floor(i/4)*4,I=i%4,$=`
      if (${x}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${y}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${h}, ${p});
      const float initializationValue = ${g};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${g});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${C}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${$}
          }

          int xC = xCCorner + ${C};
          if (${I===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${I===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${$}
          }
        }
        setOutput(${w});
      }
    `}}class Yc{constructor(t,n,r,o=!1,s=!1){if(this.variableNames=["x"],n==="avg"&&r)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,u=t.strideWidth,c=t.dilationDepth,d=t.dilationHeight,f=t.dilationWidth,h=t.effectiveFilterDepth,p=t.effectiveFilterHeight,x=t.effectiveFilterWidth,v=t.padInfo.front,m=t.padInfo.top,g=t.padInfo.left;this.outputShape=t.outShape;const y=n==="avg";let w="0.0";if(y||(w="-1.0 / 1e-20"),r){const R=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${u});
        const ivec3 pads = ivec3(${v}, ${m}, ${g});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${h};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${x};
                  wC += ${f}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${R} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?s?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${p} * ${x} +
                      wR * ${x} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const C="max";let I=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(I="avgValue / count");const $=Math.floor(i/4)*4,E=i%4,F=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${u});
      const ivec3 pads = ivec3(${v}, ${m}, ${g});
      const float initializationValue = ${w};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${w});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${$}; wC += 4) {
              int xC = xCCorner + wC * ${f};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                getValue(batch, xD, xR, xC + 3 * ${f}, ch)
              );

              ${F}
            }

            int xC = xCCorner + ${$};
            if (${E===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${F}
            } else if (${E===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                initializationValue,
                initializationValue
              );

              ${F}
            } else if (${E===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                initializationValue
              );

              ${F}
            }
          }
          setOutput(${I});
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _k(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t;Is(o,"avgPool");const{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=r,u=1;O(ho(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const c=fo(o.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&we(c.inShape,c.outShape))return Je({inputs:{x:o},backend:n});const d=new ms(c,"avg",!1);return n.runWebGLProgram(d,[o],"float32")}const Fk={kernelName:$y,backendName:"webgl",kernelFunc:_k};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ok(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=r,c=[1,1,1],d=Ss(o.shape,s,i,c,a,l,u),f=new Yc(d,"avg",!1);return n.runWebGLProgram(f,[o],"float32")}const Pk={kernelName:Iy,backendName:"webgl",kernelFunc:Ok};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dk{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const n=t.filterHeight,r=t.filterWidth,o=t.strideHeight,s=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,u=t.effectiveFilterWidth,c=l-1-t.padInfo.top,d=u-1-t.padInfo.left,f=1/(n*r);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${d});
      const float avgMultiplier = float(${f});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class Ak{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const n=t.filterDepth,r=t.filterHeight,o=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,d=t.effectiveFilterDepth,f=t.effectiveFilterHeight,h=t.effectiveFilterWidth,p=d-1-t.padInfo.front,x=f-1-t.padInfo.top,v=h-1-t.padInfo.left,m=1/(n*r*o);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${x}, ${v});
      const float avgMultiplier = float(${m});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${f};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${h};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lk(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=r,d=[1,1,1],f=Ss(i.shape,a,l,d,u,c),h=new Ak(f);return n.runWebGLProgram(h,[o],i.dtype)}const Mk={kernelName:Ty,backendName:"webgl",kernelFunc:Lk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bk(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:s}=t,i=s;Is([o,s],"avgPoolGrad");const{filterSize:a,strides:l,pad:u}=r,c=fo(i.shape,a,l,1,u),d=new Dk(c);return n.runWebGLProgram(d,[o],i.dtype)}const Uk={kernelName:Ey,backendName:"webgl",kernelFunc:Bk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vk(e){const{inputs:t,backend:n,attrs:r}=e,{a:o,b:s}=t,{transposeA:i,transposeB:a}=r;return Qi({a:o,b:s,transposeA:i,transposeB:a,backend:n})}const Wk={kernelName:Ry,backendName:"webgl",kernelFunc:Vk};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zk{constructor(t,n,r,o,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Ve(t,n),Ve(t,r);let a="0.0";o!=null&&(Ve(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(Ve(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gk{constructor(t,n,r,o,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Ve(t,n),Ve(t,r);let a="vec4(0.0)";o!=null&&(Ve(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(Ve(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hk=({inputs:e,backend:t,attrs:n})=>{const{x:r,mean:o,variance:s,offset:i,scale:a}=e;O(o.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),O(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),O(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=n;l==null&&(l=.001);const u=[r,o,s];let c=null;i!=null&&(c=i.shape,u.push(i));let d=null;a!=null&&(d=a.shape,u.push(a));const f=S().getBool("WEBGL_PACK_NORMALIZATION")?new Gk(r.shape,o.shape,s.shape,c,d,l):new zk(r.shape,o.shape,s.shape,c,d,l);return t.runWebGLProgram(f,u,u[0].dtype)},Xk={kernelName:fw,backendName:"webgl",kernelFunc:Hk};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jk{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const n=q(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const r=Kk(this.rank);let o;const s=t.map((i,a)=>`sourceLoc.${Tu[a]} = start[${a}] + coords.${Tu[a]};`);o=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${r}));
      }
    `}}const Tu=["x","y","z","w","u","v"];function Kk(e){if(e===1)return"sourceLoc";if(e<=6)return Tu.slice(0,e).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qk{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=q(this.rank),r=Oe("coords",this.rank),o=Oe("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${r[this.rank-1]} < ${t[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${r[this.rank-1]};
      if (++${r[this.rank-2]} < ${t[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${r[this.rank-1]} < ${t[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${n}(${t.map((c,d)=>`start[${d}]`).join()});`:t.map((c,d)=>`${o[d]} = ${r[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        ${n} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qk(e,t,n,r){const o=r.texData.get(e.dataId),s=r.makeTensorInfo(n,e.dtype),i=r.texData.get(s.dataId);Object.assign(i,o),i.refCount=1,i.shape=n,i.dtype=e.dtype;let a=Pc(t,ye(e.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||e.dataId};const l=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,l+1),s}function Co(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{begin:s,size:i}=r,[a,l]=Dg(o,s,i);if(Ig(o,a,l),b(l)===0)return n.makeTensorInfo(l,o.dtype,[]);if(n.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=n.texData.get(o.dataId),f=zT(d.values,a,l,o.shape,o.dtype);return n.makeTensorInfo(l,o.dtype,f)}const{isPacked:u}=n.texData.get(o.dataId),c=Oc(o.shape,a,l);if(u||!c){const d=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new qk(l):new jk(l),f=[a];return n.runWebGLProgram(d,[o],o.dtype,f)}return n.uploadToGPU(o.dataId),Qk(o,a,l,n)}const Yk={kernelName:yC,backendName:"webgl",kernelFunc:Co};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zk=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{blockShape:s,crops:i}=r;O(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=s.reduce((g,y)=>g*y),l=Vc(o.shape,s,a),u=Wc(l.length,s.length),c=zc(o.shape,s,a),d=Hg(i,s.length),f=Xg(c,i,s.length),h=[],p=_({inputs:{x:o},backend:n,attrs:{shape:l}}),x=De({inputs:{x:p},backend:n,attrs:{perm:u}}),v=_({inputs:{x},backend:n,attrs:{shape:c}}),m=Co({inputs:{x:v},backend:n,attrs:{begin:d,size:f}});return h.push(p),h.push(x),h.push(v),h.forEach(g=>n.disposeIntermediateTensorInfo(g)),m},Jk={kernelName:ky,backendName:"webgl",kernelFunc:Zk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,weights:s}=t,{size:i}=r,a=n.readSync(o.dataId),l=n.readSync(s.dataId),u=Dx(a,l,s.dtype,s.shape,i);return n.makeTensorInfo([i],s.dtype,u)}const tN={kernelName:Ny,backendName:"webgl",kernelFunc:eN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nN(e){const{inputs:t,backend:n}=e,{s0:r,s1:o}=t,s=n.readSync(r.dataId),i=n.readSync(o.dataId),a=Ve(Array.from(s),Array.from(i));return n.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const rN={kernelName:by,backendName:"webgl",kernelFunc:nN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oN="return float(a != b);",qx=Se({opSnippet:oN,cpuKernelImpl:PT,dtype:"bool"}),sN={kernelName:Xw,backendName:"webgl",kernelFunc:qx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ns(e){const{inputs:t,backend:n}=e,{input:r}=t,o=n.texData.get(r.dataId);return Je({inputs:{x:o.complexTensorInfos.real},backend:n})}const iN={kernelName:iC,backendName:"webgl",kernelFunc:Ns};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aN="return float(int(x));";function lN(e,t){const n=new on(e.shape,aN),r=t.runWebGLProgram(n,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ru(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{dtype:s}=r;if(s==="complex64"){if(o.dtype==="complex64")return Je({inputs:{x:o},backend:n});const i=Su(o.shape),a=Ru({inputs:{x:o},backend:n,attrs:{dtype:"float32"}}),l=Vn({inputs:{real:a,imag:i},backend:n});return i.dispose(),n.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=Ns({inputs:{input:o},backend:n}),a=Ru({inputs:{x:i},backend:n,attrs:{dtype:s}});return n.disposeIntermediateTensorInfo(i),a}if(!Jv(o.dtype,s)){const i=Je({inputs:{x:o},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(n.shouldExecuteOnCPU([o])){const i=n.texData.get(o.dataId).values,[a,l,u]=pT(i,o.shape,o.dtype,s);return n.makeTensorInfo(a,l,u)}if(s==="int32")return lN(o,n);if(s==="bool"){const i=n.makeTensorInfo([],"bool",Dn("bool",1)),l=qx({inputs:{a:o,b:i},backend:n});return n.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${s}`)}const uN={kernelName:Tc,backendName:"webgl",kernelFunc:Ru};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jf="return ceil(x);",cN=z({opSnippet:Jf,packedOpSnippet:Jf,cpuKernelImpl:mT}),dN={kernelName:_y,backendName:"webgl",kernelFunc:cN};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fN{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hN{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{clipValueMin:s,clipValueMax:i}=r;let a;S().getBool("WEBGL_PACK_CLIP")?a=new hN(o.shape):a=new fN(o.shape);const l=[[s],[i]];return n.runWebGLProgram(a,[o],o.dtype,l)}const mN={kernelName:Fy,backendName:"webgl",kernelFunc:pN};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gN{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eh(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function xN(e){const{inputs:t,backend:n}=e,{x:r}=t,o=n.texData.get(r.dataId),s=new gN(r.shape),i=[eh(r,o.complexTensorInfos.real),eh(r,o.complexTensorInfos.imag)];return n.runWebGLProgram(s,i,i[0].dtype)}const vN={kernelName:Oy,backendName:"webgl",kernelFunc:xN};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yN{constructor(t){this.outputShape=[],this.outputShape=hr(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const n=new Array(t.length-1);n[0]=t[0][1];for(let i=1;i<n.length;i++)n[i]=n[i-1]+t[i][1];const r=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<n.length;i++){const a=n[i-1];r.push(`else if (yC < ${n[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=n.length,s=n[n.length-1];r.push(`else setOutput(getT${o}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join(`
        `)}
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wN{constructor(t,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=hr(t,n);const r=this.outputShape,o=r.length,s=q(o),i=Oe("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((x,v)=>`T${v}`);const l=new Array(t.length-1);l[0]=t[0][n];for(let x=1;x<l.length;x++)l[x]=l[x-1]+t[x][n];const u=a[n],c=a.slice(-2),d=a.join();let f=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${d}), vec2(${c.join()}));
        }`;for(let x=1;x<l.length;x++){const v=l[x-1];f+=`
        if (${u} < ${l[x]}  && ${u} >= ${l[x-1]}) {
          return getChannel(
            getT${x}(${ri(a,u,v)}),
            vec2(${ri(c,u,v)}));
        }`}const h=l.length,p=l[l.length-1];f+=`
        return getChannel(
          getT${h}(${ri(a,u,p)}),
          vec2(${ri(c,u,p)}));`,this.userCode=`
      float getValue(${a.map(x=>"int "+x)}) {
        ${f}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${r[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${r[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${r[o-2]} &&
            ${i[o-1]} < ${r[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function ri(e,t,n){const r=e.indexOf(t);return e.map((s,i)=>i===r?`${s} - ${n}`:s).join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ta(e){const{inputs:t,backend:n}=e,{input:r}=t,o=n.texData.get(r.dataId);return Je({inputs:{x:o.complexTensorInfos.imag},backend:n})}const CN={kernelName:vw,backendName:"webgl",kernelFunc:Ta};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bo(e,t,n){const r=e[0].dtype;if(r==="complex64"){const d=e.map(v=>Ns({inputs:{input:v},backend:n})),f=e.map(v=>Ta({inputs:{input:v},backend:n})),h=Bo(d,t,n),p=Bo(f,t,n),x=Vn({inputs:{real:h,imag:p},backend:n});return d.forEach(v=>n.disposeIntermediateTensorInfo(v)),f.forEach(v=>n.disposeIntermediateTensorInfo(v)),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(p),x}let o=n.shouldExecuteOnCPU(e);if(r==="string"&&(o=!0),o){const d=e.map(g=>{const y=b(g.shape.slice(t));return _({inputs:{x:g},backend:n,attrs:{shape:[-1,y]}})}),f=d.map(g=>({vals:n.readSync(g.dataId),shape:g.shape})),h=hr(d.map(g=>g.shape),1),p=d[0].shape[0]===1,x=gT(f,h,r,p),v=hr(e.map(g=>g.shape),t),m=n.makeTensorInfo(v,r,x);return d.forEach(g=>n.disposeIntermediateTensorInfo(g)),m}const s=S().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(e.length>s){const d=[];for(let h=0;h<e.length;h+=s){const p=e.slice(h,h+s);d.push(Bo(p,t,n))}const f=Bo(d,t,n);for(const h of d)n.disposeIntermediateTensorInfo(h);return f}if(S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].shape.length>1){const d=new wN(e.map(f=>f.shape),t);return n.runWebGLProgram(d,e,r)}const{tensors2D:i,outShape:a}=SN(e,t,n),l=new yN(i.map(d=>d.shape)),u=n.runWebGLProgram(l,i,r);i.forEach(d=>n.disposeIntermediateTensorInfo(d));const c=_({inputs:{x:u},attrs:{shape:a},backend:n});return n.disposeIntermediateTensorInfo(u),c}function SN(e,t,n){const r=hr(e.map(s=>s.shape),t);return{tensors2D:e.map(s=>_({inputs:{x:s},attrs:{shape:[-1,b(s.shape.slice(t))]},backend:n})),outShape:r}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qx(e){const{inputs:t,backend:n,attrs:r}=e,{axis:o}=r,s=Ae(o,t[0].shape)[0],i=t.map(u=>u.shape);Bg(i,s);const a=hr(t.map(u=>u.shape),s);if(b(a)===0)return n.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(u=>b(u.shape)>0);return l.length===1?Je({inputs:{x:l[0]},backend:n}):Bo(l,s,n)}const $N={kernelName:Py,backendName:"webgl",kernelFunc:Qx};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yx{constructor(t,n=!1,r=null,o=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,u=t.strideWidth,c=t.dilationHeight,d=t.dilationWidth,f=t.filterHeight,h=t.filterWidth,p=Math.floor(t.inChannels/4)*4,x=t.inChannels%4,v=t.dataFormat==="channelsLast",m=v?1:2,g=v?2:3,y=v?3:1;let w="",C="";r&&(o?w=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?w=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:w=`
          float activation(float x) {
            ${r}
          }
        `,C="result = activation(result);");const I=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${w}

      const ivec2 strides = ivec2(${l}, ${u});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${y}];

        ivec2 xRCCorner =
            ivec2(coords[${m}], coords[${g}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${f}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${h}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${v}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${x===1}) {

              if (${v}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${x===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${v}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${x===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${v}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${I}
        ${C}
        setOutput(result);
      }
    `}}class EN{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const n=t.padInfo.front,r=t.padInfo.top,o=t.padInfo.left,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,d=t.filterDepth,f=t.filterHeight,h=t.filterWidth,p=Math.floor(t.inChannels/4)*4,x=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${n}, ${r}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${x===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${x===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${x===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zx{constructor(t,n=!1,r=null,o=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Me(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,u=t.filterHeight,c=t.filterWidth,d=c;let f=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let v=0;v<c;v++)f+=`
           vec4 xTexelC${v*2};
           int xTexelC${v*2}Ready;
           vec4 xTexelC${v*2+1};
           int xTexelC${v*2+1}Ready;
           vec4 xC${v};`;f+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let v=0;v<c;v++)f+=`
           xTexelC${v*2} = vec4(0.0);
           xTexelC${v*2}Ready = 0;
           xTexelC${v*2+1} = vec4(0.0);
           xTexelC${v*2+1}Ready = 0;
           xC${v} = vec4(0.0);`;f+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let v=0;v<(d+1)/2;v++){const m=v*2;if(f+=`
           xC = xCCorner + ${m*l};
           `,a===1){if(m<c&&(i%2===1?(f+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }
               `,l===1&&m>0?f+=`
                 xC${m} = vec4(xTexelC${m-2}.zw, xTexelC${m}.xy);
                 `:f+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${m} = vec4(previous.zw, xTexelC${m}.xy);
                   } else {
                     xC${m} = vec4(0.0, 0.0, xTexelC${m}.xy);
                   }
                   `):f+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xC${m} = xTexelC${m};
                 `,m+1<c)){const g=i%2===0?$c(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
                   xCOffset = xC + imod(pads[1], 2) + ${g};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                     xTexelC${m+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${m+1}.zw = vec2(0.0);
                     }
                     xTexelC${m+1}Ready = 1;
                   }
                   `,l>1?f+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${m+1} = vec4(previous.zw, xTexelC${m+1}.xy);
                     } else {
                      xC${m+1} = vec4(0.0, 0.0, xTexelC${m+1}.xy);
                     }
                     `:f+=`
                     xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.xy);
                     `):g===1?f+=`
                     xC${m+1} = xTexelC${m};
                     `:f+=`
                     xCOffset = xC + ${g};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                       xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${m+1}.zw = vec2(0.0);
                       }
                       xTexelC${m+1}Ready = 1;
                     }

                     xC${m+1} = xTexelC${m+1};
                     `}}else m<c&&(i%2===1?(f+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.0);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
               `,m+1<c&&(f+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${m+1} = vec4(xTexelC${m+1}.xy, final.xy);
                 `)):(f+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(
                   xTexelC${m}.xy, xTexelC${m+1}.xy);
               `,m+1<c&&(f+=`
                   xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
                 `)));m<c&&(f+=`
             wTexel = getW(r, ${m}, d1, d2);
             dotProd += xC${m}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${m}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,m+1<c&&(f+=`
               wTexel = getW(r, ${m+1}, d1, d2);
               dotProd += xC${m+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${m+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}f+=`
     }
   `,f+=`
     }
   `,f+=`
     }
   `;let h="",p="";r&&(o?h=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${r}
         }`:s?h=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${r}
         }`:h=`vec4 activation(vec4 x) {
           ${r}
         }`,p="result = activation(result);");const x=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${h}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${f}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${x}
         ${p}
         setOutput(result);
       }
     `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class IN{constructor(t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Me(this.outputShape.length);const{dataFormat:r}=n,o=Le(),s=r==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let u="";for(let c=0;c<=1;c++)for(let d=0;d<=1;d++)u+=`
          blockIndex = rc.z + ${d};
          pos = rc.y + ${c};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+d}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+d}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${o.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yi(e,t){const n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function Jx({x:e,filter:t,convInfo:n,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){const l=e.shape,u=r.texData.get(e.dataId),c=n.inChannels,d=l[0]*l[1]*l[2],f=n.outChannels,h=n.dataFormat==="channelsLast",p=!1,x=!1;let v;const m=[];if(s!=null){const w=Yi(s.shape,h);w!=null&&(s=_({inputs:{x:s},backend:r,attrs:{shape:w}}),m.push(s))}if(o!=null){const w=Yi(o.shape,h);w!=null&&(o=_({inputs:{x:o},backend:r,attrs:{shape:w}}),m.push(o))}if(!((d===1||f===1)&&c>Hx)&&u.isPacked&&h&&u.texture!=null&&l[2]%2!==0&&we(u.shape.slice(-3),l.slice(-3))){const w=l[0]*l[1]*(l[2]+1),C={dataId:e.dataId,shape:[1,w,n.inChannels],dtype:e.dtype},I=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,O(Ki(u.shape,C.shape),()=>`packed reshape ${u.shape} to ${C.shape} isn't free`);const $=_({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});m.push($);const E=Qi({a:C,b:$,backend:r,transposeA:p,transposeB:x,bias:o,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),F=r.texData.get(E.dataId);O(F.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=I,F.shape=n.outShape,v=Je({inputs:{x:E},backend:r}),v.shape=n.outShape,m.push(E)}else{const w=n.outHeight*n.outWidth,C=_({inputs:{x:e},backend:r,attrs:{shape:h?[n.batchSize,w,n.inChannels]:[n.batchSize,n.inChannels,w]}}),I=_({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),$=Qi({a:h?C:I,b:h?I:C,transposeA:!h,transposeB:x,backend:r,bias:o,activation:a,preluActivationWeights:s,leakyreluAlpha:i});v=_({inputs:{x:$},backend:r,attrs:{shape:n.outShape}}),m.push(C),m.push(I),m.push($)}for(const w of m)r.disposeIntermediateTensorInfo(w);return v}function e0({x:e,filter:t,convInfo:n,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:u,inChannels:c,outWidth:d,outHeight:f,dataFormat:h}=n,p=h==="channelsLast",x=l*u*c,v=f*d,m=[n.batchSize,x,v],g=!0,y=!1,w=[];if(s!=null){const k=Yi(s.shape,p);k!=null&&(s=_({inputs:{x:s},backend:r,attrs:{shape:k}}),w.push(s))}if(o!=null){const k=Yi(o.shape,p);k!=null&&(o=_({inputs:{x:o},backend:r,attrs:{shape:k}}),w.push(o))}const C=_({inputs:{x:t},backend:r,attrs:{shape:[1,x,b(t.shape)/x]}});w.push(C);const I=new IN(m,n),$=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],E=r.runWebGLProgram(I,[e],"float32",$),F=_({inputs:{x:E},backend:r,attrs:{shape:m}});w.push(E),w.push(F);const R=o!=null,M=s!=null,V=a==="leakyrelu",ue=a?ps(a,!0):null,ae=new Gx(p?F.shape:C.shape,p?C.shape:F.shape,p?[n.batchSize,v,n.outChannels]:[n.batchSize,n.outChannels,v],g,y,R,ue,M,V),de=p?[F,C]:[C,F];if(o&&de.push(o),M&&de.push(s),V){const k=r.makeTensorInfo([],"float32",co(i,"float32"));de.push(k),w.push(k)}const ke=r.runWebGLProgram(ae,de,"float32"),Be=_({inputs:{x:ke},backend:r,attrs:{shape:n.outShape}});w.push(ke);for(const k of w)r.disposeIntermediateTensorInfo(k);return Be}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s}=t,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=r,d=po(l),f=Ut(o.shape,s.shape,i,u,a,c,!1,d);let h;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type==="SAME"||f.padInfo.type==="VALID"))h=Jx({x:o,filter:s,convInfo:f,backend:n});else if(f.strideWidth<=2&&d==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const x=new Zx(f),v=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];h=n.runWebGLProgram(x,[o,s],"float32",v)}else if(S().getBool("WEBGL_CONV_IM2COL"))h=e0({x:o,filter:s,convInfo:f,backend:n});else{const x=new Yx(f);h=n.runWebGLProgram(x,[o,s],"float32")}const p=_({inputs:{x:h},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(h),p}const RN={kernelName:Dy,backendName:"webgl",kernelFunc:TN};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kN{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const n=t.strideHeight,r=t.strideWidth,o=t.padInfo.top,s=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class NN{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const n=t.filterHeight,r=t.filterWidth,o=t.strideHeight,s=t.strideWidth,i=t.dataFormat==="channelsLast",a=n-1-t.padInfo.top,l=r-1-t.padInfo.left,u=i?1:2,c=i?2:3,d=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${u}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class bN{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const n=t.strideDepth,r=t.strideHeight,o=t.strideWidth,s=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${n} - ${s};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${r} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class _N{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const n=t.filterDepth,r=t.filterHeight,o=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=n-1-t.padInfo.front,u=r-1-t.padInfo.top,c=o-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${u}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${n}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${n} - 1 - wF;

          for (int wR = 0; wR < ${r}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${r} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:s}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=r,d=po(l),f=Ut(o.shape,c,i,1,a,u,!1,d),h=new kN(f);return n.runWebGLProgram(h,[o,s],"float32")}const ON={kernelName:Ay,backendName:"webgl",kernelFunc:FN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PN(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:s}=t,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=r,d=po(u),f=Ut(i,s.shape,a,1,l,c,!1,d),h=new NN(f);return n.runWebGLProgram(h,[o,s],"float32")}const DN={kernelName:Ly,backendName:"webgl",kernelFunc:PN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s}=t,{strides:i,pad:a,dilations:l}=r,u=$s(o.shape,s.shape,i,l,a),c=new EN(u);return n.runWebGLProgram(c,[o,s],"float32")}const LN={kernelName:My,backendName:"webgl",kernelFunc:AN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:s}=t,{strides:i,pad:a,filterShape:l}=r,u=$s(o.shape,l,i,1,a),c=new bN(u);return n.runWebGLProgram(c,[o,s],"float32")}const BN={kernelName:By,backendName:"webgl",kernelFunc:MN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UN(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:s}=t,{pad:i,strides:a,inputShape:l}=r,u=$s(l,s.shape,a,1,i),c=new _N(u);return n.runWebGLProgram(c,[o,s],"float32")}const VN={kernelName:Uy,backendName:"webgl",kernelFunc:UN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WN=wo+`
  return cos(x);
`,zN=z({opSnippet:WN}),GN={kernelName:Vy,backendName:"webgl",kernelFunc:zN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HN=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,XN=z({opSnippet:HN}),jN={kernelName:Wy,backendName:"webgl",kernelFunc:XN};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class KN{constructor(t,n,r,o,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,u]=t,[c]=n,[d,f]=r;this.outputShape=[c,d,f,u];const h=o==="bilinear"?1:0,[p,x]=[`${a-1}.0`,`${l-1}.0`],[v,m,g]=d>1?[`${(a-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[y,w,C]=f>1?[`${(l-1)/(f-1)}`,"(x2-x1) * width_ratio",`x1*${x} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${x}`];this.userCode=`
      const float height_ratio = float(${v});
      const float width_ratio = float(${y});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${m};
        float width_scale = ${w};

        float in_y = ${g};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${C};
        if( in_x < 0.0 || in_x > ${x} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${h} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qN=e=>{const{inputs:t,backend:n,attrs:r}=e,{image:o,boxes:s,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:u}=r,c=new KN(o.shape,s.shape,a,l,u);return n.runWebGLProgram(c,[o,s,i],"float32")},QN={kernelName:Hy,backendName:"webgl",kernelFunc:qN};var gs;(function(e){e.Prod="*",e.Sum="+"})(gs||(gs={}));class th{constructor(t,n,r,o){this.op=t,this.outputShape=n,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const s=this.outputShape.length,i=this.op===gs.Prod?"1.0":"0.0",a=r?i:`getX(${nh(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let u="",c="";r?(u=o?`end != ${l-1}`:"end != 0",c=o?"end + 1":"end - 1"):(u=o?`end + pow2 < ${l}`:"end >= pow2",c=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${q(s)} coords = getOutputCoords();
        int end = ${rh(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${rh(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${nh(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function nh(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function rh(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw new Error(`Cumulative ${n} for rank ${e} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t0(e,t,n,r,o,s){const i=t.shape.length,a=Et([r],i);let l=t;a!=null&&(l=De({inputs:{x:t},backend:n,attrs:{perm:a}}));const u=It(1,i)[0];if(u!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);const c=l.shape[u];let d=Je({inputs:{x:l},backend:n});for(let f=0;f<=Math.ceil(Math.log2(c))-1;f++){const h=new th(e,l.shape,!1,s),p=[[f]],x=d;d=n.runWebGLProgram(h,[d],d.dtype,p),n.disposeIntermediateTensorInfo(x)}if(o){const f=new th(e,l.shape,o,s),h=d;d=n.runWebGLProgram(f,[d],d.dtype),n.disposeIntermediateTensorInfo(h)}if(a!=null){const f=Mc(a),h=De({inputs:{x:d},backend:n,attrs:{perm:f}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(l),h}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,exclusive:i,reverse:a}=r;return t0(gs.Prod,o,n,s,i,a)}const ZN={kernelName:zy,backendName:"webgl",kernelFunc:YN};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JN(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,exclusive:i,reverse:a}=r;return t0(gs.Sum,o,n,s,i,a)}const eb={kernelName:Gy,backendName:"webgl",kernelFunc:JN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tb(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,weights:s}=t,{size:i,binaryOutput:a}=r;if(o.shape.length===1){const l=n.readSync(o.dataId),u=n.readSync(s.dataId),c=Dx(l,u,s.dtype,s.shape,i);return n.makeTensorInfo([i],s.dtype,c)}else if(o.shape.length===2){const l=n.bufferSync(o),u=n.bufferSync(s),c=hT(l,u,i,a);return n.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const nb={kernelName:Xy,backendName:"webgl",kernelFunc:tb};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rb{constructor(t,n,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=n,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${n};
      int offset_h = imod(h, ${n});
      int in_w = w / ${n};
      int offset_w = imod(w, ${n});
      int offset_d = (offset_h * ${n} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{blockSize:s,dataFormat:i}=r,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],u=i==="NHWC"?o.shape[2]:o.shape[3],c=i==="NHWC"?o.shape[3]:o.shape[1],d=l*s,f=u*s,h=c/(s*s),p=i==="NHWC"?[a,d,f,h]:[a,h,d,f],x=new rb(p,s,i);return n.runWebGLProgram(x,[o],o.dtype)}const sb={kernelName:jy,backendName:"webgl",kernelFunc:ob};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class n0{constructor(t,n=!1,r=null,o=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Me(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let u="",c="";r&&(o?u=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?u=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:u=`
          float activation(float x) {
            ${r}
          }
        `,c="result = activation(result);");const d=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${c}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class r0{constructor(t,n=!1,r=null,o=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Me(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,u=t.dilationWidth,c=t.filterHeight,d=t.filterWidth,f=d;let h=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<d;m++)h+=`
          vec4 xTexelC${m*2};
          int xTexelC${m*2}Ready;
          vec4 xTexelC${m*2+1};
          int xTexelC${m*2+1}Ready;
          vec4 xC${m};`;h+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let m=0;m<d;m++)h+=`
          xTexelC${m*2} = vec4(0.0);
          xTexelC${m*2}Ready = 0;
          xTexelC${m*2+1} = vec4(0.0);
          xTexelC${m*2+1}Ready = 0;
          xC${m} = vec4(0.0);`;h+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let m=0;m<(f+1)/2;m++){const g=m*2;if(h+=`
          xC = xCCorner + ${g*u};
          `,l===1){if(g<d&&(a%2===1?(h+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g}Ready == 0) {
                  xTexelC${g} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${g}.zw = vec2(0.0);
                  }
                  xTexelC${g}Ready = 1;
                }
              `,u===1&&g>0?h+=`
                xC${g} = vec4(xTexelC${g-2}.zw, xTexelC${g}.xy);
                `:h+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${g} = vec4(previous.zw, xTexelC${g}.xy);
                  } else {
                    xC${g} = vec4(0.0, 0.0, xTexelC${g}.xy);
                  }
                  `):h+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${g}Ready == 0) {
                  xTexelC${g} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${g}.zw = vec2(0.0);
                  }
                  xTexelC${g}Ready = 1;
                }

                xC${g} = xTexelC${g};
                `,g+1<d)){const y=a%2===0?$c(u):u;u%2===0&&a%2===1||u%2!==0&&a%2!==1?(h+=`
                  xCOffset = xC + imod(pads[1], 2) + ${y};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                    xTexelC${g+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${g+1}.zw = vec2(0.0);
                    }
                    xTexelC${g+1}Ready = 1;
                  }
                  `,u>1?h+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${g+1} = vec4(previous.zw, xTexelC${g+1}.xy);
                    } else {
                     xC${g+1} = vec4(0.0, 0.0, xTexelC${g+1}.xy);
                    }
                    `:h+=`
                    xC${g+1} = vec4(xTexelC${g}.zw, xTexelC${g+1}.xy);
                    `):y===1?h+=`
                    xC${g+1} = xTexelC${g};
                    `:h+=`
                    xCOffset = xC + ${y};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                      xTexelC${g+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${g+1}.zw = vec2(0.0);
                      }
                      xTexelC${g+1}Ready = 1;
                    }

                    xC${g+1} = xTexelC${g+1};
                    `}}else g<d&&(a%2===1?(h+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g}Ready == 0) {
                  xTexelC${g} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${g}.zw = vec2(0.0);
                  }
                  xTexelC${g}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${g+1}Ready == 0) {
                  xTexelC${g+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${g+1}.zw = vec2(0.0);
                  }
                  xTexelC${g+1}Ready = 1;
                }

                xC${g} = vec4(xTexelC${g}.zw, xTexelC${g+1}.zw);
              `,g+1<d&&(h+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${g+1} = vec4(xTexelC${g+1}.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${g}Ready == 0) {
                  xTexelC${g} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${g}.zw = vec2(0.0);
                  }
                  xTexelC${g}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                  xTexelC${g+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${g+1}.zw = vec2(0.);
                  }
                  xTexelC${g+1}Ready = 1;
                }

                xC${g} = vec4(
                  xTexelC${g}.xy, xTexelC${g+1}.xy);
              `,g+1<d&&(h+=`
                  xC${g+1} = vec4(xTexelC${g}.zw, xTexelC${g+1}.zw);
                `)));g<d&&(h+=`
            wTexel = getW(r, ${g}, d1, q);
            dotProd += xC${g} * vec4(wTexel.xz, wTexel.xz);
          `,g+1<d&&(h+=`
              wTexel = getW(r, ${g+1}, d1, q);
              dotProd += xC${g+1} * vec4(wTexel.xz, wTexel.xz);
            `))}h+=`
    }
  `,h+=`
      }
    `;let p="",x="";r&&(o?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:p=`vec4 activation(vec4 x) {
          ${r}
        }`,x="result = activation(result);");const v=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${h}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${v}
        ${x}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=r;let c=l;c==null&&(c=[1,1]),O(ho(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const d=Ut(o.shape,s.shape,i,c,a,u,!0);let f;S().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?f=new r0(d):f=new n0(d);const h=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[o,s],"float32",h)}const ab={kernelName:Ky,backendName:"webgl",kernelFunc:ib};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lb{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const n=t.strideHeight,r=t.strideWidth,o=t.padInfo.top,s=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ub{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const n=t.filterHeight,r=t.filterWidth,o=t.strideHeight,s=t.strideWidth,i=n-1-t.padInfo.top,a=r-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=r,d=Ut(o.shape,c,i,a,l,u,!0),f=new lb(d);return n.runWebGLProgram(f,[o,s],"float32")}const db={kernelName:qy,backendName:"webgl",kernelFunc:cb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=r,d=Ut(c,s.shape,i,a,l,u,!0),f=new ub(d);return n.runWebGLProgram(f,[o,s],"float32")}const hb={kernelName:Qy,backendName:"webgl",kernelFunc:fb};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pb{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(e){const{inputs:t,backend:n}=e,{x:r}=t,o=[...r.shape,...r.shape],s=b(r.shape),i=_({inputs:{x:r},backend:n,attrs:{shape:[s]}}),a=new pb(s),l=n.runWebGLProgram(a,[i],i.dtype),u=_({inputs:{x:l},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),u}const gb={kernelName:Yy,backendName:"webgl",kernelFunc:mb};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xb{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:n,inWidth:r,padInfo:o,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:u,dilationWidth:c}=t,{top:d,left:f}=o;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${d}, ${f});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${n}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${r}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s}=t,{strides:i,pad:a,dilations:l}=r,u=Lg(o.shape,s.shape,i,a,"NHWC",l);let c;const d=new xb(u);c=n.runWebGLProgram(d,[o,s],"float32");const f=_({inputs:{x:c},backend:n,attrs:{shape:u.outShape}});return n.disposeIntermediateTensorInfo(c),f}const yb={kernelName:Zy,backendName:"webgl",kernelFunc:vb};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(e){const{inputs:t,backend:n,attrs:r}=e,{equation:o}=r,s=t,{allDims:i,summedDims:a,idDims:l}=tx(o,s.length);rx(i.length,l,s);const{path:u,steps:c}=ox(a,l),d=c.length;let f=null,h=i.length;const p=[];for(let x=0;x<d;++x){for(const v of c[x]){const{permutationIndices:m,expandDims:g}=nx(h,l[v]);let y;sx(m)?y=s[v]:(y=De({inputs:{x:s[v]},backend:n,attrs:{perm:m}}),p.push(y));const w=y.shape.slice();for(let C=0;C<g.length;++C)w.splice(g[C],0,1);we(y.shape,w)||(y=_({inputs:{x:y},backend:n,attrs:{shape:w}}),p.push(y)),f===null?f=y:(f=Qc({inputs:{a:y,b:f},backend:n}),p.push(f))}x<d-1&&(u[x]>=0&&(f=Ia({inputs:{x:f},backend:n,attrs:{axis:u[x]-(i.length-h),keepDims:!1}}),p.push(f)),h--)}for(const x of p)x!==f&&n.disposeIntermediateTensorInfo(x);return f}const Cb={kernelName:ew,backendName:"webgl",kernelFunc:wb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sb="return (x >= 0.0) ? x : (exp(x) - 1.0);",$b=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Eb=z({opSnippet:Sb,packedOpSnippet:$b}),Ib={kernelName:Vm,backendName:"webgl",kernelFunc:Eb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tb="return (b >= 1.0) ? a : a * (b + 1.0);",Rb=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,kb=e=>{const{inputs:t,backend:n}=e,{dy:r,y:o}=t,s=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ks(Rb,r.shape,o.shape):new io(Tb,r.shape,o.shape);return n.runWebGLProgram(s,[r,o],r.dtype)},Nb={kernelName:tw,backendName:"webgl",kernelFunc:kb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bb=`
  return vec4(equal(a, b));
`,_b="return float(a == b);",Fb=Se({opSnippet:_b,packedOpSnippet:bb,dtype:"bool",cpuKernelImpl:xT}),Ob={kernelName:rw,backendName:"webgl",kernelFunc:Fb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pb=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${qg};
  float a1 = ${Qg};
  float a2 = ${Yg};
  float a3 = ${Zg};
  float a4 = ${Jg};
  float a5 = ${ex};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,Db=z({opSnippet:Pb}),Ab={kernelName:nw,backendName:"webgl",kernelFunc:Db};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lb=wo+`
  return exp(x);
`,Mb=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,o0=z({opSnippet:Lb,packedOpSnippet:Mb,cpuKernelImpl:vT,dtype:"float32"}),Bb={kernelName:ow,backendName:"webgl",kernelFunc:o0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ku(e){const{inputs:t,attrs:n,backend:r}=e,{dim:o}=n,{input:s}=t,i=s.shape.length,a=s.shape.slice();let l=o;return o<0&&(O(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),_({inputs:{x:s},backend:r,attrs:{shape:a}})}const Ub={kernelName:sw,backendName:"webgl",kernelFunc:ku};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oh="return exp(x) - 1.0;",Vb=z({opSnippet:oh,packedOpSnippet:oh,cpuKernelImpl:yT}),Wb={kernelName:iw,backendName:"webgl",kernelFunc:Vb};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sh{constructor(t,n,r){this.variableNames=["real","imag"];const o=n[1];this.outputShape=n;const s=r?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=r?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(e,t,n){const r=n.texData.get(e.dataId),o=b(e.shape),s=e.shape[e.shape.length-1],i=o/s,a=_({inputs:{x:e},backend:n,attrs:{shape:[i,s]}}),l=a.shape,u=new sh("real",l,t),c=new sh("imag",l,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:l},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:l}],f=n.runWebGLProgram(u,d,"float32"),h=n.runWebGLProgram(c,d,"float32"),p=Vn({inputs:{real:f,imag:h},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(h);const x=_({inputs:{x:p},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(p),x}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(e){const{inputs:t,backend:n}=e,{input:r}=t;return s0(r,!1,n)}const Gb={kernelName:aw,backendName:"webgl",kernelFunc:zb};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hb{constructor(t,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bs(e){const{backend:t,attrs:n}=e,{shape:r,value:o}=n;let{dtype:s}=n;if(s=s||xa(o),s==="string"){const i=Ee(s,b(r));return i.fill(o),t.makeTensorInfo(r,s,i)}else{const i=new Hb(r,o),a=[[o]];return t.runWebGLProgram(i,[],s,a)}}const Xb={kernelName:lw,backendName:"webgl",kernelFunc:bs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jb{constructor(t){this.variableNames=["Image"],this.outputShape=[];const n=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${n} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${n}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kb={kernelName:uw,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,r=t,o=new jb(n.shape);return r.runWebGLProgram(o,[n],n.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ih="return floor(x);",qb=z({opSnippet:ih,packedOpSnippet:ih,cpuKernelImpl:wT}),Qb={kernelName:cw,backendName:"webgl",kernelFunc:qb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yb=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,Zb=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,Jb=Se({opSnippet:Yb,packedOpSnippet:Zb,dtype:"int32"}),e_={kernelName:dw,backendName:"webgl",kernelFunc:Jb};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class t_{constructor(t){this.variableNames=["A"];const n=Le(),[r,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${r}.0);

        vec4 values = ${n.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class n_{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=Le(),[r,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${r}.0);
            vec4 values = ${n.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r_={kernelName:qC,backendName:"webgl",kernelFunc:o_};let $r,ul=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function o_(e){const{inputs:t,backend:n,attrs:r}=e;let{pixels:o}=t;const{numChannels:s}=r,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[l,u]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=[u,l],d=[u,l,s];if(a||i){const x=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");($r==null||x!==ul)&&(ul=x,$r=document.createElement("canvas").getContext("2d",{willReadFrequently:ul})),$r.canvas.width=l,$r.canvas.height=u,$r.drawImage(o,0,0,l,u),o=$r.canvas}const f=n.makeTensorInfo(c,"int32");n.texData.get(f.dataId).usage=it.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),o);const h=S().getBool("WEBGL_PACK")?new n_(d):new t_(d),p=n.runWebGLProgram(h,[f],"int32");return n.disposeData(f.dataId),p}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s_(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dataFormat:c,dilations:d,dimRoundingMode:f,activation:h,leakyreluAlpha:p}=r,x=po(c),v=Ut(o.shape,s.shape,l,d,u,f,!1,x);let m;const g=[],y=i!=null,w=a!=null,C=h==="leakyrelu",I=()=>{const E=[o,s],F=(R,M)=>{if(M==="NCHW"&&R.shape.length===1&&R.shape[0]!==1){const V=_({inputs:{x:R},backend:n,attrs:{shape:[R.shape[0],1,1]}});return g.push(V),V}return R};if(y&&E.push(F(i,c)),w&&E.push(F(a,c)),C){const R=n.makeTensorInfo([],"float32",co(p,"float32"));E.push(R),g.push(R)}return E};if(v.filterHeight===1&&v.filterWidth===1&&v.dilationHeight===1&&v.dilationWidth===1&&v.strideHeight===1&&v.strideWidth===1&&(v.padInfo.type==="SAME"||v.padInfo.type==="VALID"))m=Jx({x:o,filter:s,convInfo:v,backend:n,bias:i,activation:h,preluActivationWeights:a,leakyreluAlpha:p});else if(v.strideWidth<=2&&x==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const E=h?ps(h,!0):null,F=new Zx(v,y,E,w,C),R=[[v.padInfo.top,v.padInfo.left],[v.strideHeight,v.strideWidth],[v.dilationHeight,v.dilationWidth],[v.inHeight,v.inWidth]],M=I();m=n.runWebGLProgram(F,M,"float32",R)}else if(S().getBool("WEBGL_CONV_IM2COL"))m=e0({x:o,filter:s,convInfo:v,backend:n,bias:i,activation:h,preluActivationWeights:a,leakyreluAlpha:p});else{const E=h?ps(h,!1):null,F=new Yx(v,y,E,w,C),R=I();m=n.runWebGLProgram(F,R,"float32")}const $=_({inputs:{x:m},backend:n,attrs:{shape:v.outShape}});return g.push(m),g.forEach(E=>n.disposeIntermediateTensorInfo(E)),$}const i_={kernelName:ZC,backendName:"webgl",kernelFunc:s_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a_(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dilations:c,dimRoundingMode:d,activation:f,leakyreluAlpha:h}=r,p=[];let x=c;x==null&&(x=[1,1]),O(ho(l,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`);const v=Ut(o.shape,s.shape,l,x,u,d,!0),m=S().getBool("WEBGL_PACK_DEPTHWISECONV")&&v.strideWidth<=2&&v.outChannels/v.inChannels===1,g=f?ps(f,m):null,y=[o,s],w=i!=null,C=a!=null,I=f==="leakyrelu";if(w&&y.push(i),C&&y.push(a),I){const R=n.makeTensorInfo([],"float32",co(h,"float32"));y.push(R),p.push(R)}let $;m?$=new r0(v,w,g,C,I):$=new n0(v,w,g,C,I);const E=[[v.padInfo.top,v.padInfo.left],[v.strideHeight,v.strideWidth],[v.dilationHeight,v.dilationWidth],[v.inHeight,v.inWidth]],F=n.runWebGLProgram($,y,"float32",E);return p.forEach(R=>n.disposeIntermediateTensorInfo(R)),F}const l_={kernelName:JC,backendName:"webgl",kernelFunc:a_};class u_{constructor(t,n,r,o){this.sliceDim=t,this.strides=n,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=r;const s=q(r.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c_(e){const{inputs:t,backend:n}=e,{params:r,indices:o}=t,s=o.shape,i=s[s.length-1],a=b(r.shape),[l,u,c,d]=$g(r,o),f=_({inputs:{x:o},backend:n,attrs:{shape:[u,i]}}),h=_({inputs:{x:r},backend:n,attrs:{shape:[b(r.shape)/c,c]}});if(n.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const m=n.readSync(o.dataId),g=n.bufferSync(r),y=CT(m,g,r.dtype,u,i,c,d,r.shape,a);return n.makeTensorInfo(l,r.dtype,y.values)}const p=new u_(i,d,[u,c],r.shape),x=n.runWebGLProgram(p,[h,f],h.dtype),v=_({inputs:{x},backend:n,attrs:{shape:l}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(x),v}const d_={kernelName:pw,backendName:"webgl",kernelFunc:c_};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class f_{constructor(t,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const r=q(this.rank),o=h_(t);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function h_(e,t){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let o=0;o<e.length;o++)o===2?r.push("index"):r.push(`${n[o]}`);return r.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,indices:s}=t,{axis:i,batchDims:a}=r,l=Ae(i,o.shape)[0];if(S().get("DEBUG")){const g=n.readSync(s.dataId),y=o.shape[l];for(let w=0;w<g.length;++w){const C=g[w];O(C<=y-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${y-1}]`)}}const u=wx(o,s,l,a),c=b(s.shape),d=[],f=_({inputs:{x:o},backend:n,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),h=_({inputs:{x:s},backend:n,attrs:{shape:[u.batchSize,c/u.batchSize]}});d.push(f),d.push(h);const p=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(n.shouldExecuteOnCPU([o,s])||o.dtype==="string"){const g=n.bufferSync(h),y=n.bufferSync(f),w=ST(y,g,p);return d.forEach(C=>n.disposeIntermediateTensorInfo(C)),n.makeTensorInfo(u.outputShape,w.dtype,w.values)}const x=new f_(f.shape,p),v=n.runWebGLProgram(x,[f,h],f.dtype);d.push(v);const m=_({inputs:{x:v},backend:n,attrs:{shape:u.outputShape}});return d.forEach(g=>n.disposeIntermediateTensorInfo(g)),m}const p_={kernelName:hw,backendName:"webgl",kernelFunc:i0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m_="return float(a > b);",g_=`
  return vec4(greaterThan(a, b));
`,x_=Se({opSnippet:m_,packedOpSnippet:g_,cpuKernelImpl:$T,dtype:"bool"}),v_={kernelName:mw,backendName:"webgl",kernelFunc:x_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y_="return float(a >= b);",w_=`
  return vec4(greaterThanEqual(a, b));
`,C_=Se({opSnippet:y_,packedOpSnippet:w_,dtype:"bool",cpuKernelImpl:ET}),S_={kernelName:gw,backendName:"webgl",kernelFunc:C_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $_(e){const{inputs:t,backend:n}=e,{input:r}=t;return s0(r,!0,n)}const E_={kernelName:xw,backendName:"webgl",kernelFunc:$_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I_="return float(!isnan(x) && !isinf(x));",T_=z({opSnippet:I_,dtype:"bool"}),R_={kernelName:yw,backendName:"webgl",kernelFunc:T_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k_="return float(isinf(x));",N_=z({opSnippet:k_,dtype:"bool"}),b_={kernelName:ww,backendName:"webgl",kernelFunc:N_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const __="return float(isnan(x));",F_=z({opSnippet:__,dtype:"bool"}),O_={kernelName:Cw,backendName:"webgl",kernelFunc:F_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P_="return float(a < b);",D_=`
  return vec4(lessThan(a, b));
`,A_=Se({opSnippet:P_,packedOpSnippet:D_,cpuKernelImpl:IT,dtype:"bool"}),L_={kernelName:Sw,backendName:"webgl",kernelFunc:A_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M_="return float(a <= b);",B_=`
  return vec4(lessThanEqual(a, b));
`,U_=Se({opSnippet:M_,packedOpSnippet:B_,cpuKernelImpl:TT,dtype:"bool"}),V_={kernelName:$w,backendName:"webgl",kernelFunc:U_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W_(e){const{backend:t,attrs:n}=e,{start:r,stop:o,num:s}=n,i=RT(r,o,s);return t.makeTensorInfo([i.length],"float32",i)}const z_={kernelName:Ew,backendName:"webgl",kernelFunc:W_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G_=wo+`
  return x < 0.0 ? 0./0. : log(x);
`,H_=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,X_=z({opSnippet:G_,packedOpSnippet:H_,cpuKernelImpl:kT}),j_={kernelName:Iw,backendName:"webgl",kernelFunc:X_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K_=wo+`
  return log(1.0 + x);
`,q_=z({opSnippet:K_}),Q_={kernelName:Tw,backendName:"webgl",kernelFunc:q_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y_="return float(a >= 1.0 && b >= 1.0);",Z_=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,J_=Se({opSnippet:Y_,packedOpSnippet:Z_,dtype:"bool"}),eF={kernelName:Rw,backendName:"webgl",kernelFunc:J_};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tF="return float(!(x >= 1.0));",nF=z({opSnippet:tF}),rF={kernelName:kw,backendName:"webgl",kernelFunc:nF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oF="return float(a >= 1.0 || b >= 1.0);",sF=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,iF=Se({opSnippet:oF,packedOpSnippet:sF,dtype:"bool"}),aF={kernelName:Nw,backendName:"webgl",kernelFunc:iF};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lF{constructor(t,n,r,o,s){this.variableNames=["x"],this.outputShape=[];const i=n,a=t[3]-1;this.outputShape=t;let l;const u=`float(${r}) + float(${o}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uF{constructor(t,n,r,o,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=n,a=t[3]-1;this.outputShape=t;let l;const u=`float(${r}) + float(${o}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cF=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{depthRadius:s,bias:i,alpha:a,beta:l}=r,u=S().getBool("WEBGL_PACK_NORMALIZATION")?new uF(o.shape,s,i,a,l):new lF(o.shape,s,i,a,l);return n.runWebGLProgram(u,[o],o.dtype)},dF={kernelName:bw,backendName:"webgl",kernelFunc:cF};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fF{constructor(t,n,r,o,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=n,this.bias=r,this.alpha=o,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${n})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${n} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${r});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${s})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hF=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:o,y:s,dy:i}=t,{depthRadius:a,bias:l,alpha:u,beta:c}=r,d=new fF(o.shape,a,l,u,c);return n.runWebGLProgram(d,[o,s,i],o.dtype)},pF={kernelName:_w,backendName:"webgl",kernelFunc:hF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mF(e,t,n,r){const o=b(t),i=b(e.shape)/o,a=_({inputs:{x:e},attrs:{shape:[i,o]},backend:r}),l=wr(a,e.dtype,"max",r),u=_({inputs:{x:l},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(l),u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a0(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{reductionIndices:s,keepDims:i}=r,a=o.shape.length,l=Ae(s,o.shape);let u=l;const c=Et(u,a),d=c!=null,f=n.shouldExecuteOnCPU([o]);let h=o;if(d){if(f){const y=n.texData.get(h.dataId).values,w=new Array(a);for(let $=0;$<w.length;$++)w[$]=o.shape[c[$]];const C=Kc(y,o.shape,o.dtype,c,w);h=n.makeTensorInfo(w,o.dtype);const I=n.texData.get(h.dataId);I.values=C}else h=Ea(o,c,n);u=It(u.length,a)}Vt("max",u,a);const[p,x]=Yt(h.shape,u);let v=p;i&&(v=fn(p,l));let m;if(f){const y=n.texData.get(h.dataId).values,w=NT(y,b(x),v,o.dtype);m=n.makeTensorInfo(v,o.dtype);const C=n.texData.get(m.dataId);C.values=w}else m=mF(h,x,v,n);return d&&n.disposeIntermediateTensorInfo(h),m}const gF={kernelName:Fw,backendName:"webgl",kernelFunc:a0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xF=qc+`
  return max(a, b);
`,vF=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Rs+`
  return result;
`,yF=Se({opSnippet:xF,packedOpSnippet:vF,cpuKernelImpl:bT}),wF={kernelName:Ow,backendName:"webgl",kernelFunc:yF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CF(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t;Is(o,"maxPool");const{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=r,u=1;O(ho(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const c=fo(o.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&we(c.inShape,c.outShape))return Je({inputs:{x:o},backend:n});const d=new ms(c,"max",!1);return n.runWebGLProgram(d,[o],o.dtype)}const SF={kernelName:Pw,backendName:"webgl",kernelFunc:CF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $F(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:u}=r,c=[1,1,1],d=Ss(o.shape,s,i,c,a,u,l),f=new Yc(d,"max",!1);return n.runWebGLProgram(f,[o],o.dtype)}const EF={kernelName:Aw,backendName:"webgl",kernelFunc:$F};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class IF{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const n=t.strideHeight,r=t.strideWidth,o=t.dilationHeight,s=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=s-1-t.padInfo.top,l=i-1-t.padInfo.left,u=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class TF{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const n=t.strideDepth,r=t.strideHeight,o=t.strideWidth,s=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,d=l-1-t.padInfo.front,f=u-1-t.padInfo.top,h=c-1-t.padInfo.left,p=l*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${f}, ${h});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RF(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=r,d=[1,1,1],f=Ss(i.shape,a,l,d,u,c),h=new Yc(f,"max",!0),p=n.runWebGLProgram(h,[i],i.dtype),x=new TF(f),v=n.runWebGLProgram(x,[o,p],i.dtype);return n.disposeIntermediateTensorInfo(p),v}const kF={kernelName:Lw,backendName:"webgl",kernelFunc:RF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NF(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:s,output:i}=t,a=s;Is([s,i],"maxPoolGrad");const{filterSize:l,strides:u,pad:c,dimRoundingMode:d}=r,f=fo(a.shape,l,u,1,c,d),h=!0,p=new ms(f,"max",h),x=n.runWebGLProgram(p,[a],a.dtype),v=new IF(f),m=n.runWebGLProgram(v,[o,x],a.dtype);return n.disposeIntermediateTensorInfo(x),m}const bF={kernelName:Dw,backendName:"webgl",kernelFunc:NF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _F(e,t,n,r){let o=new ms(n,"max",!1);const s=r.runWebGLProgram(o,[e],"float32");o=new ms(n,"max",!0,!0,t);const i=r.runWebGLProgram(o,[e],"float32");return[s,i]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FF={kernelName:Mw,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{filterSize:o,strides:s,pad:i,includeBatchInIndex:a}=t,l=n;O(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);const u=[1,1];O(ho(s,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${u}'`);const c=fo(r.shape,o,s,u,i),[d,f]=_F(r,a,c,l);return[d,f]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OF(e,t,n,r){const o=b(t),i=b(e.shape)/o,a=_({inputs:{x:e},attrs:{shape:[i,o]},backend:r}),l=wr(a,"float32","mean",r),u=_({inputs:{x:l},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(l),u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PF={kernelName:Bw,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{keepDims:o,axis:s}=t,i=n,a=r.shape.length,l=Ae(s,r.shape);let u=l;const c=Et(u,a),d=c!=null,f=i.shouldExecuteOnCPU([r]),h=[];let p=r;if(d){if(f){const w=i.texData.get(p.dataId).values,C=new Array(a);for(let E=0;E<C.length;E++)C[E]=r.shape[c[E]];const I=Kc(w,r.shape,r.dtype,c,C);p=i.makeTensorInfo(C,r.dtype);const $=i.texData.get(p.dataId);$.values=I}else p=Ea(r,c,i);h.push(p),u=It(u.length,a)}Vt("sum",u,a);const[x,v]=Yt(p.shape,u);let m=x;o&&(m=fn(x,l));const g=OF(p,v,m,i);for(const y of h)i.disposeIntermediateTensorInfo(y);return g}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DF(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,keepDims:i}=r,a=o.shape.length,l=Ae(s,o.shape);let u=l;const c=Et(u,a);let d=o;c!=null&&(d=De({inputs:{x:o},backend:n,attrs:{perm:c}}),u=It(u.length,o.shape.length)),Vt("min",u,a);const[f,h]=Yt(d.shape,u),p=b(h),x=_({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),v=wr(x,x.dtype,"min",n);let m;if(i){const g=fn(f,l);m=_({inputs:{x:v},backend:n,attrs:{shape:g}})}else m=_({inputs:{x:v},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(v),c!=null&&n.disposeIntermediateTensorInfo(d),m}const AF={kernelName:Uw,backendName:"webgl",kernelFunc:DF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LF=qc+`
  return min(a, b);
`,MF=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Rs+`
  return result;
`,BF=Se({opSnippet:LF,packedOpSnippet:MF,cpuKernelImpl:_T}),UF={kernelName:Vw,backendName:"webgl",kernelFunc:BF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class VF{constructor(t,n,r){this.variableNames=["x"],this.outputShape=n.map((c,d)=>c[0]+t[d]+c[1]);const o=t.length,s=q(o),i=n.map(c=>c[0]).join(","),a=n.map((c,d)=>c[0]+t[d]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),u=r==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WF{constructor(t,n,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((p,x)=>p[0]+t[x]+p[1]);const o=t.length,s=q(o),i=n.map(p=>p[0]).join(","),a=n.map((p,x)=>p[0]+t[x]).join(","),l=Oe("rc",o),u=Oe("source",o),c=`${l[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${u.slice(-2).join()})`,f=r==="reflect"?0:1;let h="";if(o===1){const p=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${f};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${f};
        }
        source -= start;
      `;h=`
        ${s} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${u.join()}), ${d});
        ${l[o-1]} += 1;
        if(${c}) {
          ${p}
          result[1] = getChannel(getX(${u.join()}), ${d});
        }
      `}else{const p=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${f}) +
                gte * ((end - 1) * 2 - source + ${f});
        source -= start;
      `;h=`
        ${s} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${u.join()}), ${d});
        ${l[o-1]} += 1;
        if(${c}) {
          ${p}
          result[1] = getChannel(getX(${u.join()}), ${d});
        }
        rc = outputLoc;
        ${l[o-2]} += 1;
        if(${l[o-2]} < ${this.outputShape[o-2]}) {
          ${p}
          result[2] = getChannel(getX(${u.join()}), ${d});
          ${l[o-1]} += 1;
          if(${c}) {
            ${p}
            result[3] = getChannel(getX(${u.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zF=({inputs:e,backend:t,attrs:n})=>{const{x:r}=e,{paddings:o,mode:s}=n,i=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new WF(r.shape,o,s):new VF(r.shape,o,s);return t.runWebGLProgram(i,[r],r.dtype)},GF={kernelName:Ww,backendName:"webgl",kernelFunc:zF};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HF=`if (b == 0.0) return NAN;
  return mod(a, b);`,XF=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Rs+`
  return result;
`,jF=Se({opSnippet:HF,packedOpSnippet:XF}),KF={kernelName:zw,backendName:"webgl",kernelFunc:jF};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qF{constructor(t,n,r){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${n-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${n-1}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QF=`
if (a == b) {
  return 1.0;
};
return a / b;`,YF=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,l0=Se({opSnippet:QF,packedOpSnippet:YF,checkOutOfBounds:!0}),ZF={kernelName:Jy,backendName:"webgl",kernelFunc:l0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ah="return a - b;",u0=Se({opSnippet:ah,packedOpSnippet:ah,supportsComplex:!0,cpuKernelImpl:YT}),JF={kernelName:BC,backendName:"webgl",kernelFunc:u0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(e){const{inputs:t,backend:n,attrs:r}=e,{logits:o}=t,{dim:s}=r,i=Ae([s],o.shape),a=a0({inputs:{x:o},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),l=fn(a.shape,i),u=_({inputs:{x:a},backend:n,attrs:{shape:l}}),c=u0({inputs:{a:o,b:u},backend:n}),d=o0({inputs:{x:c},backend:n}),f=Ia({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),h=_({inputs:{x:f},backend:n,attrs:{shape:l}}),p=l0({inputs:{a:d,b:h},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(h),p}const eO={kernelName:RC,backendName:"webgl",kernelFunc:c0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tO(e){const{inputs:t,backend:n,attrs:r}=e,{logits:o}=t,{numSamples:s,seed:i,normalized:a}=r,l=a?o:c0({inputs:{logits:o},backend:n,attrs:{dim:o.shape.length-1}}),u=l.shape[0],c=l.shape[1],d=new qF(u,c,s),f=[[i]],h=n.runWebGLProgram(d,[l],"int32",f);return a||n.disposeIntermediateTensorInfo(l),h}const nO={kernelName:Gw,backendName:"webgl",kernelFunc:tO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rO=Tt+`
  return -x;
`,oO=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function sO(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){const s=n.texData.get(r.dataId),[i,a]=OT(s.values,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,i)}let o;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new er(r.shape,oO):o=new on(r.shape,rO),n.runWebGLProgram(o,[r],r.dtype)}const iO={kernelName:Hw,backendName:"webgl",kernelFunc:sO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aO=nE;function lO(e){Pt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:o,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=r,u=n.readSync(o.dataId),c=n.readSync(s.dataId),{selectedIndices:d}=aO(u,c,i,a,l);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const uO={kernelName:jw,backendName:"webgl",kernelFunc:lO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cO=rE;function dO(e){Pt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:o,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=r,c=n.readSync(o.dataId),d=n.readSync(s.dataId),{selectedIndices:f,validOutputs:h}=cO(c,d,i,a,l,u);return[n.makeTensorInfo([f.length],"int32",new Int32Array(f)),n.makeTensorInfo([],"int32",new Int32Array([h]))]}const fO={kernelName:Kw,backendName:"webgl",kernelFunc:dO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hO=oE;function pO(e){Pt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:o,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=r,c=n.readSync(o.dataId),d=n.readSync(s.dataId),f=i,h=a,p=l,x=u,{selectedIndices:v,selectedScores:m}=hO(c,d,f,h,p,x);return[n.makeTensorInfo([v.length],"int32",new Int32Array(v)),n.makeTensorInfo([m.length],"float32",new Float32Array(m))]}const mO={kernelName:qw,backendName:"webgl",kernelFunc:pO};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gO{constructor(t,n,r,o){this.variableNames=["indices"],this.outputShape=[t,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${r}),
                      float(index == coords.y)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xO=e=>{const{inputs:t,backend:n,attrs:r}=e,{indices:o}=t,{dtype:s,depth:i,onValue:a,offValue:l}=r,u=b(o.shape),c=new gO(u,i,a,l),d=_({inputs:{x:o},backend:n,attrs:{shape:[u]}}),f=n.runWebGLProgram(c,[d],s);n.disposeIntermediateTensorInfo(d);const h=[...o.shape,i],p=_({inputs:{x:f},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(f),p},vO={kernelName:Yw,backendName:"webgl",kernelFunc:xO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zi(e){const{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype==="complex64"){const o=Ns({inputs:{input:r},backend:n}),s=Zi({inputs:{x:o},backend:n}),i=Ta({inputs:{input:r},backend:n}),a=Zi({inputs:{x:i},backend:n}),l=Vn({inputs:{real:s,imag:a},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),l}else return bs({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype==="string"?"":0},backend:n})}const yO={kernelName:KC,backendName:"webgl",kernelFunc:Zi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(e){const{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(r.dtype==="complex64"){const o=Ns({inputs:{input:r},backend:n}),s=d0({inputs:{x:o},backend:n}),i=Ta({inputs:{input:r},backend:n}),a=Zi({inputs:{x:i},backend:n}),l=Vn({inputs:{real:s,imag:a},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),l}else return bs({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}const wO={kernelName:Qw,backendName:"webgl",kernelFunc:d0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CO(e){const{inputs:t,backend:n,attrs:r}=e,{axis:o}=r;if(t.length===1)return ku({inputs:{input:t[0]},backend:n,attrs:{dim:o}});const s=t[0].shape,i=t[0].dtype;t.forEach(c=>{Om(s,c.shape,"All tensors passed to stack must have matching shapes"),O(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(c=>{const d=ku({inputs:{input:c},backend:n,attrs:{dim:o}});return a.push(d),d}),u=Qx({inputs:l,backend:n,attrs:{axis:o}});return a.forEach(c=>n.disposeIntermediateTensorInfo(c)),u}const SO={kernelName:Zw,backendName:"webgl",kernelFunc:CO};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $O{constructor(t,n,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((u,c)=>u[0]+t[c]+u[1]);const o=t.length,s=q(o),i=n.map(u=>u[0]).join(","),a=n.map((u,c)=>u[0]+t[c]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class EO{constructor(t,n,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((x,v)=>x[0]+t[v]+x[1]);const o=t.length,s=q(o),i=n.map(x=>x[0]).join(","),a=n.map((x,v)=>x[0]+t[v]).join(","),l=Oe("rc",o),u=Oe("source",o),c=`${l[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${u.slice(-2).join()})`,f=[`${s} rc = outputLoc;`,`${l[o-1]} += 1;
       if(${c}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${l[o-2]} += 1;
       if(${l[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${l[o-1]} += 1;
         if(${c}) {`],h=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let x=0,v=o===1?2:4;x<v;x++)p+=`
        ${f[x]}
        if (${h}) {
          result[${x}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${x}] = getChannel(getX(${u.join()}), ${d});
        }
      `;p+=o===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f0=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{paddings:s,constantValue:i}=r;if(b(o.shape)===0){const u=s.map((c,d)=>c[0]+o.shape[d]+c[1]);return bs({backend:n,attrs:{shape:u,value:i,dtype:o.dtype}})}const a=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new EO(o.shape,s,i):new $O(o.shape,s,i),l=[[i]];return n.runWebGLProgram(a,[o],o.dtype,l)},IO={kernelName:Jw,backendName:"webgl",kernelFunc:f0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TO=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,RO=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Rs+`
  return result;
`,kO=Se({opSnippet:TO,packedOpSnippet:RO}),NO={kernelName:eC,backendName:"webgl",kernelFunc:kO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bO(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:s,keepDims:i}=r,a=o.shape.length,l=[],u=Ae(s,o.shape);let c=u;const d=Et(c,a);let f=o;d!=null&&(f=De({inputs:{x:o},backend:n,attrs:{perm:d}}),c=It(c.length,a),l.push(f)),Vt("prod",c,a);let h;if(n.shouldExecuteOnCPU([f])){const p=n.texData.get(f.dataId).values,{outVals:x,outShape:v,outDtype:m}=DT(f.shape,f.dtype,p,c);h=n.makeTensorInfo(v,m,x)}else{const[p,x]=Yt(f.shape,c),v=b(x),m=_({inputs:{x:f},backend:n,attrs:{shape:[-1,v]}}),g=Nc(o.dtype),y=wr(m,g,"prod",n);h=_({inputs:{x:y},backend:n,attrs:{shape:p}}),l.push(m),l.push(y)}if(i){l.push(h);const p=fn(h.shape,u);h=_({inputs:{x:h},backend:n,attrs:{shape:p}})}return l.forEach(p=>n.disposeIntermediateTensorInfo(p)),h}const _O={kernelName:tC,backendName:"webgl",kernelFunc:bO};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FO(e){const{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:o,paramsDenseValues:s,indices:i}=t,{outputRaggedRank:a}=r,l=o.map(m=>n.readSync(m.dataId)),u=o.map(m=>m.shape),c=n.readSync(s.dataId),d=n.readSync(i.dataId),[f,h,p]=AT(l,u,c,s.shape,s.dtype,d,i.shape,a),x=f.map(m=>n.makeTensorInfo([m.length],"int32",m)),v=n.makeTensorInfo(p,s.dtype,h);return x.concat([v])}const OO={kernelName:nC,backendName:"webgl",kernelFunc:FO};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PO(e){const{inputs:t,backend:n}=e,{starts:r,limits:o,deltas:s}=t,i=n.readSync(r.dataId),a=n.readSync(o.dataId),l=n.readSync(s.dataId),[u,c]=LT(i,r.shape,r.dtype,a,o.shape,l,s.shape),d=n.makeTensorInfo([u.length],"int32",u),f=n.makeTensorInfo([c.length],r.dtype,c);return[d,f]}const DO={kernelName:rC,backendName:"webgl",kernelFunc:PO};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AO(e){const{inputs:t,backend:n,attrs:r}=e,{shape:o,values:s,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=r,u=n.readSync(o.dataId),c=n.readSync(s.dataId),d=n.readSync(i.dataId),f=a.map(v=>n.readSync(v.dataId)),h=a.map(v=>v.shape),[p,x]=MT(u,o.shape,c,s.shape,s.dtype,d,i.shape,f,h,l);return n.makeTensorInfo(p,s.dtype,x)}const LO={kernelName:oC,backendName:"webgl",kernelFunc:AO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h0=e=>{const{backend:t,attrs:n}=e,{start:r,stop:o,step:s,dtype:i}=n,a=BT(r,o,s,i);return t.makeTensorInfo([a.length],i,a)},MO={kernelName:sC,backendName:"webgl",kernelFunc:h0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BO="return 1.0 / x;",UO=z({opSnippet:BO}),VO={kernelName:aC,backendName:"webgl",kernelFunc:UO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WO=Tt+`
  return (x < 0.0) ? 0.0 : x;
`,zO=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,GO=z({opSnippet:WO,packedOpSnippet:zO}),HO={kernelName:Hm,backendName:"webgl",kernelFunc:GO};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XO=Tt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,jO=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,KO=z({opSnippet:XO,packedOpSnippet:jO}),qO={kernelName:jm,backendName:"webgl",kernelFunc:KO};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class QO{constructor(t,n,r,o,s){this.variableNames=["A"],this.outputShape=[];const[i,a,l,u]=t;this.outputShape=[i,n,r,u];const c=[o&&n>1?a-1:a,o&&r>1?l-1:l],d=[o&&n>1?n-1:n,o&&r>1?r-1:r];let f;s?f="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/d[0]},
          ${c[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class YO{constructor(t,n,r,o,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,u]=t;this.outputShape=[i,n,r,u];const c=[o&&n>1?a-1:a,o&&r>1?l-1:l],d=[o&&n>1?n-1:n,o&&r>1?r-1:r];let f;s?f="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/d[0]},
          ${c[1]/d[1]},
          ${c[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${r-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZO(e){const{inputs:t,backend:n,attrs:r}=e,{images:o}=t,{alignCorners:s,halfPixelCenters:i,size:a}=r,[l,u]=a,c=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new YO(o.shape,l,u,s,i):new QO(o.shape,l,u,s,i);return n.runWebGLProgram(c,[o],"float32")}const JO={kernelName:cC,backendName:"webgl",kernelFunc:ZO};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class eP{constructor(t,n,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,s]=n,[,i,a]=t,l=[r&&i>1?o-1:o,r&&a>1?s-1:s],u=[r&&i>1?i-1:i,r&&a>1?a-1:a],c=l[0]/u[0],d=l[1]/u[1],f=1/c,h=1/d,p=Math.ceil(f)*2+2,x=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${d});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${h});

        const int winHeight = int(${p});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tP(e){const{inputs:t,backend:n,attrs:r}=e,{images:o,dy:s}=t,{alignCorners:i}=r,a=new eP(s.shape,o.shape,i);return n.runWebGLProgram(a,[s],s.dtype)}const nP={kernelName:dC,backendName:"webgl",kernelFunc:tP};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rP{constructor(t,n,r,o,s){this.variableNames=["A"],this.outputShape=[];const[i,a,l,u]=t;this.outputShape=[i,n,r,u];const c=[o&&n>1?a-1:a,o&&r>1?l-1:l],d=[o&&n>1?n-1:n,o&&r>1?r-1:r],f=o?"0.5":"0.0";let h;s?h="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/d[0]},
          ${c[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oP{constructor(t,n,r,o,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,u]=t;this.outputShape=[i,n,r,u];const c=[o&&n>1?a-1:a,o&&r>1?l-1:l],d=[o&&n>1?n-1:n,o&&r>1?r-1:r],f=o?"0.5":"0.0";let h;s?h="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/d[0]},
          ${c[1]/d[1]},
          ${c[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${r-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sP(e){const{inputs:t,backend:n,attrs:r}=e,{images:o}=t,{alignCorners:s,halfPixelCenters:i,size:a}=r,[l,u]=a,c=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new oP(o.shape,l,u,s,i):new rP(o.shape,l,u,s,i);return n.runWebGLProgram(c,[o],o.dtype)}const iP={kernelName:lC,backendName:"webgl",kernelFunc:sP};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class aP{constructor(t,n,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,s]=n,[,i,a]=t,l=[r&&i>1?o-1:o,r&&a>1?s-1:s],u=[r&&i>1?i-1:i,r&&a>1?a-1:a],c=l[0]/u[0],d=l[1]/u[1],f=1/c,h=1/d,p=Math.ceil(f)*2+2,x=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${d});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${h});

        const int winHeight = int(${p});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${r} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${r} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lP(e){const{inputs:t,backend:n,attrs:r}=e,{images:o,dy:s}=t,{alignCorners:i}=r,a=new aP(s.shape,o.shape,i);return n.runWebGLProgram(a,[s],s.dtype)}const uP={kernelName:uC,backendName:"webgl",kernelFunc:lP};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cP{constructor(t,n){this.variableNames=["x"];const r=t.length;if(r>4)throw new Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);if(this.outputShape=t,r===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>n.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,s=t.map((a,l)=>o(l)).join(","),i=q(r);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dP{constructor(t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const r=t.length;if(r>4)throw new Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);this.outputShape=t;const o=Oe("rc",r),s=`${o[r-1]} + 1 < ${this.outputShape[r-1]}`,i=`${o[r-2]} + 1 < ${this.outputShape[r-2]}`,a=q(r);r===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(o.slice())};
          if(${s}){
            result.g = ${u(o.slice())};
          }
          if(${i}) {
            result.b = ${c(o.slice())};
            if(${s}) {
              result.a = ${d(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(p){return f(p)}function u(p){return p[r-1]="("+p[r-1]+" + 1)",f(p)}function c(p){return p[r-2]="("+p[r-2]+" + 1)",f(p)}function d(p){return p[r-1]="("+p[r-1]+" + 1)",p[r-2]="("+p[r-2]+" + 1)",f(p)}function f(p){const x=t.map((g,y)=>h(y,p)),v=x.join(","),m=x.slice(-2).join(",");return`getChannel(getX(${v}), vec2(${m}))`}function h(p,x){return n.indexOf(p)!==-1&&t[p]!==1?`${t[p]} - ${x[p]} - 1`:`${x[p]}`}}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fP(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{dims:s}=r,i=o.shape.length,a=Ae(s,o.shape);if(i===0)return Je({inputs:{x:o},backend:n});const l=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dP(o.shape,a):new cP(o.shape,a);return n.runWebGLProgram(l,[o],o.dtype)}const hP={kernelName:fC,backendName:"webgl",kernelFunc:fP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pP{constructor(t,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const r=t[1],o=t[2];this.outputShape=t;let s="";typeof n=="number"?s=`float outputValue = ${n.toFixed(2)};`:s=`
        vec3 fill = vec3(${n.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${r}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mP={kernelName:QC,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:r}=e,{radians:o,fillValue:s,center:i}=t,a=n,l=new pP(r.shape,s),[u,c]=Gg(i,r.shape[1],r.shape[2]),d=[[u,c,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[r],r.dtype,d)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gP=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,xP=z({opSnippet:gP}),vP={kernelName:hC,backendName:"webgl",kernelFunc:xP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yP="return inversesqrt(x);",wP=z({opSnippet:yP,cpuKernelImpl:UT}),CP={kernelName:pC,backendName:"webgl",kernelFunc:wP};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class p0{constructor(t,n,r,o,s,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const l=q(s.length),u=q(i.length);let c="";r===1?c="i":r===2&&(c="i, j");const d=`getIndices(${c})`;let f="";o===1?f="i":o===2&&(f="i, coords[1]");const h=`getUpdates(${f})`,p=n>1?"strides[j]":"strides";this.userCode=`
        ${l} strides = ${l}(${s});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${n}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SP(e){const{inputs:t,backend:n,attrs:r}=e,{indices:o,updates:s}=t,{shape:i}=r,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:d}=Fc(s,o,i),f=[d/u,u];if(d===0)return n.makeTensorInfo(i,o.dtype);const h=_({inputs:{x:o},backend:n,attrs:{shape:[l,a]}}),p=_({inputs:{x:s},backend:n,attrs:{shape:[l,u]}}),x=n.makeTensorInfo([],"float32",new Float32Array([0])),v=new p0(l,a,h.shape.length,p.shape.length,c,f),m=n.runWebGLProgram(v,[p,h,x],p.dtype),g=_({inputs:{x:m},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(x),g}const $P={kernelName:mC,backendName:"webgl",kernelFunc:SP};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class EP{constructor(t,n,r,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,r];const s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(n+1))}; ++i) { if (left >= right) break;`,a=S().getNumber("WEBGL_VERSION")===2?s:i,l=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IP(e){const{inputs:t,backend:n,attrs:r}=e,{sortedSequence:o,values:s}=t,{side:i}=r,a=new EP(o.shape[0],o.shape[1],s.shape[1],i),l=[[o.shape[1]]];return n.runWebGLProgram(a,[o,s],"int32",l)}const TP={kernelName:gC,backendName:"webgl",kernelFunc:IP};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class RP{constructor(t,n,r){this.variableNames=["c","a","b"],this.outputShape=n;let o,s;if(r>4)throw Error(`Where for rank ${r} is not yet supported`);if(r===1)s="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],u=[];for(let c=0;c<n.length;c++)u.push(`${a[c]}`),c<t&&l.push(`${a[c]}`);o=l.join(),s=u.join()}const i=q(r);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kP(e){const{inputs:t,backend:n}=e,{condition:r,t:o,e:s}=t,i=new RP(r.shape.length,o.shape,o.shape.length);return n.runWebGLProgram(i,[r,o,s],Qt(o.dtype,s.dtype))}const NP={kernelName:xC,backendName:"webgl",kernelFunc:kP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bP=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${jg};
  float scale = ${Kg};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,_P=z({opSnippet:bP}),FP={kernelName:vC,backendName:"webgl",kernelFunc:_P};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OP=wo+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,PP=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,DP=z({opSnippet:OP,packedOpSnippet:PP,cpuKernelImpl:WT}),AP={kernelName:Km,backendName:"webgl",kernelFunc:DP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LP=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,MP=z({opSnippet:LP}),BP={kernelName:SC,backendName:"webgl",kernelFunc:MP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UP=wo+`
  return sin(x);
`,VP=z({opSnippet:UP}),WP={kernelName:wC,backendName:"webgl",kernelFunc:VP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zP=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,GP=z({opSnippet:zP}),HP={kernelName:CC,backendName:"webgl",kernelFunc:GP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XP=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,jP=z({opSnippet:XP}),KP={kernelName:$C,backendName:"webgl",kernelFunc:jP};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qP=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{blockShape:s,paddings:i}=r;O(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=s.reduce((m,g)=>m*g),l=[[0,0]];l.push(...i);for(let m=1+s.length;m<o.shape.length;++m)l.push([0,0]);const u=[],c=f0({inputs:{x:o},backend:n,attrs:{paddings:l,constantValue:0}}),d=Vc(c.shape,s,a,!1),f=Wc(d.length,s.length,!1),h=zc(c.shape,s,a,!1),p=_({inputs:{x:c},backend:n,attrs:{shape:d}}),x=De({inputs:{x:p},backend:n,attrs:{perm:f}}),v=_({inputs:{x},backend:n,attrs:{shape:h}});return u.push(c),u.push(p),u.push(x),u.forEach(m=>n.disposeIntermediateTensorInfo(m)),v},QP={kernelName:IC,backendName:"webgl",kernelFunc:qP};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YP(e){const{inputs:t,backend:n}=e,{indices:r,values:o,denseShape:s,defaultValue:i}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(r.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=n.readSync(r.dataId),l=n.readSync(o.dataId),u=n.readSync(s.dataId),c=n.readSync(i.dataId)[0],[d,f,h,p,x]=GT(a,r.shape,r.dtype,l,o.dtype,u,c);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],o.dtype,h),n.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(v=>Number(v)))),n.makeTensorInfo([x.length],r.dtype,new Int32Array(x))]}const ZP={kernelName:kC,backendName:"webgl",kernelFunc:YP};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JP(e){const{inputs:t,backend:n}=e,{inputIndices:r,inputShape:o,newShape:s}=t;if(r.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const i=Array.from(n.readSync(o.dataId)),a=n.readSync(r.dataId),l=Array.from(n.readSync(s.dataId)),[u,c,d]=HT(a,r.shape,r.dtype,i,l);return[n.makeTensorInfo(c,r.dtype,u),n.makeTensorInfo([d.length],s.dtype,new Int32Array(d))]}const eD={kernelName:NC,backendName:"webgl",kernelFunc:JP};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tD(e){const{inputs:t,backend:n}=e,{data:r,indices:o,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);const i=n.readSync(r.dataId),a=n.readSync(o.dataId),l=n.readSync(s.dataId),[u,c]=Lx(i,r.shape,r.dtype,a,l,!0);return n.makeTensorInfo(c,r.dtype,u)}const nD={kernelName:bC,backendName:"webgl",kernelFunc:tD};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rD(e){const{inputs:t,backend:n}=e,{data:r,indices:o,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);const i=n.readSync(r.dataId),a=n.readSync(o.dataId),l=n.readSync(s.dataId),[u,c]=Lx(i,r.shape,r.dtype,a,l);return n.makeTensorInfo(c,r.dtype,u)}const oD={kernelName:_C,backendName:"webgl",kernelFunc:rD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sD(e){const{inputs:t,backend:n,attrs:r}=e,{sparseIndices:o,sparseValues:s,defaultValue:i}=t,{outputShape:a}=r,{sliceRank:l,numUpdates:u,sliceSize:c,strides:d,outputSize:f}=Fc(s,o,a),h=!1;if(s.dtype==="string"){const m=n.bufferSync(o),g=n.bufferSync(s),y=no(n.readSync(i.dataId)[0]),w=VT(m,g,a,f,c,u,l,d,y,h);return n.makeTensorInfo(a,w.dtype,w.values)}const p=new p0(u,l,o.shape.length,s.shape.length,d,[f,1],h),x=n.runWebGLProgram(p,[s,o,i],s.dtype),v=_({inputs:{x},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(x),v}const iD={kernelName:FC,backendName:"webgl",kernelFunc:sD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aD(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{numOrSizeSplits:s,axis:i}=r,a=Ae(i,o.shape)[0],l=ix(o,s,a),u=o.shape.length,c=new Array(u).fill(0),d=o.shape.slice();return l.map(f=>{const h=[...d];h[a]=f;const p=Co({inputs:{x:o},backend:n,attrs:{begin:c,size:h}});return c[a]+=f,p})}const lD={kernelName:TC,backendName:"webgl",kernelFunc:aD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lh="return sqrt(x);",uD=z({opSnippet:lh,packedOpSnippet:lh,cpuKernelImpl:XT}),cD={kernelName:EC,backendName:"webgl",kernelFunc:uD};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dD="return x * x;",fD=z({opSnippet:dD}),hD={kernelName:PC,backendName:"webgl",kernelFunc:fD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uh="return (a - b) * (a - b);",pD=Se({opSnippet:uh,packedOpSnippet:uh}),mD={kernelName:OC,backendName:"webgl",kernelFunc:pD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gD({inputs:e,attrs:t,backend:n}){const{x:r}=e,o=Tt+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new on(r.shape,o);return n.runWebGLProgram(s,[r],r.dtype)}const xD={kernelName:Ym,backendName:"webgl",kernelFunc:gD};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vD{constructor(t,n,r){this.variableNames=["x"],this.outputShape=r;const o=r.length,s=q(r.length),i=q(r.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=r.map((u,c)=>(l++,r.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${l-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${n});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yD(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:h,finalShape:p,isIdentity:x,sliceDim0:v,isSimpleSlice:m,begin:g,end:y,strides:w}=Ag(o.shape,s,i,a,l,u,c,d,f);let C;if(x)C=_({inputs:{x:o},backend:n,attrs:{shape:p}});else if(v||m){O(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const $=Tg(g,y,w),E=Co({inputs:{x:o},backend:n,attrs:{begin:g,size:$}});C=_({inputs:{x:E},backend:n,attrs:{shape:p}}),n.disposeIntermediateTensorInfo(E)}else if(n.shouldExecuteOnCPU([o])){const E=n.readSync(o.dataId),F=Ce(o.shape,o.dtype,E),R=jT(h,F,w,g);C=n.makeTensorInfo(p,o.dtype,R.values)}else{const E=new vD(g,w,h);C=n.runWebGLProgram(E,[o],o.dtype)}const I=_({inputs:{x:C},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(C),I}const wD={kernelName:DC,backendName:"webgl",kernelFunc:yD};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CD(e){const{inputs:t,backend:n,attrs:r}=e,{separator:o,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=r,{data:c,dataSplits:d}=t,f=n.readSync(c.dataId),h=n.readSync(d.dataId),[p,x]=KT(f,h,o,s,i,a,l,u);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(d.shape,"int32",x)]}const SD={kernelName:AC,backendName:"webgl",kernelFunc:CD};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $D(e){const{inputs:t,backend:n,attrs:r}=e,{skipEmpty:o}=r,{input:s,delimiter:i}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=n.readSync(s.dataId),l=n.readSync(i.dataId)[0],[u,c,d]=qT(a,l,o),f=c.length;return[n.makeTensorInfo([f,2],"int32",u),n.makeTensorInfo([f],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const ED={kernelName:LC,backendName:"webgl",kernelFunc:$D};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ID(e){const{inputs:t,backend:n,attrs:r}=e,{numBuckets:o}=r,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=n.readSync(s.dataId),a=QT(i,o);return n.makeTensorInfo(s.shape,"int32",a)}const TD={kernelName:MC,backendName:"webgl",kernelFunc:ID};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RD="return tan(x);",kD=z({opSnippet:RD}),ND={kernelName:UC,backendName:"webgl",kernelFunc:kD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bD=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,_D=z({opSnippet:bD}),FD={kernelName:VC,backendName:"webgl",kernelFunc:_D};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class OD{constructor(t,n){this.variableNames=["A"];const r=new Array(t.length);for(let i=0;i<r.length;i++)r[i]=t[i]*n[i];this.outputShape=r,this.rank=r.length;const o=q(this.rank),s=PD(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}}function PD(e){const t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let o=0;o<e.length;o++)r.push(`imod(${n[o]}, ${e[o]})`);return r.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m0(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{reps:s}=r;if(o.dtype==="string"||o.shape.length>5){const l=n.readSync(o.dataId),u=o.dtype==="string"?l.map(f=>no(f)):l,c=Ce(o.shape,o.dtype,u),d=ZT(c,s);return n.makeTensorInfo(d.shape,d.dtype,d.values)}const i=new OD(o.shape,s);return n.runWebGLProgram(i,[o],o.dtype)}const DD={kernelName:Qm,backendName:"webgl",kernelFunc:m0};class AD{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class LD{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zn(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function ch(e){let t=1;for(;t<e;)t*=2;return t}function MD(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{k:s,sorted:i}=r,a=S().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=S().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=o.shape,c=u[u.length-1];if(n.shouldExecuteOnCPU([o])||c<a||s>l){const R=n.readSync(o.dataId),[M,V]=JT(R,u,o.dtype,s,i);return[n.makeTensorInfo(M.shape,M.dtype,M.values),n.makeTensorInfo(V.shape,V.dtype,V.values)]}if(s===0)return u[u.length-1]=0,[n.makeTensorInfo(u,o.dtype,[]),n.makeTensorInfo(u,"int32",[])];if(c===1)return[o,bs({attrs:{shape:u,dtype:"int32",value:0},backend:n})];const d=n.texData.get(o.dataId),f=d!==null&&d.isPacked,h=f?n.unpackTensor(o):o,x=b(u)/c,v=_({inputs:{x:h},attrs:{shape:[x,c]},backend:n});f&&zn(n,h);const m=ch(s),g=ch(c);let y=null;const w=()=>y===null?[v,v]:[v,y],C=(R,M,V)=>{const ue=w(),ae=new AD(V),ke=[[c],[y===null?1:0],[Number.NEGATIVE_INFINITY],[R],[M]],Be=y;y=n.runWebGLProgram(ae,ue,"int32",ke),zn(n,Be)};for(let R=1;R<m;R*=2){const M=R*2;for(let V=R;V>=1;V/=2)C(M,V,[x,g])}for(let R=g;R>m;R/=2){const M=w(),V=new LD([x,R/2]),ae=[[c],[y===null?1:0],[m]],de=y;y=n.runWebGLProgram(V,M,"int32",ae),zn(n,de);const ke=m/2,Be=ke*2;for(let k=ke;k>=1;k/=2)C(Be,k,y.shape)}let I=y;y=Co({inputs:{x:y},backend:n,attrs:{begin:0,size:[x,s]}}),zn(n,I);let $=i0({inputs:{x:v,indices:y},backend:n,attrs:{axis:1,batchDims:1}});zn(n,v);const E=u.slice(0,-1);E.push(s),I=y,y=_({inputs:{x:y},attrs:{shape:E},backend:n}),zn(n,I);const F=$;return $=_({inputs:{x:$},attrs:{shape:E},backend:n}),zn(n,F),[$,y]}const BD={kernelName:WC,backendName:"webgl",kernelFunc:MD};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class UD{constructor(t,n,r,o,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=r==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${n}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${n}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VD(e){const{inputs:t,backend:n,attrs:r}=e,{image:o,transforms:s}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=r,[c,d,f,h]=o.shape,[p,x]=u!=null?u:[d,f],v=[c,p,x,h],m=new UD(d,f,i,a,l,v);return n.runWebGLProgram(m,[o,s],"float32")}const WD={kernelName:zC,backendName:"webgl",kernelFunc:VD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zD(e){const{inputs:t,attrs:n,backend:r}=e,{axis:o}=n,{x:s}=t;Is(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=r.readSync(s.dataId),{outputValues:a,outputShape:l,indices:u}=eR(i,o,s.shape,s.dtype);return[r.makeTensorInfo(l,s.dtype,a),r.makeTensorInfo([u.length],"int32",u)]}const GD={kernelName:HC,backendName:"webgl",kernelFunc:zD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HD(e){const{inputs:t,backend:n,attrs:r}=e,{value:o}=t;let{axis:s}=r;s<0&&(s+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[s],u=new Array(a-1);let c=0;for(let x=0;x<a;x++)x!==s&&(u[c++]=i.shape[x]);const d=[],f=new Array(a).fill(0),h=i.shape.slice();h[s]=1;const p=new Array(l);for(let x=0;x<p.length;x++){f[s]=x;const v=Co({inputs:{x:i},backend:n,attrs:{begin:f,size:h}}),m=_({inputs:{x:v},backend:n,attrs:{shape:u}});p[x]=m,d.push(v)}return d.forEach(x=>n.disposeIntermediateTensorInfo(x)),p}const XD={kernelName:XC,backendName:"webgl",kernelFunc:HD};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jD{constructor(t,n){this.variableNames=["x","segmentIds"];const r=t.windowSize,o=t.batchSize,s=t.inSize,i=t.numSegments,a=i*Math.ceil(s/r);this.outputShape=[o,a];const l="0.0",u="sumValue",c=Math.floor(r/4)*4,d=r%4,f=`
        sumValue += dot(values, segFilter);
    `;let h="";s%r>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let p="";s%r>0&&(p=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${r}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${f}
        }

        int inIdx = inOffset + ${c};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${f}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${f}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${f}
        }
        setOutput(${u});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KD(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,segmentIds:s}=t,{numSegments:i}=r,a=o.shape.length,l=[];let u=0;const c=Et([u],a);let d=o;c!=null&&(d=De({inputs:{x:o},backend:n,attrs:{perm:c}}),l.push(d),u=It(1,a)[0]);const f=yx(d.shape,u,i),h=b([d.shape[u]]),p=_({inputs:{x:d},backend:n,attrs:{shape:[-1,h]}});l.push(p);const x=Nc(o.dtype),v=(w,C,I,$,E)=>{const F=w.shape[0],R=w.shape[1],M=vx(R,E),V={windowSize:M,inSize:R,batchSize:F,numSegments:E},ue=new jD(V,C),ae=n.compileAndRun(ue,[w,I],$);if(l.push(ae),ae.shape[1]===E)return ae;const de=h0({backend:n,attrs:{start:0,stop:E,step:1,dtype:"float32"}}),ke=m0({inputs:{x:de},backend:n,attrs:{reps:[R/M]}});return l.push(de),l.push(ke),v(ae,C,ke,$,E)},m=v(p,"unsortedSegmentSum",s,x,i),g=_({inputs:{x:m},backend:n,attrs:{shape:f}});let y=g;if(c!=null){l.push(g);const w=Mc(c);y=De({inputs:{x:y},backend:n,attrs:{perm:w}})}return l.forEach(w=>n.disposeIntermediateTensorInfo(w)),y}const qD={kernelName:jC,backendName:"webgl",kernelFunc:KD};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QD=[HR,jR,QR,JR,tk,ok,ik,lk,fk,pk,xk,wk,$k,Rk,bk,Fk,Pk,Mk,Uk,Wk,Xk,Jk,tN,rN,uN,dN,mN,kR,vN,$N,RN,ON,DN,LN,BN,VN,GN,jN,QN,ZN,eb,nb,sb,ab,db,hb,gb,yb,Cb,Ib,Nb,Ob,Ab,Bb,Ub,Wb,Gb,Xb,Kb,Qb,e_,r_,i_,l_,d_,p_,v_,S_,RR,E_,CN,R_,b_,O_,bR,L_,V_,z_,j_,Q_,eF,rF,aF,dF,pF,gF,wF,SF,EF,kF,bF,FF,PF,AF,UF,GF,KF,nO,OR,iO,uO,fO,mO,sN,vO,wO,SO,IO,NO,FR,_O,OO,DO,LO,MO,iN,ZF,VO,HO,qO,DR,JO,nP,iP,uP,hP,mP,vP,CP,$P,TP,NP,FP,AP,BP,WP,HP,Yk,eO,KP,QP,ZP,eD,nD,oD,iD,lD,cD,hD,mD,xD,wD,SD,ED,TD,JF,WR,ND,FD,DD,BD,WD,zR,GD,XD,qD,yO];for(const e of QD)nS(e);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YD=S();YD.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var dh;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(dh||(dh={}));var fh;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(fh||(fh={}));function ZD(){return U("div",{className:"App",children:U(Hv,{})})}cl.createRoot(document.getElementById("root")).render(U(O0.StrictMode,{children:U(ZD,{})}));
