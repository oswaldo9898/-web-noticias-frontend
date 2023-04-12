import './styles.css';

const Login = () => {
    return (
        <>
        <div className='contenedor-login'>
            <form action="">
                <h3>INICIAR SESION</h3>
                <div className='login-email'>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" name='email' id='email'/>
                </div>
                <div className='login-password'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" name="ingresar" id="ingresar" value='Iniciar sesión' />
                <p>¿No recuerda su contraseña? <span>Clic Aquí</span></p>
            </form>

        </div>
        </>
    )
}

export { Login }