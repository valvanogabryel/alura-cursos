import { useParticipantsList } from "../state/hooks/useParticipantsList";

const Raffle = () => {
  const participants = useParticipantsList();

  return (
    <form>
      <select name="participant" id="participant">
        {
          participants.map(participant =>
            <option key={participant}>
              {participant}
            </option>
          )
        }
      </select>
    </form>
  );
}

export default Raffle;