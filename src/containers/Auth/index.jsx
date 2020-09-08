import React from 'react'
import { useLocation } from 'wouter'

import './index.scss'

const ACTIONS = { SET_SIGNUP: 0, SET_LOGGING: 1 }
const USERMOCK = { name: "mock", lastName: "last", country: "Colombia", city: "Cali", instEmail: "correo@institucional.com", password: "2n439n3", study: "Ciencias Sociales", terms: true }

export default function Auth() {

    const [isSingUp, setSignUp] = React.useState(false)

    const callback = action => {
        switch (action) {
            case ACTIONS.SET_SIGNUP: setSignUp(true); break;
            case ACTIONS.SET_LOGGING: setSignUp(false); break;
            default: break;
        }
    }

    return <section className='Auth'>
        <img src="https://image.freepik.com/vector-gratis/trabajo-equipo-negocios-resolver-acertijos-encontrar-ideas_4968-469.jpg" alt="" />
        <aside>{
            isSingUp
                ? <SignUpForm callback={callback} />
                : <LogInForm callback={callback} />
        }
        </aside>
    </section>
}

function LogInForm({ callback }) {
    const [, setLocation] = useLocation()
    const [info, setInfo] = React.useState({ instEmail: '', password: '' })

    const handleChange = e => {
        let temp = { ...info }
        temp[e.target.id] = e.target.value
        setInfo(temp)
    }

    const onSubmit = e => {
        e.preventDefault && e.preventDefault()
        USERMOCK.instEmail = info.instEmail || USERMOCK.instEmail
        USERMOCK.password = info.password || USERMOCK.password

        localStorage.setItem('user', JSON.stringify(USERMOCK))
        setLocation('/')
    }

    const changeToSignUp = _ => callback(ACTIONS.SET_SIGNUP)

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
        <p>¿No tienes cuenta? <strong onClick={changeToSignUp}>registrate aquí</strong></p>
    </div>
}

function SignUpForm({ callback }) {
    const [, setLocation] = useLocation()
    const [step, setStep] = React.useState(0)
    const [user, setUser] = React.useState(undefined)

    const goBack = _ => step > 0
        ? setStep(step - 1)
        : callback(ACTIONS.SET_LOGGING)

    const goForward = userChanges => {
        const newUser = { ...user, ...userChanges }
        setUser(newUser)

        if (step < 2) setStep(step + 1)
        else registerUser(newUser)
    }

    const registerUser = user => {
        localStorage.setItem('user', JSON.stringify(user))
        setLocation('/')
    }

    return <>
        {step === 0
            ? <Identificate actions={{ goBack, goForward }} />
            : step === 1 ? <BasicInfo actions={{ goBack, goForward }} />
                : <AcademicInfo actions={{ goBack, goForward }} />
        }
    </>
}

function Identificate({ actions }) {
    const [info, setInfo] = React.useState(undefined)

    const selectFigure = _ => setInfo({ rol: 'Estudiante' })

    return <div className='signUp identificate'>
        <h3 className='title'>¿Con quien te identificas?</h3>
        <p>Escoge  la opción de perfil que más  se ajuste a ti</p>

        <div className="row">
            <figure className={info? 'center active' : 'center'} onClick={selectFigure} >
                <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt="estudiante" />
                <p>Estudiante</p>
            </figure>

            <figure className='center' aria-disabled>
                <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt="donante" />
                <p>Donante</p>
            </figure>
        </div>

        <button className='border' onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </div>
}

function BasicInfo({ actions }) {
    const [info, setInfo] = React.useState({
        name: '',
        lastName: '',
        country: 'Colombia',
        city: 'Cali'
    })

    const handleChange = e => {
        let temp = { ...info }
        temp[e.target.id] = e.target.value
        setInfo(temp)
    }

    return <div className='signUp basicInfo'>
        <h3 className='title'>Información básica</h3>
        <p>Queremos verificar que seas una persona real, porfavor completa tu información</p>
        <label htmlFor='name'>Nombre</label>
        <input id='name' type='text' placeholder='Ej: Daniel' value={info.name} onChange={handleChange} />

        <label htmlFor='lastName'>Apellido</label>
        <input id='lastName' type='text' placeholder='Ej: Martinez' value={info.lastName} onChange={handleChange} />

        <label htmlFor='country'>País</label>
        <input id='country' type='text' value={info.country} onChange={handleChange} />

        <label htmlFor='city'>Ciudad</label>
        <input id='city' type='text' value={info.city} onChange={handleChange} />

        <button className='border' onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </div>
}

function AcademicInfo({ actions }) {
    const [info, setInfo] = React.useState({
        instEmail: '',
        password: '',
        study: 'DEFAULT',
        terms: ''
    })

    const handleChange = e => {
        let temp = { ...info }
        temp[e.target.id] = e.target.hasOwnProperty('checked') ? e.target.checked : e.target.value
        setInfo(temp)
    }

    return <div className='signUp academicInfo'>
        <h3 className='title'>Información académica</h3>
        <p>Queremos verificar que seas una persona real, porfavor completa tu información</p>
        <label htmlFor='instEmail'>Correo institucional</label>
        <input id='instEmail' type='email' placeholder='tucorreo@institución.com' value={info.instEmail} onChange={handleChange} />

        <label htmlFor='password'>Contraseña</label>
        <input id='password' type='password' placeholder='Escribe tu contraseña' value={info.password} onChange={handleChange} />

        <label htmlFor='confirm'>Confirmar Contraseña</label>
        <input id='confirm' type='password' placeholder='Confirma tu contraseña'/>

        <label htmlFor='study'>Escoge tu área principal de estudio</label>
        <select id='study' value={info.study} onChange={handleChange}>
            <option value="DEFAULT">Selecciona un área</option>
            <option value="Deporte">Deporte</option>
            <option value="Ingienería">Ingienería</option>
            <option value="Ciencias Sociales">Ciencias Sociales</option>
        </select>

        <input id='terms' type='checkbox' value={info.terms} onChange={handleChange} />
        <label htmlFor='terms'>Leí y acepto los Terminos y Condiciones</label>

        <button className='border' onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </div>
}