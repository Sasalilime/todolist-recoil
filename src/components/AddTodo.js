import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todosState} from '../recoil';

function AddTodo() {
    const [inputValue, setInputValue] = useState('');
    const setTodosState = useSetRecoilState(todosState);

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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
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
        }
    };

    return (
        <div className='d-flex align-items-center mb-20'>
            <input onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue} type='text' className='flex-fill mr-15' />
            <button onClick={handleClick} className='btn btn-primary'>
                Ajouter TODO
            </button>
        </div>
    );
}

export default AddTodo;
