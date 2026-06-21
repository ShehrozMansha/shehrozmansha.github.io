/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 500);

}, 2500);

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.getElementById("cursor");

const blur =
document.getElementById("cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

blur.style.left =
e.clientX - 125 + "px";

blur.style.top =
e.clientY - 125 + "px";

});

/* =========================
   THEME SWITCHER
========================= */

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

});

/* =========================
   ANIMATED COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.dataset.target;

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

/* =========================
   SKILLS RADAR CHART
========================= */

const chartCanvas =
document.getElementById("skillsChart");

if(chartCanvas){

new Chart(chartCanvas,{

type:"radar",

data:{

labels:[
"HTML",
"CSS",
"JavaScript",
"React",
"AI",
"Cloud"
],

datasets:[{

label:"Skills",

data:[
95,
92,
90,
85,
80,
88
],

fill:true

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{
color:"#fff"
}
}
},

scales:{

r:{

angleLines:{
color:"rgba(255,255,255,.2)"
},

grid:{
color:"rgba(255,255,255,.15)"
},

pointLabels:{
color:"#fff"
}

}

}

}

});

}

/* =========================
   GITHUB PROJECTS
========================= */

const projectsGrid =
document.getElementById("projectsGrid");

/* CHANGE USERNAME */

const githubUser =
"ShehrozMansha";

fetch(
`https://api.github.com/users/${githubUser}/repos`
)

.then(res=>res.json())

.then(data=>{

if(!projectsGrid) return;

data.slice(0,6).forEach(repo=>{

projectsGrid.innerHTML += `

<div class="project-card">

<h3>${repo.name}</h3>

<p>
${repo.description || "No description available"}
</p>

<a href="${repo.html_url}"
target="_blank">

View Project

</a>

</div>

`;

});

})

.catch(()=>{

projectsGrid.innerHTML =
"<p>Unable to load repositories.</p>";

});

/* =========================
   AI ASSISTANT
========================= */

const assistantIcon =
document.querySelector(".assistant-icon");

const assistantChat =
document.querySelector(".assistant-chat");

assistantIcon.addEventListener("click",()=>{

assistantChat.style.display =
assistantChat.style.display === "block"
? "none"
: "block";

});

const chatInput =
document.getElementById("chatInput");

const sendBtn =
document.getElementById("sendBtn");

const chatMessages =
document.getElementById("chatMessages");

const botReplies = {

hello:
"Hello! Welcome to my portfolio.",

skills:
"My main skills are Web Development, AI, React and Cloud.",

contact:
"Use the contact form below.",

projects:
"Scroll to the projects section.",

hire:
"I'm available for freelance and remote work."

};

function sendMessage(){

const text =
chatInput.value.toLowerCase();

if(!text) return;

chatMessages.innerHTML +=

`<div class="message user">
${text}
</div>`;

let reply =
"Sorry, I don't understand.";

for(let key in botReplies){

if(text.includes(key)){

reply = botReplies[key];

}

}

chatMessages.innerHTML +=

`<div class="message bot">
${reply}
</div>`;

chatInput.value = "";

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

sendBtn.addEventListener(
"click",
sendMessage
);

chatInput.addEventListener(
"keypress",
e=>{

if(e.key==="Enter"){

sendMessage();

}

});
/* =========================
   THREE JS FUTURE SCENE
========================= */

const canvas =
document.getElementById("bg");

if(canvas){

const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
canvas,
alpha:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

/* Torus */

const geometry =
new THREE.TorusKnotGeometry(
10,
3,
100,
16
);

const material =
new THREE.MeshStandardMaterial({

color:0x00f0ff,
wireframe:true

});

const torus =
new THREE.Mesh(
geometry,
material
);

scene.add(torus);

/* Lights */

const pointLight =
new THREE.PointLight(
0xffffff,
1
);

pointLight.position.set(
20,
20,
20
);

scene.add(pointLight);

const ambientLight =
new THREE.AmbientLight(
0xffffff,
0.3
);

scene.add(ambientLight);

camera.position.z = 30;

/* Stars */

function addStar(){

const geometry =
new THREE.SphereGeometry(
0.15,
24,
24
);

const material =
new THREE.MeshBasicMaterial({
color:0xffffff
});

const star =
new THREE.Mesh(
geometry,
material
);

const [x,y,z] =
Array(3)
.fill()
.map(()=>
THREE.MathUtils.randFloatSpread(200)
);

star.position.set(x,y,z);

scene.add(star);

}

Array(500)
.fill()
.forEach(addStar);

/* Animation */

function animate(){

requestAnimationFrame(
animate
);

torus.rotation.x += 0.003;
torus.rotation.y += 0.005;

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});

}

/* =========================
   PARTICLES
========================= */

if(window.tsParticles){

tsParticles.load(
"particles-js",
{

particles:{

number:{
value:120
},

links:{
enable:true,
distance:150
},

move:{
enable:true,
speed:1
},

size:{
value:2
},

color:{
value:"#00f0ff"
}

}

}

);

}

/* =========================
   SCROLL REVEAL
========================= */

if(window.ScrollReveal){

ScrollReveal().reveal(

".service-card,.project-card,.stat-card,.glass-card",

{

distance:"80px",
duration:1000,
origin:"bottom",
interval:150

}

);

}

/* =========================
   COMMAND PALETTE
========================= */

const palette =
document.getElementById(
"commandPalette"
);

const commandInput =
document.getElementById(
"commandInput"
);

document.addEventListener(
"keydown",
e=>{

if(e.ctrlKey && e.key==="k"){

e.preventDefault();

palette.style.display="flex";

commandInput.focus();

}

if(e.key==="Escape"){

palette.style.display="none";

}

});

commandInput.addEventListener(
"keydown",
e=>{

if(e.key==="Enter"){

const cmd =
commandInput.value.toLowerCase();

if(cmd==="about")
location.hash="#about";

if(cmd==="projects")
location.hash="#projects";

if(cmd==="skills")
location.hash="#skills";

if(cmd==="contact")
location.hash="#contact";

if(cmd==="theme")
document.body.classList.toggle("light");

if(cmd==="top")
window.scrollTo({
top:0,
behavior:"smooth"
});

palette.style.display="none";

}

});

/* =========================
   VOICE ASSISTANT
========================= */

if(
"webkitSpeechRecognition"
in window
){

const recognition =
new webkitSpeechRecognition();

recognition.continuous = true;

recognition.onresult =
(event)=>{

const text =
event.results[
event.results.length-1
][0].transcript.toLowerCase();

if(
text.includes("projects")
){

location.hash="#projects";

}

if(
text.includes("contact")
){

location.hash="#contact";

}

if(
text.includes("about")
){

location.hash="#about";

}

if(
text.includes("light mode")
){

document.body.classList.add(
"light"
);

}

if(
text.includes("dark mode")
){

document.body.classList.remove(
"light"
);

}

};

window.startVoiceAssistant =
()=>{

recognition.start();

};

}

/* =========================
   TYPING EFFECT
========================= */

const heroTitle =
document.querySelector(
"#hero p"
);

if(heroTitle){

const words = [

"Creative Developer",
"AI Engineer",
"Full Stack Builder",
"Future Architect",
"UI Visionary"

];

let wordIndex = 0;
let charIndex = 0;

function type(){

if(
charIndex <
words[wordIndex].length
){

heroTitle.textContent +=
words[wordIndex][charIndex];

charIndex++;

setTimeout(type,100);

}
else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex > 0){

heroTitle.textContent =
words[wordIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(
erase,
50
);

}
else{

wordIndex++;

if(
wordIndex >= words.length
){

wordIndex = 0;

}

setTimeout(
type,
300
);

}

}

heroTitle.textContent = "";

type();

}

/* =========================
   MAGNETIC BUTTONS
========================= */

const buttons =
document.querySelectorAll(
".primary-btn,.secondary-btn"
);

buttons.forEach(btn=>{

btn.addEventListener(
"mousemove",
e=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX -
rect.left -
rect.width/2;

const y =
e.clientY -
rect.top -
rect.height/2;

btn.style.transform =
`translate(${x*0.15}px,${y*0.15}px)`;

});

btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform =
"translate(0,0)";

});

});

/* =========================
   MATRIX MODE
========================= */

document.addEventListener(
"keydown",
e=>{

if(
e.ctrlKey &&
e.shiftKey &&
e.key==="M"
){

document.body.style.filter =
"hue-rotate(90deg)";

alert(
"CYBER MATRIX MODE ACTIVATED"
);

}

});

/* =========================
   FUTURE EASTER EGG
========================= */

let secret = "";

document.addEventListener(
"keydown",
e=>{

secret += e.key;

secret =
secret.slice(-6);

if(secret==="future"){

document.body.animate(

[
{
filter:"brightness(1)"
},
{
filter:"brightness(3)"
},
{
filter:"brightness(1)"
}
],

{
duration:1000
}

);

alert(
"Welcome To The Future 🚀"
);

}

});
