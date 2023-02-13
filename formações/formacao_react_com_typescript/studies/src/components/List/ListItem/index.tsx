import { useSelectContext } from '../../../common/context/SelectContext';

import ITask from '../../../types/tasks';
import styles from './ListItem.module.scss';

const ListItem = ({ taskName, studyTime, isSelected, isCompleted, id }: ITask) => {
    const { selectTask } = useSelectContext();

    return (
        <li
            className=
            {`${styles.item} 
            ${isSelected ? styles.selectedItem : ''}
            ${isCompleted ? styles.completedItem : ''}`
            }
            onClick={(() => !isCompleted && selectTask(
                {
                    taskName,
                    studyTime,
                    isSelected,
                    isCompleted,
                    id
                }
            ))}
        >
            <h3>
                {taskName}
            </h3>

            <span>
                {studyTime}
            </span>
            {isCompleted && <span className={styles.concluded} aria-label='tarefa completada'></span>}
        </li>
    );
}

export default ListItem;