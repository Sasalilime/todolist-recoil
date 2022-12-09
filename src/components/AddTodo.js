import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todosState } from '../recoil'
import { createTodoRequest } from '../api'

function AddTodo () {
  const [inputValue, setInputValue] = useState('')
  const setTodosState = useSetRecoilState(todosState)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = async () => {
    const newTodo = await createTodoRequest({
      content: inputValue,
      done: false,
      edit: false,
    })
    setTodosState((oldTodosState) => [...oldTodosState, newTodo])
    setInputValue('')
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const newTodo = await createTodoRequest({
        content: inputValue,
        done: false,
        edit: false,
      })
      setTodosState((oldTodosState) => [...oldTodosState, newTodo])
      setInputValue('')
    }
  }

  return (
    <div className="d-flex align-items-center mb-20">
      <input onKeyDown={handleKeyDown} onChange={handleChange}
             value={inputValue} type="text" className="flex-fill mr-15"/>
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter TODO
      </button>
    </div>
  )
}

export default AddTodo
