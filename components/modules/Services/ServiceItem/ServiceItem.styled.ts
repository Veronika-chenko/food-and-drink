import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 28px;

  max-width: 255px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;

  text-align: center;
`;

export const ItemText = styled.p`
  padding: 0 17px;

  font-weight: 500;
  font-size: 16px;
  line-height: 2;

  text-align: center;
  opacity: 0.7;
`;
