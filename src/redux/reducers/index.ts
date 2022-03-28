import { combineReducers } from "redux";
import { personReducer } from "./personsReducer/personReducer";
import { messagesReducer } from "./messagesReducer/messagesReducer";

const rootReducer = combineReducers({
    persons:personReducer,
    messages: messagesReducer
})

export default rootReducer