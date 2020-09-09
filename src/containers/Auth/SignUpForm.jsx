import React from 'react'
import Identificate from './Identificate'
import BasicInfoForm from './BasicInfoForm'
import AcademicInfoForm from './AcademicInfoForm'

import { ACTIONS, useUserDispatch } from '../../contexts/User'
import { useLocation } from 'wouter'

export default function SignUpForm({ setLoging }) {
    const [, setLocation] = useLocation()
    const userDispatch = useUserDispatch()
    const [step, setStep] = React.useState(0)
    const [user, setUser] = React.useState(undefined)

    const goBack = _ => step > 0 ? setStep(step - 1) : setLoging()

    const goForward = userChanges => {
        const newUser = { ...user, ...userChanges }
        setUser(newUser)
        step < 2 ? setStep(step + 1) : registerUser(newUser)
    }

    const registerUser = user => {
        userDispatch({
            type: ACTIONS.SIGNING,
            value: user
        })
        setLocation('/')
    }

    return <>
        {step === 0
            ? <Identificate actions={{ goBack, goForward }} />
            : step === 1 ? <BasicInfoForm actions={{ goBack, goForward }} />
                : <AcademicInfoForm actions={{ goBack, goForward }} />
        }
    </>
}