import { useParticipantsList } from "../state/hooks/useParticipantsList";

const Footer = () => {
  const participants = useParticipantsList();

  return (
    <footer>
      <button disabled={participants.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
}

export default Footer;