import React, { useState } from "react";
import Education from "./Education";

const EducationForm = () => {

    const [schoolName, setSchoolName] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [display, setDisplay] = useState("");

    const handleEdit = () => {
        setDisplay(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(true);
    }

    return (
        <>
            {
                !display &&
                <div id="education">
                    <form action="#" onSubmit={handleSubmit}>
                        <div id="school">
                            <input 
                                type="text" placeholder="School Name" name="schoolName" 
                                onChange={(e) => setSchoolName(e.target.value)} 
                                value={schoolName}
                            />
                            <input 
                                type="text" placeholder="Title of Study" name="titleOfStudy" 
                                onChange={(e) => setTitleOfStudy(e.target.value)} 
                                value={titleOfStudy}
                            />
                        </div>
                        <div id="date">
                            <label htmlFor="fromDate">From: </label>
                            <input 
                                type="date" name="fromDate" 
                                onChange={(e) => setFromDate(e.target.value)} 
                                value={fromDate}
                            />
                            <label htmlFor="toDate">To: </label>
                            <input 
                                type="date" name="toDate" 
                                onChange={(e) => setToDate(e.target.value)} 
                                value={toDate}
                            />
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            }
            {
                display && 
                <>
                    <Education education={{schoolName, titleOfStudy, fromDate, toDate}}/>
                    <button onClick={handleEdit}>edit</button>
                </>
            }
        </>
    )
}

export default EducationForm