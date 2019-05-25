/* eslint-disable */
import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import PostsPage from '../CodeSplitting/Posts';

export default class Form extends Component {
  state = {
    items: [],
  };

  handleSignUp = credentials => {
    console.log(credentials);
  };

  render() {
    return (
      <div>

        <SignUpForm onSignUp={this.handleSignUp} />
        <PostsPage />
      </div>
    );
  }
}

// export default App;