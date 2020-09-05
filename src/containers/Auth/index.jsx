import React from 'react'
import { useLocation } from 'wouter';

const ACTIONS = {
    SET_SIGNUP: 0,
    SET_LOGGING: 1,
}

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
        {/*<img src="https://img.freepik.com/free-vector/man-multitasking-work_23-2148390869.jpg" alt="" />*/}
        <aside>
            <div className="row">
                {isSingUp
                    ? <SignUpForm callback={callback} />
                    : <LogInForm callback={callback} />
                }
            </div>
        </aside>
    </section>
}

const USERMOCK = { name: "mock", lastName: "last", country: "Colombia", city: "Cali", instEmail: "correo@institucional.com", password: "2n439n3", study: "Ciencias Sociales", terms: true }

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

    return <>
        <h3>Inicia Sesión</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor='instEmail'>Correo</label>
            <input id='instEmail' type='email' placeholder='Escribe aquí tu correo' required value={info.instEmail} onChange={handleChange}/>

            <label htmlFor='password'>Contraseña</label>
            <input id='password' type='password' placeholder='Escribe aquí tu contraseña' required value={info.password} onChange={handleChange}/>

            <small>¿Olvidaste tu contraseña?</small>
            <button>Ingresar</button>
        </form>
        <hr />
        <button onClick={onSubmit}>Continuar con Github</button>
        <p>¿No tienes cuenta? <strong onClick={changeToSignUp}>registrate aquí</strong></p>
    </>
}

function SignUpForm({ callback }) {
    const [, setLocation] = useLocation()
    const [step, setStep] = React.useState(0)
    const [user, setUser] = React.useState(undefined)

    const goBack = _ => step > 0
        ? setStep(step - 1)
        : callback(ACTIONS.SET_LOGGING)

    const goForward = userChanges => {
        const newUser = {...user, ...userChanges}
        setUser(newUser)

        if (step === 0) setStep(step + 1)
        else registerUser(newUser)
    }

    const registerUser = user => {
        localStorage.setItem('user', JSON.stringify(user))
        setLocation('/')
    }

    return <>
        {step === 0
            ? <BasicInfo actions={{ goBack, goForward }} />
            : <AcademicInfo actions={{ goBack, goForward }} />
        }
    </>
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

    return <>
        <h3>Información básica</h3>
        <p>Queremos verificar que seas una persona real, porfavor completa tu información</p>
        <label htmlFor='name'>Nombre</label>
        <input id='name' type='text' placeholder='Ej: Daniel' value={info.name} onChange={handleChange} />

        <label htmlFor='lastName'>Apellido</label>
        <input id='lastName' type='text' placeholder='Ej: Martinez' value={info.lastName} onChange={handleChange} />

        <label htmlFor='country'>País</label>
        <input id='country' type='text' value={info.country} onChange={handleChange} />

        <label htmlFor='city'>Ciudad</label>
        <input id='city' type='text' value={info.city} onChange={handleChange} />

        <button onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </>
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
        temp[e.target.id] = e.target.hasOwnProperty('checked')? e.target.checked : e.target.value
        setInfo(temp)
    }

    return <>
        <h3>Información académica</h3>
        <p>Queremos verificar que seas una persona real, porfavor completa tu información</p>
        <label htmlFor='instEmail'>Correo institucional</label>
        <input id='instEmail' type='email' placeholder='tucorreo@institución.com' value={info.instEmail} onChange={handleChange}/>

        <label htmlFor='password'>Contraseña</label>
        <input id='password' type='password' placeholder='Escribe tu contraseña' value={info.password} onChange={handleChange}/>

        <label htmlFor='study'>Escoge tu área principal de estudio</label>
        <select id='study' value={info.study} onChange={handleChange}>
            <option value="DEFAULT">Selecciona un área</option>
            <option value="Deporte">Deporte</option>
            <option value="Ingienería">Ingienería</option>
            <option value="Ciencias Sociales">Ciencias Sociales</option>
        </select>

        <label htmlFor='terms'>Leí y acepto los Terminos y Condiciones</label>
        <input id='terms' type='checkbox' value={info.terms} onChange={handleChange}/>

        <button onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </>
}