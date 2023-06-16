import IProfessional from "../../interfaces/IIProfessional";
import IQuery from "../../interfaces/IQuery";

interface Props {
  queries: IQuery[] | null;
  professionals: IProfessional[] | null;
}

interface IData {
  nome: string;
  consultas: number;
}

const useDiagramData = ({ professionals, queries }: Props) => {
  let data: IData[] = [];

  if (professionals && queries) {
    data = professionals.map((professional) => ({
      nome: professional.nome,
      consultas: queries.filter((query) =>
        query.profissional.some((prof) => prof.nome === professional.nome)
      ).length,
    }));
  }

  return data;
};

export default useDiagramData;
