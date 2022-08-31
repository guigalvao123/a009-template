/*const nome = prompt("Qual e o seu nome?")
const cor = prompt("Qual a sua cor favorita?")
const citacao = prompt("Qual a sua citacao favorita?")

console.log("A cor favorita de "+nome+" e a "+cor+" e a sua citacao favorita e \""+citacao+"\".")
console.log(`A cor favorita de ${nome} e a ${cor}`)
console.log(`A sua citacao favorita e ${citacao}`)

const nomeMaisculo = nome.toUpperCase()
console.log("Seu nome todo maisculo e " +nomeMaisculo)

const temALetra = nome.includes("G")
console.log("Seu nome tem a letra G?" + temALetra)*/

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu email?")
const numeroCaracteresNome = nomeDoUsuario.length
const substituicaoRporZ = nomeDoUsuario.replaceAll("R","Z")
const temArroba = emailDoUsuario.includes("@")

console.log ("O email "+emailDoUsuario+" foi cadastrado com sucesso. Boas vindas,"+nomeDoUsuario+"!")
console.log (`O email ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}!`)
console.log (numeroCaracteresNome)
console.log (substituicaoRporZ)
console.log (temArroba)
