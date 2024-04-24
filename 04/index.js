let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if (identificador.length < 6) {
    const identificadorFormatado = identificador.padStart(6, "0")

    console.log(identificadorFormatado)
}



let array = nome.split(" ")
let nomeFormatado = ""

for (let item of array) {
    let primeiraLetra = item.slice(0, 1)
    let restoDoNome = item.slice(1)

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " "
}
console.log(nomeFormatado)


let emailFormatado = email.trim()

console.log(emailFormatado)