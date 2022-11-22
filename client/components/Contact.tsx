import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Contact: React.FC = () => (
  <>
    <NavBar />
    <ContactWrapper>This is Contact</ContactWrapper>
  </>
);

const ContactWrapper = styled.div`
`;

export default Contact;
