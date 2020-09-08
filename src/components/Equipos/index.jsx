import React from 'react'
import Equipo from './Equipo'
import { useEquipment, useEquipmentDispatch } from '../../contexts/Equipment'

import './index.scss'

const Equipos = () => {
  const computers = useEquipment()
  const dispatch = useEquipmentDispatch()

  return (
    <section className='Equipos'>
      <div className='Equipos__header'>
        <h1 className='title'>Equipos</h1>
      </div>

      <article className='Equipos__body'>
        {computers.map(comp =>
          <Equipo key={comp.id} data={comp} />
        )}
      </article>
    </section>
  )
}

export default Equipos;