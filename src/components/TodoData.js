import React from 'react';
import {useRecoilValue} from 'recoil';
import {selectTodosStats} from '../recoil';

function TodoData() {
    const data = useRecoilValue(selectTodosStats);
    return (
        <div className='card p-20'>
            <ul>
                <li>Nombre de todos: {data.total}</li>
                <li>Nombre de todos terminées: {data.totalDone} </li>
                <li>Nombre de todos en cours: {data.totalDonePercent ?? 0} %</li>
                <li>Nombre de todos en cours: {data.totalOnGoing} </li>
            </ul>
        </div>
    );
}

export default TodoData;
