const Education = (props) => {
    const {education} = props;

    return (
        <div>
            <div id="schoolName">{education.schoolName}</div>
            <div id="titleOfStudy">{education.titleOfStudy}</div>
            <div id="date">{education.fromDate} - {education.toDate}</div>
        </div>
    )
}

export default Education;