import {useRecoilValue} from 'recoil';
import {selectFilteredTodos, selectTodoDetails} from '../recoil';
import TodoItem from '../components/TodoItem';
import {useState} from 'react';
import TodoDetails from './TodoDetails';

function TodoList() {
    const [id, setId] = useState(null);
    const filteredTodos = useRecoilValue(selectFilteredTodos);
    const todoDetails = useRecoilValue(selectTodoDetails(id));

    const selectTodo = (_id) => setId(_id);

    return (
        <>
            <ul className='mb-20'>
                {filteredTodos &&
                    filteredTodos.map((todo) => <TodoItem key={todo._id} todo={todo} handleOnClickDetails={() => selectTodo(todo._id)} />)}
            </ul>{' '}
            {todoDetails && <TodoDetails todo={todoDetails} />}
        </>
    );
}

export default TodoList;
