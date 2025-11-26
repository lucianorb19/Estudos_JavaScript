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

    //MÉTODOS GET
    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    //MÉTODOS SET
    set nome(novoNome){
        this.#nome = novoNome;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    //DEMAIS MÉTODOS
    exibirInfos(){
        //USO DE MÉTODO PRIVADO PARA OBTER AS INFORMAÇÕES
        return `${this.#nome}, ${this.#email}\n`;
    };

    static exibirInfos(nome, email){
        return `${nome} , ${email}\n`;
    }
}