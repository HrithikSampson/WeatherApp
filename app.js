const inp=document.querySelector('#inp');
const btn=document.querySelector('button');
const body=document.querySelector('body');
const temp=document.querySelector('#temp');
const pres=document.querySelector('#pressure');

const humidity=document.querySelector('#humidity');
console.log('Hello World');
btn.onclick=getWeather;
async function getWeather(){
    const weat=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=6d4b8f22f0c29bc4a1a92e7f311e930b`);
    const data=await weat.json();
    
    temp.innerHTML=
    '<button>temp:</button>'+(data.main.temp)+(' deg celsius');
    pres.innerHTML=
    '<button>pressure:</button>'+(data.main.pressure)+' hPa';
    humidity.innerHTML=
    '<button>humidity:</button>'+(data.main.humidity)+' %';
    

}