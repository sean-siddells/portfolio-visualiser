import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import WaterPic from './WaterPic';

const NavBar: React.FC = () => {
  const Links: string[] = ['Home', 'Projects', 'Contact'];
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`../${path}`);
  };

  return (
    <NavBarWrapper>
      {Links.map((item) => {
        const path = item.toLowerCase();
        return (
          <NavBarLink onClick={() => handleClick(path)}>{item}</NavBarLink>
        );
      })}
      <WaterPic />
    </NavBarWrapper>
  );
};

const padding = window.innerWidth / 40;

const NavBarLink = styled.div`
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: cornflowerblue;
  };
  width: ${(window.innerWidth * 0.2) - (padding * 2)}px;
  padding: ${padding}px;
`;

const NavBarWrapper = styled.div`
  position: aboslute;
  top: 0;
  left: 0;
  font-family: 'DisketMono';
  font-size: 1.5em;
  font-weight: bold;
`;

export default NavBar;
