import ReactLoading from 'react-loading';

const Loading = ({ type = 'spin', color = '#2E97C3', title = 'Загрузка...', height = '90%', width = '90%' }) => {
    return (
        <div className='w-100 d-flex justify-content-center'>
            <div>
                <ReactLoading
                    type={type}
                    color={color}
                    height={height}
                    width={width}
                />
                <h6>{title}</h6>
            </div>
        </div>

    )
};

export default Loading;