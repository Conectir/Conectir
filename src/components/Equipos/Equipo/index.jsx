import React from 'react';
import Arrow from '../../Arrow';
import { DAYS, MONTHS, OP_IMGS } from '../../../assets/utilities'
import PROGRAMS from '../../../muckData/programs'

import './index.scss';

export default function Equipo({ data, callback }) {
  const { name, collapsedSpecifications, availabilityDates, operatingSystem, software } = data
  const scheduleRef = React.useRef()
  const [dateSelected, setDateSelected] = React.useState(null)

  const getSoftwareImg = sf => {
    sf = PROGRAMS.filter(p => p.id === sf.id)[0]
    return <div className='Equipo__body__header__logos__item' key={sf.id}>
      <img alt={sf.name} src={`${process.env.PUBLIC_URL}${/programas/}${sf.img}`} />
    </div>
  }

  const getOpImg = _ => {
    return <img alt={name}
      src={`${process.env.PUBLIC_URL}${/programas/}${OP_IMGS[operatingSystem]}`}
    />
  }

  const moveSchedule = val => {
    const step = (scheduleRef.current.clientWidth / 2) * val
    scheduleRef.current.scrollBy({
      top: 0,
      left: step,
      behavior: 'smooth'
    });
  }

  const handleSelect = _ => {
    if (dateSelected) {
      let temp = { ...data }
      temp.availabilityDates = [dateSelected.val]
      callback(temp)
    }
  }

  return (
    <div className='Equipo'>

      <div className='Equipo__body'>
        <div className='Equipo__body__img'>
          <img src={process.env.PUBLIC_URL + '/img/Computer.png'} alt={name} />
        </div>

        <div className='Equipo__body__header'>
          <h1 className='Equipo__body__header__title'>{name}</h1>
          <p className='Equipo__body__header__ghz'>{getOpImg()} {collapsedSpecifications}</p>

          {callback ?
            <div className='Equipo__body__header__logos'>
              {software.map(getSoftwareImg)}
            </div>
            :
            <>
              <p>Ram: 8GB</p>
              <p>GPU: 4GB</p>
            </>
          }

        </div>
      </div>

      {!callback && <>
        <h3>Programas</h3>
        <div className='Equipo__body__header__logos'>
          {software.map(getSoftwareImg)}
        </div>
      </>}


      <div className='Equipo__schedule'>
        <div className='Equipo__schedule__header'>
          <h1 className='Equipo__schedule__header__title'>HORARIO</h1>
          <div className='Equipo__schedule__header__btns'>
            <div onClick={_ => moveSchedule(-1)}><Arrow /></div>
            <div onClick={_ => moveSchedule(1)}><Arrow /></div>
          </div>
        </div>

        {!callback && <h3>Detalles</h3>}

        <div className='Equipo__schedule__body'>
          <section ref={scheduleRef}>
            {
              availabilityDates.map((scheduleDate, index) =>
                <GetScheduleDate
                  key={scheduleDate.scheduledDateInMilis}
                  scheduleDate={scheduleDate}
                  isSelected={index === dateSelected?.index}
                  callback={val => setDateSelected(val ? { val, index } : null)}
                />
              )
            }
            {!callback &&
              <div className="Equipo__proyecto">
                <p>Proyecto definido</p>
                <span>DEFAULT</span>
              </div>
            }
          </section>
        </div>
      </div>

      {callback &&
        <button
          onClick={handleSelect}
        >Seleccionar</button>
      }
    </div>
  )
}

function GetScheduleDate({ scheduleDate, isSelected, callback }) {
  const date = new Date(scheduleDate.scheduledDateInMilis)
  const endingDate = new Date(scheduleDate.scheduledDateInMilis + (scheduleDate.availabilityTime.value * 3600000))

  const getTime = date => {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
  }

  return (
    <div className='Equipo__schedule__body__date' >
      <p>{MONTHS[date.getMonth()]},<br /> {DAYS[date.getDay()]} {date.getDate()}</p>
      <div
        className={`Equipo__schedule__body__date__hour ${isSelected ? 'selected' : ''}`}
        onClick={_ => callback(isSelected ? null : scheduleDate)}
      >
        <span>{getTime(date)}</span> - <span>{getTime(endingDate)}</span>
      </div>
    </div>
  )
}