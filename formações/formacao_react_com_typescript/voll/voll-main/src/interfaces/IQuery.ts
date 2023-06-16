import IProfessional from "./IIProfessional";

export default interface IQuery extends IProfessional {
  id: number;
  data: string;
  horario: string;
  profissional: IProfessional[];
  especialidade: string;
  paciente: string;
  modalidade: string;
}
