//Funciones & Respuestas
let sound = new Audio("you_win.mp3")
sound.volume= 0.5
function resp1(){
    let respuesta1=prompt("Escribe los 3 dígitos:")
    if (respuesta1==1.61){
        alert("Acertaste! :)")
        info1.style.visibility="visible"
        h32.style.visibility="visible"
        acertijo2.style.visibility="visible"
        butt2.style.visibility="visible"
    }else {
        alert("Incorrecto.")
    }
}
function resp2(){
    let respuesta2 = prompt("Escribe el símbolo:")
    if (respuesta2=="Fr"){
        alert("Acertaste! :)")
        info2.style.visibility="visible"
        h33.style.visibility="visible"
        acertijo3.style.visibility="visible"
        butt3.style.visibility="visible"
    }else if (respuesta2=="fr") {
        alert("Incorrecto, recuerda el uso de mayúsculas.")
    }else {
        alert("Incorrecto, revisa bien la tabla periódica.")
    }

}
function resp3(){
    let respuesta3 = prompt("El Lenguaje más usado es:")
    if (respuesta3=="Python"){
        alert("Acertaste! :)")
        info3.style.visibility="visible"
        h34.style.visibility="visible"
        acertijo4.style.visibility="visible"
        butt4.style.visibility="visible"
    }else if (respuesta3=="python"){
        alert("Incorrecto, recuerda el uso de mayúsculas.")
    }else if (respuesta3=="Java"){
        alert("Incorrecto, Java ya no es el lenguaje más usado a nivel mundial.")
    }else {
        alert("Incorrecto.")
    }
}
function resp4(){
    let respuesta4=prompt("Escribe el nombre de la obra:")
    if (respuesta4=="La Gioconda"){
        alert("Acertaste! :)")
        info4.style.visibility="visible"
        h35.style.visibility="visible"
        acertijo5.style.visibility="visible"
        butt5.style.visibility="visible"
    }else if (respuesta4=="Mona Lisa"){
        alert("Acertaste! :)")
        info4.style.visibility="visible"
        h35.style.visibility="visible"
        acertijo5.style.visibility="visible"
        butt5.style.visibility="visible"
    }else if(respuesta4=="La Mona Lisa"){
        alert("Acertaste! :)")
        info4.style.visibility="visible"
        h35.style.visibility="visible"
        acertijo5.style.visibility="visible"
        butt5.style.visibility="visible"
    }
    else {
        alert("Incorrecto, pon el nombre de la obra.")
    }

}
function resp5(){
    let respuesta5=prompt("Escribe el número de caras: ")
    if (respuesta5==7){
        alert("Acertaste! :)")
        info5.style.visibility="visible"
        h36.style.visibility="visible"
        acertijo6.style.visibility="visible"
        butt6.style.visibility="visible"
    }else if (respuesta5==7+" caras"){
        alert("Acertaste! :)")
        info5.style.visibility="visible"
        h36.style.visibility="visible"
        acertijo6.style.visibility="visible"
        butt6.style.visibility="visible"
    }
    else {
        alert("Incorrecto.")
    }

}
function resp6(){
    let respuesta6=prompt("El nombre del modelo matemático es: ")
    if (respuesta6=="Métrica de Alcubierre"){
        alert("Acertaste! :)")
        info6.style.visibility="visible"
        respuestaFinal.style.visibility="visible"
    }else if(respuesta6=="métrica de alcubierre"){
        alert("Acertaste! :)")
        info6.style.visibility="visible"
        respuestaFinal.style.visibility="visible"
    }else if(respuesta6=="metrica de alcubierre"){
        alert("Acertaste! :)")
        info6.style.visibility="visible"
        respuestaFinal.style.visibility="visible"
    }else {
        alert("Incorrecto, pon bien el nombre.")
    }

}

function respuestaF() {
    let respuestaFin=prompt("Dame tu respuesta final")
    if (respuestaFin=="ltonsh"){
        alert("A veces descifrar da mejores respuestas...")
    }else if(respuestaFin=="enigma"){
        sound.play()
        alert("¡Bien hecho Jugador!\nHaz ganado el juego.")
    }else if(respuestaFin=="Enigma"){
        sound.play()
        alert("¡Bien hecho Jugador!\nHaz ganado el juego.")
    }else{
        alert("Incorrecto.")
    }


}
