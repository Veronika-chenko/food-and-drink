import Image from 'next/image';

import {
  Container,
  PhotoList,
  PhotoItem,
  CustomerImage,
  CustomerInfo,
  Title,
  CustomerReviewsCountWrap,
  CustomerReviewsRounding,
  CustomerReviewsCount,
} from './Customers.styled';

import customer1 from '../../../../../public/hero/customer-1.png';
import customer2 from '../../../../../public/hero/customer-2.png';
import customer3 from '../../../../../public/hero/customer-3.png';
import star from '../../../../../public/hero/star.svg';

interface ICustomer {
  id: number;
  title: string;
  imageUrl: string;
  sizes: [number, number];
}

const customers: ICustomer[] = [
  {
    id: 1,
    title: 'first customer',
    imageUrl: '/hero/customer-1.png',
    sizes: [60, 60],
  },
  {
    id: 2,
    title: 'second customer',
    imageUrl: '/hero/customer-2.png',
    sizes: [60, 60],
  },
  {
    id: 3,
    title: 'third customer',
    imageUrl: '/hero/customer-3.png',
    sizes: [60, 60],
  },
];

export const Customers = () => {
  return (
    <Container>
      <PhotoList>
        {customers.map(({ id, title, imageUrl, sizes }) => (
          <PhotoItem key={id}>
            <CustomerImage
              src={imageUrl}
              alt={title}
              width={sizes[0]}
              height={sizes[1]}
            />
          </PhotoItem>
        ))}
      </PhotoList>
      <CustomerInfo>
        <Title>Customer Review</Title>
        <CustomerReviewsCountWrap>
          {/* <StarIcon /> */}
          <Image src={star} alt='star' width={20} height={20} />
          <CustomerReviewsCount>
            4.8
            <CustomerReviewsRounding> (5k reviews)</CustomerReviewsRounding>
          </CustomerReviewsCount>
        </CustomerReviewsCountWrap>
      </CustomerInfo>
    </Container>
  );
};
