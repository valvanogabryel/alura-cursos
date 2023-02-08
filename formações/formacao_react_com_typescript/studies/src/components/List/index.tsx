import ListItem from "./ListItem";

const List = () => {
    const tasks = [
        {
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
    ];

    return (
        <section>
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