import {
  Container,
  HeroImage,
  CourierContainer,
  CourierPhoto,
  CourierInfo,
  CourierName,
  CourierBadge,
  ReviewContainer,
  ReviewPhoto,
  ReviewInfo,
  ReviewTitle,
  ReviewCount,
  ActionMessageContainer,
  ActionMessagePhoto,
  ActionMessageText,
} from './Chaos.styled';
import heroClient from '../../../../public/hero/hero-client.png';
import courier from '../../../../public/hero/courier.png';
import review from '../../../../public/hero/reviews.png';
import message from '../../../../public/hero/message-author.png';

export const Chaos = () => {
  return (
    <Container>
      <HeroImage
        src={heroClient}
        alt='happy client'
        width={719}
        height={480}
        placeholder='blur'
      />
      <CourierContainer>
        <CourierPhoto src={courier} alt='courier faster' />
        <CourierInfo>
          <CourierName>John Smith</CourierName>
          <CourierBadge>Courier Faster</CourierBadge>
        </CourierInfo>
      </CourierContainer>
      <ReviewContainer>
        <ReviewPhoto src={review} alt='review' />
        <ReviewInfo>
          <ReviewTitle>Reviews</ReviewTitle>
          <ReviewCount>160K+</ReviewCount>
        </ReviewInfo>
      </ReviewContainer>
      <ActionMessageContainer>
        <ActionMessagePhoto src={message} alt='message author' />
        <ActionMessageText>
          “When you are to lazy for cook, just click and they will come quickly”
        </ActionMessageText>
      </ActionMessageContainer>
    </Container>
  );
};
