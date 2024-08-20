import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import '@fontsource-variable/sixtyfour';
import '@fontsource/dm-mono';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="w-screen h-screen bg-[#020204] flex justify-center items-center font-bold">
  <form className="flex justify-center items-center flex-col w-full max-w-md gap-4" onSubmit={login}>
    <h2 className="text-[#00FF00] text-5xl font-sixtyfour">Entrar</h2>
    <div className="flex flex-col w-full">
      <label htmlFor="usuario" className='text-[#00FF00]'>Usuário</label>
      <input
        type="text"
        id="usuario"
        name="usuario"
        placeholder="Usuário"
        className="border-2 border-[#5A5A5A] p-2"
        value={usuarioLogin.usuario}
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
      />
    </div>
    <div className="flex flex-col w-full">
      <label htmlFor="senha" className='text-[#00FF00]'>Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        placeholder="Senha"
        className="bg-[#020204] border-2 border-[#5A5A5A] p-2"
        value={usuarioLogin.senha}
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
      />
    </div>
    <button type="submit" className="bg-[#002606] hover:bg-[#EBFFFF] text-[#00FF00] w-1/2 py-2 flex justify-center">
      {isLoading ? (
        <RotatingLines
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="24"
          visible={true}
        />
      ) : (
        <span>Enviar</span>
      )}
    </button>

    <hr className="border-[#5A5A5A] w-full" />

    <p className='text-[#008A00]'>
      Ainda não tem uma conta?{' '}
      <Link to="/cadastro" className="text-[#00FF00] hover:underline">
        Cadastre-se
      </Link>
    </p>
  </form>
</div>

    </>
  );
}

export default Login;