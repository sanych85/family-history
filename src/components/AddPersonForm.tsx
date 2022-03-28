import styled from 'styled-components';
import { FormInput } from './';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IMessages } from '../redux/reducers/messagesReducer/messagesTypesReducers';
import { RootState } from '../redux/store';
import {
  START_ADD_PERSON,
  SUCCESS_ADD_PERSON,
  ERROR_ADD_PERSON,
} from '../redux/actions';
import { ADD_MESSAGE, DELETE_MESSAGE } from '../redux/actions/messageActions';

const AddPersonForm = () => {
  const { message, typeMessage, isShowMessage } = useSelector<
    RootState,
    IMessages
  >((state) => state.messages);
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: '',
    secondName: '',
    lastName: '',
    dateOfBirth: '',
    dateOfDeath: '',
  });

  // const [isShowMessage, showMessage] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (isShowMessage) {
        dispatch({
          type: DELETE_MESSAGE,
          payload: {
            isShowMessage: false,
          },
        });
      }
    }, 2000);
  }, [isShowMessage]);
  const { name, secondName, lastName, dateOfBirth, dateOfDeath } = inputValues;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !secondName || !lastName || !dateOfBirth || !dateOfDeath) {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          typeMessage: 'danger',
          message: ` please fill all values`,
        },
      });
      return;
    }
    dispatch({ type: SUCCESS_ADD_PERSON, payload: inputValues });
    dispatch({
      type: ADD_MESSAGE,
      payload: {
        typeMessage: 'success',
        message: 'person successfully added',
        isShowMessage: true,
      },
    });
    setInputValues({
      name: '',
      secondName: '',
      lastName: '',
      dateOfBirth: '',
      dateOfDeath: '',
    });
    // showMessage(true)
  };
  const clearValues = () => {
    setInputValues({
      name: '',
      secondName: '',
      lastName: '',
      dateOfBirth: '',
      dateOfDeath: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <form>
        <FormInput
          type="text"
          name="name"
          handleChange={handleChange}
          value={name}
        />
        <FormInput
          type="text"
          name="secondName"
          handleChange={handleChange}
          value={secondName}
        />
        <FormInput
          type="text"
          name="lastName"
          handleChange={handleChange}
          value={lastName}
        />
        <FormInput
          type="text"
          name="dateOfBirth"
          handleChange={handleChange}
          value={dateOfBirth}
        />
        <FormInput
          type="text"
          name="dateOfDeath"
          handleChange={handleChange}
          value={dateOfDeath}
        />
        <button type="submit" onClick={handleSubmit}>
          Save info
        </button>
        <button type="button" onClick={clearValues}>
          clear
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  button {
    padding: 0.4rem 1.3rem;
    border-radius: 8px;
    border-width: 0px;
    /* border-style: none; */
    color: #000000;
    background-color: #40b3b3b3;

    &:hover {
      cursor: pointer;
      background-color: #339e9eb3;
    }
  }
`;

export default AddPersonForm;
