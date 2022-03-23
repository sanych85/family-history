import styled from 'styled-components';
import {FormInput} from './';
import {useState} from "react"
const AddPersonForm = () => {
    const [inputValues, setInputValues] = useState({
        name:'',
        secondName:"",
        lastName:'',
        dateOfBirth: "",
        dateOfDeath:""
    })
    const handleSubmit = ()=> {
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
        console.log(inputValues)
    }
  return (
    <Wrapper>
      <form>
        <FormInput type="text" name="name" handleChange= {handleChange} value = {inputValues.name} />
        <FormInput type="text" name="secondName" handleChange= {handleChange} value = {inputValues.secondName} />
        <FormInput type="text" name="lastName" handleChange= {handleChange} value = {inputValues.lastName} />
        <FormInput type="text" name="dateOfBirth"  handleChange= {handleChange} value = {inputValues.dateOfBirth}/>
        <FormInput type="text" name="dateOfDeath" handleChange= {handleChange} value = {inputValues.dateOfDeath} />
        <button type = "submit" onClick = {handleSubmit} >Save info</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div `
display: flex;
flex-direction: column ;
justify-content:  center;
align-items:  center;
margin-top: 2rem;
button {
    padding: 0.4rem 1.3rem ;
    border-radius: 8px ;
    border-width: 0px;
    /* border-style: none; */
    color: #000000;
    background-color: #40b3b3b3;
    
    &:hover {
        cursor: pointer;
        background-color: #339e9eb3;
    }

}
`

export default AddPersonForm;
