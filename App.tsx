import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import MarvelHeroesContainer from './src/features/marvelHeroes/containers/MarvelHeroesContainer'
import {marvelHeroesInitialState} from './src/store/marvelHeroes/State'
import {Provider} from 'react-redux'
import store from './src/store/Store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={'#01814e'} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <MarvelHeroesContainer {...marvelHeroesInitialState} />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})

export default App
