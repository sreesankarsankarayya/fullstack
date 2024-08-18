(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,W=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Q=new WeakMap;let lt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Q.set(e,t))}return t}toString(){return this.cssText}};const _t=i=>new lt(typeof i=="string"?i:i+"",void 0,q),F=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new lt(e,i,q)},gt=(i,t)=>{if(W)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=N.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},X=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return _t(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:bt,getOwnPropertyDescriptor:At,getOwnPropertyNames:vt,getOwnPropertySymbols:Et,getPrototypeOf:wt}=Object,m=globalThis,tt=m.trustedTypes,xt=tt?tt.emptyScript:"",D=m.reactiveElementPolyfillSupport,x=(i,t)=>i,M={toAttribute(i,t){switch(t){case Boolean:i=i?xt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},K=(i,t)=>!yt(i,t),et={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&bt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:r}=At(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,o=[...vt(e),...Et(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(X(s))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:M).toAttribute(e,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:M;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??K)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,D==null||D({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,R=S.trustedTypes,st=R?R.createPolicy("lit-html",{createHTML:i=>i}):void 0,dt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+$,St=`<${ct}>`,b=document,P=()=>b.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",J=Array.isArray,Pt=i=>J(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",I=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,it=/>/g,_=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,nt=/"/g,pt=/^(?:script|style|textarea|title)$/i,Tt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),j=Tt(1),v=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),at=new WeakMap,g=b.createTreeWalker(b,129);function ut(i,t){if(!J(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Ot=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=w;for(let h=0;h<e;h++){const a=i[h];let d,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===w?p[1]==="!--"?n=ot:p[1]!==void 0?n=it:p[2]!==void 0?(pt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=s??w,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?_:p[3]==='"'?nt:rt):n===nt||n===rt?n=_:n===ot||n===it?n=w:(n=_,s=void 0);const f=n===_&&i[h+1].startsWith("/>")?" ":"";r+=n===w?a+St:l>=0?(o.push(d),a.slice(0,l)+dt+a.slice(l)+$+f):a+$+(l===-2?h:f)}return[ut(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class O{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[d,p]=Ot(t,e);if(this.el=O.createElement(d,o),g.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=g.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(dt)){const u=p[n++],f=s.getAttribute(l).split($),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:H[2],strings:f,ctor:H[1]==="."?Ut:H[1]==="?"?Ht:H[1]==="@"?Nt:z}),s.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(pt.test(s.tagName)){const l=s.textContent.split($),u=l.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],P()),g.nextNode(),a.push({type:2,index:++r});s.append(l[u],P())}}}else if(s.nodeType===8)if(s.data===ct)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf($,l+1))!==-1;)a.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(t,e){const o=b.createElement("template");return o.innerHTML=t,o}}function E(i,t,e=i,o){var n,h;if(t===v)return t;let s=o!==void 0?(n=e.o)==null?void 0:n[o]:e.l;const r=T(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,o)),o!==void 0?(e.o??(e.o=[]))[o]=s:e.l=s),s!==void 0&&(t=E(i,s._$AS(i,t.values),s,o)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??b).importNode(e,!0);g.currentNode=s;let r=g.nextNode(),n=0,h=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new U(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Mt(r,this,t)),this._$AV.push(d),a=o[++h]}n!==(a==null?void 0:a.index)&&(r=g.nextNode(),n++)}return g.currentNode=b,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,o,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),T(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=O.createElement(ut(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new Ct(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new O(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new U(this.O(P()),this.O(P()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=c}_$AI(t,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)t=E(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const h=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=E(this,h[o+a],e,a),d===v&&(d=this._$AH[a]),n||(n=!T(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ht extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Nt extends z{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??c)===v)return;const o=this._$AH,s=t===c&&o!==c||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==c&&(o===c||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const B=S.litHtmlPolyfillSupport;B==null||B(O,U),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.2.0");const Rt=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new U(t.insertBefore(P(),r),r,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return v}}var ht;y._$litElement$=!0,y.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:y});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:K},Lt=(i=jt,t,e)=>{const{kind:o,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,i),o==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,i)},init(h){return h!==void 0&&this.P(n,void 0,i),h}}}if(o==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+o)};function Y(i){return(t,e)=>typeof e=="object"?Lt(i,t,e):((o,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(i){return Y({...i,state:!0,attribute:!1})}var kt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,G=(i,t,e,o)=>{for(var s=o>1?void 0:o?zt(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&kt(t,e,s),s};let C=class extends y{constructor(){super(...arguments),this.title="",this.id=""}handleDelete(){const i=new CustomEvent("delete-todo",{detail:{id:this.id},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return j`
      <li>
        ${this.title}
        <button @click="${this.handleDelete}">&times;</button>
      </li>
    `}};C.styles=F`
    li {
      background-color: #2c3e50;
      border-bottom: 1px solid #1f2d3d;
      padding: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    button {
      background-color: #e74c3c;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: white;
      font-size: 1rem;
    }

    button:hover {
      background-color: #c0392b;
    }
  `;G([Y({type:String})],C.prototype,"title",2);G([Y({type:String})],C.prototype,"id",2);C=G([Z("todo-item")],C);var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,$t=(i,t,e,o)=>{for(var s=o>1?void 0:o?It(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Dt(t,e,s),s};let L=class extends y{constructor(){super(...arguments),this.newTodo=""}handleInputChange(i){const t=i.target;this.newTodo=t.value}handleAddTodo(){if(this.newTodo.trim()){const i=new CustomEvent("add-todo",{detail:{title:this.newTodo},bubbles:!0,composed:!0});this.dispatchEvent(i),this.newTodo=""}}render(){return j`
      <input
        type="text"
        .value="${this.newTodo}"
        @input="${this.handleInputChange}"
        placeholder="Add a new todo"
      />
      <button @click="${this.handleAddTodo}">Add</button>
    `}};L.styles=F`
    input {
      width: calc(100% - 2rem);
      padding: 1rem;
      border: none;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      background-color: #34495e;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    button {
      padding: 0.75rem 2rem;
      background: linear-gradient(135deg, #6dd5ed, #2193b0);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(33, 147, 176, 0.3);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
      background-color: #6dd5ed;
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(33, 147, 176, 0.4);
    }
  `;$t([ft()],L.prototype,"newTodo",2);L=$t([Z("todo-input")],L);var Bt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,mt=(i,t,e,o)=>{for(var s=o>1?void 0:o?Vt(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Bt(t,e,s),s};let k=class extends y{constructor(){super(...arguments),this.todos=[]}connectedCallback(){super.connectedCallback(),this.fetchTodos()}async fetchTodos(){try{const i=await fetch("http://localhost:5000/api/todos");i.ok?this.todos=await i.json():console.error("Failed to fetch todos:",i.statusText)}catch(i){console.error("Error fetching todos:",i)}}async addTodoHandler(i){const t=i.detail.title;try{const e=await fetch("http://localhost:5000/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t})});if(e.ok){const o=await e.json();this.todos=[...this.todos,o]}else console.error("Failed to add todo:",e.statusText)}catch(e){console.error("Error adding todo:",e)}}async deleteTodoHandler(i){const t=i.detail.id;try{const e=await fetch(`http://localhost:5000/api/todos/${t}`,{method:"DELETE"});e.ok?this.todos=this.todos.filter(o=>o.id!==t):console.error("Failed to delete todo:",e.statusText)}catch(e){console.error("Error deleting todo:",e)}}render(){return j`
      <h1>Todo List</h1>
      <todo-input @add-todo="${this.addTodoHandler}"></todo-input>
      <ul>
        ${this.todos.map(i=>j`
            <todo-item
              .id="${i.id}"
              .title="${i.title}"
              @delete-todo="${this.deleteTodoHandler}"
            ></todo-item>
          `)}
      </ul>
    `}};k.styles=F`
    :host {
      display: block;
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #2c3e50;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      color: #ecf0f1;
      font-family: 'Poppins', sans-serif;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 1.5rem 0 0 0;
      max-height: 250px;
      overflow-y: auto;
      border: 1px solid #34495e;
      border-radius: 8px;
      background-color: #1f2d3d;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  `;mt([ft()],k.prototype,"todos",2);k=mt([Z("todo-app")],k);
