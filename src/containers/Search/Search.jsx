import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    breeds: [],
    chosenBreed: "",
    images: [],
  };

  componentDidMount() {
    this.getDogBreeds();
  }

  getDogBreeds = () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      console.log(response.data.message);
      console.log(Object.keys(response.data.message));
      this.setState({ breeds: Object.keys(response.data.message) });
    });
  };

  getDogImagesByBreed = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.chosenBreed}/images`)
      .then((response) => {
        console.log(response.data.message);
        this.setState({
          images: response.data.message.splice(0, 10),
        });
      });
  };

  handleButtonClick = () => {
    console.log(this.state.chosenBreed);
    this.getDogImagesByBreed();
  };

  selectBreed = (e) => {
    console.log(e.target.value);
    this.setState({ chosenBreed: e.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Search by Breed!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={this.selectBreed}
              >
                <option>Choose a dog breed below</option>
                {this.state.breeds.map((breed, index) => (
                  <option value={breed} key={index}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-2">
              <button
                className="btn btn-success"
                onClick={this.handleButtonClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.images.map((image, index) => (
            <div className="row" key={index}>
              <div className="col text-center">
                <hr />
                <img src={image} alt="dog" style={{ width: "50%" }} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Search;
