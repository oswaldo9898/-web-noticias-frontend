import moment from 'moment';
import Noticia from '../../interfaces/noticia';
import './styles.css'


const ContenedorNoticia = (props:any) => {
  return (
    <>
    {props.noticias.map((noticia:Noticia) => {
          return(
            <div className='noticia-card' key={noticia._id}>
              <h3 className='noticia-titular'>
                {noticia.titular}
              </h3>
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
