import React, { Component } from "react";
import { useNavigate } from "react-router-dom";


class GuessForm extends Component {
  state = {
    guess: ''
  };

  let navigate = useNavigate();

  onSubmit = (e) => {
    e.preventDefault();
    navigate('answer');
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          placeholder="Make your guess"
          value={this.state.guess}
          onChange={e => this.setState({ guess: e.target.value})} />
        {/* <button onClick={e => this.onSubmit(e)}>Submit</button> */}
        <button onSubmit={handleSubmit}>Submit</button>/
      </form>
    );
  }
}

export default GuessForm;
