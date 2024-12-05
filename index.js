function Pessoa (nome, salário) {
    this.nome = nome;
    this.salário = salário;
}

function Funcionario (nome, salário) {
    Pessoa.call(this, nome, salário);
}


function Jogador (nome, salário, numeroCamisa) {
    Pessoa.call(this, nome, salário);
    this.numeroCamisa = numeroCamisa;
}

const Pessoa1 = new Pessoa ("Marina", 10000);
const Funcionario1 = new Funcionario ("Joao", 3000);
const Jogador1 = new Jogador ("Pedro", 2000, 10);

console.log(Pessoa1);
console.log(Funcionario1);
console.log(Jogador1);


