const valorTicket = 200

function sumar() {
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categoria").value
    let descuento

    switch (categoria) {
        case "1":
            descuento = 0, 2
            break;
        case "2":
            descuento = 0.5
            break;
        case "3":
            descuento = 0, 85
            break;
        default:
            descuento = 0
    }

    let total = cantidad * (valorTicket - descuento * valorTicket)

    document.getElementById("total").innerHTML = total
}

function resaltar() {
    document.getElementById("boton").style.color = "black";
}

function updCat(cat) {
    document.getElementById("categoria").value = cat
    sumar()
}