import {useRecoilValue} from 'recoil';
import {selectFilteredTodos} from '../recoil';
import TodoItem from '../components/TodoItem';

function TodoList() {
    const filteredTodos = useRecoilValue(selectFilteredTodos);

    return <ul>{filteredTodos && filteredTodos.map((todo) => <TodoItem key={todo._id} todo={todo} />)}</ul>;
}

export default TodoList;
