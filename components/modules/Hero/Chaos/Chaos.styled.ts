import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  right: -66px;
  width: 719px;
  height: 585.67px;

  background: url('./hero/arch.png'), url('./hero/clock.png'),
    url('./hero/truck.png');
  background-repeat: no-repeat;
  background-position: top 0 right 94px, top 172px left 81px,
    top 260px left 123px;

  background-size: 437px, 66px, 44px;
`;

export const HeroImage = styled(Image)`
  position: absolute;
  bottom: 24px;
  right: 0;
`;
// -------- Courier -------------
export const CourierContainer = styled.div`
  position: absolute;
  top: 62px;
  left: 95px;
  display: flex;
  align-items: center;
  gap: 11px;

  padding: 8px 24px;
  background-color: var(--white);
  border-radius: 35px;
  box-shadow: var(--shadow);
`;

export const CourierPhoto = styled(Image)`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const CourierInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CourierName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

export const CourierBadge = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;

  opacity: 0.5;
`;
// -------- Review -------------

export const ReviewContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 66px;
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 12px 20px 12px 16px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: var(--shadow);
`;

export const ReviewPhoto = styled(Image)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;

  color: #cecece;
`;

export const ReviewCount = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;

  color: #000000;
`;
// --------Action Message ----------
export const ActionMessageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 66px;
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 284px;

  padding: 10px 20px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: var(--shadow);
`;

export const ActionMessagePhoto = styled(Image)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ActionMessageText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;

  color: #9f9f9f;
`;
