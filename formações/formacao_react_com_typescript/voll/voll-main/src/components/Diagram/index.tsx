import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IQuery from "../../interfaces/IQuery";
import IProfessional from "../../interfaces/IIProfessional";
import useDiagramData from "./useDiagramData";
import styled from "styled-components";

interface Props {
  queries: IQuery[] | null;
  professionals: IProfessional[] | null;
}

interface IData {
  nome: string;
  consultas: number;
}

const StyledSection = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`;

export function Diagram({ queries, professionals }: Props) {
  const data: IData[] = useDiagramData({
    queries,
    professionals,
  });

  return (
    <StyledSection>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledSection>
  );
}
