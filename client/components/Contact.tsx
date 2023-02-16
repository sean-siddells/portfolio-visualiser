import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';
import { Container, ContentWrapper } from '../constants';

const Contact: React.FC = () => {
  const form = useRef();
  console.log(process.env.EMAIL_SERVICE_ID);

  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.EMAIL_SERVICE_ID,
      process.env.EMAIL_TEMPLATE_ID,
      form.current,
      process.env.EMAIL_PUBLIC_KEY,
    );
  };

  return (
    <Container>
      <NavBar />
      <ContentWrapper>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
