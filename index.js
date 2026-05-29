import{a as m,S as p,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="42438077-634a4b32cfcaa96ebaa8c4719",h="https://pixabay.com/api/";async function y(o){return(await m.get(h,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img
                    class="gallery-image"
                    src="${s}"
                    alt="${e}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>Likes</h2>
                    <p>${t}</p>
                </div>
                <div class="column">
                    <h2>Views</h2>
                    <p>${i}</p>
                </div>
                <div class="column">
                    <h2>Comments</h2>
                    <p>${d}</p>
                </div>
                <div class="column">
                    <h2>Downloads</h2>
                    <p>${f}</p>
                </div>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){l.innerHTML=""}function P(){u.classList.add("is-active")}function w(){u.classList.remove("is-active")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(b(),P(),y(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",backgroundColor:"#EF4040",timeout:3e3});return}L(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight",messageColor:"#fff",backgroundColor:"#EF4040",timeout:3e3})}).finally(()=>{w(),c.reset()}))});
//# sourceMappingURL=index.js.map
