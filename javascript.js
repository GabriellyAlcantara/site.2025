//1) Na Universidade Federal do Paraná, a média é de 70 pontos. Se o aluno
não atingir a média, ele vai fazer o exame final da disciplina, porém se a
média dele for menor do que 40, ele está automaticamente reprovado.
Escreva um código em javascript que leia a nota de um aluno, e diga se ele
está reprovado, ou se ele está em exame final, ou se está aprovado.

  
let nota = prompt ("Qual é a sua nota?");

if (nota >=1 && nota < 40){
    console.log ("Vocẽ está reprovado.");
}else if (nota >= 40 && nota < 70){
    console.log ("Vocẽ está em exame final.");
}else if (nota >= 70 && nota <=100){
    console.log ("Parabéns! Vocẽ está aprovado.");
}else {
    console.log ("Por gentileza, preencha uma nota válida.");
}
