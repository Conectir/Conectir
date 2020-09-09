import React from 'react'
import { getDay, getMonth, getTime} from '../../../assets/utilities'
import './scheduleDate.scss'

export default function ScheduleDate({ scheduleDate, isSelected, callback }) {
    const date = new Date(scheduleDate.scheduledDateInMilis)
    const endingDate = new Date(scheduleDate.scheduledDateInMilis + (scheduleDate.availabilityTime.value * 3600000))

    return (
        <div className='ScheduleDate' >
            <p>{getMonth(date)},<br /> {getDay(date)} {date.getDate()}</p>
            <div
                className={`ScheduleDate__hour ${isSelected ? 'selected' : ''}`}
                onClick={_ => callback(isSelected ? null : scheduleDate)}
            >
                <span>{getTime(date)}</span> - <span>{getTime(endingDate)}</span>
            </div>
        </div>
    )
}