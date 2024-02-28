let mensajeSalida = document.querySelector("#salidaMensaje");
const llaves = ['enter','imes','ai','ober','ufat'];

function encriptarPalabra(){
    let palabraLimpia = document.getElementById('palabraDeUsuario').value;
    let palabraEncriptada = '';
    let bandera = 0;

    for(let i = 0; i < palabraLimpia.length; i++){
        for(let j = 0; j < 5; j++){
            if(palabraLimpia[i] == llaves[j][0]){
                palabraEncriptada = palabraEncriptada + llaves[j];
            }else{
                bandera++;
            }
        }
        if(bandera == 5){
            palabraEncriptada = palabraEncriptada + palabraLimpia[i];
        }
        bandera = 0;
    }
    mensajeSalida.value = palabraEncriptada;
    //console.log(palabraEncriptada);
}

function desencriptarPalabra(){
    let palabraEncriptada = document.getElementById('palabraDeUsuario').value;
    let palabraDesencriptada = '';
    
    for(let i = 0; i < palabraEncriptada.length; i++){
        switch(palabraEncriptada[i]){
            case 'a':
                palabraDesencriptada = palabraDesencriptada + 'a'
                i+=1;
                break;
            case 'e':
                palabraDesencriptada = palabraDesencriptada + 'e'
                i+=4;
                break;
            case 'i':
                palabraDesencriptada = palabraDesencriptada + 'i'
                i+=3;
                break;
            case 'o':
                palabraDesencriptada = palabraDesencriptada + 'o'
                i+=3;
                break;
            case 'u':
                palabraDesencriptada = palabraDesencriptada + 'u'
                i+=3;
                break;
            default:
                palabraDesencriptada = palabraDesencriptada + palabraEncriptada[i];
        }
    }
    mensajeSalida.value = palabraDesencriptada;
    //console.log(palabraDesencriptada);
}
