import IAdress from "./IAdress";

export default interface IProfissional {
  nome: string;
  crm: string;
  imagem: string;
  especialidade: string;
  possuiPlanoSaude: boolean;
  senha: string;
  planosSaude: string[];
  estaAtivo: boolean;
  email: string;
  telefone: string;
  endereco: IAdress;
}
