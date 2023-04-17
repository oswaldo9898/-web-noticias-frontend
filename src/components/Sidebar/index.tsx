import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Sidebar = () => {
  return (
    <>
    <div className='sidebar-main' >
      <CDBSidebar  textColor="#fff" backgroundColor="#333" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            El Huaquillense
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/dashboard" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/dashboard/publicaciones-manager" >
              <CDBSidebarMenuItem icon="table">Publicaciones</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/profile" >
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/analytics" >
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/hero404" target="_blank" >
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            style={{
              padding: '20px 5px',
              textAlign:'center'
            }}
          >
            Todos los derechos reservados
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </>
  )
}

export { Sidebar }
