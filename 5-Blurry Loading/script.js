const bg=document.querySelector(".bg");
const loadingText=document.querySelector(".loading-text");

var load=0;
var int= setInterval(blurry,30);
function blurry(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    loadingText.innerHTML=`${load}%`;
    loadingText.style.opacity=scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,20,0)}px)`;
}
const scale= (num, in_min, in_max, out_min, out_max )=>{ 
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}