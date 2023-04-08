import React from 'react'

const TodoItem = ({todo}) => {

    
    const updateData = () =>{
        todo.statusSelesai = !todo.statusSelesai
        fetch('http://localhost:8080/todo/'+todo.id,{
            method : 'PUT',
            headers :{
                'content-type' :'application/json' 
            },
            body: JSON.stringify(todo)
            
        }).then(console.log('ok'))        
    }


    const deleteData = () =>{
        fetch('http://localhost:8080/todo/'+todo.id,{
            method : 'DELETE',
            headers :{
                'content-type' :'application/json' 
            }
        }).then(console.log('ok'))        
    }

    const ComponentA = () => <h5 className='fs-5 mt-1 '><del>{todo.tugas}</del></h5>
    const ComponentB = () => <h5 className='fs-5 mt-1 '>{todo.tugas}</h5>

    return (
        <div onClick={updateData} className='border border- border-info rounded mb-3 p-3 d-flex justify-content-between'>
            <div>
                { todo.statusSelesai ? <ComponentA/> : <ComponentB/> }
                <p className='fs-6 lead'>{todo.tanggal}</p>
            </div>
            <div>
                <button onClick={deleteData} className='btn btn-danger mt-3'><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>
    )
}

export default TodoItem