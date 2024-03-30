import {combineReducers} from 'redux'
import { userReducer } from './user/reducer/user.reducer'
import { cartReducer } from './cart/reducer/cart.reducer';
import categoryReducer from './category/reducer/category.reducer';

 
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    category:categoryReducer
})

export default rootReducer;