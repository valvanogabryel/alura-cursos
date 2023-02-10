import ListItem from "./ListItem";
import styles from './List.module.scss';
import { useState } from "react";

const List = () => {
    const [tasks, setTasks] = useState([{
        taskName: 'React',
        studyTime: '01:30:00'
    },
    {
        taskName: 'TypeScript',
        studyTime: '02:12:00'
    },
    {
        taskName: 'SASS',
        studyTime: '00:30:00'
    },
    ])

    return (
        <section className={styles.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, { taskName: 'Bootstrap', studyTime: '00:45:00' }])
            }}>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((task, index) =>
                    (
                        <ListItem
                            key={index}
                            taskName={task.taskName}
                            studyTime={task.studyTime}
                        />
                    ))
                }
            </ul>
        </section>
    );
}

export default List;