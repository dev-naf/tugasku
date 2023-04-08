import React, { useState } from 'react'
import {hari, tampilTanggal} from '../IndonesiaTime.js'


const Header = () => {
    const [tugas,settugas] = useState()

    const addTodo = () =>{
        const todo = {tugas,statusSelesai:false,tanggal:tampilTanggal}
        console.log(todo)
        // kirim data
        fetch('http://localhost:8080/todo',{
            method : 'POST',
            headers :{
                "content-type" : 'application/json'
            },
            body : JSON.stringify(todo)
        })
        .then(() => 
        {
            alert('Add Data Success')
            settugas("")
        })
    }

    return (
        <div id='header' className='mt-5'>
            <h2 className=' text-center fs-3'>Tugasku Hari {hari}</h2>
            <p className='lead  text-center fs-6'>Silahkan Isi Tugas yang Hari ini anda Kerjakan</p>
            <div className="input-group mb-3">
                <input type="text" value={tugas} onChange={(e) => settugas(e.target.value)} className="form-control" placeholder="Contoh : Mengerjakan PR" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={addTodo} className="btn btn-outline-primary" type="button" id="button-addon2">Simpan</button>
            </div>
        </div>
    )
}

export default Header