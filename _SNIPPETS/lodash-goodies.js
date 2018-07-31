// _.mapKeys  ----map over an array of objects and return an OBJECT with keys that you specify from the object keys that were passed in
const posts = [
    {id: 1, title: "hi"},
      {id: 2, title: "boo"},
      {id: 3, title: "you"}
    ]
  const state = _.mapKeys(posts,'id');
  state; // => {1":{"id":1,"title":"hi"},"2":{"id":2,"title":"boo"},"3":{"id":3,"title":"you"} }
  state["2"]; // => {id: 2, title: "boo"}
  
  
  // _.map --- Lodash can map Objects  - and do things with the key value pairs
  
  let myObj = {
    1: { title: "President", name: "Trump"},
    2: { title: "VicePrez", name: "Pence"},
    3: { title: "Village Idiot", name: "Obama"}
  }
  // in this example, map will take the myObj object, and pass in the objects associated with each key, one at a time. I can then grab the value of specific props from each individual object beign assessed.
  myFunction(){
    return _.map(myObj, eachPropValue => {
        return (
            <li >
             {eachProp.title}
             </li>
        );
    });
 }