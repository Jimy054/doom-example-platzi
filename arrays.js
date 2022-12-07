const obj={
    nombre:'Funalito',
    edad:3,
    ciudad:"Guatemala"
}


//arrays cuand lo que haremos en un elemento es lo mismo que en todos los 
//Objetos 
//[] para acceder a un array
function imprimirPrimerElemento(array){
    return array[0];
}

function imprimirTodosElementos(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }
}


function getAllProperties(objeto){
    var array=Object.values(objeto)
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }
}




const typeOfSuscriptons={
    free:"free courses",
    basic:"some courses",
    expert:"all courses",
    experDuo:"with partner"
}


function getTypeOfSubscription(subscription){
    if(typeOfSuscriptons[subscription]){
        console.log(typeOfSuscriptons[subscription])
        return;
    }
}