import bannerBg from "../assets/bannerbg.png";
import doctors from "../assets/medicos.png";
import styled from "styled-components";

const BannerBackground = styled.section`
  background-color: var(--azul-claro);
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: color-burn;
  background-size: cover;
  height: auto;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    height: 23.375rem;
  }
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 83%;
  padding: 0.19rem 4rem 0 4rem;
  user-select: none;

  @media screen and (max-width: 768px) {
    height: 28.2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: white;
    width: 50%;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
      font-weight: 600;
      margin-bottom: 7rem;
    }
  }

  img {
    width: 27rem;
    height: 23.21881rem;
    flex-shrink: 0;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
      margin-right: 0;
      width: 20.70781rem;
      height: 18.125rem;
      flex-shrink: 0;
    }
  }
`;

export function Banner() {
  return (
    <BannerBackground>
      <BannerContent>
        <h1>
          Encontre profissionais de diversas especialidades e agende sua
          consulta com facilidade!
        </h1>
        <img src={doctors} alt="Imagem com dois médicos" />
      </BannerContent>
    </BannerBackground>
  );
}
