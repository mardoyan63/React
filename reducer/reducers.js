import { combineReducers } from 'redux';
import Profiles from './Profiles'
import Filter from './filterItems'
const Reducer = combineReducers({
    Profiles,
    Filter
})

export default Reducer;