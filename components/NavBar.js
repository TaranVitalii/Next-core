import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div>
        Next learning
      </div>
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
