import makeStore from './makeStore'
import computers from '../muckData/computers'

const EquipmentReducer = (state, action) => {
    console.log({state, action})
    switch (action.type) {
        case 'add':
            return [...state, action.value]

        default:
            throw new Error('unKnown action¡', action)
    }
}

const [
    EquipmentProvider,
    useEquipment,
    useEquipmentDispatch
] = makeStore( EquipmentReducer, computers, 'EquipmentStore' )

export { EquipmentProvider, useEquipment, useEquipmentDispatch }