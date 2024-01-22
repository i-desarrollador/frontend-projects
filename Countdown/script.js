const secondsel = document.getElementById('seconds');
const minutesel = document.getElementById('minutes');
const hoursel = document.getElementById('hours');
const daysel = document.getElementById('days');
const button = document.getElementById('btn');
const inputform = document.getElementById('inputforms');
const input_text = document.getElementById('inputs-text');
const input_date = document.getElementById('inputs-date');
const heading = document.getElementById('tagline');
var dateso = " 1 Jan 2025";
setInterval(date,1000);   
btn.addEventListener("click",function(){
  heading.innerHTML=input_text.value;
  dateso=input_date.value;
  inputform.style.opacity = 0;
})
function date() {
  const targetDate = new Date(dateso);
  const date = new Date();
  const totaltime = (targetDate - date) / 1000;
  const seconds = Math.floor(totaltime) % 60;
  const minutes = Math.floor(totaltime / 60) % 60;
  const hours = Math.floor(totaltime / 3600) % 24;
  const days = Math.floor(totaltime / 86400);
  secondsel.innerHTML=formattime(seconds);
  minutesel.innerHTML=formattime(minutes);
  hoursel.innerHTML=formattime(hours);
  daysel.innerHTML=days;
}
function formattime(time){
    return time<10?`0${time}`:time;
}
console.log(1)
