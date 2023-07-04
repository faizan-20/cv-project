import React, { Component } from "react";

export class EducationForm extends Component {

    constructor() {
        super();

        this.state = {
            education: {
                schoolName: "",
                titleOfStudy: "",
                fromDate: "",
                toDate: ""
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            education: {
                ...this.state.education,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { education } = this.state;
        return (
            <form action="#" onSubmit={this.handleSubmit}>
                <div id="school">
                    <input type="text" placeholder="School Name" name="schoolName" onChange={this.handleChange} value={education.schoolName}/>
                    <input type="text" placeholder="Title of Study" name="titleOfStudy" onChange={this.handleChange} value={education.titleOfStudy}/>
                </div>
                <div id="date">
                    <input type="date" name="fromDate" onChange={this.handleChange} value={education.fromDate}/>
                    <label htmlFor="fromDate">From: </label>
                    <input type="date" name="toDate" onChange={this.handleChange} value={education.toDate}/>
                    <label htmlFor="toDate">To: </label>
                </div>
                <input type="submit"/>
            </form>
        )
    }
}