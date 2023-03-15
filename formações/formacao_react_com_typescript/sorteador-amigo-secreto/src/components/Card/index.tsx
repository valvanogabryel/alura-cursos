import styles from './Card.module.sass';

const Card: React.FC = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export default Card;