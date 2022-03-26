import { ADD_MESSAGE } from "../../actions/messageActions"

export interface IMessages  {
        message: String,
        typeMessage: "danger" | "success"
}

export interface IActionMessages {
    type: typeof ADD_MESSAGE
    payload:  {
        message: String,
        typeMessage: messageTypes.danger | messageTypes.success
    }
}

enum messageTypes {
    danger = "danger",
    success ="success"
}