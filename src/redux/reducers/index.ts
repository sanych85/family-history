import { combineReducers } from "redux";
import { personReducer } from "./personsReducer.js/personReducer";
import { messagesReducer } from "./messagesReducer.js/messagesReducer";

const rootReducer = combineReducers({
    persons:personReducer,
    messages: messagesReducer
})

export default rootReducer