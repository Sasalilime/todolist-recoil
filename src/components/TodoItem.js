import {useSetRecoilState} from 'recoil';
import {todosState} from '../recoil';

function TodoItem({todo}) {
    const setTodosState = useSetRecoilState(todosState);

    const handleClickDone = () => {
        setTodosState((oldTodosState) =>
            oldTodosState.map((oldTodo) => (oldTodo._id === todo._id ? {...todo, done: !todo.done} : oldTodo))
        );
    };

    const handleClickDelete = () => {
        setTodosState((oldTodosState) => oldTodosState.filter((oldTodo) => oldTodo._id !== todo._id));
    };

    return (
        <li className='d-flex align-items-center mb-20'>
            <span style={{textDecoration: todo.done && 'line-through'}} className='flex-fill mr-15'>
                {todo.content}
            </span>
            <button onClick={handleClickDone} className='btn btn-primary mr-15'>
                {todo.done ? 'Annuler' : 'Fait'}
            </button>
            <button onClick={handleClickDelete} className='btn btn-danger mr-15'>
                Supprimer
            </button>
            <button className='btn btn-secondary mr-15'>Modifier</button>
        </li>
    );
}

export default TodoItem;
