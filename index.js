import{a as w,S as P,i as f}from"./assets/vendor-Qob_5Ba8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const I="https://pixabay.com/api/",M="46847728-6b7b012d3b9a78a4f273a5faa",m=15,h=async(t,r)=>{const{data:{hits:o,totalHits:n}}=await w.get(I,{params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m}});return{images:o,totalHits:n}},H=document.querySelector(".gallery"),O=new P(".gallery a",{overlayOpacity:.8,captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"});let l="";const L=(t,r=!1)=>{r&&(l=""),l=t.reduce((o,{webformatURL:n,largeImageURL:e,tags:s,likes:i,views:S,comments:E,downloads:q})=>o+`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${s}"
          />
          <div class="description">
            <span class="description-item"><span>Likes</span> ${i}</span>
            <span class="description-item"><span>Views</span> ${S}</span>
            <span class="description-item"><span>Comments</span> ${E}</span>
            <span class="description-item"><span>Downloads</span> ${q}</span>
          </div>
        </a>
      </li>`,l),H.innerHTML=l,O.refresh()},c=(t,r)=>{if(r===1){t[0].classList.toggle("loading");return}t[1].classList.toggle("loading")},g=(t,r=!0)=>{if(r){t.classList.add("is-visible");return}t.classList.remove("is-visible")},y=document.querySelector(".search-form"),v=document.querySelector(".error"),u=document.querySelectorAll(".loader"),d=document.querySelector(".load-more-button");let p="",a=1,b=0;const $=t=>{v.innerHTML="",p=t.target.value.trim()};y.addEventListener("input",$);const T=async t=>{if(t.preventDefault(),a=1,g(d,!1),!p){v.innerHTML="Please add search keyword";return}c(u,a);const{images:r,totalHits:o}=await h(p,a);if(console.log(o),c(u,a),L(r,!0),y.reset(),!r.length){f.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=document.querySelector(".gallery-item");document.querySelector(".gallery-image").addEventListener("load",()=>{b=n.getBoundingClientRect().height}),a*m<o&&g(d)};y.addEventListener("submit",T);const D=async t=>{t.preventDefault(),a+=1,c(u,a);const{images:r,totalHits:o}=await h(p,a);console.log(o),c(u,a),L(r),window.scrollBy({top:b*2,behavior:"smooth"}),a*m>o&&(g(d,!1),f.info({message:"We're sorry, but you've reached the end of search results"}))};d.addEventListener("click",D);
//# sourceMappingURL=index.js.map