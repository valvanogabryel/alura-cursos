import IAdress from "./IAdress";

export default interface IClinic {
  email: string;
  nome: string;
  senha: string;
  endereco: IAdress;
}
