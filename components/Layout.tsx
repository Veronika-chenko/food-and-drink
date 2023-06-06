import { Header } from './modules/Header';
import { Footer } from './modules/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
