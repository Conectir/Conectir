import React from 'react'
import { getDay, getTime } from '../../assets/utilities'
import './index.scss'

export default function Event({ title, milisDate, duration }) {
    const date = new Date(milisDate)
    const endingDate = new Date(milisDate + duration)

    return <div className="Event">
        <div>
            <h3>{getDay(date).substring(0, 2)}</h3>
            <h1>{date.getDate()}</h1>
        </div>

        <div>
            <h6>{title}</h6>
            <p>{getTime(date)} - {getTime(endingDate)}</p>
        </div>
    </div>
}