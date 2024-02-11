import FlexCenter from "../Flex/FlexCenter";

const Window = ({ title, children }) => {
    return <FlexCenter>
        <div className="container1">
            <div className="container_header">
                <div className="flex align-center space-between">
                    <p className="container_title">{title}</p>
                </div>
            </div>
            <div className="container-exercise display-container">
                <div className="quest-container game-bg">
                    {children}
                </div>
            </div>
        </div>
    </FlexCenter>
};

export default Window;