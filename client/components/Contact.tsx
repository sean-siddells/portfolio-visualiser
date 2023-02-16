import React, { FormEventHandler, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Container, ContentWrapper } from '../constants';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit: FormEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.EMAIL_SERVICE_ID ?? '',
      process.env.EMAIL_TEMPLATE_ID ?? '',
      form.current ?? '',
      process.env.EMAIL_PUBLIC_KEY,
    ).then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
  };

  return (
    <Container>
      <NavBar />
      <ContentWrapper>
        <form ref={form} onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" name="user_name" />
          <Input type="email" name="user_email" placeholder="Email" />
          <Message name="message" placeholder="Message" />
          <Input type="submit" value="Send" />
        </form>
      </ContentWrapper>
    </Container>
  );
};

const Input = styled.input`
  border-radius: 4px;
`;

const Message = styled.textarea`
  border-radius: 4px;
`;

export default Contact;
