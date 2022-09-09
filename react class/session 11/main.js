const getName=()=>{
    let num=1
    return new Promise((resolve, reject) => {
        if(num){
            resolve();
        }
        else{
            reject();
        }
    })
}

getName()
    .then(()=>console.log("success"))
    .catch((err)=>{
        console.log("err");
    })

// remove git from vscode
