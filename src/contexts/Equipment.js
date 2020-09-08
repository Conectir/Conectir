import makeStore from './makeStore'
import data from '../muckData/computers'

export const INITIAL_EQUIPMENT = data

export const ACTIONS = {
    FILTER_BY_TIME: 0,
    RESET_STATE: 1
}

const EquipmentReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.RESET_STATE:
            return INITIAL_EQUIPMENT

        case ACTIONS.FILTER_BY_TIME:
            return [state[0]]

        default:
            throw new Error('unKnown action¡', action)
    }
}

const [
    EquipmentProvider,
    useEquipment,
    useEquipmentDispatch
] = makeStore({
    initialState: data,
    guivenReducer: EquipmentReducer,
    //key: 'EquipmentStore'
})

export { EquipmentProvider, useEquipment, useEquipmentDispatch }