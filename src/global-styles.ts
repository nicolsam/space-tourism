import { createGlobalStyle } from 'styled-components';

interface GlobalProps {
  location: string;
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  body {
    background-image: ${({ location }) => `url('/images/${location}/background-${location}-mobile.jpg');`};
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 768px) {
    body {
      background-image: ${({ location }) => `url('/images/${location}/background-${location}-tablet.jpg');`};
    }
  }

  @media (min-width: 1280px) {
    body {
      background-image: ${({ location }) => `url('/images/${location}/background-${location}-desktop.jpg');`};
    }
  }
`;
