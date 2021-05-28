import React, {useState} from 'react';
import log from './css components/log.css';

const Login = () => {

    const [mail,setMail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error,setError] = useState (null);


    const Access = (e) => {
        e.preventDefault()

        if(!mail.trim() && !password.trim()){
            setError("Ambos campos estan vacíos") 
            return
        } else if (!mail.trim()) {
            setError("El campo 'mail' está vacío")
            return
        } else if (!password.trim()) {
            setError("El campo 'password' está vacío")
            return
        }

        setError(null);

    }

    return (

        <div className="container">
            <form id="signin">
                <div className="form-group mt-3">

                    <input 
                    onChange={(e)=>(setMail(e.target.value))} 
                    type="email" className="form-control" 
                    placeholder="Ingresa tu mail" />

                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

                    <input
                     onChange={(e)=>(setPassword(e.target.value))} 
                     type="password" className="form-control" 
                     placeholder="Introduce tu contraseña" />

                    <button onClick={Access} id="access" className="btn btn-success btn-block mt-2"> Iniciar sesión</button>

                    {
                error != null ? (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>
                ) : (
                    <div></div>
                )
            }
            
                </div>
               
            </form> 
           
        </div>
    )
}

export default Login;
