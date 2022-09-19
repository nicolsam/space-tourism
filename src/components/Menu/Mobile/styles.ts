import styled from "styled-components";

interface ItemProps {
  active: boolean;
}

export const Item = styled.div<ItemProps>`
  width: 100%; 
  border-right: 3px solid ${({ active }) => active ? '#fff' : 'transparent'};

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;