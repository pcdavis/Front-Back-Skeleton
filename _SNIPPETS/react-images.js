//There are two ways to add web images to react. 

//First way is to use src prop of img tag like so:

<img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />

// Second way is using an Image component - this allows you to set image as background image using css - here's an article about it: http://blog.matthewcheok.com/a-better-img-tag/

import React, {Component} from 'react';

export default class Image extends Component {  
  render() {
    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 100,
      width: width || 100,
      backgroundColor: 'gray'
    };

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div {...props} style={{...defaults, ...style, ...important}} />
  }
}

// Then import it and use it in any component and use props to set image css rules:

import React, { Component } from "react";
import Image from "./Image";

class Comment extends Component {
  render() {
    const date = new Date().toLocaleDateString();
    const avatarUrl = "https://unsplash.com/photos/lySzv_cqxH8";
    return (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=735c6354489da55b42db4e96d1c932f8&auto=format&fit=crop&w=845&q=80"
          mode="fill"
          width="100vw"
          height="50px"
          alt="none"
        />
        <h1>Paul Davis</h1>
        <p>{date}</p>
      </div>
    );
  }
}
export default Comment;