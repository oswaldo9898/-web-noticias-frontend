

const ImageSelected = ( props:any ) => {

  return (
    <div className="container-principal-imagen">
      <img className='image-selected' src={props.img} alt='image-selected' width={300} />
      <div className='container-buttons'>
        {
          props.loading
            ? <p className='loading-label'>Upload image ⏳...</p>
            : <>
              <button disabled={props.loading} onClick={() => props.onImageUpdate(0)}>Editar</button>
              <button disabled={props.loading} onClick={() => props.onImageRemove(0)}>Eliminar</button>
            </>
        }
      </div>
    </div>
  )
}

export { ImageSelected }