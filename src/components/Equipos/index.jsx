import React from 'react';
import Equipo from './Equipo';

import data from '../../muckData/computers'
import './index.scss';

const Equipos = ({ activeFilters, toggleActiveFilters }) => {
  return (
    <section className='Equipos' style={activeFilters ? { display: 'none' } : {}}>
      <div className='Equipos__header'>
        <h1 className='title'>Equipos</h1>
        <div onClick={() => toggleActiveFilters(!activeFilters)}>
          <img src={process.env.PUBLIC_URL + '/iconos/filter.svg'} alt='Filtrar equipos' />
          <p className='Equipos__header__filters'>Filtrar</p>
        </div>
      </div>

      <article className='Equipos__body'>
        {data.map(comp =>
          <Equipo key={comp.id} data={comp} />
        )}
      </article>
    </section>
  )
}

export default Equipos;