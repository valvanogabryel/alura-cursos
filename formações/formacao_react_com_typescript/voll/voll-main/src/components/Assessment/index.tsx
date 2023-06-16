import styled from "styled-components";
import IProfessional from "../../interfaces/IIProfessional";
import { Card } from "./Card";

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export function Assentment({
  professionals,
}: {
  professionals: IProfessional[] | null;
}) {
  return (
    <CardSection>
      {professionals?.map((professional) => (
        <Card professional={professional} key={professional.id} />
      ))}
    </CardSection>
  );
}
