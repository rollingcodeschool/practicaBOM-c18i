function obtenerFecha(){
    let fecha = new Date();

    // console.log(fecha)
    // console.log(fecha.getMonth()) // 0 - 11, 0 -> enero
    // console.log(fecha.getDay()) // 1 a 31
    // console.log(fecha.getDate()) // 0 al 6, 0-> domingo
    
    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    let fechaReloj = document.getElementById('fecha');
    fechaReloj.innerHTML = `${semanas[fecha.getDate()]} ${fecha.getDay()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`
    
    //creo las variables para trabajar la hora
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }

    if(minutos < 10){
        minutos = '0' + minutos;
    }
    if(segundos < 10){
        segundos = '0' + segundos;
    }
    
    let horaReloj = document.getElementById('hora');
    horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`
}

// invocar al reloj cada segundo
setInterval(obtenerFecha, 1000);




