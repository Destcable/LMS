import Button from "../Button/Button";

const SelectTheme = ({themes}) => { 
    return( 
        <div className="d-grid m-5 gap-4">
            {themes.map((item, key) => <Button key={key} className='text-white'>{item.title}</Button> )}
        </div>
    )
};

export default SelectTheme;