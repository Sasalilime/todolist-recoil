import {useRecoilValue} from 'recoil';
import {todosState} from '../recoil';
import TodoItem from '../components/TodoItem';

function TodoList() {
    const todos = useRecoilValue(todosState);

    return <ul>{todos && todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)}</ul>;
}

export default TodoList;
