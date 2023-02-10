import { createContext, useState, useContext } from "react";
import ITask from "../../types/tasks";
import { useTaskListContext } from "./TaskList";

export const SelectContext = createContext<any | null>('');
SelectContext.displayName = 'Select';

export const SelectProvider = ({ children }: any) => {
    const [selected, setSelected] = useState<ITask>();

    return (
        <SelectContext.Provider value={
            {
                selected,
                setSelected
            }
        }>
            {children}

        </SelectContext.Provider>
    )
}

export const useSelectContext = () => {
    const {
        selected,
        setSelected
    } = useContext(SelectContext);

    const {
        taskList,
        setTasks
    } = useTaskListContext();

    function selectTask(selectedTask: ITask) {
        console.log(selectedTask)
        setSelected(selectedTask);
        setTasks((previousTasks: ITask[]) => previousTasks.map((task: ITask) => ({
            ...taskList,
            isSelected: task.id === selectedTask.id ? true : false
        })));
        console.log(selectedTask)
    }

    return {
        selected,
        setSelected,
        selectTask
    }
}
