//In this version, App offers some basic homepage html structure with a header containing links. The main section uses router.js to display views
import React, { Component } from 'react';
import './zample-App.css';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom' // any Redux Link components you need
import router from '../router.js'
import logo from './assets/logo.png'
///////Below are Toast Items -- I need to read more on how to use properly.  In class we imported the following three things and then placed <ToastContainer /> in return inside the outer <div>. Then anywhere you have an action you can place toast messages like this: toast.success("Snippeti says, 'Thank you for your snippet!'");
import { ToastContainer, toast } from 'react-toastify'; // Reference: https://www.npmjs.com/package/react-toastify
import Notifications, {notify} from 'react-notify-toast'; // use npm to install it npm install react-notify-toast --save  reference source for using: https://www.npmjs.com/package/react-notify-toast
import Toast from 'react-notify-toast/bin/components/Toast';


import router from '../router';

class App extends Component {
  render() {
    return (
      <div>
         <ToastContainer />
        <nav className='nav'>
          <div className="logo-wrap" >
          <Link className='links logo' to='/'> <img alt='logo' src={logo} /> </Link>
          </div> 
          <div className='link-wrap'>
              <Link className='links' to='/'>Home</Link>
              <Link className='links' to='/about'>About</Link>
          </div>
        </nav>
              {router}
      </div>
    );
  }
}

export default App;
