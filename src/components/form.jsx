import React, { Component } from "react";
import { withRouter }from "react-router-dom";


class GuessForm extends React.Component {
  state = {
    guess: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    window.location.href = "http://mywebsite.com/home.html";
  };

  render() {
    return (
      <form>
        <input
          placeholder="Make your guess"
          value={this.state.guess}
          onChange={e => this.setState({ guess: e.target.value})} />
        <button onClick={e => this.onSubmit(e)}>
          Submit
        </button>
        {/* <button onClick={ history.push('/answer') }>Submit</button> */}
      </form>
    );
  }
}

export default GuessForm;
