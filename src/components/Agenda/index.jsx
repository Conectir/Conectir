import React from 'react'
import { Link } from 'wouter'

export default function Agenda() {
    return <Link to='/equipment'>
        <button className='blue'>Agendar computador</button>
    </Link>
}