import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Noticia from '../../interfaces/noticia';
import moment from "moment";
import './styles.css';

import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';




const VerPublicacion = () => {
  const publicacion: Noticia = {}
  const params = useParams();
  const [noticia, setNoticia] = useState(publicacion);

  const {quill, quillRef} = useQuill({
    readOnly: true,
    modules:{toolbar: false}
  })


  useEffect(()=>{
    axios.get(`http://localhost:8080/api/publicaciones/noticia/${params.id}`, {})
    .then(res => {
      setNoticia(res.data.payload);
      quill.setContents(JSON.parse(res.data.payload.contenido!) || '')
    });
  },[quill]);




    return(
        <>
        <main className="contenedor-noticia">
          <div className="tipo-fecha">
            <span>{noticia.tipo?.toUpperCase()}</span>
            <span>{moment(noticia.createdAt).format("DD/MM/YYYY")}</span>
          </div>
          <h3 className="titular">{noticia.titular}</h3>
          <p className="resumen">{noticia.resumen}</p>
          <figure className="portada">
            <img src={ noticia.portada ? `http://localhost:8080/api/publicaciones/obtenerPortada/${noticia.portada!}` : ''} alt={noticia.titular} />
          </figure>
          {/* <div className="contenido" defaultValue={noticia.contenido}>{noticia.contenido}</div> */}
          <div className="contenido">
            <article ref={quillRef}></article>
          </div>
        </main>
        </>
    )
}

export  { VerPublicacion };