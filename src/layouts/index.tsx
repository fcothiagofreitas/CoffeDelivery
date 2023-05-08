import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '6.5rem' }} />
      <Outlet />
      <Footer />
    </>
  );
}
