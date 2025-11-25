export default class User{
    //ATRIBUTOS
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;

    //CONSTRUTOR
    constructor (nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    };

    //DEMAIS MÉTODOS
    exibirInfos(){
        return `${this.#nome}, ${this.#email}\n`;
    };
}

const novoUser = new User("Luciano","luciano@gmail.com","1997-19-03");