/*let boton=document.getElementsByClassName("button")*/
/*Funcion*/
let boton=0
function myFunc(){
    boton+=1
    if (boton==1){
        alert("Esto es un ejemplo")
    }else{
        alert("Esto no es un ejemplo")
        boton-=2
    }
}