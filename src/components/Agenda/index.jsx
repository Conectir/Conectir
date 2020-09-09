import React from 'react'
import { Link } from 'wouter'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './index.scss'

export default function Agenda() {
    const [value, onChange] = React.useState(new Date());

    return <>
        <Calendar
            onChange={onChange}
            value={value}
        />
        <Link to='/equipment'>
            <button className='blue'>Agendar computador</button>
        </Link>
    </>
}