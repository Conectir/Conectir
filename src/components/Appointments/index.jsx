import React from 'react'
import './index.scss'

export default function Appointments({ appointments = [] }) {
    return <div className="appointments">
        {appointments.length ?
            <>
            </>
            :
            <>
                <img src={process.env.PUBLIC_URL + '/img/appointment.png'} alt="empty agenda" />
                <p>Aún no has agendado tu computador</p>
                <button className='blue'>Agendar computador</button>
            </>
        }
    </div>
}