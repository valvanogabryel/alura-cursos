const ListItem = ({ taskName, studyTime }: any) => {
    return (
        <li>
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