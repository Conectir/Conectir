import React from 'react'
import { ACTIONS, useUserDispatch } from '../../contexts/User'
import { useLocation } from 'wouter'

export default function LogInForm({ setSignUp }) {
    const [, setLocation] = useLocation()
    const userDispatch = useUserDispatch()
    const [info, setInfo] = React.useState({ instEmail: '', password: '' })

    const handleChange = e => {
        let temp = { ...info }
        temp[e.target.id] = e.target.value
        setInfo(temp)
    }

    const onSubmit = e => {
        e.preventDefault && e.preventDefault()
        userDispatch({
            type: ACTIONS.LOGGING,
            value: info
        })
        setLocation('/')
    }

    return <div className='loging'>
        <h3 className='title'>Inicia Sesión</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor='instEmail'>Correo</label>
            <input id='instEmail' type='email' placeholder='Escribe aquí tu correo' required value={info.instEmail} onChange={handleChange} />

            <label htmlFor='password'>Contraseña</label>
            <input id='password' type='password' placeholder='Escribe aquí tu contraseña' required value={info.password} onChange={handleChange} />

            <small>¿Olvidaste tu contraseña?</small>
            <button>Ingresar</button>
        </form>
        <hr />
        <button onClick={onSubmit}>Continuar con Github</button>
        <p>¿No tienes cuenta? <strong onClick={setSignUp}>registrate aquí</strong></p>
    </div>
}