const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const ContenedorImagenTexto = document.querySelector(".contenedor-imagen");
const contenidoEncriptado = document.querySelector(".contenido-encriptado");
const botonCopiar = document.querySelector("#btn-copiar");

contenidoEncriptado.style.display = "none";

botonEncriptar.addEventListener("click", () => {
    var textoTextarea = document.getElementById("inputTexto").value;
    const textoSinTildeMinusculas = /^[a-z\s]*$/;
    var inputTextoDesencriptar = document.getElementById("inputTextoDesencriptar");

    var textoEncriptado = textoTextarea.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober")
    var textoEncriptado = textoEncriptado.replace(/i/igm, "imes")
    var textoEncriptado = textoEncriptado.replace(/a/igm, "ai")
    var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat")
    
    if(textoSinTildeMinusculas.test(textoTextarea)){
        document.getElementById("inputTexto").style.border = "1px solid green";
        inputTextoDesencriptar.textContent = textoEncriptado;
        ContenedorImagenTexto.style.display = "none";
        contenidoEncriptado.style.display = "block";
    }
    else {
        document.getElementById("inputTexto").style.border = "1px solid red";
    }
});

botonDesencriptar.addEventListener("click", () => {
    const textoSinTildeMinusculas = /^[a-z\s]*$/;
    var textoTextarea = document.getElementById("inputTexto").value;
    var inputTextoDesencriptar = document.getElementById("inputTextoDesencriptar");

    var textoEncriptado = textoTextarea.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm, "o")
    var textoEncriptado = textoEncriptado.replace(/imes/igm, "i")
    var textoEncriptado = textoEncriptado.replace(/ai/igm, "a")
    var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u")
    
    if(textoSinTildeMinusculas.test(textoTextarea)){
        document.getElementById("inputTexto").style.border = "1px solid green";
        inputTextoDesencriptar.textContent = textoEncriptado;
        ContenedorImagenTexto.style.display = "none";
        contenidoEncriptado.style.display = "block";
    }
    else {
        document.getElementById("inputTexto").style.border = "1px solid red";
    }

})

botonCopiar.addEventListener("click", () => {
    var inputTextoDesencriptar = document.getElementById("inputTextoDesencriptar");
    const seleccionarTexto = window.getSelection();
    const rango = document.createRange();

    rango.selectNodeContents(inputTextoDesencriptar);
    seleccionarTexto.removeAllRanges();
    seleccionarTexto.addRange(rango)

    document.execCommand("copy");
    seleccionarTexto.removeAllRanges()
    alert("Tu mensaje esta copiado ")

    inputTextoDesencriptar.textContent = ""
})

