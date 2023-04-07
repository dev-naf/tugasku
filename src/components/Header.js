import React from 'react'

const Header = () => {
    return (
        <div id='header' className='mt-5'>
            <h2 className=' text-center fs-3'>Tugasku Hari Ini</h2>
            <p className='lead  text-center fs-6'>Silahkan Isi Tugas yang Hari ini anda Kerjakan</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Contoh : Mengerjakan PR" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Simpan</button>
            </div>
        </div>
    )
}

export default Header