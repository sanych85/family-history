import styled from 'styled-components';

const Auth = () => {
  return (
    <Wrapper>
        <div>Login</div>
        <div>Logout</div>
        
    </Wrapper>
  )
}

const Wrapper = styled.div `
display: grid ;
justify-content: center ;
align-items: center;
`

export default Auth