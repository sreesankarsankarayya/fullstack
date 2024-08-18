(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,D=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),F=new WeakMap;let it=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&F.set(e,t))}return t}toString(){return this.cssText}};const ct=i=>new it(typeof i=="string"?i:i+"",void 0,B),dt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new it(e,i,B)},pt=(i,t)=>{if(D)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=H.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},K=D?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ct(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:ft,getOwnPropertyDescriptor:$t,getOwnPropertyNames:mt,getOwnPropertySymbols:gt,getPrototypeOf:_t}=Object,m=globalThis,J=m.trustedTypes,yt=J?J.emptyScript:"",j=m.reactiveElementPolyfillSupport,w=(i,t)=>i,M={toAttribute(i,t){switch(t){case Boolean:i=i?yt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},V=(i,t)=>!ut(i,t),Z={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&ft(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:r}=$t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=_t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,o=[...mt(e),...gt(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:M).toAttribute(e,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:M;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??V)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,j==null||j({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,k=x.trustedTypes,Y=k?k.createPolicy("lit-html",{createHTML:i=>i}):void 0,rt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+$,At=`<${nt}>`,y=document,P=()=>y.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",W=Array.isArray,bt=i=>W(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,g=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,vt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),et=vt(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,_=y.createTreeWalker(y,129);function ht(i,t){if(!W(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Et=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=E;for(let h=0;h<e;h++){const a=i[h];let c,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===E?p[1]==="!--"?n=G:p[1]!==void 0?n=Q:p[2]!==void 0?(at.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??E,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?tt:X):n===tt||n===X?n=g:n===G||n===Q?n=E:(n=g,s=void 0);const f=n===g&&i[h+1].startsWith("/>")?" ":"";r+=n===E?a+At:l>=0?(o.push(c),a.slice(0,l)+rt+a.slice(l)+$+f):a+$+(l===-2?h:f)}return[ht(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class C{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[c,p]=Et(t,e);if(this.el=C.createElement(c,o),_.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=_.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(rt)){const u=p[n++],f=s.getAttribute(l).split($),N=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:N[2],strings:f,ctor:N[1]==="."?xt:N[1]==="?"?St:N[1]==="@"?Pt:R}),s.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(at.test(s.tagName)){const l=s.textContent.split($),u=l.length-1;if(u>0){s.textContent=k?k.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],P()),_.nextNode(),a.push({type:2,index:++r});s.append(l[u],P())}}}else if(s.nodeType===8)if(s.data===nt)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf($,l+1))!==-1;)a.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(t,e){const o=y.createElement("template");return o.innerHTML=t,o}}function v(i,t,e=i,o){var n,h;if(t===b)return t;let s=o!==void 0?(n=e.o)==null?void 0:n[o]:e.l;const r=T(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,o)),o!==void 0?(e.o??(e.o=[]))[o]=s:e.l=s),s!==void 0&&(t=v(i,s._$AS(i,t.values),s,o)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);_.currentNode=s;let r=_.nextNode(),n=0,h=0,a=o[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new U(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Tt(r,this,t)),this._$AV.push(c),a=o[++h]}n!==(a==null?void 0:a.index)&&(r=_.nextNode(),n++)}return _.currentNode=y,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,o,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=v(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=C.createElement(ht(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new wt(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new C(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new U(this.O(P()),this.O(P()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=d}_$AI(t,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)t=v(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=v(this,h[o+a],e,a),c===b&&(c=this._$AH[a]),n||(n=!T(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class St extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Pt extends R{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){if((t=v(this,t,e,0)??d)===b)return;const o=this._$AH,s=t===d&&o!==d||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==d&&(o===d||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const z=x.litHtmlPolyfillSupport;z==null||z(C,U),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.2.0");const Ct=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new U(t.insertBefore(P(),r),r,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class S extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return b}}var ot;S._$litElement$=!0,S.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:S});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V},Nt=(i=Ut,t,e)=>{const{kind:o,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,i),o==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,i)},init(h){return h!==void 0&&this.P(n,void 0,i),h}}}if(o==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+o)};function Ht(i){return(t,e)=>typeof e=="object"?Nt(i,t,e):((o,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(i){return Ht({...i,state:!0,attribute:!1})}var Mt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,q=(i,t,e,o)=>{for(var s=o>1?void 0:o?kt(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Mt(t,e,s),s};let O=class extends S{constructor(){super(...arguments),this.todos=[],this.newTodo=""}connectedCallback(){super.connectedCallback(),this.fetchTodos()}async fetchTodos(){try{const i=await fetch("http://localhost:5000/api/todos");i.ok?this.todos=await i.json():console.error("Failed to fetch todos:",i.statusText)}catch(i){console.error("Error fetching todos:",i)}}async addTodo(){if(this.newTodo.trim())try{const i=await fetch("http://localhost:5000/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.newTodo})});if(i.ok){const t=await i.json();this.todos=[...this.todos,t],this.newTodo=""}else console.error("Failed to add todo:",i.statusText)}catch(i){console.error("Error adding todo:",i)}}async deleteTodo(i){if(i)try{const t=await fetch(`http://localhost:5000/api/todos/${i}`,{method:"DELETE"});t.ok?this.todos=this.todos.filter(e=>e.id!==i):console.error("Failed to delete todo:",t.statusText)}catch(t){console.error("Error deleting todo:",t)}}handleInputChange(i){const t=i.target;this.newTodo=t.value}render(){return et`
      <h1>Todo List</h1>
      <input
        type="text"
        .value="${this.newTodo}"
        @input="${this.handleInputChange}"
        placeholder="Add a new todo"
      />
      <button @click="${this.addTodo}">Add</button>
      <ul>
        ${this.todos.map(i=>et`
            <li>
              ${i.title}
              <button @click="${()=>this.deleteTodo(i.id)}">&times;</button>
            </li>
          `)}
      </ul>
    `}};O.styles=dt`
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

    li button {
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

    li button:hover {
      background-color: #c0392b;
    }
  `;q([lt()],O.prototype,"todos",2);q([lt()],O.prototype,"newTodo",2);O=q([Ot("todo-app")],O);
