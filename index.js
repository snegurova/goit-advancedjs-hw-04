import{S as f,i as y}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=document.querySelector(".gallery"),h=new f(".gallery a",{overlayOpacity:.8,captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),L=r=>{const s=r.reduce((o,{webformatURL:n,largeImageURL:e,tags:t,likes:a,views:u,comments:d,downloads:m})=>o+`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${t}"
          />
          <div class="description">
            <span class="description-item"><span>Likes</span> ${a}</span>
            <span class="description-item"><span>Views</span> ${u}</span>
            <span class="description-item"><span>Comments</span> ${d}</span>
            <span class="description-item"><span>Downloads</span> ${m}</span>
          </div>
        </a>
      </li>`,"");g.innerHTML=s,h.refresh()},l=r=>{r.classList.toggle("loading")},b="https://pixabay.com/api/",P="46847728-6b7b012d3b9a78a4f273a5faa",S=(r,s)=>{const o=new URLSearchParams({key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${b}?${o}`;l(s),fetch(n).then(e=>e.json()).then(({hits:e})=>{if(l(s),!e.length){y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e)})},c=document.querySelector(".search-form"),p=document.querySelector(".error"),v=document.querySelector(".loader");let i="";const $=r=>{p.innerHTML="",i=r.target.value.trim()};c.addEventListener("input",$);const q=r=>{if(r.preventDefault(),!i){p.innerHTML="Please add search keyword";return}S(i,v),c.reset()};c.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
