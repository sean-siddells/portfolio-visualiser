import React, { FormEventHandler, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import NavBar from './NavBar';
import {
  Container, ContentWrapper, Spacer, SubHeading,
} from '../constants';

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
        <Form ref={form} onSubmit={handleSubmit}>
          <SubHeading>Contact Me</SubHeading>
          <div>
            Feel free to reach out with any questions or potential projects that you&apos;re
            interested in collaborating on and I&apos;ll get back to you as soon as possible.
          </div>
          <Spacer />
          <Input type="text" placeholder="Name" name="user_name" />
          <Input type="email" name="user_email" placeholder="Email" />
          <Message name="message" placeholder="Message" />
          <SubmitButton type="submit" value="Send" />
        </Form>
      </ContentWrapper>
    </Container>
  );
};

const Input = styled.input`
  border-radius: 4px;
  margin-bottom: 32px;
`;

const Message = styled.textarea`
  border-radius: 4px;
  margin-bottom: 32px;
  height: 20vh;
`;

const SubmitButton = styled.input`
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6vw;
  text-align: left;
`;

export default Contact;
