import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Container from '../constants';

const Contact: React.FC = () => (
  <Container>
    <NavBar />
    <ContactWrapper>This is Contact</ContactWrapper>
  </Container>

);

const ContactWrapper = styled.div`
`;

export default Contact;
