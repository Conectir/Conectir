import makeStore from './makeStore'
import data from '../muckData/computers'

export const INITIAL_EQUIPMENT = [...data]

export const ACTIONS = {
    RESET_STATE: 0,
    FILTER_BY_TIME: 1,
    FILTER_BY_PROGRAM: 2
}

const EquipmentReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.RESET_STATE:
            return INITIAL_EQUIPMENT

        case ACTIONS.FILTER_BY_TIME:
            return state.map(comp => {
                comp.availabilityDates = comp.availabilityDates.filter(date =>
                    date.availabilityTime.value < action.value
                )
                return comp
            }).filter(comp => comp.availabilityDates.length > 0)

        case ACTIONS.FILTER_BY_PROGRAM:
            return state.filter(comp =>
                comp.software.some(soft =>
                    soft.id === action.value
                )
            )

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