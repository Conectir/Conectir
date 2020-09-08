import React from 'react';
import Arrow from '../../Arrow';

import './index.scss';

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
const MONTHS = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const PROGRAMS_IMGS = {
  1: 'Illustrator.png', //"Adobe Full Suite",
  2: 'Photoshop.png',
  3: 'Illustrator.png',
  4: 'Premiere.png',
  6: "XD.png",
  10: 'Illustrator.png', //"Maya",
  11: 'Illustrator.png', //"Solidworks",
  12: 'Illustrator.png', //"3DS Max",
  13: 'Illustrator.png', //"Android Studio",
  14: 'Illustrator.png', //"Eclipse",
  15: 'Illustrator.png', //"Visual Studio",
  16: 'Illustrator.png', //"MySQL",
  19: 'Illustrator.png', //"MongoDB",
  20: 'Illustrator.png', //"Hadoop"
}

const OP_IMGS = {
  Windows: 'XD.png',
  Linux: 'Media.png'
}

export default function Equipo({ data }) {
  const { name, collapsedSpecifications, availabilityDates, operatingSystem, software } = data
  const scheduleRef = React.useRef()

  const getSoftwareImg = sf => {
    return <div className='Equipo__body__header__logos__item' key={sf.id}>
      <img alt={sf.name} src={`${process.env.PUBLIC_URL}${/programas/}${PROGRAMS_IMGS[sf.id]}`} />
    </div>
  }

  const getOpImg = _ => {
    return <img alt={name}
      src={`${process.env.PUBLIC_URL}${/programas/}${OP_IMGS[operatingSystem]}`}
    />
  }

  const getTime = date => {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
  }

  const getScheduleDate = d => {
    const date = new Date(d.scheduledDateInMilis)
    const endingDate = new Date(d.scheduledDateInMilis + (d.availabilityTime.value * 3600000))

    return <div className='Equipo__schedule__body__date' key={d.scheduledDateInMilis}>
      <p>{MONTHS[date.getMonth()]},<br/> {DAYS[date.getDay()]} {date.getDate()}</p>
      <div className='Equipo__schedule__body__date__hour'>
        <span>{getTime(date)}</span> - <span>{getTime(endingDate)}</span>
      </div>
    </div>
  }
  
  const moveSchedule = val => {
    const step = (scheduleRef.current.clientWidth / 2) * val
    scheduleRef.current.scrollBy({
      top: 0,
      left: step,
      behavior: 'smooth'
    });
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

          <div className='Equipo__body__header__logos'>
            {software.map(getSoftwareImg)}
          </div>

        </div>
      </div>

      <div className='Equipo__schedule'>
        <div className='Equipo__schedule__header'>
          <h1 className='Equipo__schedule__header__title'>HORARIO</h1>
          <div className='Equipo__schedule__header__btns'>
            <div onClick={_=>moveSchedule(-1)}><Arrow /></div>
            <div onClick={_=>moveSchedule(1)}><Arrow /></div>
          </div>
        </div>

        <div className='Equipo__schedule__body'>
          <section ref={scheduleRef}>{availabilityDates.map(getScheduleDate)}</section>
        </div>
      </div>

      <button disabled>Seleccionar</button>
    </div>
  )
}