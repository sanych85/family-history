import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import Auth from './Auth';
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <Auth />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: grid;
  width: 100vw;
  background-color: darkcyan;
  grid-template-columns: 1fr 4fr 1fr;
  justify-content: center;
  align-items:  center;
  h1 {
    color: red;
  }
`;

export default Header;
