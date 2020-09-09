import React from 'react'
import { ACTIONS, useUser, useUserDispatch } from '../../contexts/User'
import { Link } from 'wouter'

import './index.scss'

export default function User() {
    const user = useUser()
    const userDispatch = useUserDispatch()

    const logout = _ => userDispatch({ type: ACTIONS.LOGGING_OUT })

    return user ?
        <div className='header__user'>
            < img className='header__user__img' src={process.env.PUBLIC_URL + '/img/' + user.img} alt="user" />
            <button className='header__user__btn' disabled>Conectar</button>

            <section className='floating_user'>
                <div className="row">
                    < img className='header__user__img' src={process.env.PUBLIC_URL + '/img/' + user.img} alt="user" />
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.instEmail}</p>
                    </div>
                </div>
                <hr/>
                <h2>Perfil de Conectir</h2>
                <h2>Ayuda</h2>
                <h2 onClick={logout}>Cerrar sesión</h2>
            </section>
        </div>
        :
        <Link to='/log'><button className='user_loging blue'>Loging</button></Link>
}