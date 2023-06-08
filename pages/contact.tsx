import { Heading } from '@/components/Heading';
import Header from 'next/head';

const Contact = () => {
  return (
    <>
      <Header>
        <title>Contact</title>
      </Header>
      <Heading text="Contact page" />
      <Heading
        tag="h2"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
      />
    </>
  );
};
export default Contact;
