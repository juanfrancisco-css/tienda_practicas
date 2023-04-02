$(function(){

    $('#btn-submit').click(function (){
        console.log("boton submit pulsado")


        let email = document.getElementById("email").value
        let pass = document.getElementById("pass").value

        console.log("Datos introducidos : "+ email + pass);

        if(VAL_EMAIL(email.trim()) && VAL_PASS(pass.trim())){


            console.log("DATOS CORRECTOS");
            pass= calcMD5(pass.trim());
            console.log(" password " + pass);
            var ruta ='EMAIL='+email.trim()+'&PASS='+pass.trim();
            $.ajax({
                    type:"post",
                    url:"servidor.php",
                    data:ruta,
                  
            })
            
            .done(function(res){
            console.log('lo que me envia el servidor');
           
            if(res=="0"){

                console.log("No existe");
            }else{
                console.log(res);
                location.assign("tienda.html")
            }
           
          
         
                })
               
            .fail(function(){
                console.log("Error");
            })
           
            .always(function(){
                console.log("Complete");
              
            })
        }
        else{


            console.log("DATOS INCORRECTOS");
        }
    })

})