import { IMessages,IActionMessages } from './messagesTypesReducers';
import {ADD_MESSAGE} from "../../actions/messageActions"
const initialState:IMessages = {
 message: "fd",
 typeMessage: "danger" 
}

export const messagesReducer = (state=initialState, action: IActionMessages)=> {
 switch(action.type) {
     case ADD_MESSAGE: {
         return {
             ...state, 
             message:action.payload.message,
             typeMessage: action.payload.typeMessage
         }
     }
     default: return state
 }
}

