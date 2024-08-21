import { useContext } from 'react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

function Footer() {
    const { usuario} = useContext(AuthContext)

    let footerComponent

    if (usuario.token !== '') {
        footerComponent = (
            <>
                <div className="flex justify-center bg-indigo-900 text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold'>Blogzinat | Copyright: </p>
                        <p className='text-lg'>Acesse minhas redes sociais</p>
                        <div className='flex gap-2'>
                            <Link to='https://linkedin.com/in/beagonca'><LinkedinLogo size={48} weight='bold' /></Link>
                            <Link to='https://github.com/beazinat'><GithubLogo size={48} weight='bold' /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer
