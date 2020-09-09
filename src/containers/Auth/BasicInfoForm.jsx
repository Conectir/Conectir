import React from 'react'

export default function BasicInfoForm({ actions }) {
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