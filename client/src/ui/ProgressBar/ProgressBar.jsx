const ProgressBarUI = ({name}) => { 
    return( 
        <div className="d-flex mb-10">
            <div className="line_1"></div>
            <p className="card-text ml-20">{name}</p>
        </div>
    )
};

export default ProgressBarUI;