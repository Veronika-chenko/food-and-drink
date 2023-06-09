import { Content } from './Content';
import { Chaos } from './Chaos';
import { Section, HeroContainer } from './Hero.styled';

export const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <Content />
        <Chaos />
      </HeroContainer>
    </Section>
  );
};
