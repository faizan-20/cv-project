const Education = (props) => {
    const {education} = props;

    return (
        <div>
            <div id="schoolName">{education.schoolName}</div>
            <div id="titleOfStudy">{education.titleOfStudy}</div>
            <div id="fromDate">{education.fromDate}</div>
            <div id="toDate">{education.toDate}</div>
        </div>
    )
}

export default Education;