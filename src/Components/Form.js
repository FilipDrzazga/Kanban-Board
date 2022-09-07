import React, { useState, useContext } from 'react';
import FormContext from '../Context/FormContext';

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

    const taskHandler = useContext(FormContext);

    const [userName, setUserName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    return (
        <form onSubmit={(e)=>{taskHandler(e,userName,taskDescription)}} style={formStyle}>
            <input style={inputStyle} placeholder='User name...' type='text' onChange={(e)=>setUserName(e.target.value)}></input>
            <input style={inputStyle} placeholder='Description...' type='text' onChange={(e)=>setTaskDescription(e.target.value)}></input>
            <button style={addBtnStyle} type='submit'>Add Task!</button>
        </form>
    )
}

export default Form;