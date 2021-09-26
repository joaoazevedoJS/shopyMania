import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-0: #FFFFFF;
    --gray-200: #F2F3F6;
    --gray-300: #E9EBEE;
    --gray-600: #B5B5B6;
    --gray-700: #848587;
    --gray-900: #1C1C1C;

    --red-500: #DA4B4F;
    --red-600: #C22539;

    --green-100: #A3F9B9;
    --green-400: #40B25C;
    --green-500: #2D8452;
    --green-600: #1C6C3E;

    --pink-100: #FEE5EC;
  }

  li {
    list-style: none;
  }

  body, button, textarea, input {
    font-family: 'Inter', sans-serif;
  }

  body {
    background: var(--gray-300);
    color: var(--gray-900);
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyled;
