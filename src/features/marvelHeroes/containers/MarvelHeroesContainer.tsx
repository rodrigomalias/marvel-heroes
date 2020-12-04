import {connect} from 'react-redux'
import {fetchMarvelHeroes} from '../../../store/marvelHeroes/Action'
import {MarvelHeroes} from '../components/MarvelHeroes'

const marvelHeroesReducerData = ({marvelHeroesReducer}: any) => {
  return marvelHeroesReducer
}

export default connect(marvelHeroesReducerData, {
  fetchMarvelHeroes,
})(MarvelHeroes)
