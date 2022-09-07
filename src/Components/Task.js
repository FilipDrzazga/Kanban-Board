import React, {useContext} from 'react';

import TaskContext from '../Context/TaskContext';

const Task = (props) => {
    const { id, idColumn, name, user } = props;
    const {moveForward,moveBackward} = useContext(TaskContext);
    return (
        <>
            <li key={id}>
                <header>
                    <h2>{user}</h2>
                </header>
                <div>
                    <p>{name}</p>
                </div>
                <button onClick={(e)=>{moveForward(e,id,idColumn)}}>next</button>
                <button onClick={(e)=>{moveBackward(e,id,idColumn)}} >prev</button>
            </li>
        </>
    )
}

export default Task;