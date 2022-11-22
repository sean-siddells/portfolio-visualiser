import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const Links: string[] = ['Home', 'Projects', 'Contact'];
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`../${path}`, { replace: true });
  };

  return (
    <NavBarWrapper>
      {Links.map((item) => {
        const path = item.toLowerCase();
        return (
          <NavBarLink onClick={() => handleClick(path)}>{item}</NavBarLink>
        );
      })}
    </NavBarWrapper>
  );
};

const NavBarLink = styled.div`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
  };
`;

const NavBarWrapper = styled.div`
  z-index: 1;
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
