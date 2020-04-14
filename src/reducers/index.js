import { combineReducers } from 'redux'
import city from './city'
import counter from './counter'

export default combineReducers({
    city,
    count: counter
})
