import {actionTypes} from "../store/actionTypes";

export const MODULE_NAME = 'filter'

const initialState = {
    selectedFilter: 'all',
    filters: []
}

const filters = (state = initialState, {type, payload}) => {
    switch (type) {

        case actionTypes.CHANGE_HERO_FILTER:
            return {
                ...state,
                // heroes: [...state.heroes],
                selectedFilter: payload,
            }
        case actionTypes.FETCH_FILTERS:
            return {
                ...state,
                filters: payload,
            }
        default:
            return state
    }
}

export default filters;