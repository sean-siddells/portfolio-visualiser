import React from 'react';
import styled from 'styled-components';

const NavBar: React.FC = () => {
  const Links = ['Home', 'Projects', 'Contact'];
  return (
    <NavBarWrapper>
      {Links.map((item) => <div>{item}</div>) }
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  padding: 8vh 5vw;
  top: 0;
  left: 0;
  width: ${window.innerWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Elanor';
  font-size: 2em;
`;

export default NavBar;
