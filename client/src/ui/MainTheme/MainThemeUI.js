import CardUI from "../Card/Card";

const MainThemeUI = ({themes}) => {
    const mainBlock = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    if (themes) {
        return <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
            {themes.map((theme, idx) => (
                <CardUI 
                    key={idx}
                    title={theme.title}
                    description={theme.description}
                />
            ))}
        </div>
    }

};

export default MainThemeUI;