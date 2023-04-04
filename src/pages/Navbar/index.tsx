import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return <>
        <header className="menu-navegacion">
            <div className='banner'>
                <p>EL HUAQUILLENSE</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Ultima hora</NavLink></li>
                    <li>Actualidad</li>
                    <li>Tendencias</li>
                    <li>Entretenimiento</li>
                    <li>Deportes</li>
                </ul>
            </nav>
        </header>
    </>
}

export { Navbar }