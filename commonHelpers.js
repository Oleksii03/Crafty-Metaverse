(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function c(){const i=document.querySelector(".js-menu-open"),n=document.querySelector(".js-menu");i.addEventListener("click",r);function r(){document.body.classList.toggle("to-freeze"),n.classList.toggle("mob-menu_visible"),o()}function o(){[...i.children].forEach(e=>{e.classList.toggle("menu-btn__line_active")})}}function l(){document.querySelector(".js-content-block").addEventListener("click",n);function n(r){const{target:o}=r;if(!o.classList.contains("js-list-btn-more"))return;const e=o.closest("BUTTON"),t=e.previousElementSibling;if(!t.classList.contains("list-more__box_active")){t.classList.add("list-more__box_active"),t.style.maxHeight=t.scrollHeight+"px",e.firstElementChild.textContent="Hide";return}t.style.maxHeight=0,e.firstElementChild.textContent="More",t.classList.remove("list-more__box_active")}}document.addEventListener("DOMContentLoaded",()=>{c(),l()});
//# sourceMappingURL=commonHelpers.js.map
