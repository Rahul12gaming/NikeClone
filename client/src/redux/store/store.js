import { authReducer } from '../features/auth/authReducer'
import {homeReducer} from '../features/home/homeReducer'
import {prodReducer} from '../features/product/productReducer'
import {pathReducer} from '../features/path/pathReducer'
import { cartReducer } from '../features/cart/cartReducer'
import {applyMiddleware, combineReducers,legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer=combineReducers({
    authReducer,
    homeReducer,
    prodReducer,
    pathReducer,
    cartReducer
})
const store=legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
export default store