!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).jsnview=e()}(this,(function(){"use strict";function n(a,c,i){const d=document.createElement("ul");for(let[s,a]of Object.entries(c))t(a)||Array.isArray(a)||l(d,a,s),Array.isArray(a)&&e(d,a,s),t(a)&&n(d,a,s);const r=document.createElement("li");r.appendChild(s("{",null,i,d.children.length)),r.appendChild(d),r.appendChild(s(null,"}",null)),a.appendChild(r)}function e(n,e,t){const a=document.createElement("ul");e.forEach((n=>{l(a,n,null)}));const c=document.createElement("li");c.appendChild(s("[",null,t,a.children.length)),c.appendChild(a),c.appendChild(s(null,"]",t)),n.appendChild(c)}function l(l,s,a){const c=document.createElement("li");if(Array.isArray(s)&&e(l,s,null),t(s)&&n(l,s,null),!t(s)&&!Array.isArray(s)){let n=typeof s;"number"===n&&(n=function(n){return Number(n)===n&&n%1!=0}(s)?"float":"number"),c.innerHTML=a?"string"===n?`"${a}": <span class="txt-${n}">"${s}"</span>,`:`"${a}": <span class="txt-${n}">${s}</span>,`:"string"===n?`<span class="txt-${n}">"${s}"</span>,`:`<span class="txt-${n}">${s}</span>,`,l.appendChild(c)}}function t(n){return null!=n&&"Object"===n.constructor.name}function s(n,e,l,t=0){const s=document.createElement("span");return n?(s.classList.add("jsv-fold"),s.innerHTML=l?`"${l}": ${n} <span class="txt-mute mr-10">${t} items</span>`:` ${n} <span class="txt-mute mr-10">${t} items</span>`):(s.classList.add("jsv-fold-end"),s.innerHTML=e),s}return function(e){let l=document.createElement("ul");if(l.classList.add("jsv","p-0","m-0"),Array.isArray(e)){const t=document.createElement("ul");e.forEach((e=>{n(t,e,null)})),l.prepend(s("[",null,null,t.children.length)),l.appendChild(t),l.appendChild(s(null,"]",null))}else n(l,e,null);return l.addEventListener("click",(n=>{let e=n.target,l=e.parentNode;if("LI"===l.nodeName&&e.classList.contains("jsv-fold")){let n=e.classList.contains("jsv-fold-close");[...l.children].forEach((e=>{e.classList.contains("jsv-fold")||e.classList.contains("jsv-fold-end")||(e.style.display=n?"block":"none")})),e.classList.toggle("jsv-fold-close"),l.style.display=n?"block":"flex"}}),!1),l}}));