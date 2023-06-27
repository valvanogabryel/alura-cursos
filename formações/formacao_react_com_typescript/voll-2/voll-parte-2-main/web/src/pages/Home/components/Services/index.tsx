import shieldIcon from "../../assets/Services/health_and_safety.png";
import calendaryIcon from "../../assets/Services/calendar_month.png";
import notificationIcon from "../../assets/Services/notifications.png";
import thumbsUpIcon from "../../assets/Services/thumb_up.png";

import styled from "styled-components";

const ServicesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 17.9rem);
  gap: 1.5rem;
  margin: auto;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 19.4375rem);
  }
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--cinza-claro);
  padding: 1rem 0.5rem;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);

  span {
    color: var(--azul-escuro);
    user-select: none;
  }
`;

export function Services() {
  return (
    <ServicesSection>
      <ServiceWrapper>
        <div>
          <img src={shieldIcon} alt="" />
        </div>
        <span>Encontre especialistas</span>
      </ServiceWrapper>
      <ServiceWrapper>
        <div>
          <img src={calendaryIcon} alt="" />
        </div>
        <span>Agende consultas</span>
      </ServiceWrapper>
      <ServiceWrapper>
        <div>
          <img src={notificationIcon} alt="" />
        </div>
        <span>Defina lembretes</span>
      </ServiceWrapper>
      <ServiceWrapper>
        <div>
          <img src={thumbsUpIcon} alt="" />
        </div>
        <span>Avalie o serviço</span>
      </ServiceWrapper>
    </ServicesSection>
  );
}
