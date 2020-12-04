import {MarvelHeroeModel} from '../../models/marvelHeroes/MarvelHeroeModel'
import {MarvelHeroesReducerModel} from '../../models/marvelHeroes/MarvelHeroesReducerModel'

const marvelHeroes = {} as MarvelHeroeModel

const marvelHeroesInitialState: MarvelHeroesReducerModel = {
  marvelHeroes: [marvelHeroes],
  isLoadingData: true,
  fetchMarvelHeroes: () => {},
  totalMarvelHeroes: 0,
}

export {marvelHeroesInitialState}
