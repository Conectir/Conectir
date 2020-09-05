import React from 'react';
import './index.scss';

import Equipo from './Equipo';

const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const Equipos = ({activeFilters, toggleActiveFilters}) => {
  return(
    <section className='Equipos' style={activeFilters ? {display: 'none'} : {}}>
    <div className='Equipos__header'>
      <h1 className='title'>Equipos</h1>
      <div onClick={() => toggleActiveFilters(!activeFilters)}>
        <img src={process.env.PUBLIC_URL + '/iconos/filter.svg'} alt='Filtrar equipos' />
        <p className='Equipos__header__filters'>Filtrar</p>
      </div>
    </div>

      <article className='Equipos__body'>
        {data.map( (_, i) => <Equipo key={i}/> )}
      </article>
    </section>
  )
}

export default Equipos;