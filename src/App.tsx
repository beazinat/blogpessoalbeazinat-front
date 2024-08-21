import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar.tsx';
import Login from './pages/login/Login.tsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';
import Home from './pages/home/Home.tsx';
import ListaTemas from './components/temas/listaTemas/ListaTemas.tsx';
import FormularioTema from './components/temas/formularioTema/FormularioTema.tsx';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens.tsx'; 
import DeletarTema from './components/temas/deletarTema/DeletarTema.tsx';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem.tsx';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil.tsx';
import Footer from './components/footer/Footer.tsx';


function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;