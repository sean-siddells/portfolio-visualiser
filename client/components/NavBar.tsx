import React from 'react';
import styled from 'styled-components';

const NavBar: React.FC = () => {
  const List = ['hello', 'hello', 'hello', 'hello', 'hello'];
  return (
    <NavBarWrapper>
      {List.map((item) => <div>{item}</div>) }
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  padding: 24px 64px;
  top: 0;
  left: 0;
  width: ${window.innerWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default NavBar;
