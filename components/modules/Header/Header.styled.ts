import styled from 'styled-components';
import Link from 'next/link';
import { ContainerBox } from '../../globals/Container/Container.styled';

export const HeaderContainer = styled(ContainerBox)`
  display: flex;
  flex-wrap: nowrap;
  gap: 136px;
`;
export const AuthNavWrap = styled.div`
  display: flex;
  gap: 30px;
`;

export const AuthNavButton = styled(Link)``;
