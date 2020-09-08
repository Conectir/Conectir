import React from 'react'
import BannerFindTeam from '../../components/BannerFindTeam'
import ModalPortal from '../../components/Modal'
import Equipos from '../../components/Equipos'
import Filters from '../../components/Filters'

import { EquipmentProvider } from '../../contexts/Equipment'
import { Link } from 'wouter'

import './index.scss'

export default function Equipment() {
  const [showModal, setShowModal] = React.useState(false)
  const [projects, setProjects] = React.useState(undefined)

  React.useEffect(_ => {
    //haveProjects? setProjects([]) : setProjects(null)
  }, []) //eslint-disable-line

  const onCloseModal = _ => {
    projects ? setShowModal(false) : alert('Create project')
  }

  const handleclick = _ => {
    setProjects({})
    setShowModal(false)
  }

  return (
    <section className='Equipment'>

      <EquipmentProvider>
        <main>
          <BannerFindTeam />
          <Equipos />
        </main>

        <Filters />
      </EquipmentProvider>

      <ModalPortal show={showModal} onclose={onCloseModal}>
        <h3 className='title'>¡Espera!</h3>
        <p>Antes de agendar un equipo, debes crear un proyecto.</p>
        <button className='blue' onClick={handleclick}>Crear proyecto</button>
        <Link to='/'><small>Ir a inicio</small></Link>
      </ModalPortal>
    </section>
  )
}