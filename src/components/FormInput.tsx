import styled from 'styled-components';

interface InputTypes {
  type: string;
  name: string;
  value: string;
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;

}

const FormInput: React.FC<InputTypes> = ({ type, name, handleChange }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} onChange = {(e)=>handleChange(e)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    height: 20px;
  }
  label {
    position: absolute;
    top: -5px;
  }
`;

export default FormInput;
