import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavBar = () => {
  return (
    <StyledNavbar>
      <li>
        <NavLink to ="/">Landing</NavLink>
      </li>
      <li>
        <NavLink to ="/addPerson">add new person</NavLink>
      </li>
      <li>
        <NavLink to ="/allPerson">All person</NavLink>
      </li>

    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
display: flex ;
gap: 3rem ;
justify-content: center ;
align-items: center ;
height: 3rem;
  li {
      list-style: none; 
     border-bottom: 1px solid transparent;
     transition: all ease 0.7s;
     &:hover {
    border-bottom: 1px solid black;
  }
  }

  a {
    color: white;
    &:hover {
      color: #fae4e4;
      transform: scale(1.1);
    }
    
    text-decoration: none;
    text-transform: capitalize;
  }
`;

export default NavBar;
