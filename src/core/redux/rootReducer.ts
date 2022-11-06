import { combineReducers } from 'redux'
import { HomeReducer } from '../../pages/Home/home.reducer'

const createRootReducer = () => 
  combineReducers({
      Home: HomeReducer
  })

export default createRootReducer