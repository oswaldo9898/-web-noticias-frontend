import './App.css';
import { CrearPublicaciones, Inicio, Navbar, VerPublicacion } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/noticia/:id" element={<VerPublicacion />}></Route>
          <Route path="/crear-publicacion" element={<CrearPublicaciones />}></Route>
        </Routes>
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
