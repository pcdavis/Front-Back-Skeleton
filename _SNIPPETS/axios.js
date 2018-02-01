///////SIMPLE WAY TO SEE WHAT THE RESPONSE OBJECT CONTAINS ///////////// 
axios.get('http://swapi.co/api/people')
.then( response => {
    console.log(response);
})