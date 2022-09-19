import styled from "styled-components";

export const Travel = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
`;

export const Space = styled.span`
  font-family: 'Bellefair', sans-serif;
  
  font-size: 11rem;

  @media (max-width: 1280px) {
    font-size: 9.375rem; /* 150px */
  }

  @media (max-width: 375px) {
    font-size: 5rem;
  }
`;

export const Description = styled.p`
  font-family: 'Barlow', sans-serif;
`;

export const Explore = styled.h2`

  transition: outline .3s;
  outline: 0 solid rgba(255, 255, 255, .1);

  &:hover {
    transition: outline .3s;
    outline-width: 5.3rem;
  }
`;

export const ExploreText = styled.h2`
  font-family: 'Bellefair', sans-serif;
`;