import { useEffect, useState } from 'react';
import { ImageListType } from "react-images-uploading";
import axios from 'axios';
import { BoxCategorias, DragAndDrop, EditorTexto, Sidebar } from '../../components';
import './styles.css'
import Select from 'react-select';

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import toolbar from './../../toolbar'
import { useParams } from 'react-router-dom';
import Noticia from '../../interfaces/noticia';


const options: any[] = [
  { value: 'local', label: 'Local' },
  { value: 'nacional', label: 'Nacional' },
  { value: 'internacional', label: 'Internacional' },
];



const CrearPublicaciones = () => {
  const publicacion: Noticia = {}
  const params = useParams();
  const todasCategorias : string[] = [];
  const [images, setImages] = useState<ImageListType>([]);
  const [categorias, setCategorias] = useState(todasCategorias);
  const [categoria, setCategoria] = useState('');
  const [tipoNoticia, setTipoNoticia] = useState({ value: '', label: 'Tipo' },);
  const [noticia, setNoticia] = useState(publicacion);

  const [datos, setDatos] = useState({
    titular: '',
    resumen: ''
  })

  
  
  const {quill, quillRef}= useQuill({
    modules: {
      toolbar: toolbar
    }
  });

  const handleInputChange = (event:any) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

  useEffect(()=>{
    if(params.id){
      axios.get(`http://localhost:8080/api/publicaciones/noticia/${params.id}`, {})
      .then(res => {
        setDatos({
          ...datos,
          ['titular']: res.data.payload.titular 
        });
        setDatos({
          ...datos,
          ['resumen']: res.data.payload.resumen 
        });
        setNoticia(res.data.payload);

        const categori = res.data.payload.categorias
        console.log(categori)
        categori.map( (cat:any) => setCategorias([...categorias, cat ]))

        ;
        console.log(categorias)
        quill.setContents(JSON.parse(res.data.payload.contenido!) || '')
      });
    }
  }, [quill])



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

        quill.setContents('')

      });

    }else{
      alert('Ingrese todo los datos');
    }

    
  }


  return <>
    <div className="dashboard-main">
      <Sidebar />
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
              
              <textarea
                value={datos.titular} 
                id="titular" 
                name='titular'
                className='caja-texto titular' 
                placeholder="Titular de la noticia"
                onChange={handleInputChange}
              ></textarea>
              <div>
                <input 
                  value={params.id ? noticia.categorias : categoria} 
                  type="text" 
                  id="categoria" 
                  className='caja-texto' 
                  placeholder="Categoria" 
                  onChange={(e) => setCategoria( e.target.value)}
                />
                <button className='btn-categoria' onClick={agregarCategoria} >Agregar</button>
                <BoxCategorias categorias={categorias} eliminar={eliminarCategoria} />
              </div>
              <textarea
                value={datos.resumen} 
                id="resumen" 
                name='resumen'
                placeholder="Resumen" 
                onChange={handleInputChange}
                className='caja-texto titular' 
                rows={5}
              ></textarea>
            </div>
            <div className="portada-publicacion">
              <DragAndDrop setImages={setImages} images={images}/>
            </div>
          </div>

          <div className="contenido">
            <div ref={quillRef}></div>
          </div>
          <button >Crear publicación</button>
        </form>

      </div>
    </div>
  </>
}

export { CrearPublicaciones };