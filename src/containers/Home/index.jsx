import React from 'react';
import './index.scss';

import BannerFindTeam from '../../components/BannerFindTeam';
import Equipos from '../../components/Equipos';
import Filters from '../../components/Filters';

const Home = () => {

  const [showFilters, setShowFilter] = React.useState(false);

  return(
      <section className='Home'>
        <main>
          <BannerFindTeam />
          <Equipos activeFilters={showFilters} toggleActiveFilters={setShowFilter} />
        </main>

        <Filters activeFilters={showFilters} toggleActiveFilters={setShowFilter}/>
      </section>
  )
}

export default Home;