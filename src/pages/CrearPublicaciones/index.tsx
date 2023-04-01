import { useState } from 'react';
import { ImageListType } from "react-images-uploading";
import axios from 'axios';
import { BoxCategorias, DragAndDrop } from '../../components';
import './styles.css'

const CrearPublicaciones = () => {
  const todasCategorias : string[] = []
  const [images, setImages] = useState<ImageListType>([]);
  const [categorias, setCategorias] = useState(todasCategorias);
  const [categoria, setCategoria] = useState('');

  
  const agregarCategoria = (e:any) => {
    e.preventDefault();

    if(categoria.trim() !== '') {
      setCategorias([...categorias, categoria ]);
      setCategoria('');
    }
    
  }

  const eliminarCategoria = (nombreCategoria:string) => {
    const categoriaIndex = categorias.findIndex((e) => e === nombreCategoria);
    if( categoriaIndex > -1 ) {
      categorias.splice(categoriaIndex,1);
      setCategorias([...categorias]);
  }
  }
  
  
  
  
  const guardarPublicacion = (e:any) => {
    e.preventDefault();

    let titular = e.target.titular.value;
    let categoria = categorias;
    let resumen = e.target.resumen.value;
    let contenido = e.target.contenido.value;

    const fd = new FormData();

    fd.append('titular',titular);
    fd.append('categoria', JSON.stringify(categorias));
    fd.append('resumen',resumen);
    fd.append('contenido',contenido);
    fd.append('portadaImg',images[0].file!)

    axios.post("http://localhost:8080/api/publicaciones", fd, {})
    .then(res => {
      setImages([])

      Array.from(document.querySelectorAll('input')).forEach(
        input => {(input.value = "")
        console.log(input.value)}
      );
  
      Array.from(document.querySelectorAll('textarea')).forEach(
        input => {(input.value = "")
        console.log(input.value)}
      );

    });
  }


  return <>
    <div className="crear-publicacion">
      <form id='formPublicacion' onSubmit={guardarPublicacion}>

        <div className="informacion">
          <div className="informacio-publicacion">
            <p>Datos de la publicación</p>
            <textarea id="titular" className='caja-texto titular' placeholder="Titular de la noticia"></textarea>
            <div>
              <input value={categoria} type="text" id="categoria" className='caja-texto' placeholder="Categoria" onChange={(e) => setCategoria( e.target.value)}/>
              <button className='btn-categoria' onClick={agregarCategoria}>Agregar</button>
              <BoxCategorias categorias={categorias} eliminar={eliminarCategoria} />
            </div>
            <textarea id="resumen" placeholder="Resumen" rows={5}></textarea>
          </div>
          <div className="portada-publicacion">
            <DragAndDrop setImages={setImages} images={images}/>
          </div>
        </div>

        <div className="contenido">
          <textarea id="contenido" placeholder="Contenido" rows={10}></textarea>
        </div>
        <button >Crear publicación</button>
      </form>

    </div>
  </>
}

export { CrearPublicaciones };