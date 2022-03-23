import styled from 'styled-components';

import {AddPersonForm, LastPersonINfo} from '../components';


const AddPersonPage = () => {
  return (
    <Wrapper>
      <AddPersonForm/>
      <LastPersonINfo />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 5fr 1fr ;
  justify-content: center;
  align-items: center;
`;

export default AddPersonPage;
