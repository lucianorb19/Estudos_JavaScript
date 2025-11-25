import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(nomeEstudante, curso){
        return `${nomeEstudante} aprovado para o curso de ${curso}\nResponsável: ${this.nome}\n`;
    }
}

const docenteNovo = new Docente("Alan","alan@gmail.com","1997-02-02");
// console.log(docenteNovo);
// console.log(docenteNovo.exibirInfos());
// console.log(docenteNovo.aprovarEstudante("Cleber","Python"));
