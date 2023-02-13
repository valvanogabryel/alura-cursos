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
        selected = {

        },
        setSelected
    } = useContext(SelectContext);

    const {
        setTasks
    } = useTaskListContext();

    function selectTask(selectedTask: ITask) {
        setSelected(selectedTask);
        setTasks((previousTasks: ITask[]) => previousTasks.map((task: ITask) => ({
            ...task,
            isSelected: task.id === selectedTask.id ? true : false
        })));
    }

    function concludeTask() {
        if (selected) {
            setSelected(undefined);
            setTasks((previousTasks: ITask[]) => previousTasks.map((task: ITask) => {
                if (task.id === selected.id) {
                    return {
                        ...task,
                        isSelected: false,
                        isCompleted: true
                    }
                }
                return task;
            }))
        }
    }

    return {
        selected,
        setSelected,
        selectTask,
        concludeTask
    }
}
