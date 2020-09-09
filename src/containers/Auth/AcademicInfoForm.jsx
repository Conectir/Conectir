import React from 'react'

export default function AcademicInfoForm({ actions }) {
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
        <input id='confirm' type='password' placeholder='Confirma tu contraseña' />

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