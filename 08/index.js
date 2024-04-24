const cpf = "011.022.033-44";

let cpfFormatado = ""

let cpfFatiado = cpf.slice(0, 5).replace(".", "")
cpfFatiado += cpf.slice(5, 10).replace(".", "")
cpfFatiado += cpf.slice(10, 15).replace("-", "")

console.log(cpfFatiado)