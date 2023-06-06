import { ContainerBox } from './Container.styled';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
