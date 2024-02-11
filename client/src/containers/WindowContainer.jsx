import WindowLecture from "../ui/Window/Elements/WindowLecture";
import WindowMiniGame from "../ui/Window/Elements/WindowMiniGame";
import WindowTrainer from "../ui/Window/Elements/WindowTrainer";

const WindowContainer = () => { 
    const type = "LECTURE";

    if (type === "LECTURE") return <WindowLecture />

    if (type === "TRAINER") return <WindowTrainer />

    if (type === "MINI_GAME") return <WindowMiniGame /> 
};

export default WindowContainer;