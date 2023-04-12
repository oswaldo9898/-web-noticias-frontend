import './App.css';
import { CrearPublicaciones, Dashboard, Footer, Inicio, Login, Navbar, VerPublicacion, VerPublicacionesCategoria } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/noticias/:categoria" element={<VerPublicacionesCategoria />}></Route>
          <Route path="/noticia/:id" element={<VerPublicacion />}></Route>
          <Route path="/crear-publicacion" element={<CrearPublicaciones />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <Navbar />
    //   <Inicio />
    //   {/* <CrearPublicaciones /> */}
    // </div>
  )
}

export default App
