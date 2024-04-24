const email = "aluno@cubos.academy";

if (email[0] === "." || email[email.length - 1] === ".") {
    return console.log("EMAIL INVÁLIDO")
} 

if (email.includes(".") === false || email.includes("@") === false) {
    return console.log("EMAIL INVÁLIDO")
} 

console.log("EMAIL VÁLIDO")