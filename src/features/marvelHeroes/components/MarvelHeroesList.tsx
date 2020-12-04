import React from 'react'
import {View, StyleSheet} from 'react-native'
import {MarvelHeroModel} from '../../../models/marvelHeroes/MarvelHeroModel'
import {MarvelHeroesListItem} from './MarvelHeroesListItem'

interface MarvelHeroesListProps {
  marvelHeroes: Array<MarvelHeroModel>
}

function MarvelHeroesList(props: MarvelHeroesListProps) {
  const {marvelHeroes} = props

  const list: (JSX.Element | undefined)[] = marvelHeroes.map(
    (marvelHero: MarvelHeroModel, key: number) => {
      return <MarvelHeroesListItem key={key} marvelHero={marvelHero} />
    }
  )

  return <View style={styles.listContainer}>{list}</View>
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export {MarvelHeroesList}
