import { SectionTitle } from '@/components/globals/TitleH2';
import { Heading } from '../components/Heading';
import { Hero } from '@/components/modules/Hero';
import Header from 'next/head';
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Header>
        <title>Home</title>
      </Header>
      <Hero />
      {/* <Heading text='Home page' />
      <SectionTitle>SectionTitle</SectionTitle> */}
    </>
  );
};

export default Home;
