$(function(){


    $('#btn-submit-registro').click(function (){

        console.log('Boton pulsado altas');

        let nombre = document.getElementById("nombre").value
        let ap = document.getElementById("apellido").value
        let email = document.getElementById("email").value
        let fecha_nac = document.getElementById("fecha-nac").value
        let pass = document.getElementById("pass").value
        let pass_r = document.getElementById("r-pass").value

        console.log(nombre+ap+email+fecha_nac+pass+pass_r);

        if(VAL_NOM(nombre.trim()) && VAL_NOM(ap.trim()) && VAL_EMAIL(email.trim()) &&  VAL_PASS(pass.trim()) && VAL_PASS_R(pass.trim(),pass_r.trim())){


            console.log('VALIDO');
            pass= calcMD5(pass.trim());
            var ruta ='NOMBRE='+nombre.trim()+'&AP='+ap.trim()+'&EMAIL='+email.trim()+'&FECHA_NAC='+fecha_nac+'&PASS='+pass;
            $.ajax({
                    type:"post",
                    url:"servidor_altas.php",
                    data:ruta,
                  
            })
            
            .done(function(res){
            console.log('lo que me envia el servidor');
           
            if(res=="0"){

               let resp = confirm('Ups Ya estas registrado');
               if(resp){
                location.assign("index.html");
               }
              
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
           // return true;
        }
        else{
            console.log('NO VALIDO');
           // return false;
        }
       
    })

});