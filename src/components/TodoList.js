import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div id="todo-list" className='mt-4'>
        <TodoItem tugas="mencuci pakaian" tanggal="12 Januari 2024"/>
        <TodoItem tugas="mencuci piring" tanggal="13 Januari 2024"/>
        <TodoItem tugas="mencuci Handuk" tanggal="14 Januari 2024"/>
    </div>
  )
}

export default TodoList