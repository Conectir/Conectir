import React from 'react';
import Logo from '../Logo';
import MenuIcon from '../MenuIcon';

import './index.scss';
import './MenuResponsive.scss';

import Modal from 'react-modal';

import { Link, useLocation } from 'wouter'

const Header = () => {

  const location = useLocation()[0]
  const [showResponsive, setShowResponsive] = React.useState(false);
  const [isHidden, setHidden] = React.useState(false)

  const getClassName = path => location === `/${path}` ? 'header__nav-selected' : ''

  React.useEffect(() => {
    setHidden(location === '/log')
  }, [location])

  //Ancho | Width
  React.useEffect(() => {
    function onElementWidthChange(elm, callback) {
      var lastWidth = elm.clientWidth, newWidth;
      (function run() {
        newWidth = elm.clientWidth;
        if (lastWidth !== newWidth)
          callback(newWidth)
        lastWidth = newWidth
        if (elm.onElementWidthChangeTimer)
          clearTimeout(elm.onElementWidthChangeTimer)
        elm.onElementWidthChangeTimer = setTimeout(run, 200)
      })()
    }
    onElementWidthChange(document.body, function (width) {
      if (width >= 700) {
        setShowResponsive(false);
      }
    });
  }, [])

  if (isHidden) return null
  return (
    <header className='header'>
      <Logo />
      <nav className='header__nav '>

        <Link href='/' className={getClassName('')}>
          <img src={process.env.PUBLIC_URL + '/iconos/Home.svg'} alt='Home' />
          Inicio
        </Link>

        <Link href='/proyectos' className={getClassName('proyectos')}>
          <img src={process.env.PUBLIC_URL + '/iconos/Proyecto.svg'} alt='Proyecto' />
          Proyectos
        </Link>

        <Link href='/equipos' className={getClassName('equipos')}>
          <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt='Equipo' />
          Equipo
        </Link>
      </nav>

      <div className='header__user'>
        <div className='header__user__img'></div>
        <button className='header__user__btn' disabled>Conectar</button>
      </div>

      <div className='header__responsive' onClick={() => { setShowResponsive(!showResponsive) }}>
        <MenuIcon active={showResponsive} />
      </div>

      <Modal
        isOpen={showResponsive}
        onRequestClose={() => setShowResponsive(false)}
        overlayClassName='MenuResponsive appear'
        className='MenuResponsive__body appearFromRight'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className='MenuResponsive__body__user'>
          <div className='MenuResponsive__body__user__img'></div>
          <button className='MenuResponsive__body__user__btn' disabled>Conectar</button>
        </div>

        <nav className='MenuResponsive__body__menu'>
          <Link href=''>
            <img src={process.env.PUBLIC_URL + '/iconos/Home.svg'} alt='Home' />
            Inicio
          </Link>

          <Link href=''>
            <img src={process.env.PUBLIC_URL + '/iconos/Proyecto.svg'} alt='Proyecto' />
            Proyectos
          </Link>

          <Link href='' className='header__nav-selected'>
            <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt='Equipo' />
            Equipo
          </Link>
        </nav>
      </Modal>
    </header>
  )
}

export default Header;