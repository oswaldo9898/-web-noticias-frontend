import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const VerPublicacion = () => {
  const { id } = useParams();
    const [noticia, setNoticias] = useState([]);


    useEffect(()=>{
    axios.get(`http://localhost:8080/api/publicaciones/noticia/${id}`, {})
    .then(res => {
      setNoticias(res.data.payload);
      console.log(res.data.payload)
    });
  },[]);

    return(
        <>
        </>
    )
}

export  { VerPublicacion };