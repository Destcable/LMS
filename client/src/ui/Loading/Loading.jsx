import ReactLoading from 'react-loading';

const Loading = ({ type, color, title, height, width }) => {
    return (
<div className='w-100 d-flex justify-content-center'>
    <div>
        <ReactLoading 
            type={type ? type : 'spin'} 
            color={color ? color : '#2E97C3'}
            height={height ? height : '90%'} 
            width={width ? width : '90%'} 
        />
        <h6>{title ? title : 'Загрузка...'}</h6>
    </div>
</div>

    )
};

export default Loading;