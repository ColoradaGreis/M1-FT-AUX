// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  if(array.length === 1) return array[0]
  var ultimo = array[array.length-1];
  var penUltimo = array[array.length-2];
  var prod = ultimo * penUltimo;
  array.pop();
  array.pop();
  array.push(prod);
  return producto(array)

};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  //escribe aqui tu codigo
 for(let key in obj) {
   if(typeof obj[key] === 'object') {
   return isThere(obj[key], value);
   } else if(obj[key] === value) {
     return true;
   }
 } return false


};
module.exports = { producto, isThere };
