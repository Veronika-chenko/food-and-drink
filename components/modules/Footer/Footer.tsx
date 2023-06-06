import { Container } from '../../globals/Container';
import { Heading } from '../../Heading';
import { FooterWrap } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <Heading tag="h3" text="Footer" />
      </Container>
    </FooterWrap>
  );
};
