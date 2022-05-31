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
const ethereadel = new Producto("Ethereadel", "rings", 10000, "plata 925", "eth");
const amaroked = new Producto("Amaroked", "earrings", 15000, "plata 925", "amk");
const antogesi = new Producto("Antongesi", "necklaces", 25000, "plata 925", "atg");
const scapelans = new Producto("Scapelans", "", 20000, "oro", "scp");


const carrito = []

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
            productoElegido = prompt ("Ingrese nuevamente el codigo del Producto que desea comprar (Eth: Ethereadel, Amk: Amaroked, Atg: Antongesi,  Scp: Scapelans")
        }
    }
    if (confirm ("Desea agregar otro producto a la compra?")) 
{
agregarProducto ();
}
else {alert ("Finalizó su compra, su total es de $ " + totalcarrito())}
}

const totalcarrito = () => {
  let sumaTotal  = 0;
  carrito.forEach((producto) => {
    sumaTotal +=   producto.precio
  })
  return sumaTotal
}

agregarProducto()
console.log(carrito)

