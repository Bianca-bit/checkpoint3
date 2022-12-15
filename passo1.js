// Passo 1

let aluno = {
    nome: '',
    faltas: 0,
    notas: [],
    mediaNotas: function () {
        return a + b + c +d
    }
}

function Aluno (valorNome, valorFaltas, valorNotas, somarNotas, calcularMedia) {
    this.nome = valorNome;
    this.falta = valorFaltas ++;
    this.notas = valorNotas;
    this.somarNotas = somarNotas;
    this.mediaFaltas = valorFaltas;
    this.mediaNotas = somarNotas / 4;

};

console.log(aluno);


const aluno1 = new Aluno("Larissa", "1", "10, 3, 1, 8", 22);
const aluno2 = new Aluno("Claudio", "2", "7, 6, 8, 1", 22);
const aluno3 = new Aluno("Pedro", "0", "7, 2, 3, 7", 19);

console.log(aluno, Aluno);

let listaAlunos = [
    aluno1,
    aluno2,
    aluno3
];

console.log(Aluno, listaAlunos);

module.exports = { Aluno, listaAlunos };




