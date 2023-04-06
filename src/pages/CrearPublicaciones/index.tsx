import { useState } from 'react';
import { ImageListType } from "react-images-uploading";
import axios from 'axios';
import { BoxCategorias, DragAndDrop, EditorTexto } from '../../components';
import './styles.css'
import Select from 'react-select';

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import toolbar from './../../toolbar'


const options: any[] = [
  { value: 'local', label: 'Local' },
  { value: 'nacional', label: 'Nacional' },
  { value: 'internacional', label: 'Internacional' },
];



const CrearPublicaciones = () => {
  const todasCategorias : string[] = []
  const [images, setImages] = useState<ImageListType>([]);
  const [categorias, setCategorias] = useState(todasCategorias);
  const [categoria, setCategoria] = useState('');
  const [tipoNoticia, setTipoNoticia] = useState({ value: '', label: 'Tipo' },);
	const [content, setContent] = useState('');
  
  
  const {quill, quillRef}= useQuill({
    modules: {
      toolbar: toolbar
    }
  })



  const handleChange = (selectedOption:any) => {
    setTipoNoticia(selectedOption);
  }

  
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
    let contenido = JSON.stringify(quill.getContents());
    let tipo = tipoNoticia.value;

    if (titular && categoria[0] && resumen && contenido && tipo && images[0]){
      const fd = new FormData();

      fd.append('titular',titular);
      fd.append('categorias', JSON.stringify(categoria));
      fd.append('resumen',resumen);
      fd.append('contenido',contenido);
      fd.append('tipo',tipo);
      fd.append('portadaImg',images[0].file!)

      axios.post("http://localhost:8080/api/publicaciones", fd, {})
      .then(res => {
        setImages([]);
        setCategorias([]);

        Array.from(document.querySelectorAll('input')).forEach(
          input => (input.value = "")
        );
    
        Array.from(document.querySelectorAll('textarea')).forEach(
          input => (input.value = "")
        );

      });

    }else{
      alert('Ingrese todo los datos');
    }

    
  }


  return <>
    <div className="crear-publicacion">
      <form id='formPublicacion' onSubmit={guardarPublicacion}>

        <div className="informacion">
          <div className="informacio-publicacion">
            <div className='informacion-cabecera'>
            <p>Datos de la publicación</p>
            <Select
              value={tipoNoticia}
              onChange={handleChange}
              options={options}
              className='select-tipo'
              placeholder= 'Tipo'
            />
            </div>
            
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
          {/* <textarea id="contenido" placeholder="Contenido" rows={10}></textarea> */}
          {/* <EditorTexto placeholder="Contenido" setContent={setContent} /> */}
          <div ref={quillRef}></div>
        </div>
        <button >Crear publicación</button>
      </form>

    </div>
  </>
}

export { CrearPublicaciones };