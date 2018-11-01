//Instead of creating seperate component files, you can create an index.js file that exports those components as modules. That makes it easier to import the components into other components.  In the exampole below, I created a components/layouts folder and inside that folder are many component js files (e.g. Header.js, Footer.js, etc), but 1 index.js file. In the index.js file, I import the components, then export them as modules in an object. This allows me to use a single import line in other places in the application by typing: import { Header, Footer } from './components/layout'

// Here's the Header.js file
import React from 'react';

export default (props) => {
  return (
    <div>
    <h1>Header {props.prop1}</h1>
  </div>
  )
}

// Here's the Footer.js file
import React from 'react';

export default (props) => {
  return (
    <div>
    <h1>Footer</h1>
  </div>
  )
}

// Here's the index.js file for the layout folder
import Header from  './Header';
import Footer from './Footer';

export {
    Header, Footer
}

// Here's the line that can be used anywhere in the application to import Header or Footer

import { Header, Footer } from '../Layouts'