$(function(){

    $('#senha').bind('keyup', function(){
        var txt = $(this).val();
        var forca = 0;
  
       // Mínimo de caracters
           if(txt.length > 6) {
            forca += 25;
           }
        // Procurar letras dfe a a z
        var reg = new RegExp(/[a-z]/i);        
        if(reg.test(txt)){
            forca += 25;            
        }
         // Procurar números
        var reg = new RegExp(/[0-9]/i);        
        if(reg.test(txt)){
            forca += 25;            
        }
           // caractere
        var reg = new RegExp(/[^a-z0-9]/i);        
        if(reg.test(txt)){
            forca += 25;            
        }
     
        if(forca >= 75){
            var aceita = 'aceita';      
    } else {
        var aceita = 'não aceita';
    }
      
        
        $('#forca').html('Força: '+forca+' ('+txt+') - '+aceita);

    });
});