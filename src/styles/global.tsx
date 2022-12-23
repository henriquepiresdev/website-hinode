import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    
    
    
  }
*{
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
  font-family: 'Inter', sans-serif;
  cursor: default;
}
body{
  width: 100%;
  overflow-x: hidden;
}
button, a, link, img{
  cursor: pointer;
}
`;

export default GlobalStyle;
