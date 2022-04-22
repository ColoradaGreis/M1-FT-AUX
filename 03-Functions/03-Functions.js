function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
if( time[0] > 1 || time[3] > 5 || time[6] > 5 || time.length < 10 ) { return false}

else {
    var tiempo = time.split(':')
    if( tiempo[2].charAt(2) === 'P' && tiempo[0] === '12') {
        return time.slice(0,-2); 
    } else
    if( tiempo[2].charAt(2) === 'P') {
        var hour = parseInt(tiempo[0]) + 12;
        return hour.toString() + time.slice(2,-2);
    } else if(tiempo[2].charAt(2) === 'A' && tiempo[0] === '12' ) {
        return '00' + time.slice(2,-2);

    } else if(tiempo[2].charAt(2) === 'A') {
        return time.slice(0,-2);
    }
}


}

module.exports = {
    timeConversion
}