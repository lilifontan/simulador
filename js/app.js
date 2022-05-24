class Producto {
    constructor(nombre, precio, material, codigo) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.material = material;
        this.codigo = codigo;
        this.vendido = false;
    }
    cotizar() {
        alert ("EL VALOR DEL PRODUCTO ES " + this.precio * 1.21);
    }
    vender() {
        this.vendido = true;
    }
}
const alianza = new Producto("alianza", 3000, "plata 925", "A");
const alianzaOro = new Producto("alianza oro", 12000, "oro", "AO");
const arosAbridor = new Producto("aros abridor", 1800, "plata", "AA");
const arosAbridorOro = new Producto("aros abridor", 4500, "oro", "AAO");


var codigo = prompt ("Ingrese el codigo del Producto que desea comprar (A: alianzas, AO: alianzas de oro, AA: aros abridor, AAO: aros abridor de oro")

while (codigo != "salir")
{  
    switch (codigo) {
    case alianza.codigo:
        alianza.cotizar()
        codigo = "salir"
        break
    case alianzaOro.codigo:
        alianzaOro.cotizar()
        codigo = "salir";
        break
    case arosAbridor.codigo:
        arosAbridor.cotizar()
        codigo = "salir";
        break
    case arosAbridorOro.codigo:
        arosAbridorOro.cotizar()
        codigo = "salir";
    break
    default:
        codigo = prompt ("Ingrese nuevamente el codigo del Producto que desea comprar (A: alianzas, AO: alianzas de oro, AA: aros abridor, AAO: aros abridor de oro")
    }
}

