import styled from 'styled-components';
import { FormInput } from './';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  START_ADD_PERSON,
  SUCCESS_ADD_PERSON,
  ERROR_ADD_PERSON,
} from '../redux/actions';
import { ADD_MESSAGE } from '../redux/actions/messageActions';

const AddPersonForm = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: '',
    secondName: '',
    lastName: '',
    dateOfBirth: '',
    dateOfDeath: '',
  });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInputValues({
      ...inputValues,
      name: '',
    });
    const { name, secondName, lastName, dateOfBirth, dateOfDeath } =
      inputValues;
    if (!name || !secondName || !lastName || !dateOfBirth || !dateOfDeath) {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          typeMessages: 'danger',
          message: ` please fiil all values`,
        },
      });
      return;
    }
    dispatch({ type: SUCCESS_ADD_PERSON, payload: inputValues });
    dispatch({
      type: ADD_MESSAGE,
      payload: {
        typeMessages: 'success',
        message: `person success added`,
      },
    });

    setInputValues({
      ...inputValues,
      name: '',
      secondName: '',
      lastName: '',
      dateOfBirth: '',
      dateOfDeath: '',
    });
    console.log(inputValues, 'Input values');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues);
  };
  return (
    <Wrapper>
      <form>
        <FormInput
          type="text"
          name="name"
          handleChange={handleChange}
          value={inputValues.name}
        />
        <FormInput
          type="text"
          name="secondName"
          handleChange={handleChange}
          value={inputValues.secondName}
        />
        <FormInput
          type="text"
          name="lastName"
          handleChange={handleChange}
          value={inputValues.lastName}
        />
        <FormInput
          type="text"
          name="dateOfBirth"
          handleChange={handleChange}
          value={inputValues.dateOfBirth}
        />
        <FormInput
          type="text"
          name="dateOfDeath"
          handleChange={handleChange}
          value={inputValues.dateOfDeath}
        />
        <button type="submit" onClick={handleSubmit}>
          Save info
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
