import { createContext, useState, useContext } from "react";
import ITask from "../../types/tasks";

export const TaskListContext = createContext<any | null>('');
TaskListContext.displayName = 'TaskList';

export const TaskListProvider = ({ children }: any) => {
    const [taskList, setTasks] = useState<ITask[]>([]);

    return (
        <TaskListContext.Provider value={{
            taskList,
            setTasks
        }}
        >
            {children}
        </TaskListContext.Provider>
    )
}

export const useTaskListContext = () => {
    const {
        taskList,
        setTasks
    } = useContext(TaskListContext);

    return {
        taskList,
        setTasks
    }
}
