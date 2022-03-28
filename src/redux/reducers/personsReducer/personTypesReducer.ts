import { IPersons, IPerson } from "./personReducer"
export enum PersonActionsType {
    START_ADD_PERSON =  "START_ADD_PERSON",
    SUCCESS_ADD_PERSON = "SUCCESS_ADD_PERSON",
    ERROR_ADD_PERSON = "ERROR_ADD_PERSON",
   
    
}

// export interface ICart { 
//     products: IProduct[] ,
//     totalPrice: number,
//     totalQuantity: number
    
// }


export interface IPersonActions {
    type: PersonActionsType.START_ADD_PERSON | PersonActionsType.SUCCESS_ADD_PERSON | PersonActionsType.ERROR_ADD_PERSON 
    payload: IPerson
}
