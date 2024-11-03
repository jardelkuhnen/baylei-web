import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
    /* width */
    ::-webkit-scrollbar {
      width: 100px;
      height: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #141729;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #e0e1e6;
      border-radius: 8px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #243085;
    }
  }
  body {
    font: 16px 'Poppins', sans-serif;
    background-color: #eff0f3;
    color: #3C4858;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    font: 16px 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;

