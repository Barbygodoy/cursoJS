const divContenido = document.getElementById("contenedor");
const usuario = document.getElementById("registro");
const buscador = document.getElementById("usuario");






const productos = [
    {
        id: 1,
        seccion:"Mujer",
        nombre: "sujetador Deportivo",
        talle: "S",
        color: "bordo",
        precio: 10000,
        img:"./imagenes/2023-10-25.png",

    },
    {
        id:2,
        seccion:"Mujer",
        nombre: "Leggins Deportivo",
        talle:36,
        color:"negro",
        precio:25000,
        img:"./imagenes/2023-10-28.png",

    },
    {
        id:3,
        seccion:"Mujer",
        nombre: "Zapatillas Deportivas",
        talle: 36,
        color: "negro",
        precio: 70000,
        img:"./imagenes/2023-10-30.png",
    }

]

productos.forEach((producto) => {
    let contenedorProducto = document.createElement("div")

    contenedorProducto.innerHTML  =`<div idm = "${producto.id}" class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-primary">Añadir a la Cesta</a>
    </div>
  </div>`

  divContenido.appendChild(contenedorProducto)
})

for( const producto of productos){
    console.log(producto)
}


// console.log(buscador.includes(productos))

// // //CREO MI FUNCION PARA CARGAR DATOS

// function usuario () {        
  
// //condicion para suscribirse
//     if((nombreYApellido != "") && (email != "")){
//         clientes.push(nombreYApellido) 
//         alert("Gracias " + nombreYApellido + " por suscribirte");
//         alert("te enaviaremos un email de bienvenida a " + email)
        
//     }
//     else{
//         alert("vuelve a intentarlo");
//     }


//  }

// Usuario()



    



                



