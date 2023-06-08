import { Heading } from '@/components/Heading';
import Header from 'next/head';

const Services = () => {
  return (
    <>
      <Header>
        <title>Services</title>
      </Header>
      <Heading text="Services page" />
      <Heading
        tag="h2"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
      />
    </>
  );
};
export default Services;
