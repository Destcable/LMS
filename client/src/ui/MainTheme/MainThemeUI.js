import CardUI from "../Card/Card";

const MainThemeUI = () => {
    const mainBlock = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    return (
        <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
            <CardUI />

        </div>
    )
};

export default MainThemeUI;