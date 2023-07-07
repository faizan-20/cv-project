import React, { useState } from 'react'
import WorkExperience from './WorkExperience';

const WorkExperienceForm = () => {

    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [mainTask,setMainTask] = useState("");
    const [display, setDisplay] = useState(false);

    const handleEdit = () => {
        setDisplay(false);
    }

    const onSubmitTask = (e) => {
        e.preventDefault();
        setDisplay(true);
    }

    return (
        <>
        {
        !display && 
        <div id="workExperience">
            <form action="#" onSubmit={onSubmitTask}>
                <div id="company">
                    <input 
                        type="text" placeholder='Compony Name' name="companyName" 
                        onChange={(e) => setCompanyName(e.target.value)} 
                        value={companyName}
                    />
                    <input 
                        type="text" placeholder='Position Title' name='positionTitle' 
                        onChange={(e) => setPositionTitle(e.target.value)} 
                        value={positionTitle}
                    />
                </div>
                <div id="duration">
                    <label htmlFor="from">From</label>
                    <input 
                        type="date" name='from' id='from' 
                        onChange={(e) => setFromDate(e.target.value)} 
                        value={fromDate}
                    />
                    <label htmlFor="to">To</label>
                    <input 
                        type="date" name="to" id="to" 
                        onChange={(e) => setToDate(e.target.value)} 
                        value={toDate}
                    />
                </div>
                <div id="mainTaskDiv">
                    <input 
                        type="textarea" name="mainTask" id="mainTask" placeholder='Main Tasks' 
                        onChange={(e) => setMainTask(e.target.value)} 
                        value={mainTask}
                    />
                    <input type="submit"/>
                </div>
            </form>
        </div>
        }
        {
            display && 
            <>
            <WorkExperience workExp={{companyName, positionTitle, fromDate, toDate, mainTask}}/>
            <button onClick={handleEdit}>edit</button> 
            </>
        }
        </>
    )
}

export default WorkExperienceForm