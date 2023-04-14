import { PublicacionesTabla } from "../PublicacionesTabla"
import { Sidebar } from "../Sidebar"


const PublicacionesManager = () => {
    return(
        <>
        <div className="dashboard-main">
        <Sidebar />
        <PublicacionesTabla />
        </div>
        </>
    )
}

export { PublicacionesManager }