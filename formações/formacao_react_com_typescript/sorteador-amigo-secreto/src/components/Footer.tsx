import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { useRaffle } from "../state/hooks/useRaffle";

import styles from './Footer.module.sass';

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();
  const raffle = useRaffle();

  const start = () => {
    raffle();
    navigate('/sorteio');
  }

  return (
    <footer className={styles.footer}>
      <button
        disabled={participants.length < 3}
        onClick={start}
        className={styles.button}
      >
        Iniciar brincadeira
      </button>
      <img src="/images/sacolas.png" alt="Sacola de compras" />
    </footer>
  );
}

export default Footer;