import React from "react";
import styled from "styled-components";

const StylizedButton = styled.button`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  background: #EB9B00;
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: #fff;
  transition: .3s;
  &:hover {
    background: #B87900;
    border: 2px solid #B87900;
  }
`;

export const AbButton = () => {
  return (
    <StylizedButton>
      Clique Aqui!
    </StylizedButton>
  );
}
