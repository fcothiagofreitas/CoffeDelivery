import { NavLink } from 'react-router-dom';
import { LayoutContainer } from '../../layouts/styles';
import { HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/Logo.svg';
import { useEffect, useState } from 'react';

export function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      if (window.scrollY > 1) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);

  // console.log(shadow);

  return (
    <HeaderContainer shadow={shadow}>
      <LayoutContainer className="topoFixed">
        <NavLink to="/" title="Home" className="logo">
          <img src={Logo} alt="Coffe Delivery" />
        </NavLink>
        <nav>
          <NavLink to="/" title="" className="locale">
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </NavLink>
          <NavLink to="/cart" title="" className="cart">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </nav>
      </LayoutContainer>
    </HeaderContainer>
  );
}
