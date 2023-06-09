import { Container, TopText } from '@/components/globals';
import { Section, Title, ServiceList } from './Services.styled';
import { ServiceItem, IServiceItem } from './ServiceItem';

const services: IServiceItem[] = [
  {
    id: 1,
    title: 'Delivery Food',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: '/services/service-1.png',
    sizes: [252, 238],
  },
  {
    id: 2,
    title: 'Easy to order',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: '/services/service-2.png',
    sizes: [255, 234],
  },
  {
    id: 3,
    title: 'Fastest Delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: '/services/service-3.png',
    sizes: [277, 230],
  },
];

export const Services = () => {
  return (
    <Section>
      <Container>
        <TopText>- Our Services -</TopText>
        <Title>Our serve just for you</Title>
        <ServiceList>
          {services.map(({ id, title, text, imageUrl, sizes }) => (
            <ServiceItem
              key={id}
              title={title}
              text={text}
              imageUrl={imageUrl}
              sizes={sizes}
            />
          ))}
        </ServiceList>
      </Container>
    </Section>
  );
};
