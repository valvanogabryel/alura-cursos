import { useParticipantsList } from "../state/hooks/useParticipantsList";

const ParticipantsList = () => {
  const participants: string[] = useParticipantsList();

  return (
    <ul>
      {
        participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))
      }
    </ul>
  );
}

export default ParticipantsList;