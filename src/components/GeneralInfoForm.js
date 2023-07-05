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
        },
        display: false
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

    handleEdit = () => {
      this.setState({
        display: false
      })
    }

    onSubmitTask = (e) => {
      e.preventDefault();
      this.setState({
        display: true
      })
    }

    render() {
        const {general} = this.state;
        return (
          <>
          {
            !this.state.display && 
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
          </div>          
          }
          {
            this.state.display && 
            <>
            <GeneralInfo general={general}/>
            <button onClick={this.handleEdit}>edit</button>
            </>
          }
          </>
        )
    }
}

export default GeneralInfoForm