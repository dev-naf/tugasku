import React,{useEffect,useState} from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  // State data to-do
  const [todo,setTodo] = useState([])
  
  useEffect(()=>{
    // ambil data todo
    fetch('http://localhost:8080/todo')
    .then((response) => response.json())
    .then((data) => setTodo(data))
    .catch(error => console.log(error))
  })

  return (
    <div id="todo-list" className='mt-4'>
        {todo.map(
          (Todo) =>(
            <TodoItem id={Todo.key} tugas={Todo.tugas} tanggal={Todo.tanggal}/>
          )
        )}
    </div>
  )
}

export default TodoList