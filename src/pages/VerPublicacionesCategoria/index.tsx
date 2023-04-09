import axios from 'axios';
import { useEffect, useState } from "react";
import { ContenedorNoticia } from "../../components"
import { useParams } from "react-router-dom";


const VerPublicacionesCategoria = () => {
    const { categoria } = useParams();
    const [noticias, setNoticias] = useState([]);


    useEffect(() => {
      axios.get(`http://localhost:8080/api/publicaciones/${categoria}?limit=${9}`, {})
      .then(res => {
        setNoticias(res.data.payload.docs);
      });

    }, [])


  return (
    <>
    <div className='contenedor-principal'>
      <div className='noticias'> 
        <ContenedorNoticia noticias={noticias} />
      </div>
    </div>
    </>
  )
}

export { VerPublicacionesCategoria }