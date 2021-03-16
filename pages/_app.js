import ThemeProvider from '../provider/ThemeProvider';
import {library, config} from '@fortawesome/fontawesome-svg-core';
import {faSun,faMoon,faBorderAll , faList,  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;
library.add(faSun, faMoon, faBorderAll , faList,  faSortNumericDown,
  faSortNumericUp );


import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-toggle/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
