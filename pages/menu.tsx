import { Heading } from '@/components/Heading';
import Header from 'next/head';

const Menu = () => {
  return (
    <>
      <Header>
        <title>Menu</title>
      </Header>
      <Heading text="Menu page" />
      <Heading
        tag="h2"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
      />
    </>
  );
};
export default Menu;
