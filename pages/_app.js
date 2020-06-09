import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from '../components/nav';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    line-height: 1.65;
    font-family: "Source Sans Pro", sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
