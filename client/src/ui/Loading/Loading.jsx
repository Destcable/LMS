import ReactLoading from 'react-loading';
import FlexCenter from '../Flex/FlexCenter';

const Loading = ({ type = 'spin', color = '#2E97C3', title = 'Загрузка...', height = '90%', width = '90%' }) => {
    return (
        <FlexCenter>
            <div>
                <ReactLoading
                    type={type}
                    color={color}
                    height={height}
                    width={width}
                />
                <h6>{title}</h6>
            </div>
        </FlexCenter>
    )
};

export default Loading;