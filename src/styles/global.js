import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cabin', sans-serif;
    color: #32292F;
    -webkit-font-smoothing: antialiased;

    font-size: 12px;
  }

  button {
    width: 50%;
    height: 25px;
    background: #32292f;
    color: #fff;
    border: none;
    margin-top: 10px;
    border-radius: 5px;
  }

  input {
    width: 50%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding-left: 10px;
    margin-top: 5px;;
  }
`;
