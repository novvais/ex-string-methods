const comentario = "Esse COVID é muito perigoso!";

if(comentario.includes("Covid") === true || comentario.includes("covid") === true || comentario.includes("COVID") === true) {
    console.log("COMENTÁRIO BLOQUEADO POR CONTER PALAVRAS PROIBIDAS")
} else {
    console.log("COMENTÁRIO AUTORIZADO")
}