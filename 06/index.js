const celular = 7199918888;

let celularStr = String(celular)

if (celularStr.length === 10) {
    let celularFormatado = "(" + celularStr.slice(0, 2) + ")" + " " + celularStr.slice(2, 3) + " " + celularStr.slice(3, 7) + "-" + celularStr.slice(7, 10)

    console.log(celularFormatado)
} else {
    let celularFormatado = " " + celularStr.slice(0, 1) + " " + celularStr.slice(1, 5) + "-" + celularStr.slice(5, 8)

    console.log(celularFormatado)
}