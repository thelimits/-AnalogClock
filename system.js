const degre = 6 ;
const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#mns");
const seconds = document.querySelector("#sec");

setInterval(() => {
    let days = new Date();
    let hr = days.getHours() * 30;
    let mn = days.getMinutes() * degre;
    let sc = days.getSeconds() * degre;

    
    hours.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
    minutes.style.transform = `rotateZ(${mn}deg)`;
    seconds.style.transform = `rotateZ(${sc}deg)`;
    
    
    // atau / or
    
    // hours.style.transform = "rotateZ(" + ((hr) + (mn/12)) + "deg)";
    // minutes.style.transform = "rotateZ(" + (mn) + "deg)";
    // seconds.style.transform = "rotateZ(" + (sc) + "deg)";


    
});     
