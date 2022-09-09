const username="Deepak"
const password="deepak"

const idpass=document.getElementsByName('password')
const iduser=document.getElementsByName('username')

function check(event)
{
    event.preventDefault();
    run()
}

function run()
{
    const credentialcheck=()=>{ 
        new Promise((resolve, reject) => {
            if(iduser[0].value==username){
                resolve();
            }
            else{
                reject
            }
        })
    }
    
    credentialcheck()
        .then(()=>console.log("success"))
        .catch((err)=>{
        console.log("err");
    })
}


