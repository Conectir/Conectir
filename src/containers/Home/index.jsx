import React from 'react'
import Appointments from '../../components/Appointments'
import EVENTS from '../../muckData/events'
import './index.scss'
import Event from '../../components/Event'

export default function Home() {
  return (
    <section className='Home'>
      <article>
        <h1>Próximas citas</h1>
        <Appointments />
        { EVENTS.map( evt => <Event key={evt.date} title={evt.title} milisDate={evt.date} duration={evt.duration} />) }
      </article>
      <article>
        <h1>Blog</h1>

        <div>
          <img src={process.env.PUBLIC_URL + '/img/blog1.jpg'} alt="working" />
          <div>
            <h4>Tips para volver a clases</h4>
            <p>Haz una lista de todo lo que necesitas comprar y todo lo que necesitas hacer. Te sentirás más realizado y capaz de luchar</p>
          </div>
        </div>

        <img src={process.env.PUBLIC_URL + '/img/publicidad.jpg'} alt='publicidad' />

        <div>
          <img src={process.env.PUBLIC_URL + '/img/blog1.jpg'} alt="working" />
          <div>
            <h4>Tips para volver a clases</h4>
            <p>Haz una lista de todo lo que necesitas comprar y todo lo que necesitas hacer. Te sentirás más realizado y capaz de luchar</p>
          </div>
        </div>

        <img src={process.env.PUBLIC_URL + '/img/publicidad-1.jpg'} alt='publicidad' />

      </article>
      <article></article>
    </section>
  )
}