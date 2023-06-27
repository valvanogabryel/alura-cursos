import Botao from "../../../../components/Botao";

import searchIcon from "../../assets/SearchSection/search.png";
import locationIcon from "../../assets/SearchSection/location_on.png";
import closeIcon from "../../assets/SearchSection/close.png";

import styled from "styled-components";
import categories from "../../../../categories";

const StyledSearchSection = styled.section`
  padding: 2rem;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 80%;
  margin: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 423px;
  transition: 0.3s all;
  height: 48px;

  img {
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    object-fit: contain;
    height: 1.25rem;
    width: 1.5rem;
  }

  &:focus-within {
    div {
      img {
        transform: scale(1.1);
      }
    }
  }

  div {
    background-color: var(--cinza-claro);
    padding: 1rem;
    border-radius: 8px 0 0 8px;
    height: 1rem;
  }

  input {
    padding: 1rem 1rem 1rem 0.75rem;
    outline: none;
    border: none;
    width: 87%;
    background-color: #f8f8f8;
    border-radius: 0 8px 8px 0;

    &::placeholder {
      font-size: 1rem;
      color: var(--cinza);
    }
  }
`;

const CategoriesWrapper = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--cinza);
    line-height: 1.36875rem;
    margin: 0;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    user-select: none;

    li {
      list-style-type: none;
      background-color: var(--cinza-claro);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;

      span {
        color: var(--cinza);
        font-size: 0.875rem;
        line-height: 1rem;
      }

      div {
        display: flex;
        gap: 0.62rem;

        img {
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }
`;

export function SearchSection() {
  return (
    <StyledSearchSection>
      <ContentWrapper>
        <SearchForm>
          <StyledInput>
            <div>
              <img src={searchIcon} alt="" />
            </div>
            <input type="search" placeholder="Digite a especialidade" />
          </StyledInput>

          <StyledInput>
            <div>
              <img src={locationIcon} alt="" />
            </div>
            <input type="search" placeholder="Digite sua localização" />
          </StyledInput>

          <Botao>Buscar</Botao>
        </SearchForm>

        <CategoriesWrapper>
          <h3>Você pode estar procurando por estas categorias:</h3>

          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <div>
                  <span>{category.name}</span>
                  <img src={closeIcon} alt="Fechar" />
                </div>
              </li>
            ))}
          </ul>
        </CategoriesWrapper>
      </ContentWrapper>
    </StyledSearchSection>
  );
}
