import {MarvelHeroModel} from './MarvelHeroModel'

export interface MarvelHeroesReducerModel {
  marvelHeroes: Array<MarvelHeroModel>
  isLoadingData: boolean
  fetchMarvelHeroes: Function
  totalMarvelHeroes: number
}
