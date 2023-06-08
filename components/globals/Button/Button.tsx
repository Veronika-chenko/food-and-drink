import { LightButton, FullButton } from './Button.styled';

export const Button = ({
  children,
  themeColor,
  type = 'button',
  props,
}: {
  children?: any;
  themeColor?: string;
  type?: 'submit' | 'button';
  props?: any;
}) => {
  return (
    <>
      {themeColor === 'dark' ? (
        <FullButton type={type} {...props}>
          {children}
        </FullButton>
      ) : (
        <LightButton type={type} {...props}>
          {children}
        </LightButton>
      )}
    </>
  );
};
