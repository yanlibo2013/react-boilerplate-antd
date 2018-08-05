import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    /* font-family: 'MicrosoftYaHei'; */
   
  }


  #app {
    /* 充满body */
    background-color: #FBFBFB;
    min-height: 100%;
    min-width: 100%;
    
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
