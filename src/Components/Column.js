import React, { useContext } from 'react';

import Task from './Task';
import TaskContext from '../Context/TaskContext';

const Column = (props) => {
    const { id, name,limit } = props;
    const {taskState} = useContext(TaskContext);

    const renderTask = (id) => {
        const taskForColumn = taskState.filter(({ idColumn }) => {
            return idColumn === id;
        }).map((task) => {
            return <Task {...task} key={task.id} />
        });
        return taskForColumn;
    };

    return (
        <>
            <section>
                <header>
                    <h1>{name}</h1>
                    <span>Limit in column: {limit}</span>
                </header>
                <ul>
                    {renderTask(id)}
                </ul>
            </section>
        </>
    )
}

export default Column;