import React from 'react'

export default function Identificate({ actions }) {
    const [info, setInfo] = React.useState(undefined)

    const selectFigure = _ => setInfo({ rol: 'Estudiante' })

    return <div className='signUp identificate'>
        <h3 className='title'>¿Con quien te identificas?</h3>
        <p>Escoge  la opción de perfil que más  se ajuste a ti</p>

        <div className="row">
            <figure className={info ? 'center active' : 'center'} onClick={selectFigure} >
                <img src={process.env.PUBLIC_URL + '/img/student.png'} alt="estudiante" />
                <p>Estudiante</p>
            </figure>

            <figure className='center' aria-disabled>
                <img src={process.env.PUBLIC_URL + '/img/donater.png'} alt="donante" />
                <p>Donante</p>
            </figure>
        </div>

        <button className='border' onClick={actions.goBack}>Regresar</button>
        <button onClick={_ => actions.goForward(info)}>Continuar</button>
    </div>
}