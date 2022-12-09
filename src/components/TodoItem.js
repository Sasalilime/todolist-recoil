import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todosState} from '../recoil';
import { deleteTodoRequest, updateTodoRequest } from '../api'

const TodoItem = ({todo, handleOnClickDetails}) => {
    const [inputValue, setInputValue] = useState(todo.content);
    const setTodosState = useSetRecoilState(todosState);
    

    const deleteTodo = async () => {
        await deleteTodoRequest(todo._id)
        setTodosState((oldTodosState) => oldTodosState.filter((oldTodo) => oldTodo._id !== todo._id));
    };

    const updateTodo = async (editTodo) => {
        const updatedTodo = await updateTodoRequest(editTodo)
        setTodosState((oldTodosState) => oldTodosState.map((oldTodo) => (oldTodo._id === updatedTodo._id ? editTodo : oldTodo)));
    };

    return (
        <li className='d-flex align-items-center mb-20'>
            {todo.edit ? (
                <>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='text' className='mr-15 flex-fill' />
                    <button onClick={() => updateTodo({...todo, content: inputValue, edit: false})} className='btn btn-primary mr-15'>
                        Sauvegarder
                    </button>
                    <button onClick={() => updateTodo({...todo, edit: false})} className='btn btn-primary '>
                        Annuler
                    </button>
                </>
            ) : (
                <>
                    <span style={{textDecoration: todo.done && 'line-through'}} className='flex-fill mr-15'>
                        {todo.content}
                    </span>
                    <button   onClick={() => updateTodo({ ...todo, done: !todo.done })} className='btn btn-primary mr-15'>
                        {todo.done ? 'Annuler' : 'Fait'}
                    </button>
                    <button onClick={deleteTodo} className='btn btn-danger mr-15'>
                        Supprimer
                    </button>
                    <button onClick={() => updateTodo({...todo, edit: true})} className='btn btn-secondary mr-15'>
                        Modifier
                    </button>
                    <button className='btn btn-primary' onClick={handleOnClickDetails}>
                        Détails
                    </button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
