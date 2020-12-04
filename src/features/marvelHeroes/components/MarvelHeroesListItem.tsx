import React from 'react'
import {Image, Text, View} from 'react-native'
import {MarvelHeroModel} from '../../../models/marvelHeroes/MarvelHeroModel'
import {StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

interface MarvelHeroesListItemProps {
  marvelHero: MarvelHeroModel
}

function MarvelHeroesListItem(props: MarvelHeroesListItemProps) {
  const {marvelHero} = props

  const imageUrl = `${marvelHero.thumbnail.path}.${marvelHero.thumbnail.extension}`
  return (
    <View style={styles.marvelHeroeContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{marvelHero.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marvelHeroeContainer: {
    flex: 1,
    margin: 5,
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
    borderBottomColor: '#C0C0C0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

export {MarvelHeroesListItem}
