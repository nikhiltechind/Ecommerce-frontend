import { ADD_CART_ITEMS } from "../action/addcartitems.action"
import { CLEAR_CART_ITEM } from "../action/clearitem.action"
import { REMOVE_CART_ITEM } from "../action/removecartitem.action"
import { SHOW_CART } from "../action/showcart.action"


// Initial State
const initialCartState={

    cartitems:[],
    showCart:false
    
}

const addItems= (state,item) =>{
    let idx=state.cartitems.find(ele=>ele.id===item.id)
    console.log(idx)
    if(idx===undefined){
 return [...state.cartitems,{...item,quantity:1}]
  
    }
    else{
 
        
     const idd=  state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })
  

         state.cartitems[idx].quantity++;
     
        
    }
    return state.cartitems;
}

const removeItem= (state,item) =>{
    let idx;
    state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })

    if(state.cartitems[idx].quantity===1){
        state.cartitems.splice(idx,1);
    }
    else{
        state.cartitems[idx].quantity--;
    }
    return state.cartitems

}

const clearItem = (state,item) =>{
    let idx;
    state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })
   state.cartitems.splice(idx,1)

    return state.cartitems
}




export const cartReducer=(state=initialCartState,action)=>{
      switch(action.type){
        case ADD_CART_ITEMS:
          
            return{
                
                ...state,
                cartitems:addItems(state,action.payload)  //Updating State
            }
       
            case REMOVE_CART_ITEM:

            return{
                ...state,
                cartitems:removeItem(state,action.payload)
            }
            
        
         case CLEAR_CART_ITEM:
            return{
                ...state,
                cartitems:clearItem(state,action.payload)
            }

           
                case SHOW_CART:
                    return{
                        ...state,
                        showCart:action.payload
                    }
                   
            default:
                return state
      }
}

