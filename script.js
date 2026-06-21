window.addEventListener('load',()=>{
setTimeout(()=>document.getElementById('loader').style.display='none',1000);
});
document.getElementById('themeToggle').onclick=()=>{
document.body.classList.toggle('light');
};
