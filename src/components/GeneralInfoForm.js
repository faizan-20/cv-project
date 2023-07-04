import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo';

export class GeneralInfoForm extends Component {

    constructor(){
      super();

      this.state = {
        general: {
          fname: "",
          lname: "",
          email: "",
          phn: "",
          location: ""
        }
      }
    }

    handleChange = (e) => {
      this.setState({
        general: {
          ...this.state.general,
          [e.target.name]: e.target.value,
        }
      });
    }

    onSubmitTask = (e) => {
      e.preventDefault();
      console.log(this.state);
    }

    render() {
        const {general} = this.state;
        return (
          <div id="generalInfo">
            <form action="#" onSubmit={this.onSubmitTask}> 
              <div id="name">
                <input type="text" name="fname" placeholder="First Name" onChange={this.handleChange} value={general.fname}/>
                <input type="text" name="lname" placeholder="Last Name" onChange={this.handleChange} value={general.lname}/>
              </div>
              <div id="rest">
                <input type="text" name="email" placeholder="email@example.com" onChange={this.handleChange} value={general.email}/>
                <input type="text" name="phn" placeholder="ph number" onChange={this.handleChange} value={general.phn}/>
                <input type="text" name="location" placeholder="city, state" onChange={this.handleChange} value={general.location}/>
              </div>
              <input type="submit" />
            </form>
            <GeneralInfo general={general}/>
          </div>
        )
    }
}

export default GeneralInfoForm