import {MarvelHeroeModel} from './MarvelHeroeModel'

export interface MarvelHeroesReducerModel {
  marvelHeroes: Array<MarvelHeroeModel>
  isLoadingData: boolean
  fetchMarvelHeroes: Function
  totalMarvelHeroes: number
}
