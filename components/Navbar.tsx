import Link from 'next/link';
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
    <nav>
      <div>Logo</div>
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
