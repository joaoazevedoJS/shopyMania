import styled from 'styled-components';

export const BannerContainer = styled.div`
  .slick-slider {
    width: 100%;
    height: 100%;
  }
`;

export const BannerContent = styled.div`
  width: 100%;

  height: calc(100vh - 15.5rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannersDesktop = styled.div`
  display: flex;

  width: 100%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const BannersMobile = styled.div`
  display: flex;

  width: 100%;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
