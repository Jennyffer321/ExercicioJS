let nota1 = parseFloat(prompt("Qual é a sua primeira nota?"))
let nota2 = parseFloat(prompt("Qual é a sua segunda nota?"))
let media = (nota1 + nota2) / 2

let resultado = media >= 6 ? "Aprovado" : "Reprovado"
alert ("Sua média é:" + media + "\n então o aluno está:" + resultado)