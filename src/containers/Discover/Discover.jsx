import React, { Component } from "react";
import axios from "axios";

class Discover extends Component {
  state = {
    imageUrl: "",
  };

  componentDidMount() {
    this.getNewDog();
  }

  getNewDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data);
        this.setState({
          imageUrl: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleThumbsDown = () => {
    this.getNewDog();
  };

  handleThumbsUp = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const yourLuckyNumber = 3;

    if (randomNumber === yourLuckyNumber) {
      alert("The dog likes you too!");
    }
    this.getNewDog();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Welcome to Pupster!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={this.state.imageUrl} alt="dog" style={{ height: 300 }} />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-evenly">
            <button className="btn btn-danger" onClick={this.handleThumbsDown}>
              Thumbs Down
            </button>
            <button className="btn btn-success" onClick={this.handleThumbsUp}>
              Thumbs Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
