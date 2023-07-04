const GeneralInfo = (props) => {
    const { general } = props;

    return(
        <div>
            <h2>{general.fname} {general.lname}</h2>
            <p>{general.email} | {general.phn} | {general.location}</p>
        </div>
    )
}

export default GeneralInfo;