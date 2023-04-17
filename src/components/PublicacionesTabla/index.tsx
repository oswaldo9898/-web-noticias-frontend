import axios from "axios";
import { useEffect, useState } from "react";
import Noticia from '../../interfaces/noticia';
import moment from "moment";
import './styles.css';
import ReactPaginate from "react-paginate";


const PublicacionesTabla = () => {
  
  const [noticias, setNoticias] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageSelect, setPageSelect] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/publicaciones?limit=${9}&page=${pageSelect}`, {})
    .then(res => {
      setNoticias(res.data.payload.docs);
      setPageCount(res.data.payload.totalPages);
    });

  }, [pageSelect]);

  const handlePageClick = (event:any) => {
    const pageClick = event.selected + 1
    setPageSelect(pageClick);
  };

  return (
    <>
    <div className="container-sm">
      <div className="col ">
        <div className="col mt-4 mb-3">
          <h3>Publicaciones</h3>
        </div>
        <div className="col-11">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Titular</th>
            <th scope="col">Resumen</th>
            <th scope="col">Tipo</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          { noticias.map((noticia:Noticia) => {
            return <>
            <tr>
            <th scope="row"><p className="h6">{noticia.titular}</p></th>
            <td><p>{noticia.resumen}</p></td>
            <td><p>{noticia.tipo?.toUpperCase()}</p></td>
            <td>{moment(noticia.createdAt).format("DD/MM/YYYY")}</td>
            <td>
              <button type="button" className="btn btn-success btn-sm">Editar</button>
            </td>
          </tr>
            </>
          })
          }
        </tbody>
        <tfoot>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Siguiente >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Aterior"
          renderOnZeroPageCount={null}
          className='pagination'
        />
        </tfoot>
      </table>
        </div>
      </div>
    </div>
      
    </>
  )
}

export { PublicacionesTabla }