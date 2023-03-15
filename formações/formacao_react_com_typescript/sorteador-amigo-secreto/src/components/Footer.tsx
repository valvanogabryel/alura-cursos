import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantsList";

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();

  const start = () => {
    navigate('/sorteio');
  }

  return (
    <footer>
      <button
        disabled={participants.length < 3}
        onClick={start}
      >
        Iniciar brincadeira
      </button>
    </footer>
  );
}

export default Footer;