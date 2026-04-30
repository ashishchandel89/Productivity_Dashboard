// const prm=new Promise((resolve,reject)=>{
//     let num=Math.floor(Math.random()*10);
//     console.log(`Generating number....`);
//     setTimeout(()=>{
//         if(num%2==0){
//             resolve(num);
//         }
//         else{
//             reject(num);
//         }
//     },1000);
// });
// prm
// .then(num=>{
//     console.log(`The number ${num} is even`);
// })
// .catch(num=>{
//        console.log(`The number ${num} is odd`);
// });

fetch(`https://randomuser.me/api/`)
.then((raw_data)=>raw_data.json())
.then((raw_data)=>{
    console.log(raw_data.results[0].name.first);
})


async function abcd(){
    const raw_data=await fetch(`https://randomuser.me/api/`);
    let data=await raw_data.json();
    console.log(data.results[0].name.first);
}
setTimeout(() => {
abcd();
}, (1000));