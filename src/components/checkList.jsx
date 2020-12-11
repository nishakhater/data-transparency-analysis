import React, { Component } from "react";
import Checkbox from "./Checkbox";
import '../Utilities.css';

//TODO: map this against field sections
const MENTAL_HEALTH = ["One", "Two", "Three"];
const GENDER = ["FOUR", "five", "six"];
const RACE = ["seven", "eight", "nine"];

class Checklist extends Component {
  state = {
    checkboxes: (MENTAL_HEALTH.concat(GENDER).concat(RACE)).reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxesMENTALHEALTH = () => MENTAL_HEALTH.map(this.createCheckbox);
  createCheckboxesRACE = () => RACE.map(this.createCheckbox);
  createCheckboxesGENDER = () => GENDER.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column align-items-start justify-content-start p-3">
                  <p className="font-weight-bold text-align-left">Perceived mental health</p>
                  {this.createCheckboxesMENTALHEALTH()}
                </div>
                <div className="d-flex flex-column align-items-start p-3 ">
                  <p className="font-weight-bold text-align-left">Perceived race</p>
                  {this.createCheckboxesRACE()}
                </div>
                <div className="d-flex flex-column align-items-start p-3">
                  <p className="font-weight-bold text-align-left">Perceived gender</p>
                  {this.createCheckboxesGENDER()}
                </div>
              </div>
              <div className="form-group mt-2">
                {/* <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button> */}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checklist;
