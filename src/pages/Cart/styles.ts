import styled from 'styled-components';

import { LayoutContainer } from '../../components/Layout/styles';

export const CartResume = styled(LayoutContainer)`
  padding: 1.875rem;
  margin-top: 2rem;

  background: var(--gray-0);
  border-radius: 0.25rem;

  footer {
    margin-top: 1.875rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 690px) {
      div {
        flex-direction: column;
        align-items: flex-end;
        width: 100%;

        p {
          width: 100%;
          margin: 0;
          font-size: 0.75rem;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: var(--green-400);
  color: var(--gray-0);

  border: 0;
  border-radius: 0.3125rem;

  padding: 0.75rem 1rem;

  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.005em;

  margin-top: 2rem;

  transition: background 0.4s;
  text-transform: uppercase;

  &:hover,
  &:active {
    background: var(--green-600);
  }
`;

export const Total = styled.section`
  display: flex;
  align-items: baseline;

  span {
    color: var(--gray-700);
    font-weight: bold;
    margin-right: 1rem;
  }

  strong {
    color: var(--gray-900);
    font-weight: bold;
    font-size: 1.75rem;
    margin-left: 0.3125rem;
  }
`;
