import { Content } from './Content';
import { HeroContainer } from './Hero.styled';
import Image from 'next/image';

import heroImage from '../../../public/hero.png';
import { Chaos } from './Chaos';

export const Hero = () => {
  return (
    <section>
      <HeroContainer>
        <Content />
        <Chaos />
        {/* <Image
          src={heroImage}
          alt="happy client"
          width={719}
          height={480}
          placeholder="blur"
        /> */}
      </HeroContainer>
    </section>
  );
};
