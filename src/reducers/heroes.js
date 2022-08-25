import {actionTypes} from "../store/actionTypes";
import {createReducer } from "@reduxjs/toolkit";

export const MODULE_NAME = 'heroes'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = createReducer(initialState, builder => {
    builder
        .addCase(actionTypes.FETCH_HEROES, state =>{
            state.heroesLoadingStatus = 'loading';
        })
        .addCase(actionTypes.FETCH_HEROES_SUCCESS, (state, action)=>{
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload
        })
        .addCase(actionTypes.FETCH_HEROES_ERROR,  state =>{
            state.heroesLoadingStatus = 'error';
        })
        .addCase(actionTypes.ADD_HERO, (state, action)=>{
            state.heroes.push(action.payload)
        })
        .addCase(actionTypes.DELETE_HERO, (state, action)=>{
            state.heroes = state.heroes.filter(item => item.id !== action.payload)
        })
        .addDefaultCase(()=>{})
})


// const heroes = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case actionTypes.FETCH_HEROES:
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading',
//             }
//         case actionTypes.FETCH_HEROES_SUCCESS:
//             return {
//                 ...state,
//                 heroes: payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case actionTypes.FETCH_HEROES_ERROR:
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error',
//             }
//         case actionTypes.ADD_HERO:
//             return {
//                 ...state,
//                 heroes: [...state.heroes, payload],
//             }
//         case actionTypes.DELETE_HERO:
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== payload)
//             }
//         default:
//             return state
//     }
// }

export default heroes;