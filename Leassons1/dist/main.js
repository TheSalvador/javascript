!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",()=>{"use strict";let e=n(1),t=n(2),l=n(3),o=n(4),c=n(5);e(),t(),o(),l(),c()})},function(e,t){e.exports=function(){let e=document.querySelectorAll(".popup_calc_btn"),t=document.querySelector(".popup_calc"),n=document.querySelector(".popup_calc_profile"),l=document.querySelector(".popup_calc_end"),o=document.querySelector("#width"),c=document.querySelector("#height"),r=document.querySelector("#view_type"),s=document.querySelectorAll('input[type="checkbox"]'),i=document.querySelector("html"),a={},u=()=>{for(let e=0;e<s.length;e++)s[e].checked&&(a.checkbox=s[e].value)},d=()=>{for(let e=0;e<r.options.length;e++)r.options[e].selected&&(a.view=r.options[e].value)},p=()=>{for(let e in a)delete a[e]},y=document.querySelectorAll("form"),f=document.querySelectorAll("input");for(let e=0;e<y.length;e++)y[e].addEventListener("submit",t=>{t.preventDefault();let n=new XMLHttpRequest;n.open("POST","./server.php"),n.setRequestHeader("Content-Type","application/json; charset=utf-8"),new FormData(y[e]).forEach(function(e,t){a[t]=e});let l=JSON.stringify(a);n.send(l)});for(let e=0;e<f.length;e++)f[e].addEventListener("keypress",function(t){let n=t.keyCode,l=f[e].getAttribute("name"),o=f[e].id;"user_phone"!=l&&"width"!=o&&"height"!=o||(n<48||n>57)&&t.preventDefault()});(()=>{for(let l=0;l<e.length;l++)e[l].addEventListener("click",()=>{t.style.display="flex",i.style.overflow="hidden",document.querySelector(".popup_calc_button").addEventListener("click",function(){""==c.value||""==o.value||"0"==c.value||"0"==o.value?swal({type:"error",title:"Oops...",text:"Введите пожалуйста ширину и высоту окна"}):(t.style.display="none",n.style.display="flex",a.height=c.value,a.width=o.value)})});t.addEventListener("click",function(e){let n=e.target;i.style.overflow="hidden","popup_calc_close"!=n.className&&"closed"!=n.className||(t.style.display="none",i.style.overflow="scroll",p())}),n.addEventListener("click",e=>{let o=e.target;"popup_calc_profile_close"==o.className||"closed"==o.className?(t.style.display="none",n.style.display="none",i.style.overflow="scroll",p()):"button popup_calc_profile_button"==o.className&&0!=s[0].checked?(l.style.display="flex",n.style.display="none",u(),d()):"button popup_calc_profile_button"==o.className&&0!=s[1].checked?(l.style.display="flex",n.style.display="none",u(),d()):"button popup_calc_profile_button"==o.className&&swal({type:"error",title:"Oops...",text:"Выберите тип остекления и его профиль"})}),l.addEventListener("click",e=>{let t=e.target;"popup_calc_end_close"!=t.className&&"closed"!=t.className||(l.style.display="none",i.style.overflow="scroll",p())})})(),(()=>{let e=document.querySelectorAll(".balcon_icons img"),t=document.querySelector(".balcon_icons"),n=document.querySelectorAll(".big_img img");function l(t){for(let l=t;l<n.length;l++)n[l].style.display="none",e[l].classList.remove("calc-active")}function o(t){"none"==n[t].style.display&&(n[t].style.display="inline-block",e[t].classList.add("calc-active"))}!function(){for(let t=0;t<e.length;t++)e[t].classList.add("calc-active")}(),l(1),t.addEventListener("click",function(t){t.preventDefault();let n=t.target;for(let t=0;t<e.length;t++)if(o(t),n==e[t]){l(0),o(t);break}})})(),s[1].addEventListener("change",function(){s[0].checked=!s[1].checked}),s[0].addEventListener("change",function(){s[1].checked=!s[0].checked})}},function(e,t){e.exports=function(){let e=document.querySelector("body"),t=document.querySelector(".popup_engineer"),n=document.querySelector(".popup_calc"),l=document.querySelector(".popup_calc_profile"),o=document.querySelector(".popup_close"),c=document.querySelector(".popup_calc_end"),r=document.querySelector(".popup");function s(e){e.style.display="block",document.body.style.overflow="hidden"}o=addEventListener("click",function(e){e.target&&"STRONG"==e.target.tagName&&(t.style.display="none",r.style.display="none",n.style.display="none",l.style.display="none",c.style.display="none",document.body.style.overflow=""),e.target!=t&&e.target!=r||(t.style.display="none",r.style.display="none",document.body.style.overflow="")}),e.addEventListener("click",e=>{let o=e.target;o&&o.classList.contains("header_btn")&&s(t),o&&o.classList.contains("popup_calc_button")&&s(l),o&&o.classList.contains("phone_link")&&s(r),o&&o.classList.contains("glazing_price_btn")&&s(n),o&&o.classList.contains("popup_calc_profile_button")&&s(c)}),setTimeout(function(){t.style.display="block",document.body.style.overflow="hidden"},6e4);let i={loading:"Загрузка...",success:"Спасибо! Cкоро мы с вами свяжемся",failure:"Что-то пошло не так"},a=document.querySelector("form"),u=document.querySelectorAll(".form")[1],d=document.querySelectorAll(".form")[7],p=document.querySelectorAll(".form")[5],y=document.querySelectorAll(".form")[6],f=document.querySelectorAll(".form")[8],m=document.querySelectorAll('input[name="user_phone"]'),h=document.createElement("div");function v(e){e.addEventListener("submit",function(t){t.preventDefault(),e.appendChild(h);let n=new FormData(e),l={};n.forEach(function(e,t){l[t]=e});let o=JSON.stringify(l);new Promise(function(e,t){let n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.onreadystatechange=function(){n.readyState<4?e():4===n.readyState&&200==n.status?e():t()},n.send(o)}).then(()=>h.innerHTML=i.loading).then(()=>h.innerHTML=i.success).catch(()=>h.innerHTML=i.failure)})}h.classList.add("status"),v(a),v(u),v(d),v(p),v(y),v(f),[...m].forEach(e=>(function(e){e.oninput=function(){return this.value=this.value.replace(/[^0-9]/g,"")}})(e))}},function(e,t){e.exports=function(){let e=document.createElement("div"),t=document.querySelectorAll(".img_link"),n=document.createElement("img"),l=document.querySelector(".works");e.classList.add("popup"),l.appendChild(e),e.style.justifyContent="center",e.style.alignItems="center",e.appendChild(n);let o=document.querySelectorAll(".worksImg");for(let e=0;e<o.length;e++)o[e].addEventListener("click",()=>{for(let l=0;l<t.length;l++)e==l&&n.setAttribute("src",t[l].href)});l.addEventListener("click",function(t){t.preventDefault();let n=t.target;n&&n.classList.contains("worksImg")&&(e.style.display="flex",document.body.style.overflow="hidden"),n&&n.matches("div.popup")&&(e.style.display="none",document.body.style.overflow="")})}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".glazing_block"),t=document.querySelector("body"),n=document.querySelectorAll(".tab_active"),l=document.querySelectorAll(".tab_content"),o=e=>{for(let t=e;t<l.length;t++)l[t].classList.remove("show"),l[t].classList.add("hide"),n[t].classList.remove("active")};o(1),t.addEventListener("click",t=>{let c=t.target;(c&&c.classList.contains("glazing_block")||c.parentNode.classList.contains("glazing_block"))&&[...e].forEach(function(e,t){var r;c!=e&&c.parentNode!=e||(o(0),l[r=t].classList.contains("hide")&&(n[r].classList.add("active"),l[r].classList.remove("hide"),l[r].classList.add("show")))})});let c=document.querySelectorAll(".afterclick"),r=document.querySelector(".decoration_slider"),s=document.querySelectorAll(".no_click"),i=document.querySelectorAll(".tab_contents"),a=e=>{for(let t=e;t<i.length;t++)i[t].classList.remove("show"),i[t].classList.add("hide"),s[t].classList.remove("after_click")};a(1),r.addEventListener("click",e=>{let t=e.target;(t&&t.classList.contains("afterclick")||t.parentNode.classList.contains("afterclick"))&&[...c].forEach(function(e,n){var l;t!=e&&t.parentNode!=e||(a(0),i[l=n].classList.contains("hide")&&(i[l].classList.remove("hide"),i[l].classList.add("show"),s[l].classList.add("after_click")))})})}},function(e,t){e.exports=function(){((e,t)=>{let n=document.getElementById(e),l=n.querySelector(".days"),o=n.querySelector(".hours"),c=n.querySelector(".minutes"),r=n.querySelector(".seconds"),s=()=>{let e=(e=>{let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),l=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:o,minutes:l,seconds:n}})(t);l.innerHTML=e.days,o.innerHTML=("0"+e.hours).slice(-2),c.innerHTML=("0"+e.minutes).slice(-2),r.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&(clearInterval(i),document.querySelector(".days").innerHTML="00",document.querySelector(".hours").innerHTML="00",document.querySelector(".minutes").innerHTML="00",document.querySelector(".seconds").innerHTML="00")},i=setInterval(s,1e3);s()})("timer","2018.12.31")}}]);