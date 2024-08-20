import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuario deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== '') {
        navbarComponent = (
            <div className='w-full bg-[#020204] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Blogzinat</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:text-purple-500 hover:font-bold'>Postagens</Link>
                        <Link to='/temas' className='hover:text-purple-500 hover:font-bold'>Temas</Link>
                        <Link to='/cadastroTema' className='hover:text-purple-500 hover:font-bold'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:text-purple-500 hover:font-bold'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:text-purple-500 hover:font-bold'>Sair</Link>
                        
                    </div>
                </div>
            </div>
    )
}

return (
    <>
    {navbarComponent}
    </>
)
}

export default Navbar