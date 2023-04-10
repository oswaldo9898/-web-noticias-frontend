import axios from 'axios';
import { useEffect, useState } from "react";
import { ContenedorNoticia } from "../../components";
import { useParams } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import './styles.css';

const VerPublicacionesCategoria = () => {
    const { categoria } = useParams();
    const [noticias, setNoticias] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [totalDocs, setTotalDocs] = useState(0);
    const [pageSelect, setPageSelect] = useState(1);


    useEffect(() => {
      axios.get(`http://localhost:8080/api/publicaciones/${categoria}?limit=${9}&page=${pageSelect}`, {})
      .then(res => {
        setNoticias(res.data.payload.docs);
        setPageCount(res.data.payload.totalPages);
        setTotalDocs(res.data.payload.totalDocs)
      });

    }, [pageSelect]);


    const handlePageClick = (event:any) => {
      const pageClick = event.selected + 1
      setPageSelect(pageClick);
    };


  return (
    <>
    <div className='contenedor-principal'>
      <div className='noticias-categoria'> 
      <div className='noticias'>
        <ContenedorNoticia noticias={noticias} />
      </div>
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
      </div>
    </div>
    </>
  )
}

export { VerPublicacionesCategoria }