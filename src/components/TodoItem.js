import React from 'react'

const TodoItem = (todo) => {
    return (
        <div className='border border- border-info rounded mb-3 p-3 d-flex justify-content-between'>
            <div>
                <h5 className='fs-5 mt-1'>{todo.tugas}</h5>
                <p className='fs-6 lead'>{todo.tanggal}</p>
            </div>
            <div>
                <button className='btn btn-danger mt-3'><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>
    )
}

export default TodoItem