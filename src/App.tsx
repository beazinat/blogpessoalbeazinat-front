import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/Temas/listaTemas/ListaTemas';
import FormularioTema from "./components/Temas/formularioTema/FormularioTema.tsx";
import DeletarTema from './components/Temas/deletarTema/DeletarTema';
import ListaPostagens from './components/Postagens/listaPostagens/ListaPostagens.tsx';
import FormularioPostagem from './components/Postagens/formularioPostagem/FormularioPostagem.tsx';
import DeletarPostagem from './components/Postagens/deletarPostagem/DeletarPostagem.tsx';


export default function App() {
  return (
    <>
      <AuthProvider>
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
              <Route path='/deletarTema/:id' element={<DeletarTema/>} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}