const texto = "Aprenda programar do zero na Cubos Academy";

let textoMinusculo = texto.toLowerCase()

function replaceAll(original, espaco, hifen) {
    while (original !== original.replace(espaco, hifen)) {
        original = original.replace(espaco, hifen);
    }
    return original
}

console.log(replaceAll(textoMinusculo, " ", "-"));