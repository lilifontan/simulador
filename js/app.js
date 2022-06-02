// DECLARO CONSTRUCTOR PARA PRODUCTO
class Producto {
    constructor(nombre, categoria, precio, material, codigo) {
        this.nombre  = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio  = parseFloat(precio);
        this.material = material;
        this.codigo = codigo;
        this.vendido = false;
    }
    cotizar() {
        alert ("EL VALOR DEL PRODUCTO ES " + this.precio);
    }
    vender() {
        this.vendido = true;
    }
}

// DECLARO OBJETOS DE LA CLASE PRODUCTO
const ethereadel = new Producto("Ethereadel", "rings", 5000, "plata 925", "eth");
const amaroked = new Producto("Amaroked", "earrings", 10000, "plata 925", "amk");
const antogesi = new Producto("Antongesi", "necklaces", 15000, "plata 925", "atg");
const scapelans = new Producto("Scapelans", "", 20000, "oro", "scp");

//ARRAY CON MIS PRODUCTOS
const carrito = []

//FUNCIÓN QUE AGREGA AL ARRAY PRODUCTOS ELEGIDOS POR EL USUARIO
var agregarProducto = () => {
    var productoElegido = prompt ("Ingrese el codigo del Producto que desea comprar (eth: Ethereadel, amk: Amaroked, atg: Antongesi, scp: Scapelans").toLowerCase()

    while (productoElegido != "salir")
    {  
        switch (productoElegido) {
        case ethereadel.codigo:
            ethereadel.cotizar()
            carrito.push(ethereadel)
            productoElegido = "salir"
            break
        case amaroked.codigo:
            amaroked.cotizar()
            carrito.push(amaroked)
            productoElegido = "salir";
            break
        case antogesi.codigo:
            antogesi.cotizar()
            carrito.push(antogesi)
            productoElegido = "salir";
            break
        case scapelans.codigo:
            scapelans.cotizar()
            carrito.push(scapelans)
            productoElegido = "salir";
        break
        default:
            productoElegido = prompt ("Ingrese nuevamente el codigo del Producto que desea comprar (eth: Ethereadel, amk: Amaroked, atg: Antongesi,  scp: Scapelans")
        }
    }
    if (confirm ("Desea agregar otro producto a la compra?")) 
{
agregarProducto ();
}
else {alert ("Su total es de $ " + totalcarrito())

}
}

//FUNCION QUE ELIMINA UN PRODUCTO DEL CARRITO
var eliminarProducto = () => {
    productoEliminar = prompt ("Si desea eliminaar un producto del carrito, ingrese el codigo (eth: Ethereadel, amk: Amaroked, atg: Antongesi,  scp: Scapelans").toLowerCase()
   
var num =0;
carrito.forEach((producto) => { 
    
    if (producto.codigo == productoEliminar){
        console.log ("producto.código "+ producto.codigo + "productoEliminar " + productoEliminar + "num "+ num);
        carrito.splice(num,1);
        num +=1; }
        else {num +=1;}
  })

}

//FUNCION QUE OBTIENE TOTAL A PAGAR DEL CARRITO
const totalcarrito = () => {
  let sumaTotal  = 0;
  carrito.forEach((producto) => {
    sumaTotal +=   producto.precio
  })
  return sumaTotal
}

//MAIN
agregarProducto()

alert ("Procesaremos la compra, confirme si quiere todos los productos");
eliminarProducto()
alert ("Su total actualizado es de $ " + totalcarrito() + ", procesaremos la compra")


