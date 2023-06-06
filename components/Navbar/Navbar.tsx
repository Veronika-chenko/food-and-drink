import { Nav, NavList, NavLink } from './Navbar.styled';
// import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Menu', path: '/menu' },
  { id: 3, title: 'Services', path: '/services' },
  { id: 4, title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  //   const { pathname } = useRouter();
  //   console.log('🚀 ~ pathname:', pathname);
  return (
    <Nav>
      <div>Logo</div>
      <NavList>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink href={path}>{title}</NavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
};
