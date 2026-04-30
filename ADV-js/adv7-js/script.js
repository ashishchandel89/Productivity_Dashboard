//--------------------- Debouncing --------------------

// function debounce(fn,delay){
//  let timer;
//  return function(){
//     clearTimeout(timer);
//     timer=setTimeout(fn,delay);
//  };
// }
// let id=document.querySelector('#search');
// id.addEventListener("input",debounce(function(){
//     console.log("RUN");
// },400));



//--------------------- Throattling---------------------

function throatt(func,delay){
    let last=0;
    return function(){
        const now=Date.now();
        if(now-last>delay){
            last=now;
            func();
        }
    }
};
window.addEventListener('mousemove',throatt(function(){
        console.log("Ashish Chandel");
},1500))