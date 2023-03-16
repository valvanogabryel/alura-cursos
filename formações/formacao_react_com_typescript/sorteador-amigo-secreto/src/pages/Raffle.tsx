import { useState } from "react";
import Card from "../components/Card";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { useRaffleResult } from "../state/hooks/useRaffleResult";
import styles from './Raffle.module.sass';

const Raffle = () => {
  const [choosedParticipant, setChoosedParticipant] = useState('');
  const [secretFriend, setSecretFriend] = useState('');

  const participants = useParticipantsList();
  const result = useRaffleResult();

  const sort = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(choosedParticipant)) {
      setSecretFriend(result.get(choosedParticipant)!);
      setTimeout(() => {
        setSecretFriend('');
      }, 5000);
    }
  }

  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papel?</h2>
        <form onSubmit={sort}>
          <select
            required
            placeholder="Selecione o seu nome"
            name="participantTurn"
            id="participantTurn"
            value={choosedParticipant}
            onChange={event => setChoosedParticipant(event.target.value)}
          >
            <option>Selecione o seu nome</option>
            {
              participants.map(participant =>
                <option key={participant}>
                  {participant}
                </option>
              )
            }
          </select>
          <p>Clique em sortear para ver quem é o seu amigo secreto!</p>
          <button className={styles.button__raffle}>Sortear</button>
          {
            secretFriend &&
            <p
              role='alert'
              className={styles.result}
            >
              {secretFriend}
            </p>
          }
        </form>
        <footer className={styles.raffle}>
          <img src="/images/aviao.png" className={styles.plane} alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  );
}

export default Raffle;