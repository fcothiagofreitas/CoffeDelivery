import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { PageNotFound } from './pages/PageNotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
