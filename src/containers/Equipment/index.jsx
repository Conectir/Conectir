import React from 'react'
import muckComputers from '../../muckData/computers'

import BannerFindTeam from '../../components/BannerFindTeam'
import Equipos from '../../components/Equipos'
import Filters from '../../components/Filters'

import './index.scss'
import ModalPortal from '../../components/Modal'
import { Link } from 'wouter'


export default function Equipment() {
  const [showFilters, setShowFilter] = React.useState(false)
  const [showModal, setShowModal] = React.useState(true)
  const [projects, setProjects] = React.useState(undefined)

  React.useEffect( _ => {
    //haveProjects? setProjects([]) : setProjects(null)
    setProjects(null)
    console.log(muckComputers)
  })

  const onCloseModal = _ => {
    projects? setShowModal(false) : alert('Create project')
  }

  const handleclick = _ => {
    setProjects({})
    setShowModal(false)
  }

  return (
    <section className='Equipment'>
      <main>
        <BannerFindTeam />
        <Equipos activeFilters={showFilters} toggleActiveFilters={setShowFilter} />
      </main>

      <Filters activeFilters={showFilters} toggleActiveFilters={setShowFilter} />

      <ModalPortal show={showModal} onclose={onCloseModal}>
        <h3 className='title'>¡Espera!</h3>
        <p>Antes de agendar un equipo, debes crear un proyecto.</p>
        <button className='blue' onClick={handleclick}>Crear proyecto</button>
        <Link to='/'><small>Ir a inicio</small></Link>
      </ModalPortal>
    </section>
  )
}