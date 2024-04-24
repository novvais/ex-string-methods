let nome = 'Guido Cerqueira';
nome = nome.toLowerCase()

let arrayNome = nome.split("")

let contador = 0
let nomeFormatado = "@"

for (let i = 0; i < arrayNome.length; i++) {
    if (contador > 12) {
        break
        //Tem como usar return não
    }

    if (arrayNome[i] !== " ") {
        contador += 1
       
        nomeFormatado += arrayNome[i]
    }
}

console.log(nomeFormatado)
