import { Card } from 'react-bootstrap';

const SideCard = ({icon, title, onClick}) => {
    const styleCard = { 
        width: '60%',
        cursor: 'pointer'
    };

    return (
        <Card className='d-flex align-items-center p-2' style={styleCard} onClick={onClick}>
            {icon}
            <Card.Text>{title}</Card.Text>
        </Card>
    )
}

export default SideCard;