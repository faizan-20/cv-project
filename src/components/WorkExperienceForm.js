import React, { Component } from 'react'
import WorkExperience from './WorkExperience';

export class WorkExperienceForm extends Component {

    constructor() {
        super();

        this.state = {
            workExp: {
                companyName: "",
                positionTitle: "",
                from: "",
                to: "",
                mainTask: ""
            },
            display: false
        }
    }

    handleChange = (e) => {
        this.setState({
            workExp: {
                ...this.state.workExp,
                [e.target.name]: e.target.value
            }
        });
    }

    handleEdit = () => {
      this.setState({
        display: false
      })
    }

    handleAdd = () => {
        return (
            <WorkExperienceForm/>
        )
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            display: true
        });
    }

    render() {

        const { workExp } = this.state;

        return (
            <>
            {
            !this.state.display && 
            <div id="workExperience">
                <form action="#" onSubmit={this.onSubmitTask}>
                    <div id="company">
                        <input type="text" placeholder='Compony Name' name="companyName" onChange={this.handleChange} value={workExp.companyName}/>
                        <input type="text" placeholder='Position Title' name='positionTitle' onChange={this.handleChange} value={workExp.positionTitle}/>
                    </div>
                    <div id="duration">
                        <label htmlFor="from">From</label>
                        <input type="date" name='from' id='from' onChange={this.handleChange} value={workExp.from}/>
                        <label htmlFor="to">To</label>
                        <input type="date" name="to" id="to" onChange={this.handleChange} value={workExp.to}/>
                    </div>
                    <div id="mainTaskDiv">
                        <input type="textarea" name="mainTask" id="mainTask" placeholder='Main Tasks' onChange={this.handleChange} value={workExp.mainTask}/>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
            }
            {
                this.state.display && 
                <>
                <WorkExperience workExp={workExp}/>
                <button onClick={this.handleEdit}>edit</button> 
                </>
            }
            </>
        )
    }
}

export default WorkExperienceForm