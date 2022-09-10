import React, { useState,useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ColumnContext from '../Context/ColumnContext';
import TaskContext from '../Context/TaskContext';
import FormContext from '../Context/FormContext';

import columnDescription from '../helpers/ColumnDescription';
import taskDescription from '../helpers/TaskDescription';


import Board from './Board';

const App = () => {

    const [columnState, setColumnState] = useState(columnDescription);
    const [taskState, setTaskState] = useState(taskDescription);
    const [getLocalData, setLocalData] = useLocalStorage(taskState);

    useEffect(() => {
        setTaskState(getLocalData)
    }, []);

    useEffect(() => {
        setLocalData(taskState);
    }, [taskState]);

    const moveForward = (e, id, idColumn) => {
        const nextColumn = columnState.find(column => {
            return column.id === idColumn + 1;
        });

        const tasksInColumn = taskState.filter(task => {
            return task.idColumn === idColumn +1
        }).length

        if (tasksInColumn >= nextColumn?.limit) {
            alert('space!')
            return
        }

        const upDateTasks = taskState.map(task => {
            if (task.id === id && nextColumn?.id) {
                return { ...task, idColumn: idColumn + 1 }
            }
            return task;
        });
        setTaskState([...upDateTasks]);
    };

    const moveBackward = (e, id, idColumn) => {
        const nextColumn = columnState.find(column => {
            return column.id === idColumn - 1;
        });

        const tasksInColumn = taskState.filter(task => {
            return task.idColumn === idColumn - 1
        }).length

        if (tasksInColumn >= nextColumn?.limit) {
            alert('space!')
            return
        }

        const upDateTasks = taskState.map(task => {
            if (task.id === id && nextColumn?.id) {
                return { ...task, idColumn: idColumn - 1 }
            }
            return task;
        });
        setTaskState([...upDateTasks]);
    };

    const removeTask = (e,id)=>{
        const upDateTasks = taskState.filter(task => {
            return task.id !== id;
        });
        setTaskState([...upDateTasks]);
    }

    return (
        <ColumnContext.Provider value={columnState}>
            <TaskContext.Provider value={{taskState, moveForward, moveBackward,removeTask}}>
                <FormContext.Provider value={{taskState, setTaskState}}>
                    <Board />
                </FormContext.Provider>
            </TaskContext.Provider>
        </ColumnContext.Provider>
    );
};

export default App;