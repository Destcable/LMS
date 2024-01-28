import ProgressBarContainer from "../../containers/ProgressBarContainer";

const CardUI = () => {

    const styleCard = {
        marginBottom: "35px",
    }

    const styleBlock = {
        width: "300px",
        height: "350px",
        border: "1px solid #B5C5D8",
        position: "relative",
    }

    const styleShape = {
        height: "150px",
    }


    return (
        <div className="d-flex flex-column" style={styleCard}>
            <ProgressBarContainer lineName='line' />
            <div className="flex-column" style={styleBlock}>
                <div className="w-100 shape-color_1 mb-4" style={styleShape}>
                    <p className="card-text_main">title</p>
                </div>
                <p className="text-center">desc</p>
                <div className="d-flex w-100 justify-content-center button_train ">
                    <a href="#" className="text-decoration-none">
                        <div
                            className="d-flex btn btn_info align-items-center"
                            >
                            Справка
                        </div>
                    </a>
                    <a href="#" className="text-decoration-none">
                        <div className="d-flex btn btn_exe align-center">
                            Задание
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default CardUI;