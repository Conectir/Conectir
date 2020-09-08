import React from 'react'
import './index.scss'

export default function Home() {
  return (
    <section className='Home'>
      <article></article>
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