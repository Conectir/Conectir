import React from 'react'
import { Link } from 'wouter'
import './index.scss'

export default function Appointments({ appointments = [] }) {
    return <>
        <h1>Próximas citas</h1>
        <div className="appointments">
            {appointments.length ?
                <>
                </>
                :
                <>
                    <img src={process.env.PUBLIC_URL + '/img/appointment.png'} alt="empty agenda" />
                    <p>Aún no has agendado tu computador</p>
                    <Link to='/equipment'>
                        <button className='blue'>Agendar computador</button>
                    </Link>
                </>
            }
        </div>
    </>
}