// ejecutar una accion luego de un cierto tiempo
let contador = 1;

function saludar(){
    document.write('<br>Hola mundo');
    if(contador == 5){
        // cuando cumpla la condicion quiero detener el intervalo
        window.clearInterval(intervalo)
    }
    contador++;
}

// window.setTimeout(saludar, 3000);
// setTimeout(saludar, 3500)
// setTimeout(()=> {
//     document.write('<br>Hola mundo');
// },3000);

//ejecutar una accion/funcion cada cierto tiempo en milisegundos

let intervalo = window.setInterval(saludar, 1000);

