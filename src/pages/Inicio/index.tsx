import axios from 'axios';
import { useEffect, useState } from 'react';
import Noticia from '../../interfaces/noticia';
import moment from 'moment';
import './styles.css';
import { ContenedorNoticia } from '../../components';



const Inicio = () => {

  const [noticiasLocal, setNoticiasLocall] = useState([]);
  const [noticiasNacional, setNoticiasNacional] = useState([]);
  const [noticiasInternacional, setNoticiasInternacional] = useState([]);


  useEffect(()=>{
    axios.get(`http://localhost:8080/api/publicaciones/local`, {})
    .then(res => {
      setNoticiasLocall(res.data.payload);
    });

    axios.get(`http://localhost:8080/api/publicaciones/nacional`, {})
    .then(res => {
      setNoticiasNacional(res.data.payload);
    });

    axios.get(`http://localhost:8080/api/publicaciones/internacional`, {})
    .then(res => {
      setNoticiasInternacional(res.data.payload);
    });
  },[])
 

  return (
    <>
    <div className='contenedor-principal'>
      <div className='noticias'>
        <p className='noticia-tipo'>Locales</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasLocal} />
      </div>
      <div className='noticias'>
        <p className='noticia-tipo'>Nacionales</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasNacional} />
      </div>
      <div className='noticias'>
        <p className='noticia-tipo'>Internacionales</p>
        <span className='separador-noticias'></span>
        <ContenedorNoticia noticias={noticiasInternacional} />
      </div>
    </div>
    </>
  )
}

export { Inicio }