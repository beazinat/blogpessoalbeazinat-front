import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

                    <div className='flex gap-4'>
                        <Link to='/login' className='hover:text-purple-500'>Login</Link>
                        <Link to='/home' className='hover:text-purple-500'>Home</Link>
                        <div className='hover:text-purple-500'>Postagens</div>
                        <div className='hover:text-purple-500'>Temas</div>
                        <div className='hover:text-purple-500'>Cadastrar tema</div>
                        <div className='hover:text-purple-500'>Perfil</div>
                        <div className='hover:text-purple-500'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}