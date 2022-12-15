import React, { useContext } from 'react';

import Column from './Column';
import ColumnContext from '../Context/ColumnContext';
import Form from './Form';

const Board = () => {

    const boardStyle = {
        display: 'flex',
        justifyContent: 'space-around',
    }

    const columnContext = useContext(ColumnContext);


    const renderColumns = () => {
        return columnContext.map(({ id, name, limit }) => {
            return <Column key={id} id={id} name={name} limit={limit}/>
        })
    }

    return (
        <>
            <Form />
            <section style={boardStyle}>
                {renderColumns()}
            </section>
        </>
    )
};

export default Board;