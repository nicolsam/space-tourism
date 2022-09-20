import styled from 'styled-components';

interface PersonDotProps {
  active: boolean;
}

export const PersonDot = styled.div<PersonDotProps>`
  width: 1rem;
  height: 1rem;

  background-color: ${({ active }) => active ? '#fff' : '#373941'};
  border-radius: 50%;

  cursor: pointer;

  transition: background .3s;
  
  &:hover {
    background-color: #87868c;
    transition: background .3s;
  }
`;

export const Divider = styled.div`
  
  display: none;
  width: 0%;
  height: 2px;
  background: #383B4B;

  transition: width .5s;

  @media (max-width: 375px) {
    display: block;

    width: 90%;
    transition: width .5s;
  }

`;