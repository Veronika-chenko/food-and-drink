import { Content } from './Content';
import { Chaos } from './Chaos';
import { HeroContainer } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <HeroContainer>
        <Content />
        <Chaos />
      </HeroContainer>
    </section>
  );
};
