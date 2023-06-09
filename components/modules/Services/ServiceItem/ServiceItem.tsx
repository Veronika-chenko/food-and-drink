import { FC } from 'react';
import Image from 'next/image';
import {
  ItemContainer,
  ItemInfo,
  ItemTitle,
  ItemText,
} from './ServiceItem.styled';

export interface IServiceItem {
  id?: number;
  title: string;
  text: string;
  imageUrl: string;
  sizes: [number, number];
}

export const ServiceItem: FC<IServiceItem> = ({
  title,
  text,
  imageUrl,
  sizes,
}) => {
  return (
    <ItemContainer>
      <Image src={imageUrl} alt={title} width={sizes[0]} height={sizes[1]} />
      <ItemInfo>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemInfo>
    </ItemContainer>
  );
};
