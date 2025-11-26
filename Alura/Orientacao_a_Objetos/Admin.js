import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    criaCurso(nomeCurso,quantidadeVagas){
        return `Cuso de ${nomeCurso} criado com ${quantidadeVagas} vagas.\n`
    }

    exibirInfos(){
        const infosOriginais = super.exibirInfos();
        return `${infosOriginais} - Usuário admin`;
    }
}

// const novoAdmin = new Admin("Leo","leo@gmail.com","1997-01-01");
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criaCurso("JavaScript",50));
// console.log(novoAdmin.exibirInfos());