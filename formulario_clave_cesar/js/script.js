function cifrarClaveCesar(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
 // para las mayúsculas       
        if (letra >= "A" && letra <= "Z") {
            let codigo = letra.charCodeAt(0);
            let nuevoCodigo = ((codigo - 65 + clave) % 26) + 65;
            resultado += String.fromCharCode(nuevoCodigo);
        }
 // para las minúsculas
        else if (letra >= "a" && letra <= "z") {
            let codigo = letra.charCodeAt(0);
            let nuevoCodigo = ((codigo - 97 + clave) % 26) + 97;
            resultado += String.fromCharCode(nuevoCodigo);
        }
  // para lo que no son letras
        else {
            resultado += letra;
        }
    }
    console.log(`cifrarClaveCesar("${texto}", ${clave}) = "${resultado}"`);
    return resultado;
}


function descifrarClaveCesar(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
 // para las mayúsculas iba mal porque hay que sumarle 26 al numero que queramos movernos... no se porque      
        if (letra >= "A" && letra <= "Z") {
            let codigo = letra.charCodeAt(0);
            let nuevoCodigo = ((codigo - 65 - clave +26) % 26) + 65;
            resultado += String.fromCharCode(nuevoCodigo);
        }
 // para las minúsculas
        else if (letra >= "a" && letra <= "z") {
            let codigo = letra.charCodeAt(0);
            let nuevoCodigo = ((codigo - 97 - clave +26) % 26) + 97;
            resultado += String.fromCharCode(nuevoCodigo);
        }
  // para lo que no son letras
        else {
            resultado += letra;
        }
    }
    console.log(`descifrarClaveCesar("${texto}", ${clave}) = "${resultado}"`);
    return resultado;
}

function cifrar() {

    let texto = document.getElementById("texto").value;
    let clave = parseInt(document.getElementById("clave").value);

    let resultado = cifrarClaveCesar(texto, clave);

    document.getElementById("resultado").textContent = resultado;
}


function descifrar() {

    let texto = document.getElementById("texto").value;
    let clave = parseInt(document.getElementById("clave").value);

    let resultado = descifrarClaveCesar(texto, clave);

    document.getElementById("resultado").textContent = resultado;
}








