import Button from "../Button/Button";
const SelectTheme = ({themes}) => { 
    return( 
        <div className="d-grid m-5 gap-4">
            {themes.map((item, index) => <Button key={index} type={'success'}>{item}</Button> )}
        </div>
    )
};

export default SelectTheme;