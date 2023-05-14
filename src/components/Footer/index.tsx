import { FileText, GithubLogo } from 'phosphor-react';
import { LayoutContainer } from '../../layouts/styles';
import { Container } from './styles';

export function Footer() {
  return (
    <LayoutContainer style={{ padding: '5rem 0' }}>
      <Container>
        <a href="https://github.com/fcothiagofreitas/CoffeDelivery">
          <GithubLogo weight="fill" /> Coffe Dellivery repo
        </a>
        <a href="https://fcothiagofreitas.notion.site/Ol-sou-o-Thiago-Freitas-3a8f823ea6384bd3ac6bd507e33c9f80">
          <FileText weight="fill" /> Um pouco sobre mim
        </a>
      </Container>
    </LayoutContainer>
  );
}
