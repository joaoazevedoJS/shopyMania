import styled, { css } from 'styled-components';

import { LayoutContainer } from '../Layout/styles';

interface ShelfContainerProps {
  withoutNextProduct: boolean;
}

export const ShelfContainer = styled(LayoutContainer)<ShelfContainerProps>`
  h3 {
    margin: 2rem 0 1.5rem 0;

    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: -0.005em;
  }

  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  ${({ withoutNextProduct }) =>
    withoutNextProduct &&
    css`
      .slick-cloned {
        display: none !important;
      }
    `}

  @media screen and (min-width: 80.5rem) {
    .slick-arrow {
      &.slick-prev {
        left: -2.5rem;
      }

      &.slick-next {
        right: -2rem;
      }
    }
  }
`;
