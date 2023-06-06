import {
  ContentWrap,
  Title,
  Text,
  HeroButtonsWrap,
  HeroButton,
} from './Content.styled';

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
        <HeroButton>Order Now</HeroButton>
        <HeroButton>How to order</HeroButton>
      </HeroButtonsWrap>
      <div>Customer Review</div>
    </ContentWrap>
  );
};
