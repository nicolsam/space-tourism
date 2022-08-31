import styled from 'styled-components';

export const Title = styled.div`

  font-family: 'Barlow Condensed', sans-serif;

  &:after {
    content: '';
    display: block;
    height: .2rem;
    width: 0;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
  }
  &:hover::after {
    width: 100%;
    background: #fff;
  }
`;