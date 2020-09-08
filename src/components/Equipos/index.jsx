import React from 'react'
import Equipo from './Equipo'
import Modal from '../Modal'
import { useEquipment } from '../../contexts/Equipment'
import { useLocation } from 'wouter'

import './index.scss'

const Equipos = () => {
  const [, setLocation] = useLocation()
  const computers = useEquipment()
  const [selected, setSelected] = React.useState(null)

  return (<>
    <section className='Equipos'>
      <div className='Equipos__header'>
        <h1 className='title'>Equipos</h1>
      </div>

      <article className='Equipos__body'>
        {computers.map(comp =>
          <Equipo
            key={comp.id}
            data={comp}
            callback={setSelected}
          />
        )}
      </article>
    </section>

    <Modal show={selected} onclose={_ => setSelected(null)}>
      <Equipo data={selected} />
      <div>
        <button onClick={_ => setSelected(null)} >Cancelar</button>
        <button
          className='border'
          onClick={_ => {
            setLocation('/')
          }}
        >Agendar</button>
      </div>
    </Modal>
  </>)
}

export default Equipos;