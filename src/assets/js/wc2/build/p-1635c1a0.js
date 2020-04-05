var n=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};var t={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},r="{",i="}",e={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",o="@media",s="@";function a(n,t,r){n.lastIndex=0;var i=t.substring(r).match(n);if(i){var e=r+i.index;return{start:e,end:e+i[0].length}}return null}var f=/\bvar\(/,c=/\B--[\w-]+\s*:/,v=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,h=/^[\t ]+\n/gm;function l(n,t,r){var i=function(n,t){var r=a(f,n,t);if(!r)return null;var i=function(n,t){for(var r=0,i=t;i<n.length;i++){var e=n[i];if("("===e)r++;else if(")"===e&&--r<=0)return i+1}return i}(n,r.start),e=n.substring(r.end,i-1).split(","),u=e[0],o=e.slice(1);return{start:r.start,end:i,propName:u.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(n,r);if(!i)return t.push(n.substring(r,n.length)),n.length;var e=i.propName,u=null!=i.fallback?d(i.fallback):void 0;return t.push(n.substring(r,i.start),(function(n){return function(n,t,r){return n[t]?n[t]:r?m(r,n):""}(n,e,u)})),i.end}function m(n,t){for(var r="",i=0;i<n.length;i++){var e=n[i];r+="string"==typeof e?e:e(t)}return r}function p(n,t){for(var r=!1,i=!1,e=t;e<n.length;e++){var u=n[e];if(r)i&&'"'===u&&(r=!1),i||"'"!==u||(r=!1);else if('"'===u)r=!0,i=!0;else if("'"===u)r=!0,i=!1;else{if(";"===u)return e+1;if("}"===u)return e}}return e}function d(n){var t=0;n=function(n){for(var t="",r=0;;){var i=a(c,n,r),e=i?i.start:n.length;if(t+=n.substring(r,e),!i)break;r=p(n,e)}return t}(n=n.replace(v,"")).replace(h,"");for(var r=[];t<n.length;)t=l(n,r,t);return r}function g(n){var t={};n.forEach((function(n){n.declarations.forEach((function(n){t[n.prop]=n.value}))}));for(var r={},i=Object.entries(t),e=function(){var n=!1;if(i.forEach((function(t){var i=t[0],e=m(t[1],r);e!==r[i]&&(r[i]=e,n=!0)})),!n)return"break"},u=0;u<10&&"break"!==e();u++);return r}function y(n,r){if(void 0===r&&(r=0),!n.rules)return[];var i=[];return n.rules.filter((function(n){return n.type===t.STYLE_RULE})).forEach((function(n){var t=function(n){for(var t,r=[];t=b.exec(n.trim());){var i=E(t[2]),e=i.value,u=i.important;r.push({prop:t[1].trim(),value:d(e),important:u})}return r}(n.cssText);t.length>0&&n.parsedSelector.split(",").forEach((function(n){n=n.trim(),i.push({selector:n,declarations:t,specificity:1,nu:r})})),r++})),i}var w="!important",b=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function E(n){var t=(n=n.replace(/\s+/gim," ").trim()).endsWith(w);return t&&(n=n.substr(0,n.length-w.length).trim()),{value:n,important:t}}function k(n){var t=[];return n.forEach((function(n){t.push.apply(t,n.selectors)})),t}function M(a){var f,c=function n(r,i){var a=i.substring(r.start,r.end-1);if(r.parsedCssText=r.cssText=a.trim(),r.parent){a=(a=(a=function(n){return n.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var n=arguments[1],t=6-n.length;t--;)n="0"+n;return"\\"+n}))}(a=i.substring(r.previous?r.previous.end:r.parent.start,r.start-1))).replace(e.multipleSpaces," ")).substring(a.lastIndexOf(";")+1);var f=r.parsedSelector=r.selector=a.trim();r.atRule=0===f.indexOf(s),r.atRule?0===f.indexOf(o)?r.type=t.MEDIA_RULE:f.match(e.keyframesRule)&&(r.type=t.KEYFRAMES_RULE,r.keyframesName=r.selector.split(e.multipleSpaces).pop()):r.type=0===f.indexOf(u)?t.MIXIN_RULE:t.STYLE_RULE}var c=r.rules;if(c)for(var v=0,h=c.length,l=void 0;v<h&&(l=c[v]);v++)n(l,i);return r}(function(t){var e=new n;e.start=0,e.end=t.length;for(var u=e,o=0,s=t.length;o<s;o++)if(t[o]===r){u.rules||(u.rules=[]);var a=u,f=a.rules[a.rules.length-1]||null;(u=new n).start=o+1,u.parent=a,u.previous=f,a.rules.push(u)}else t[o]===i&&(u.end=o+1,u=u.parent||e);return e}(f=(f=a).replace(e.comments,"").replace(e.port,"")),f),v=d(a);return{original:a,template:v,selectors:y(c),usesCssVars:v.length>1}}function R(n,t){if(n.some((function(n){return n.styleEl===t})))return!1;var r=M(t.textContent);return r.styleEl=t,n.push(r),!0}function A(n){var t=g(k(n));n.forEach((function(n){n.usesCssVars&&(n.styleEl.textContent=m(n.template,t))}))}function L(n,t,r){var i;return i="."+r,n.replace(new RegExp("\\."+t,"g"),i)}function O(n,t){return Array.from(n.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(n){return R(t,n)})).some(Boolean)}function $(n,t,r){var i=r.href;return fetch(i).then((function(n){return n.text()})).then((function(e){if(((o=e).indexOf("var(")>-1||j.test(o))&&r.parentNode){(function(n){return P.lastIndex=0,P.test(n)})(e)&&(e=function(n,t){var r=t.replace(/[^\/]*$/,"");return n.replace(P,(function(n,t){return n.replace(t,r+t)}))}(e,i));var u=n.createElement("style");u.setAttribute("data-styles",""),u.textContent=e,R(t,u),r.parentNode.insertBefore(u,r),r.remove()}var o})).catch((function(n){console.error(n)}))}var j=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,P=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,I=function(){function n(n,t){this.win=n,this.doc=t,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return n.prototype.initShim=function(){var n=this;return this.didInit?Promise.resolve():(this.didInit=!0,new Promise((function(t){n.win.requestAnimationFrame((function(){var r,i;r=n.doc,i=n.globalScopes,new MutationObserver((function(){O(r,i)&&A(i)})).observe(document.head,{childList:!0}),function(n,t){return O(n,t),function(n,t){for(var r=[],i=n.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),e=0;e<i.length;e++)r.push($(n,t,i[e]));return Promise.all(r)}(n,t)}(n.doc,n.globalScopes).then((function(){return t()}))}))})))},n.prototype.addLink=function(n){var t=this;return $(this.doc,this.globalScopes,n).then((function(){t.updateGlobal()}))},n.prototype.addGlobalStyle=function(n){R(this.globalScopes,n)&&this.updateGlobal()},n.prototype.createHostStyle=function(n,t,r,i){if(this.hostScopeMap.has(n))throw new Error("host style already created");var e,u,o,s,a=this.registerHostTemplate(r,t,i),f=this.doc.createElement("style");return f.setAttribute("data-styles",""),a.usesCssVars?i?(f["s-sc"]=t=a.scopeId+"-"+this.count,f.textContent="/*needs update*/",this.hostStyleMap.set(n,f),this.hostScopeMap.set(n,(u=t,o=(e=a).template.map((function(n){return"string"==typeof n?L(n,e.scopeId,u):n})),s=e.selectors.map((function(n){return Object.assign(Object.assign({},n),{selector:L(n.selector,e.scopeId,u)})})),Object.assign(Object.assign({},e),{template:o,selectors:s,scopeId:u}))),this.count++):(a.styleEl=f,a.usesCssVars||(f.textContent=m(a.template,{})),this.globalScopes.push(a),this.updateGlobal(),this.hostScopeMap.set(n,a)):f.textContent=r,f},n.prototype.removeHost=function(n){var t=this.hostStyleMap.get(n);t&&t.remove(),this.hostStyleMap.delete(n),this.hostScopeMap.delete(n)},n.prototype.updateHost=function(n){var t=this.hostScopeMap.get(n);if(t&&t.usesCssVars&&t.isScoped){var r=this.hostStyleMap.get(n);if(r){var i=g(function(n,t,r){var i,e=[],u=function(n,t){for(var r=[];t;){var i=n.get(t);i&&r.push(i),t=t.parentElement}return r}(t,n);return r.forEach((function(n){return e.push(n)})),u.forEach((function(n){return e.push(n)})),(i=k(e).filter((function(t){return function(n,t){return":root"===t||"html"===t||n.matches(t)}(n,t.selector)}))).sort((function(n,t){return n.specificity===t.specificity?n.nu-t.nu:n.specificity-t.specificity})),i}(n,this.hostScopeMap,this.globalScopes));r.textContent=m(t.template,i)}}},n.prototype.updateGlobal=function(){A(this.globalScopes)},n.prototype.registerHostTemplate=function(n,t,r){var i=this.scopesMap.get(t);return i||((i=M(n)).scopeId=t,i.isScoped=r,this.scopesMap.set(t,i)),i},n}(),U=window;U.__stencil_cssshim||U.CSS&&U.CSS.supports&&U.CSS.supports("color","var(--c)")||(U.__stencil_cssshim=new I(U,document));