import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'Aktiv Grotesk Ex';
        src: url('/fonts/Aktiv Grotesk Ex/Aktiv Grotesk Ex.ttf') format('truetype');
    }
:root{
    --white-1:              #FFFFFF;
    --main-background-color:#E5E5E5;
    --dark-white-f7:        #F7F7F7;
    --color-orange:         #F2994A;
    --color-blue-marine:    #009BAA;
    --color-black:          #000000;
    --color-rose:           #FD6868;
    --gray-1:               #333333;
    --gold:                 #AA8232;
    --dark-blue:            #00002D; 
    --background-footer:    #E1DCD5;
    --recent-received:      #F8F8F8;
    --red-bag:              #b90032;
    --back-feat:            #D5B69A;
    --gray-100:             #F5F6FA;
    --gray-3:               #828282;
    --font-open-sans:       'Open Sans', sans-serif;
    --font-oswald:          'Oswald', sans-serif;
    --font-playfair:        "Playfair Display", serif;
    --font-aktiv:           "Aktiv Grotesk Ex"
    
    
  }
*{
  margin: 0;
  padding: 0;

  box-sizing:  border-box;
  
  font-family: 'Inter', sans-serif;
  
  cursor: default;
  list-style: none;
  svg,button,a{
    cursor: pointer;
  }
  button{
    text-transform: uppercase;
  }
}
body{
  margin: 0 auto;
  /* width pode ser fixado em 1441px também */
  width: 100%;
  overflow-x: hidden;
}
button, a, link, img{
  cursor: pointer;
}
`;

export default GlobalStyle;
