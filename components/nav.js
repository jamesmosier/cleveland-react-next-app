import styled from 'styled-components';
import Link from 'next/link';

const NavStyled = styled.nav`
  width: 100%;
  background-color: #000;
  padding: 1rem;
  font-size: 1.1rem;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #aaa;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyled>
      <Link href="/">
        <a>Cleveland Next.js App</a>
      </Link>
    </NavStyled>
  );
}
