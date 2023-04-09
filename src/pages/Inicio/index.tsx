import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { ContenedorNoticia } from '../../components';



const Inicio = () => {

  const [noticiasLocal, setNoticiasLocall] = useState([]);
  const [noticiasNacional, setNoticiasNacional] = useState([]);
  const [noticiasInternacional, setNoticiasInternacional] = useState([]);


  useEffect(()=>{
    axios.get(`http://localhost:8080/api/publicaciones/local`, {})
    .then(res => {
      setNoticiasLocall(res.data.payload.docs);
    });

    axios.get(`http://localhost:8080/api/publicaciones/nacional`, {})
    .then(res => {
      setNoticiasNacional(res.data.payload.docs);
    });

    axios.get(`http://localhost:8080/api/publicaciones/internacional`, {})
    .then(res => {
      setNoticiasInternacional(res.data.payload.docs);
    });
  },[]);


  return (
    <>
    <div className='contenedor-principal'>
      <div className='noticias'>
        <p className='noticia-tipo'>LOCAL</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasLocal} />
        <NavLink to={`/noticias/local`} id='ver-mas'><span>VER MÁS...</span></NavLink>
      </div>
      <div className='noticias'>
        <p className='noticia-tipo'>NACIONAL</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasNacional} />
        <NavLink to={`/noticias/nacional`} id='ver-mas'><span>VER MÁS...</span></NavLink>
      </div>
      <div className='noticias'>
        <p className='noticia-tipo'>INTERNACIONAL</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasInternacional} />
        <NavLink to={`/noticias/internacional`} id='ver-mas'><span>VER MÁS...</span></NavLink>
      </div>
    </div>
    </>
  )
}

export { Inicio }