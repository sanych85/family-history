import { ADD_MESSAGE, DELETE_MESSAGE } from "../../actions/messageActions"

export interface IMessages  {
        message: String,
        typeMessage: "danger" | "success",
        isShowMessage: Boolean,
}

export interface IActionMessages {
    type: typeof ADD_MESSAGE | typeof DELETE_MESSAGE
    payload:  {
        message: String,
        typeMessage: messageTypes.danger | messageTypes.success,
        isShowMessage: Boolean,
    }
}

enum messageTypes {
    danger = "danger",
    success ="success"
}