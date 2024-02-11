import ProgressBarContainer from "../../containers/ProgressBarContainer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FlexBetween from "../Flex/FlexBetween";

const CardUI = ({title, description, onClick}) => {

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
            <ProgressBarContainer name='bar' />
            <div className="flex-column bg-white" style={styleBlock}>
                <div className="w-100 shape-color_1 mb-4" style={styleShape}>
                    <p className="card-text_main">{title}</p>
                </div>
                <p className="text-center">{description}</p>
                <div className="d-flex w-100 justify-content-center button_train ">
                    <a href="#" className="text-decoration-none w-100 ps-3 pe-3">
                        <div className="btn btn_exe w-100" onClick={onClick}>
                            <FlexBetween>
                                Задание
                                <MdKeyboardDoubleArrowRight size='22px'/>
                            </FlexBetween>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default CardUI;