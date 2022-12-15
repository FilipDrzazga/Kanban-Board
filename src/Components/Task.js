import React, {useContext} from 'react';

import TaskContext from '../Context/TaskContext';

const Task = (props) => {

    const styles = {
        item: {
            width: '100%',
            marginBottom:'2rem',
            textAlign:'center',
        },
        button: {
            width: '4rem',
            height:'2rem',
            marginRight: '0.8rem',
            backgroundColor: 'transparent',
            border: `1px solid black`
        }
    }

    const { id, idColumn, name, user } = props;
    const {moveForward,moveBackward,removeTask} = useContext(TaskContext);
    return (
        <>
            <li style={styles.item} key={id}>
                <header>
                    <h2>{user}</h2>
                </header>
                <div>
                    <p>{name}</p>
                </div>
                <button style={styles.button} onClick={(e)=>{moveBackward(e,id,idColumn)}} >prev</button>
                <button style={styles.button} onClick={(e)=>{removeTask(e,id,idColumn)}} >remove</button>
                <button style={styles.button} onClick={(e)=>{moveForward(e,id,idColumn)}}>next</button>
            </li>
        </>
    )
}

export default Task;