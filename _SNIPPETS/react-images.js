//There are two ways to add web images to react. 

//First way is to use src prop of img tag like so:

<img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />

// Second way is using an Image component - this allows you to set image as background image using css - here's an article about it: http://blog.matthewcheok.com/a-better-img-tag/

import React, { Component } from "react";

export default class Image extends Component {
  render() {
    let { mode, position, src, height, width, otherStyles, ...props } = this.props;
 
    let defaults = {
      height: height || 100,
      width: width || 100,
      backgroundColor: "gray",
      backgroundPosition: position || "center",
      backgroundRepeat: "no-repeat"
    };

    let mainStyles = {
      backgroundImage: `url(${src})`,
      backgroundSize: mode
    };

    return <div {...props} style={{ ...defaults, ...otherStyles, ...mainStyles }} />; // defaults,style, and important are all objects containing key value pairs of css rules that get spread into the style property being passed to the component for rendering
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
          mode="cover"
          position="center"
          width="100vw"
          height="50px"
          alt="none"
          otherStyles={{border:'2px solid red'}}
      />
        <h1>Paul Davis</h1>
        <p>{date}</p>
      </div>
    );
  }
}
export default Comment;