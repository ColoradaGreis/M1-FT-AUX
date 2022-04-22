
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let newArray = [];
    for( let i = 0; i<array.length; i ++) {
        if(array[i]< 10) {
            newArray.unshift(array[i])
        }
    }
    return newArray;   
 
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    var min = array1[0];
    var min2 = array2[0];
    
    for(let i = 0; i < array1.length; i++) {
          
        for(j = 0; j < array2.length; j++){
            if(array2[j] === array1[i]) {
                return array2[j];
            } else {
                if(array2[j]< min2) {
                    min2 = array2[j];
                }
            }
        } 
        if(array1[i]< min) {
            min = array1[i] 
        };
    }
    return Math.min(min,min2);


/*
intenta hacerlo con forEach
array.forEach(x)





*/
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   let nuevoArray = [];
   for( let i = 0; i < array.length; i++) {
       if(Array.isArray(array[i])) {
           let suma= 0 
           array[i].forEach(e => {
               suma += e;
           });
           nuevoArray.push(suma);
       } else {
           nuevoArray.push(array[i])
       }
   }
   return nuevoArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let  i = 0;
    let newArray = [];
    while(i < (divisor)) {
        if(numero % divisor !== 0) {
            return false;
        } else {
            i++
            newArray.push(numero/divisor)
        }
        
    }
    return newArray;






















/*

    let newArray = []
    let i = 0;
    while(i<(divisor)) {
        if(numero % divisor !== 0) {
            return false;
        } else {
        i++;
        newArray.push(numero/divisor);
        }
    }
    return newArray;
    */

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let newArray=[];
    var min = array[0];
    var max = array[0];
    for( let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        } else {
            if(array[i] < min) {
                min = array[i];
            }
        }

    } newArray.push(min);
    newArray.push(max);
    return newArray;

    
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};