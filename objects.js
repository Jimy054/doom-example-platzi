var object1={
    marca:"Toyota",
    modelo:"Corolla",
    year:2020,
    details: function(){
        console.log(`Auto ${this.modelo} ${this.year}`);
    }
};

//function
object1.details();


function object1(marca,model,year){
    this.marca=marca;
    this.modelo=this.modelo;
    this.year=year;
}


var autoNuevo = new  object("","",2020);


var articulos =[
    {nombre:"Lapiz", costo:200},
    
    {nombre:"Cuarderno", costo:2000},
    
    {nombre:"Libro", costo:2000},
    
    {nombre:"Lapiz3", costo:2000},
    
    {nombre:"Lapiz4", costo:2000},
]

var articulosFiltrados= articulos.filter(function(articulo){
  return articulo.costo<=500
});
//Generate new array with the new values
var articulosMap = articulos.map(function(articulo){
    return articulo.nombre;
})



var encuentraArticulo = articulos.fill(function(numbe){
    return numbe.nombre==="Lapiz3"
});

//obtener proppiedades del objeto
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
/*
La solución es simple, basta con cambiar find() por filter(). Recordemos lo último visto:
Find: Retorna solo la primera coincidencia.
Filter: Retorna todas las coincidencias.*/

//True, si es verdadera o falsa
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo<=700
});