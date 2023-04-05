import moment from 'moment';
import Noticia from '../../interfaces/noticia';
import './styles.css'
import { NavLink } from 'react-router-dom';


const ContenedorNoticia = (props:any) => {
  return (
    <>
    {props.noticias.map((noticia:Noticia) => {
          return(
            
              <div className='noticia-card' key={noticia._id}>
                <NavLink to={`/noticia/${noticia._id}`}>
                  <h3 className='noticia-titular'>
                    {noticia.titular}
                  </h3>
                </NavLink>
                <figure>
                  <img src={`http://localhost:8080/api/publicaciones/obtenerPortada/${noticia.portada}`} alt={noticia.titular} />
                </figure>
                <span>{moment(noticia.createdAt).format("DD/MM/YYYY")}</span>
                <p>{noticia.resumen}</p>
              </div>
          )
        })
        }
    </>
  )
}

export { ContenedorNoticia }
