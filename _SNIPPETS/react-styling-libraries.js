// SEMANTIC UI library ----------------------------------------------------------------
// 1. In the index.html file, place a link to the library
<link rel="stylesheet" href ="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
// 2. Create a component and use the semantic UI classNames to automatically style the component elements. Copy the elements from the Semantic UI library website and paste them into your component and change class to className. Below is an example of the comment ui component. NOTE: the example below uses the faker api to create fake data.  

//3. Faker api:  npm install --save faker // this allows you to add fake data to your app to see what things will look like before you use real data. IMPORTANT: must import faker library (import faker from 'faker') into any react component that uses it. Then to use it, you reference it in curly braces in the jsx using object notation (look at faker API for structure: https://github.com/marak/Faker.js/) and INVOKE IT WITH (). Here's an example of an avatar usage <img src={faker.image.avatar()}/>

//IMPORTANT: Don't forget to invoke faker calls with ()

import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={faker.internet.avatar()} />
      </a>
      <div className="content">
        <a className="author">{faker.name.firstName()} Feliciano</a>
        <div className="metadata">
          <div className="date">2 days ago</div>
          <div className="rating">
            <i className="star icon" />5 Faves
          </div>
        </div>
        <div className="text">
          Hey guys, I hope this example comment is helping you read this .
        </div>
      </div>
    </div>
  );
};
export default CommentDetail;