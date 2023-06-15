import IProfessional from "./IIProfessional";

export default interface IQuery extends IProfessional {
  id: number;
  data: string;
  time: string;
  professional: IProfessional[];
  especiality: string;
  patient: string;
  modality: string;
}
