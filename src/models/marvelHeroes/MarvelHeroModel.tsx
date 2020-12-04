import {MarvelHeroThumbnailModel} from './MarvelHeroThumbnailModel'

export type MarvelHeroModel = {
  id: number
  name: string
  description: string
  thumbnail: MarvelHeroThumbnailModel
}
