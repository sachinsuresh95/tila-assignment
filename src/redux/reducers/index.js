import { combineReducers } from 'redux'
import products from './productReducer'
import compare from './compareReducer'
import compareMode from './compareModeReducer'

const rootReducer = combineReducers({
    compare,
    products,
    compareMode
})

export default rootReducer