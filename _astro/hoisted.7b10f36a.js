import"./hoisted.91b754da.js";import"./navigation.776bdd27.js";import"./jwt.1b92699e.js";const t=document.getElementById("settings-menu"),e=document.getElementById("settings-menu-dropdown");t?.addEventListener("click",()=>{e?.classList.toggle("hidden")});document.addEventListener("click",n=>{t?.contains(n.target)||e?.classList.add("hidden")});
