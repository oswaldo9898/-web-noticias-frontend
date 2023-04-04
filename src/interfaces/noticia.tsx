
interface Noticia {
    _id: string,
    categorias: Array<string>,
    contenido: string,
    createdAt: string,
    portada: string,
    resumen: string,
    tipo: string,
    titular: string,
    updatedAt: string,
}

export default Noticia;