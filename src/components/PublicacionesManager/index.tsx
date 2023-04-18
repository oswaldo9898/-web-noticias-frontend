import { NavLink } from "react-router-dom"
import { PublicacionesTabla } from "../PublicacionesTabla"
import { Sidebar } from "../Sidebar";
import { AiOutlinePlus, AiFillEdit} from 'react-icons/ai';
import './styles.css'

const PublicacionesManager = () => {
  return (
    <>
      <div className="dashboard-main">
        <Sidebar />
        <div className="tabla">
          <div className="d-flex mt-4 mb-3 m-3">
            <h3 className="col">Publicaciones</h3>
            <NavLink to="/dashboard/publicaciones-manager/crear-publicacion" >
              <button className="btn btn-primary btn-sm fs-9 text" type="button"><AiOutlinePlus /> Nueva Publicación</button>
            </NavLink>
          </div>
          <PublicacionesTabla />
        </div>
      </div>
    </>
  )
}

export { PublicacionesManager }