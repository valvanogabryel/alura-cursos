import { ReactNode } from "react";
import rating from "./assets/avaliacao.png";
import query from "./assets/consulta.png";
import diagram from "./assets/grafico.png";
import styled from "styled-components";

interface TitleProps {
  img?: string;
  children?: ReactNode;
}

interface IImages {
  rating: string;
  query: string;
  diagram: string;
}

const StyledSpan = styled.span<TitleProps>`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => (props.img ? `url(${props.img})` : "none")};
  height: 25px;
  width: 25px;
`;

const StyledTitle = styled.h2`
  color: var(--azul-claro);
`;

export function Title({ img, children }: TitleProps) {
  const imageList: IImages = {
    rating: rating,
    query: query,
    diagram: diagram,
  };

  return (
    <div>
      <StyledSpan img={imageList[img as keyof IImages]} />
      <StyledTitle>{children}</StyledTitle>
    </div>
  );
}
