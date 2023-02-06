function encriptacion(texto){
    //Vector de letras
    var letrasOriginales = texto.split("");
    var textoEncriptado = "";
    const numeroLetras = texto.length; 
    for(i = 0; i < numeroLetras;i++){
        switch(letrasOriginales[i]){
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += letrasOriginales[i];
        }
    }

    return textoEncriptado;
}

function desencriptacion(texto){
    //Vector de letras
    var letrasOriginales = texto.split("");
    var textoDesencriptado = "";
    const numeroLetras = texto.length; 
    for(i = 0; i < numeroLetras;i++){
        switch(letrasOriginales[i]){
            case "a":
                textoDesencriptado += "a";
                i = i + 1;
                break;
            case "e":
                textoDesencriptado += "e";
                i = i + 4;
                break;
            case "i":
                textoDesencriptado += "i";
                i = i + 3;
                break;
            case "o":
                textoDesencriptado += "o";
                i = i + 3;
                break;
            case "u":
                textoDesencriptado += "u";
                i = i + 3;
                break;
            default:
            textoDesencriptado += letrasOriginales[i];
        }
    }
    return textoDesencriptado;
}

function empezamos(){
    document.getElementById("inforExtras").style.display = "none";
    document.getElementById("bottonCopiar").style.display = "block";
}

function capturaDatos(){
    var datos = document.getElementById("textareaTextIngresar").value ;
    console.log(datos.length)
    if(datos.length == 0){
        alert("No escribio nada")
    }else{
        empezamos();
    }
    return datos;
}

function clickEncriptacion(){
    document.getElementById("textareaTextSalida").innerHTML = encriptacion(capturaDatos());
}

function clickDesencriptacion(){
    document.getElementById("textareaTextSalida").innerHTML = desencriptacion(capturaDatos());
}

function CopiadoC(){
    var temp = document.createElement("textarea");
    temp.setAttribute("id","elementoacopiar")
    document.getElementsByTagName("body")[0].appendChild(temp);
    temp.value = document.getElementById("textareaTextSalida").value;
    document.getElementById("elementoacopiar").select();
    document.execCommand("copy");
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("elementoacopiar"));
}

function Copiado(){
    document.getElementById("textareaTextSalida").select();
    document.execCommand("copy");
}