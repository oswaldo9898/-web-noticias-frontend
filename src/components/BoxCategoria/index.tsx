import './styles.css'

const BoxCategorias = (props:any) => {


    const handleElminar = (categoria:string) =>{
        props.eliminar(categoria);
    }

    return(
        <>
        <div className='contenedor-categorias'>
            {props.categorias.map((categoria:any) => {
                return(
                    <>
                    
                    <div key={categoria} className='categoria'>
                        <span onClick={() => handleElminar(categoria)}>X</span>
                        {categoria}
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export { BoxCategorias }