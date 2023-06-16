import { Rating } from "@mui/material";
import IProfessional from "../../../interfaces/IIProfessional";
import styled from "styled-components";

const StyledContainer = styled.div`
  flex: 40%;
  max-width: 100%;
  background-color: white;
  padding: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: var(--cinza);
  margin: 8px;
  height: 96px;
`;

const CardContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0;
  height: 64px;

  & :nth-child(2) {
    flex-grow: 1;
  }

  .rating {
    font-size: 40px;
  }
`;

const StyledList = styled.li`
  list-style-type: none;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  border: 2px solid var(--azul-claro);
  object-fit: cover;
  margin-left: 0.5em;
`;

const Text = styled.p`
  font-family: var(fonte-principal);
  color: var(--cinza);
`;

const TextName = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  line-height: 0;
`;

const TextEspeciality = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export function Card({ professional }: { professional: IProfessional }) {
  return (
    <StyledContainer>
      <CardContent>
        <StyledList>
          <StyledImage
            src={professional.imagem}
            alt={`foto de perfil do profissional ${professional.nome}`}
          />
        </StyledList>
        <StyledList>
          <TextName>{professional.nome}</TextName>
          <TextEspeciality>{professional.especialidade}</TextEspeciality>
        </StyledList>
        <StyledList>
          <Rating
            name="simple-controlled"
            value={professional.nota}
            readOnly={true}
            className="rating"
          />
        </StyledList>
      </CardContent>
    </StyledContainer>
  );
}
