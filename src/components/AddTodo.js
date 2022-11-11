import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todoState} from '../recoil';

function AddTodo() {
    const [inputValue, setInputValue] = useState('exemple');
    const setTodosState = useSetRecoilState(todoState);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setTodosState((oldTodoState) => {
            return [
                ...oldTodoState,
                {
                    _id: crypto.randomUUID(),
                    content: inputValue,
                    done: false,
                    edit: false,
                },
            ];
        });

        setInputValue('');
    };
    return (
        <div className='d-flex align-items-center'>
            <input onChange={handleChange} value={inputValue} type='text' className='flex-fill mr-15' />
            <button onClick={handleClick} className='btn btn-primary'>
                Ajouter TODO
            </button>
        </div>
    );
}

export default AddTodo;
