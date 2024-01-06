import React, { useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const initialValues = {username: '', password: ''}
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(initialValues)
    const [repeatUsername, setRepeatUsername] = useState(false)
    const handleChangeInput = (value, name) =>{
        setFormValues(()=>{
            return {...formValues, [name]:value}
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
      /*   const response = await axios.post('http://localhost:8080/register', formValues) */
        const response = await fetch(URL_API + '/register', {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: formValues.username, password: formValues.password}
        )}).then(res => res.json())
        if(response.status == 201){
            navigate('/')
        }
        if(response.status == 400){
            setRepeatUsername(true)
        }
    }
    return (
    <div>
        <div>
            <h1>Register</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' placeholder='Usuario' value={formValues.username} onChange={(e) => handleChangeInput(e.target.value, e.target.name)}/>
            {/* {formValues.username.length == 0 && <span>No puedes dejar este campo vacio</span>} */}
            <br/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder='Contraseña' value={formValues.password} onChange={(e) => handleChangeInput(e.target.value, e.target.name)} />    
            <br/>
            <input type="submit" placeholder='enviar' value={'Enviar'} />
        </form>
        {repeatUsername && <span>El nombre de usuario ya se encuentra en uso</span>}
        <span>Ya tienes cuenta?<Link to={'/'}>Click aqui</Link></span>
    </div>
    )
}

export default Register