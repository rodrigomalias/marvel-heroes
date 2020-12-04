import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import apiMiddleware from './Middleware'
import thunkMiddleware from 'redux-thunk'
import {marvelHeroesReducer} from './marvelHeroes/Reducer'

const middlewares = [apiMiddleware, thunkMiddleware]

const rootReducer = combineReducers({
  marvelHeroesReducer,
})

const composeEnhancers = compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
