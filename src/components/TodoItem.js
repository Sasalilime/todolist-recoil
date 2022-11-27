import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todosState} from '../recoil';

const TodoItem = ({todo, handleOnClickDetails}) => {
    const [inputValue, setInputValue] = useState(todo.content);
    const setTodosState = useSetRecoilState(todosState);

    const handleClickDone = () => {
        setTodosState((oldTodosState) =>
            oldTodosState.map((oldTodo) => (oldTodo._id === todo._id ? {...todo, done: !todo.done} : oldTodo))
        );
    };

    const handleClickDelete = () => {
        setTodosState((oldTodosState) => oldTodosState.filter((oldTodo) => oldTodo._id !== todo._id));
    };

    const updateTodo = (editTodo) => {
        setTodosState((oldTodosState) => oldTodosState.map((oldTodo) => (oldTodo._id === todo._id ? editTodo : oldTodo)));
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
                    <button onClick={handleClickDone} className='btn btn-primary mr-15'>
                        {todo.done ? 'Annuler' : 'Fait'}
                    </button>
                    <button onClick={handleClickDelete} className='btn btn-danger mr-15'>
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
