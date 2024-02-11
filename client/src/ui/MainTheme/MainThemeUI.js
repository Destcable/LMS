import useQueryTopicThemes from "../../hooks/useQueryTopicThemes";
import CardUI from "../Card/Card";

const MainThemeUI = ({dataTopic, selectableTheme }) => {
    const { data } = useQueryTopicThemes(dataTopic?.id);

    const mainBlock = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    if (data) {
        return <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
            {data.map((theme, idx) => (
                <CardUI 
                    key={idx}
                    title={theme.title}
                    description={theme.description}
                    onClick={() => selectableTheme(theme)}
                />
            ))}
        </div>
    }

};

export default MainThemeUI;