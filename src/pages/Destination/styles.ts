import styled from 'styled-components';

interface DestinationProps {
 active?: boolean;
}

export const DestinationLink = styled.div<DestinationProps>`

  font-family: 'Barlow Condensed', sans-serif;
  cursor: pointer;

  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  letter-spacing: 0.2em;

  &:after {
    content: '';
    display: block;
    height: .2rem;
    width: ${({ active }) => active ? '100%;' : '0;' };
    background: ${({ active }) => active ? '#fff;' : 'transparent;' };
    font-weight: ${({ active }) => active ? '600;' : '400;'};

    margin-top: .5rem;
    transition: width .5s ease, background-color .5s ease;
  }
  &:hover::after {
    width: 100%;
    background: #8b8a90;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }

`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #383B4B;

  margin-top: 3.5rem;
  margin-bottom: 1.8rem;

  @media (max-width: 375px) {
    width: 90%;
    margin: 1.5rem 0;
    height: 1px;
  }

`;