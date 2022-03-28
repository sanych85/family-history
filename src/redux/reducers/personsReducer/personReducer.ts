import { PersonActionsType, IPersonActions } from './personTypesReducer';
import {
  START_ADD_PERSON,
  SUCCESS_ADD_PERSON,
  ERROR_ADD_PERSON,
  
} from '../../actions/personActions';
export interface IPerson {
  firstName: String;
  secondName: String;
  lastName: String;
  father: String;
  mother: String;
}

export interface IPersons {
  persons: IPerson[];
  loading: Boolean;
}
const initialState: IPersons = {
  persons: [],
  loading: false,
};

export const personReducer = (state = initialState, action:IPersonActions) => {
  switch (action.type) {
    case START_ADD_PERSON: {
      return {
        ...state,
        loading: true,
      };
    }
    case SUCCESS_ADD_PERSON: {
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loading: false,
      };
    }

    default:
      return state;
  }
};
