import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Wrap = styled.header`
  background: white; 
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const LogoText = styled.div`
  div:first-child { font-weight: 700; }
  div:last-child { font-size: 12px; color: #6b7280; }
`;

const NavLink = styled.a`
  margin-left: 12px;
  text-decoration: none;
  color: inherit;
`;

export default function Header() {
  return (
    <Wrap>
      <Inner>
        <Link href="/" aria-label="Lacrei Saúde - Início" legacyBehavior>
          <a style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/images.jpg" alt="Logotipo Lacrei Saúde" width={44} height={44} />
            <LogoText>
              <div>Lacrei Saúde</div>
              <div>Cuidado que acolhe</div>
            </LogoText>
          </a>
        </Link>
        <nav aria-label="Menu principal">
          <Link href="/agendar" passHref legacyBehavior>
            <NavLink>Agendar</NavLink>
          </Link>
        </nav>
      </Inner>
    </Wrap>
  );
}
