import React from 'react';

function TodoDetails({todo: {_id}}) {
    return (
        <div className='card'>
            <ul>
                {/* <li>Todo créée le: {createdAt}</li> */}
                <li>Todo _id: {_id} </li>
            </ul>
        </div>
    );
}

export default TodoDetails;
