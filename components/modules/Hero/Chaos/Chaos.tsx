import { Container, HeroImage } from './Chaos.styled';
import Image from 'next/image';
import heroImage from '../../../../public/hero.png';

export const Chaos = () => {
  return (
    <Container>
      <HeroImage
        src={heroImage}
        alt="happy client"
        width={719}
        height={480}
        placeholder="blur"
      />
    </Container>
  );
};
