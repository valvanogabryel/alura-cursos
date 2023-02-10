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
                        tasks.map((task, index) =>
                        (
                            <ListItem
                                key={index}
                                taskName={task.taskName}
                                studyTime={task.studyTime}
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