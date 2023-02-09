import styles from './ListItem.module.scss';

const ListItem = ({ taskName, studyTime }: string) => {
    return (
        <li className={styles.item}>
            <h3>
                {taskName}
            </h3>

            <span>
                {studyTime}
            </span>
        </li>
    );
}

export default ListItem;