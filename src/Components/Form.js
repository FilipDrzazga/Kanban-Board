import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormContext from '../Context/FormContext';
import ColumnContext from '../Context/ColumnContext';

const Form = () => {
    const formStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '7vh',
        backgroundColor: 'rgb(204, 227, 222)'
    }
    const addBtnStyle = {
        width: '30%',
        height: '50%',
        backgroundColor: 'rgb(234, 244, 244)',
        border:'none'
    }
    const inputStyle = {
        width: '20%',
        height: '50%',
        paddingLeft:'20px',
        border:'none',
    }

    const { taskState, setTaskState } = useContext(FormContext);
    const columnState = useContext(ColumnContext);

    const [userName, setUserName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const taskSubmitHandler = (e) => {
        e.preventDefault();
        if (userName.length === 0 || taskDescription.length === 0) {
            alert('user name or task description input cannot be empty!')
        } else {
            const newTask = {
                id: uuidv4(),
                name: taskDescription,
                idColumn: 1,
                user: userName
            };
            const tasksInFirstColumn = taskState.filter(task => {
                return task.idColumn === columnState[0].id;
            }).length;

            if (tasksInFirstColumn < columnState[0].limit) {
                setTaskState(state => { return [...state, newTask] });
            } else {
                alert(`Column one has limit of ${columnState[0].limit}`)
            }
        }

        setTaskDescription('');
        setUserName('');

    };

    return (
        <form onSubmit={(e)=>{taskSubmitHandler(e)}} style={formStyle}>
            <input style={inputStyle} placeholder='User name...' type='text' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            <input style={inputStyle} placeholder='Description...' type='text' value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></input>
            <button style={addBtnStyle} type='submit'>Add Task!</button>
        </form>
    )
}

export default Form;