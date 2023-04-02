
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
function VAL_PASS_R(pass,r_pass){

    if(VAL_PASS(pass)){

        if(pass == r_pass ){

            console.log('Coincide');
            return true;

        }
        else{
            console.log('no coincide');
            return false;
        }
      

    }
    else{

        return false;
    }
}

function VAL_NOM(nom){
    // let pass = document.getElementById('pass').value
     console.log(nom);
     if(!(/^[A-Za-z ]{3,30}$/.test(nom))){
     console.log("nombre invalido");
       
     return false;
     }
     else{
         console.log("nombre valido");
       
         return true;
     }
 }
