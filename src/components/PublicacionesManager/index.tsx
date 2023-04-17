import { PublicacionesTabla } from "../PublicacionesTabla"
import { Sidebar } from "../Sidebar"
import './styles.css'

const PublicacionesManager = () => {
    return(
        <>
        <div className="dashboard-main">
        <Sidebar />
        <div className="tabla">
            <PublicacionesTabla />
        </div>
        </div>
        </>
    )
}

export { PublicacionesManager }