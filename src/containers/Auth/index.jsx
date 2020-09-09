import React from 'react'
import LogInForm from './logInForm'
import SignUpForm from './SignUpForm'

import './index.scss'
import { ACTIONS, useUser, useUserDispatch } from '../../contexts/User'

export default function Auth() {
    const [form, setForm] = React.useState(false)
    const user = useUser()
    const userDispatch = useUserDispatch()

    const setLogingForm = _ => setForm(false)
    const setSingUpForm = _ => setForm(true)
    const logout = _ => userDispatch({ type: ACTIONS.LOGGING_OUT })

    return <>
        {!user ?
            <section className='Auth'>
                <img src="https://image.freepik.com/vector-gratis/trabajo-equipo-negocios-resolver-acertijos-encontrar-ideas_4968-469.jpg" alt="" />
                <aside>
                    {form
                        ? <SignUpForm setLoging={setLogingForm} />
                        : <LogInForm setSignUp={setSingUpForm} />
                    }
                </aside>
            </section>
            :
            <button onClick={logout}>logout</button>
        }
    </>
}
