const WorkExperience = (props) => {
    const { workExp } = props;

    return (
        <div>
            <div id="companyName">{workExp.companyName}</div>
            <div id="position">{workExp.positionTitle}</div>
            <div id="date">{workExp.from} - {workExp.to}</div>
            <div id="mainTasl">{workExp.mainTask}</div>
        </div>
    );
}

export default WorkExperience;