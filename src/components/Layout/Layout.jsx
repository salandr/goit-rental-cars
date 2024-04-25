import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Link, NavList } from './Layout.styled';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </NavList>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
