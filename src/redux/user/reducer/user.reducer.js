
import { USER_DETAIL } from "../action/user.action"

// Initial State
const initialUserState={
   
    user:null
}



export const userReducer=(state=initialUserState,action)=>{
      switch(action.type){
       
                    case USER_DETAIL:
                      
                        return{
                            ...state,
                            user:action.payload
                        }
            default:
                return state
      }
}

