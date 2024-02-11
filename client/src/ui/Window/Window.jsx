import FlexCenter from "../Flex/FlexCenter";

const Window = ({ title }) => {
    return <FlexCenter>
        <div className="container1">
            <div className="container_header">
                <div className="flex align-center space-between">
                    <p className="container_title">{title}</p>
                </div>
            </div>
            <div className="container-exercise display-container">
                <div className="quest-container game-bg">
                    {/* <div class="game">
                <div class="game-cards"><div class="game-card " onclick="openQuestion(0)"><p>100</p></div><div class="game-card " onclick="openQuestion(1)"><p>100</p></div><div class="game-card " onclick="openQuestion(2)"><p>100</p></div><div class="game-card " onclick="openQuestion(3)"><p>150</p></div><div class="game-card " onclick="openQuestion(4)"><p>150</p></div><div class="game-card " onclick="openQuestion(5)"><p>150</p></div><div class="game-card " onclick="openQuestion(6)"><p>200</p></div><div class="game-card " onclick="openQuestion(7)"><p>200</p></div><div class="game-card " onclick="openQuestion(8)"><p>200</p></div><div class="game-card " onclick="openQuestion(9)"><p>250</p></div><div class="game-card " onclick="openQuestion(10)"><p>250</p></div><div class="game-card " onclick="openQuestion(11)"><p>250</p></div><div class="game-card " onclick="openQuestion(12)"><p>300</p></div><div class="game-card " onclick="openQuestion(13)"><p>300</p></div><div class="game-card " onclick="openQuestion(14)"><p>300</p></div></div>
            </div>
            <div class="quest-container">
                <button class="exercise-btn" onclick="openResultWindow()"> Закончить </button>
            </div> */}
                </div>
            </div>
        </div>
    </FlexCenter>
};

export default Window;