import React, { Component } from 'react'

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
            }
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

    onSubmitTask = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const { workExp } = this.state;

        return (
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
        )
    }
}

export default WorkExperienceForm