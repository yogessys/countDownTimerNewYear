const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");





function countingYear(){
const currentYear=new Date().getFullYear();
const currentDate=new Date();
const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);

const diff=newYear-currentDate;


const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor(diff/1000/60/60)%24;
const m=Math.floor(diff/1000/60)%60;
const s=Math.floor(diff/1000)%60;

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(countingYear,1000);