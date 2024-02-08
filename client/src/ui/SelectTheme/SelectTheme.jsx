import Button from "../Button/Button";

const SelectTheme = ({themes, onClick}) => { 
    return( 
        <div className="d-grid m-5 gap-4">
            {themes.map((item, key) => 
                <Button 
                    key={key}
                    id={item.id}
                    className='text-white'
                    onClick={() => onClick(item)}
                >
                    {item.name}
                </Button> 
            )}
        </div>
    )
};

export default SelectTheme;