import {useRecoilValue} from 'recoil';
import AddTodo from './components/AddTodo';
import {todoState} from './recoil';

function App() {
    const todos = useRecoilValue(todoState);

    console.log(todos);
    return (
        <div className='d-flex flex-row justify-content-center align-items-center p-20'>
            <div className='card container p-20'>
                <h1 className='mb-20'>Todo list</h1>
                <AddTodo />
            </div>
        </div>
    );
}

export default App;
