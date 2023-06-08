import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 285px;
  height: 70px;
`;

export const PhotoList = styled.ul`
  display: flex;
`;

export const PhotoItem = styled.li`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

export const CustomerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CustomerInfo = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 6px;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

export const CustomerReviewsCountWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const CustomerReviewsCount = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
`;

export const CustomerReviewsRounding = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;

  color: #9c9c9c;
`;
