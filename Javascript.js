//Bienvenida al juego

//Bienvenida al juego
function activar() {
    let ima1=document.getElementById("titulo")
    let ima=document.getElementById("titulo1")
    if (ima.style.visibility = "hidden") {
        ima.style.visibility="visible"
        ima1.style.visibility="visible"
        butt1.style.visibility="visible"
        butt2.style.visibility="visible"
        butt3.style.visibility="visible"
        firma.style.visibility="visible"
        p.style.visibility="visible"
        score.style.visibility="visible"
    }else {
        ima1.style.visibility="hidden"
        ima.style.visibility="hidden"
        butt1.style.visibility="hidden"
        butt2.style.visibility="hidden"
        butt3.style.visibility="hidden"
    }
}

//Frases random inicio
    let frasemin = 1
    let frasemax = 3
    let fraseRandom = Math.floor(Math.random()*(frasemax-frasemin+1)+frasemin)
    if (fraseRandom==1) {
        document.getElementById("p").innerHTML = "¿Sabias que estadísticamente la peor mano inicial del juego es Tijera?"
    }else if (fraseRandom==2) {
        document.getElementById("p").innerHTML = "Dato curioso: Hay una elevada probabilidad de que los hombres saquen Piedra en su primer mano."
    }else {
        document.getElementById("p").innerHTML = "Mucha suerte en el juego :)"
    }

//El jugador elige carta & Score
let score1 = 0
function juego() {
    if (player == 1) {
        alert("Elegiste: Piedra")
    } else if (player == 2) {
        alert("Elegiste: Papel")
    } else {
        alert ("Elegiste: Tijera")
    }
    
//El rival elige carta
    let min = 1
    let max = 3
    enemy = Math.floor(Math.random()*(max-min+1)+min)
    alert("El enemigo está eligiendo...")
    if (enemy == 1) {
    alert("El enemigo ha elegido Piedra")
    } else if (enemy == 2) { 
    alert("El enemigo ha elegido Papel")
    } else {
    alert("El enemigo ha elegido Tijera")
    }

//Showdown
if (player == enemy) {
    alert("¡Esta partida terminó en empate!")
    let empataste = "Haz empatado esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = empataste
}else if (player == 1 && enemy == 3) {
    alert("¡Haz ganado con Piedra!")
    let ganaste = "Haz ganado esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = ganaste
    score1++
    document.getElementById("score").innerHTML="Score: "+score1
}else if (player == 2 && enemy == 1) {
    alert("¡Haz ganado con Papel!")
    let ganaste = "Haz ganado esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = ganaste
    score1++
    document.getElementById("score").innerHTML="Score: "+score1
}else if (player == 3 && enemy == 2) {
    alert("¡Haz ganado con Tijera!")
    let ganaste = "Haz ganado esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = ganaste
    score1++
    document.getElementById("score").innerHTML="Score: "+score1
}else if (player == 1 && enemy == 2) {
    alert("¡Perdiste porque el oponente eligió Papel!")
    let perdiste = "Haz perdido esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = perdiste;
    score1--
    document.getElementById("score").innerHTML="Score: "+score1
}else if (player == 3 && enemy == 1) {
    alert("¡Perdiste porque el oponente eligió Piedra!")
    let perdiste = "Haz perdido esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = perdiste;
    score1--
    document.getElementById("score").innerHTML="Score: "+score1
}else if (player == 2 && enemy == 3) {
    alert("¡Perdiste porque el oponente eligió Tijera!")
    let perdiste = "Haz perdido esta ronda." + "<br>" + "Vuelve a elegir para jugar."
    document.getElementById("p").innerHTML = perdiste;
    score1--
    document.getElementById("score").innerHTML="Score: "+score1
}else {
    alert("Nadie te quiere :v")
}
}