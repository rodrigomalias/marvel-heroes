import {MarvelHeroModel} from '../../models/marvelHeroes/MarvelHeroModel'
import {MarvelHeroesReducerModel} from '../../models/marvelHeroes/MarvelHeroesReducerModel'

const marvelHeroes = {} as MarvelHeroModel

const marvelHeroesInitialState: MarvelHeroesReducerModel = {
  marvelHeroes: [marvelHeroes],
  isLoadingData: true,
  fetchMarvelHeroes: () => {},
  totalMarvelHeroes: 0,
}

export {marvelHeroesInitialState}
