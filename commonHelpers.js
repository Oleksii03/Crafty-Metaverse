(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const i=document.querySelector(".js-menu-open"),l=document.querySelector(".js-header"),c=document.querySelector(".js-menu");i.addEventListener("click",d);function d(){document.body.classList.toggle("to-freeze"),c.classList.toggle("is-visible"),f()}c.style.paddingTop=l.offsetHeight+15+"px";function f(){[...i.children].forEach(n=>{n.classList.toggle("active")})}
//# sourceMappingURL=commonHelpers.js.map
