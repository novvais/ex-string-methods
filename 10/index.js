const nomeArquivo = 'Foto da Familia.pdf';

function validacao(arquivos) {
    if(arquivos.includes("jpg") === true || arquivos.includes("jpeg") === true || arquivos.includes("gif") === true || arquivos.includes("png") === true) {
        console.log("ARQUIVO VÁLIDO")
    } else {
        console.log("ARQUIVO INVÁLIDO")
    }
} 

validacao(nomeArquivo)