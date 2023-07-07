import React, { useState } from 'react'
import GeneralInfo from './GeneralInfo';

const GeneralInfoForm = () => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [location, setLocation] = useState("");
  const [display, setDisplay] = useState("");

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
    <div id="generalInfo">
      <form action="#" onSubmit={onSubmitTask}> 
        <div id="name">
          <input 
            type="text" name="fname" placeholder="First Name" 
            onChange={(e) => setFname(e.target.value)} 
            value={fname}
          />
          <input 
            type="text" name="lname" placeholder="Last Name" 
            onChange={(e) => setLname(e.target.value)} 
            value={lname}
          />
        </div>
        <div id="rest">
          <input 
            type="text" name="email" placeholder="email@example.com" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
          <input 
            type="number" name="phn" placeholder="ph number" 
            onChange={(e) => setPhn(e.target.value)} 
            value={phn}
          />
          <input 
            type="text" name="location" placeholder="city, state" 
            onChange={(e) => setLocation(e.target.value)} 
            value={location}/>
        </div>
        <input type="submit" />
      </form>
    </div>          
    }
    {
      display && 
      <>
      <GeneralInfo general={{fname, lname, location, phn, email}}/>
      <button onClick={handleEdit}>edit</button>
      </>
    }
    </>
  )
}

export default GeneralInfoForm