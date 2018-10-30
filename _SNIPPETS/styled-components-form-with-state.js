import React, { Component } from 'react';
import styled from 'styled-components'

const Form = styled.form`
    margin: 0 auto;
    width: 50%;
    min-width: 400px;
    max-width: 800px;
    text-align: center;
    border: 1px solid #ddd;
    padding-top: 0px;
    padding-bottom: 90px;
    color: black;
    background: white;
`;

const Input = styled.input`
    font-size: 1.45em;
    border: 1px solid #ddd;
    
    &:focus{
        background-color: lightskyblue;
    } 
        
`;

const Button = styled.button`
    font-size: 1.5em;
    background-color: black;
    color: white;
`;

const Title = styled.h2`
    margin-top: 40px;
    margin-bottom: 70px;
    font-size: 1.5em;
    color: black;
    background-color: white;
`;

export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]:value
        })
    }
// signUp two strategies for gathering the form's data that will get sent to server. The first way creates a FormData object to get the field data using the name prop of the input fields. The other approach builds a stateObj by placing all the key/value pairs from state into an object that can be sent to the server.
    signUp = (e) => {
        const email = new FormData(e.target).get('email');
        const firstName = new FormData(e.target).get('firstName')
        const lastName = new FormData(e.target).get('lastName')
        const stateObj = {
            firstKey: this.state.firstName,
            secondKey: this.state.lastName,
            thirdKey: this.state.email
        }
        e.preventDefault();
        console.log(`New signup from ${email}`);
        console.log(`FormData gets the field with name = firstname and returns:   ${firstName}`);
        console.log(`FormData gets the field with name = lastname and returns:  ${lastName}`);
        console.log(`the state object firstKey key's value is ${stateObj.firstKey} ` )
      }

    //IMPORTANT: Notice that even though the form's elements are React Styled Components, you can use the standard onChange, onClick, etc actions to gather and store the data into the state of the encapsulating React Component Container (e.g. SignUpForm)

    render(){
        return(
            <Form onSubmit={this.signUp}>
                <Title>Sign up for our newsletter</Title>
                <Input
                    onChange={this.handleChange}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName} />
                <Input
                    onChange={this.handleChange}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName} />
                <Input
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="email address"
                    value={this.state.email} />
                <Button>Submit</Button>
                <div>First Name: {this.state.firstName} </div>
                <div>Last Name: {this.state.lastName}</div>
            </Form>
        )
    }
}


