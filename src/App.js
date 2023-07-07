import React from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EducationForm from "./components/EducationForm";

const App = () => {

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfoForm/>
      <h2>Work Experience</h2>
      <WorkExperienceForm/>
      <h2>Education</h2>
      <EducationForm/>
    </div>
  );
}

export default App;
