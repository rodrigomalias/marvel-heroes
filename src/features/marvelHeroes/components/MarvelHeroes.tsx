import React, {useEffect, useState} from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Dimensions,
  NativeModules,
} from 'react-native'
import {MarvelHeroesReducerModel} from '../../../models/marvelHeroes/MarvelHeroesReducerModel'
import {fetchMarvelHeroesParams} from '../../../store/marvelHeroes/Action'
import {MarvelHeroesList} from './MarvelHeroesList'

function MarvelHeroes(props: MarvelHeroesReducerModel) {
  const {
    marvelHeroes,
    fetchMarvelHeroes,
    isLoadingData,
    totalMarvelHeroes,
  } = props

  const [totalHeroesString, setTotalHeroesString] = useState<string>()

  const {TotalMarvelHeroes} = NativeModules

  useEffect(() => {
    const params: fetchMarvelHeroesParams = {
      limit: 100,
      nameStartsWith: 'a',
    }
    fetchMarvelHeroes(params)
  }, [fetchMarvelHeroes])

  if (!isLoadingData && totalMarvelHeroes > 0) {
    TotalMarvelHeroes.returnMarvelHeroString(
      totalMarvelHeroes,
      (returnString: string) => {
        setTotalHeroesString(returnString)
      }
    )
  }

  let html = isLoadingData ? (
    <View style={styles.loadSpinner}>
      <ActivityIndicator size="large" color={'#01814e'} />
    </View>
  ) : (
    <View>
      <View style={styles.totalHeroesContainer}>
        <Text style={styles.totalHeroes}>{totalHeroesString}</Text>
      </View>

      <MarvelHeroesList marvelHeroes={marvelHeroes} />
    </View>
  )

  return <View>{html}</View>
}

const styles = StyleSheet.create({
  loadSpinner: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  totalHeroesContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  totalHeroes: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export {MarvelHeroes}
