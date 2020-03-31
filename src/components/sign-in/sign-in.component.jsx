import React, { Component } from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';

class signIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
          />

          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default signIn;
