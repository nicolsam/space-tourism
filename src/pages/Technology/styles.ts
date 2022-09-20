import styled from 'styled-components';

interface PersonDotProps {
  active: boolean;
}

export const TechDot = styled.div<PersonDotProps>`
  width: 5rem;
  height: 5rem;

  font-family: 'Bellefair';
  font-size: 2rem;

  background-color: ${({ active }) => active ? '#fff' : 'transparent'};
  outline: 1px solid ${({ active}) => active ? '#fff' : '#44464E'};
  color: ${({ active }) => active ? '#000' : '#fff'};

  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: outline .2s;

  &:hover {
    outline: 1px solid #fff;
    transition: outline .2s;
  }
  
  @media (max-width: 375px) {
    width: 3rem;
    height: 3rem;

    font-size: 1rem;
  }
`;