const numeroCartao = '1111222233334444';

let numerosIniciais = numeroCartao.slice(0, 4)
let numerosFinais = numeroCartao.slice(12, 17)
let numeroMeio = numeroCartao.length - numerosFinais.length - numerosIniciais.length

let numeroFormatado = numerosIniciais.padEnd(numeroMeio, "*")
numeroFormatado += numerosFinais.padStart(numeroMeio, "*")

console.log(numeroFormatado)
