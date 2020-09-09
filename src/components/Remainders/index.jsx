import React from 'react'
import './index.scss'

export default function Remainders() {
    return <>
        <h1>Mis recordatorios</h1>
        <div className='Remainders'>
            <img src={process.env.PUBLIC_URL + '/img/no_remainder.png'} alt="remainder" />
            <p>Aún no has agregado proyectos</p>
        </div>
    </>
}