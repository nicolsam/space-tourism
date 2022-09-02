import styled from 'styled-components';

interface TitleProps {
 active: boolean;
}

export const Title = styled.div<TitleProps>`

  font-family: 'Barlow Condensed', sans-serif;

  &:after {
    content: '';
    display: block;
    height: .2rem;
    width: ${({ active }) => active ? '100%;' : '0;' };
    background: ${({ active }) => active ? '#fff;' : 'transparent;' };
    transition: width .5s ease, background-color .5s ease;
  }
  &:hover::after {
    width: 100%;
    background: #8b8a90;
  }
`;