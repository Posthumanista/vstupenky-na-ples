(()=>{var e={52:()=>{class e{init(){document.body.querySelectorAll("[x-cloak]").forEach((e=>{e.setAttribute("data-alpine-was-cloaked",e.getAttribute("x-cloak")??"")})),this.configureEventHandlers()}setMutationObserverState(e){if(!window.Alpine.version||!function(e,t){const i=e.split("."),o=t.split(".");for(let e=0;e<i.length;e++)if(!o[e]||o[e]<i[e])return!1;return!0}("2.4.0",window.Alpine.version))throw new Error("Invalid Alpine version. Please use Alpine 2.4.0 or above");window.Alpine.pauseMutationObserver=e}configureEventHandlers(){const e=()=>{window.Alpine.discoverUninitializedComponents((e=>{window.Alpine.initializeComponent(e)})),requestAnimationFrame((()=>{this.setMutationObserverState(!1)}))},t=e=>{(e.data?e.data.newBody:e.detail.newBody).querySelectorAll("[data-alpine-generated-me],[x-cloak]").forEach((e=>{e.hasAttribute("x-cloak")&&e.setAttribute("data-alpine-was-cloaked",e.getAttribute("x-cloak")??""),e.hasAttribute("data-alpine-generated-me")&&(e.removeAttribute("data-alpine-generated-me"),void 0===e.__x_for_key&&void 0===e.__x_inserted_me&&e.remove())}))},i=()=>{this.setMutationObserverState(!0),document.body.querySelectorAll("[x-for],[x-if],[data-alpine-was-cloaked]").forEach((e=>{if(e.hasAttribute("data-alpine-was-cloaked")&&(e.setAttribute("x-cloak",e.getAttribute("data-alpine-was-cloaked")??""),e.removeAttribute("data-alpine-was-cloaked")),e.hasAttribute("x-for")){let t=e.nextElementSibling;for(;t&&void 0!==t.__x_for_key;){const e=t;t=t.nextElementSibling,e.setAttribute("data-alpine-generated-me",!0)}}else if(e.hasAttribute("x-if")){const t=e.nextElementSibling;t&&void 0!==t.__x_inserted_me&&t.setAttribute("data-alpine-generated-me",!0)}}))};document.addEventListener("turbo:load",e),document.addEventListener("turbolinks:load",e),document.addEventListener("turbo:before-render",t),document.addEventListener("turbolinks:before-render",t),document.addEventListener("turbo:before-cache",i),document.addEventListener("turbolinks:before-cache",i)}}var t;window.Alpine&&console.error("Alpine-turbo-drive-adapter must be included before AlpineJs"),Object.getOwnPropertyDescriptor(NodeList.prototype,"forEach")||Object.defineProperty(NodeList.prototype,"forEach",Object.getOwnPropertyDescriptor(Array.prototype,"forEach")),t=()=>{(new e).init()},"loading"===document.readyState?document.addEventListener("readystatechange",(()=>{"interactive"===document.readyState&&t()})):t()},376:(e,t,i)=>{var o,n;void 0===(n="function"==typeof(o=function(){"use strict";if(void 0===window.livewire)throw"Livewire Turbolinks Plugin: window.Livewire is undefined. Make sure @livewireScripts is placed above this script include";var e=!0;function t(){e?e=!1:window.Livewire.restart()}function i(){document.querySelectorAll("[wire\\:id]").forEach((function(e){const t=e.__livewire,i={fingerprint:t.fingerprint,serverMemo:t.serverMemo,effects:t.effects};e.setAttribute("wire:initial-data",JSON.stringify(i))}))}document.addEventListener("turbo:load",t),document.addEventListener("turbo:before-cache",i),document.addEventListener("turbolinks:load",t),document.addEventListener("turbolinks:before-cache",i),Livewire.hook("beforePushState",(e=>{e.turbolinks||(e.turbolinks={})})),Livewire.hook("beforeReplaceState",(e=>{e.turbolinks||(e.turbolinks={})}))})?o.call(t,i,t,e):o)||(e.exports=n)}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}i(376),i(52),Livewire.hook("message.received",(function(t,i){var o,n,r,a,d,l,s=null===(r=null===(n=null===(o=null==t?void 0:t.response)||void 0===o?void 0:o.serverMemo)||void 0===n?void 0:n.data)||void 0===r?void 0:r.modelEffects;("object"===e(s)&&Object.values(s).length||(null!==(l=null===(d=null===(a=null==t?void 0:t.response)||void 0===a?void 0:a.effects)||void 0===d?void 0:d.dispatches)&&void 0!==l?l:[]).filter((function(e){return"lean-notify"===e.event})).length)&&Turbolinks.clearCache()})),Livewire.hook("component.initialized",(function(e){e.redirect=function(e){Turbolinks.clearCache(),Lean.redirect(e,!0)}}))})()})();