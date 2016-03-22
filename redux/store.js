import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// add middlewear
let finalCreateStore = compose(
	applyMiddleware(logger()) // development browser logging for redux
)(createStore)

export default function configureStore(initialState = {}) {
  return finalCreateStore(reducer, initialState)
}