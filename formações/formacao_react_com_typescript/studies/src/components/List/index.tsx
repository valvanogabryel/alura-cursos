import ListItem from "./ListItem";
import styles from './List.module.scss';
import ITask from "../../types/tasks";

interface IListProps {
    tasks: Array<
        ITask
    >
}

const List = ({ tasks }: IListProps) => {
    return (
        <section className={styles.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.length ?
                        tasks.map((task) =>
                        (
                            <ListItem
                                key={task.id}
                                taskName={task.taskName}
                                studyTime={task.studyTime}
                                id={task.id}
                                isSelected={task.isSelected}
                                isCompleted={task.isCompleted}
                            />
                        )) :
                        <div>
                            <p className={styles.text}>Nenhuma tarefa ainda...</p>
                        </div>
                }
            </ul>
        </section>
    );
}

export default List;