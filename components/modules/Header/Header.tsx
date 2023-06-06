import { Navbar } from '../../Navbar';
import { HeaderContainer, AuthNavWrap, AuthNavButton } from './Header.styled';

export const Header = () => {
  return (
    <header style={{ paddingTop: '40px' }}>
      <HeaderContainer>
        <Navbar />
        <AuthNavWrap>
          <AuthNavButton href=''>Register</AuthNavButton>
          <AuthNavButton href=''>Login</AuthNavButton>
        </AuthNavWrap>
      </HeaderContainer>
    </header>
  );
};
