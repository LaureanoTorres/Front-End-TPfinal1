import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { verifyToken } from '../../Helpers/verifyToken'

const Login = () => {
    const navigate = useNavigate()
    const initialValues = {username: '', password: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [invalidCredentials, setInvalidCredentials] = useState(false)

/*     setInterval(verificarToken, 60000 * 5) */

verifyToken()

    const handleChangeInput = (value, name)=>{
        console.log(name)
        setFormValues(()=>{
            return {...formValues, [name]:value}
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch('http://localhost:8080/login', {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: formValues.username, password: formValues.password}
        )}).then(res => res.json())
        if(response.status == 200){
            localStorage.setItem('auth-token-app', response.accessToken)
            navigate('/home')
        }
        if(response.status == 401){
            setInvalidCredentials(true)
        }
    }

    return(
    <div>
        <div>
            <h1>Login</h1>
        </div>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' placeholder='Usuario' value={formValues.username} onChange={(e)=>handleChangeInput(e.target.value, e.target.name)}/>
            <br/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder='Contraseña' value={formValues.password} onChange={(e)=>handleChangeInput(e.target.value, e.target.name)} />    
            <br/>
            <input type="submit" value={'Enviar'} />
        </form>
        {invalidCredentials && <span>Bad Request</span>}
        <br/>
        <span>Aun no tienes cuenta?<Link to={'/Register'}>Click aqui</Link></span>
    </div>
    )
}

export default Login