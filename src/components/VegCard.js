import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../fruitCard.css';

function VegCard({ imgVegSrc, vegTitle, vegDescription, onShowMenu }) {
    return (
        <Card style={{ width: '30rem', height: '32rem', backgroundColor: 'rgb(16 21 33)', color: '#ffffff', border: '1px solid black' }}>
            <Card.Img 
                variant="top" 
                src={imgVegSrc} 
                style={{ height: '250px' }} 
            />
            <Card.Body>
                <div className='fw-bold text-center'>
                    <h2 style={{ color: '#98FB98' }}>{vegTitle}</h2>
                </div>
                <Card.Text style={{ backgroundColor: '#fff5c8', borderLeft: '5px solid rgb(6, 208, 1)', color: '#2a2a2a', padding: '10px', borderRadius: '5px'}}>
                    {vegDescription}
                </Card.Text>
                <div className='text-center'>
                    <Button variant="primary" style={{ backgroundColor: '#06D001', borderColor: '#06D001', color: 'white', fontWeight: '400' }} onClick={onShowMenu}>Show Menu</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default VegCard;
