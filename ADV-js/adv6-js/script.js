//=============================== { Send Email } =============================

let users=[
    "chandel078ashish@gmail.com",
    "sheeshthakur6@gmail.com",
    "thakur090ashish@gmail.com",
    "nikhil121thakur@gmail.com"
];

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*5);
        setTimeout(()=>{
            let prob=Math.floor(Math.random()*10);
            if(prob<=5){
                resolve('Email sent successfully');
            }
            else{
                reject('Email does not sent successfully');
            }
    },time*1000);
    })
}
async function sendEmails(userlist){
    let newarr=userlist.map(function(val){
        return sendEmail(val)
        .then(function(data){
           return data;
        })
        .catch(function(err){
            return err;
        })
    })
    let ans=await Promise.all(newarr);
    ans.forEach(function(val) {
        console.log(val);
    });
}
sendEmails(users);