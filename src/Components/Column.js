import React, { useContext } from 'react';

import Task from './Task';
import TaskContext from '../Context/TaskContext';

const Column = (props) => {

    const styles = {
        column: {
            width: '100%',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap:'wrap',
        },
        header: {
            width: '100%',
            textAlign:'center',
        },
        list: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            padding:'0px',
            listStyle:'none',
        }
    }

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
            <section style={styles.column}>
                <header style={styles.header}>
                    <h1>{name}</h1>
                    <span>Limit in column: {limit}</span>
                </header>
                <ul style={styles.list}>
                    {renderTask(id)}
                </ul>
            </section>
        </>
    )
}

export default Column;