import { IMessages,IActionMessages } from './messagesTypesReducers';
import {ADD_MESSAGE, DELETE_MESSAGE} from "../../actions/messageActions"
const initialState:IMessages = {
 message: "",
 typeMessage: "danger",
 isShowMessage: false

}

export const messagesReducer = (state=initialState, action: IActionMessages)=> {

 switch(action.type) {
     case ADD_MESSAGE: {
         return {
             ...state, 
             message:action.payload.message,
             typeMessage: action.payload.typeMessage,
             isShowMessage: true
         }
     }

     case DELETE_MESSAGE: {
         return {
             ...state,
             isShowMessage:false

         }
     }
     default: return state
 }
}

