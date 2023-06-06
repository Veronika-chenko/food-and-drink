import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  right: -66px;
  width: 719px;
  height: 585.67px;
  /* background-color: #757575; */

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 94px;

    width: 437px;
    height: 562px;

    background-color: #ec994b;
    border-radius: 200px 200px 0 0;
  }
`;

export const HeroImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
