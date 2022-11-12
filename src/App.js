import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className='d-flex flex-row justify-content-center align-items-center p-20'>
            <div className='card container p-20'>
                <h1 className='mb-20'>Todo list</h1>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
