import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 6px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #f1356d;
}
*{
        font-family:'Quicksand', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
`;

export default GlobalStyle;
