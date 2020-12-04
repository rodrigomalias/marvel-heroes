import {SET_MARVEL_HEROES, FETCH_MARVEL_HEROES} from './Types'
import {API_END, API_START} from '../Api'

import {marvelHeroesInitialState} from './State'

function marvelHeroesReducer(
  state = marvelHeroesInitialState,
  action: {type: string; payload: any}
) {
  switch (action.type) {
    case SET_MARVEL_HEROES:
      return {
        ...state,
        totalMarvelHeroes: action.payload.data.total,
        marvelHeroes: action.payload.data.results,
      }
    case API_START:
      if (action.payload === FETCH_MARVEL_HEROES) {
        return {
          ...state,
          isLoadingData: true,
        }
      }
      return {
        ...state,
      }
    case API_END:
      if (action.payload === FETCH_MARVEL_HEROES) {
        return {
          ...state,
          isLoadingData: false,
        }
      }
      return {
        ...state,
      }
    default:
      return {
        state,
        isLoadingData: true,
      }
  }
}

export {marvelHeroesReducer}
