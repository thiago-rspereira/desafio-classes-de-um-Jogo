class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: 'usou magia',
            guerreiro: 'usou espada',
            monge: 'usou artes marciais',
            ninja: 'usou shuriken'
        };

        const ataque = ataques[this.tipo] || 'usou um ataque indefinido';
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 1000, "mago");

console.log(heroi1.atacar());  
console.log(heroi2.atacar());  
