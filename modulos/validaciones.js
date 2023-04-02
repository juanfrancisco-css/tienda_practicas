
function VAL_EMAIL(email){
   // let email = document.getElementById('email').value
    console.log(email);
    if(!(/^[A-Za-z0-9\._]{3,30}@[a-zA-Z]{4,10}\.[a-zA-Z]{2,5}$/.test(email))){
    console.log("email invalido");
       
    return false;
    }
    else{
        console.log("email valido");
     
        return true;
    }
}

function VAL_PASS(pass){
   // let pass = document.getElementById('pass').value
    console.log(pass);
    if(!(/^[A-Za-z0-9\._]{3,30}$/.test(pass))){
    console.log("pass invalido");
      
    return false;
    }
    else{
        console.log("pass valido");
      
        return true;
    }
}