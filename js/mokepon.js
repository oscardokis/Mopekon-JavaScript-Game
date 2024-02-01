let ataqueJugador 
let ataqueenemigo
let vidasenemigo = 3
let vidasjugador = 3
function iniciarjuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarjuego)
    let sectionbotonreiniciar = document.getElementById('boton-reiniciar')
    sectionbotonreiniciar.style.display = 'none'
    
    
}
function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let sectionseleccionarmascota = document.getElementById('seleccionar-mascota')
    sectionseleccionarmascota.style.display = 'none'

    let inputhipodoge = document.getElementById('Hipodoge')
    let inputcapipepo = document.getElementById('Capipepo')
    let inputratigueya = document.getElementById('Ratigueya')
    let inputlangostelvis = document.getElementById('Langostelvis')
    let inputtucapalma = document.getElementById('Tucapalma')
    let inputpydos = document.getElementById('Pydos')

    let spanmascotajugador = document.getElementById('mascota-jugador')

    if(inputhipodoge.checked){
        spanmascotajugador.innerHTML = 'Hipodoge '
    }else if(inputcapipepo.checked){
        spanmascotajugador.innerHTML = 'Capipepo '

    }else if(inputratigueya.checked){
        spanmascotajugador.innerHTML = 'Ratigueya '

    }else if(inputlangostelvis.checked){
        spanmascotajugador.innerHTML = 'Langostelvis '

    }else if(inputtucapalma.checked){
        spanmascotajugador.innerHTML = 'Tucapalma '

    }else if(inputpydos.checked){
        spanmascotajugador.innerHTML = 'Pydos '

    }else{
        alert('Selecciona una mascota')
        sectionseleccionarmascota.style.display = 'block'
        return iniciarjuego()
              
    }

    seleccionarmascotaenemigo()   
    
}
function seleccionarmascotaenemigo(){
    let enemyaleatorio = aleatorio(1,6)
    let spanmascotaenemy = document. getElementById('mascota-enemigo')

    if(enemyaleatorio== 1){
        spanmascotaenemy.innerHTML = 'Hipodoge '
    }else if(enemyaleatorio == 2){
        spanmascotaenemy.innerHTML = 'Capipepo '

    }else if(enemyaleatorio == 3){
        spanmascotaenemy.innerHTML = 'Ratigueya '
        
    }else if(enemyaleatorio == 4){
        spanmascotaenemy.innerHTML = 'Langostelvis '
        
    }else if(enemyaleatorio == 5){
        spanmascotaenemy.innerHTML = 'Tucapalma '
        
    }else if(enemyaleatorio == 6){
        spanmascotaenemy.innerHTML = 'Pydos '
        
    }

}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    enemyatack()

}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    enemyatack()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    enemyatack()
}
function enemyatack(){
    let ataquealeatorio = aleatorio(1,3)
    if(ataquealeatorio == 1){
        ataqueenemigo = 'FUEGO'
        }else if(ataquealeatorio == 2){
        ataqueenemigo = 'AGUA'
        }else{
        ataqueenemigo = 'TIERRA'
        }

    combate()

}
function combate(){
    let spanvidasjugador = document.getElementById('vidas-jugador')
    let spanvidasenemigo = document.getElementById('vidas-enemigo')
    if(ataqueJugador == ataqueenemigo){
        crearMensaje(" un EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueenemigo == 'TIERRA'){
        crearMensaje(" una VICTORIA")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    }else if(ataqueJugador == 'AGUA' && ataqueenemigo == 'FUEGO'){
        crearMensaje(" una VICTORIA")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueenemigo == 'AGUA'){
        crearMensaje(" una VICTORIA")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    }else{
        crearMensaje(" una DERROTA")
        vidasjugador--
        spanvidasjugador.innerHTML = vidasjugador
    
    }

    revisarvidas()
}
function revisarvidas(){
    if(vidasenemigo == 0){
        crearMensajeFinal("FELICITACIONES GANASTEEE")
    }else if(vidasjugador == 0){
        crearMensajeFinal("Lo siento DERROTA")
    }
}
function crearMensajeFinal(resultadofinal){
    let sectionMensajes = document.getElementById('resultado')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadofinal
    sectionMensajes.appendChild(parrafo)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionbotonreiniciar = document.getElementById('boton-reiniciar')
    sectionbotonreiniciar.style.display = 'block'
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesdeljugador = document.getElementById('ataques-del-jugador')
    let ataquesdelenemigo = document.getElementById('ataques-del-enemigo')

    let nuevoataquedeljugador = document.createElement('p')
    let nuevoataquedelenemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoataquedeljugador.innerHTML = ataqueJugador
    nuevoataquedelenemigo.innerHTML = ataqueenemigo

    /* sectionMensajes.appendChild(notificacion) */
    ataquesdeljugador.appendChild(nuevoataquedeljugador)
    ataquesdelenemigo.appendChild(nuevoataquedelenemigo)


   /*  let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueenemigo +" esta partida fue"+ resultado   
        sectionMensajes.appendChild(parrafo) */
    

}  
function reiniciarjuego(){
    location.reload()
}
function aleatorio(min, max){
     return Math.floor(Math.random() * (max-min+1)+min)
}



window.addEventListener('load', iniciarjuego)