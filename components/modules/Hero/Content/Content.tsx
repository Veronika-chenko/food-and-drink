import { Button } from '@/components/globals/Button';
import {
  ContentWrap,
  Title,
  Text,
  HeroButtonsWrap,
  // HeroButton,
} from './Content.styled';
import { Customers } from './Customers';

export const Content = () => {
  return (
    <ContentWrap>
      <Title>
        Don’t wanna <br />
        Make you have <br />A bad day
      </Title>
      <Text>
        Our job is delivering a delicious food with fast , free delivery and
        easy.
      </Text>
      <HeroButtonsWrap>
        <Button themeColor='dark'>Order Now</Button>
        <Button>How to order</Button>
      </HeroButtonsWrap>
      <Customers />
    </ContentWrap>
  );
};
