import {SET_MARVEL_HEROES, FETCH_MARVEL_HEROES} from './Types'
import {apiRequest} from '../Api'

export interface fetchMarvelHeroesParams {
  limit: number
  nameStartsWith: string
}

function fetchMarvelHeroes(params: fetchMarvelHeroesParams) {
  return apiRequest({
    url: `/v1/public/characters?limit=${params.limit}&nameStartsWith=${params.nameStartsWith}`,
    method: 'GET',
    onSuccess: (data: any) => {
      return {
        type: SET_MARVEL_HEROES,
        payload: data,
      }
    },
    onFailure: () => {
      console.log('Error occured loading goals')
    },
    label: FETCH_MARVEL_HEROES,
  })
}

export {fetchMarvelHeroes}
