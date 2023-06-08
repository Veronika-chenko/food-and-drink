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

export const Customers = () => {
  return (
    <Container>
      <PhotoList>
        <PhotoItem>
          <CustomerImage
            src={customer1}
            alt='first customer'
            width={60}
            height={60}
          />
        </PhotoItem>
        <PhotoItem>
          <CustomerImage
            src={customer2}
            alt='secont customer'
            width={60}
            height={60}
          />
        </PhotoItem>
        <PhotoItem>
          <CustomerImage
            src={customer3}
            alt='third customer'
            width={60}
            height={60}
          />
        </PhotoItem>
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
