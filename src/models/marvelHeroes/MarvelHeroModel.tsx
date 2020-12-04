import {MarvelHeroeThumbnailModel} from './MarvelHeroeThumbnailModel'

export type MarvelHeroeModel = {
  id: number
  name: string
  description: string
  thumbnail: MarvelHeroeThumbnailModel
}
