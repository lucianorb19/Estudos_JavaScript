import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Luciano","luciano@gmail.com","1997-01-01");
//console.log(novoUser.nome);

// novoUser.nome = "Luciano Rodrigues Batista";
// console.log(novoUser.nome);

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

console.log(User.exibirInfos("Gustavo","gustavo@gmail.com"));

