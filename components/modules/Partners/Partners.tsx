import { Container } from '@/components/globals';
import { Section, TopText, PartnerList, PartnerItem } from './Partners.styled';
import Image from 'next/image';

interface IPartner {
  id: number;
  title: string;
  imageUrl: string;
  sizes: [number, number];
}

const partners: IPartner[] = [
  {
    id: 1,
    title: 'mask',
    imageUrl: '/partners/mask.png',
    sizes: [90, 60],
  },
  {
    id: 2,
    title: 'grab',
    imageUrl: '/partners/grab.png',
    sizes: [120, 46.4],
  },
  {
    id: 3,
    title: 'dana',
    imageUrl: '/partners/dana.png',
    sizes: [120, 35.2],
  },
  {
    id: 4,
    title: 'shopee-pay',
    imageUrl: '/partners/shopee-pay.png',
    sizes: [120, 60],
  },
  {
    id: 5,
    title: 'zomato',
    imageUrl: '/partners/zomato.png',
    sizes: [120, 120],
  },
];

export const Partners = () => {
  return (
    <Section>
      <Container>
        <TopText>Support by :</TopText>
        <h2 className='visually-hidden'>Our Partners</h2>
        <PartnerList>
          {partners.map(({ id, title, imageUrl, sizes }) => (
            <PartnerItem key={id}>
              <Image
                src={imageUrl}
                alt={title}
                width={sizes[0]}
                height={sizes[1]}
              />
            </PartnerItem>
          ))}
        </PartnerList>
      </Container>
    </Section>
  );
};
