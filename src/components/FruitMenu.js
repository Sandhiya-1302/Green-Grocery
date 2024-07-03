import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fruits } from "./fruitData";
import UserContext from './UserContext';
import Popup from './Popup';
import '../fruitMenu.css';

function FruitMenu({ handleAddButton}) {

    const { userDetails, cart } = useContext(UserContext);
    
    const [showPopup, setShowPopup] = useState(false);

    function handleAddCount(index) {

        handleAddButton(fruits[index]);

        if (userDetails.length === 0) {
            setShowPopup(true);
        }

    }

    function getItemQuantity(fruit) {
        const item = cart.find(cartItem => cartItem.name === fruit.name);
        return item ? item.quantity : 0;
    }


    return (
        <>
            
            <div className="veg-menu" style={{backgroundColor:'white', color: '#ffffff', minHeight: '100vh' }}>
                {/* <div style={{position: 'relative', backgroundColor: '#FFF7F1', marginRight: '120px', marginLeft: '120px'}}> */}
                <div className='text-center mt-4 p-3' style={{ backgroundColor: 'rgb(16 21 33)', color: '#06D001' }}>
                    <h1><span>Fruits</span></h1>
                </div>
                <Container fluid className="px-5 py-5 rounded">
                    <Row className="justify-content-center px-5">
                        {fruits.map((fruit, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4 d-flex justify-content-center p-1">
                                <Card style={{ width: '18rem', backgroundColor: 'rgb(16 21 33)', color: '#ffffff', border: '1px solid black' }}>
                                    <div className="border-bottom">
                                        <Card.Img
                                            variant="top"
                                            src={fruit.url}
                                            alt={fruit.alt}
                                            className="border"
                                            style={{ height: '250px', border: '1px solid black' }}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#90EE90' }}>{fruit.name}</Card.Title>
                                        <Card.Text>
                                            <div className="text-bg-light border rounded mt-1 text-center" style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}>
                                                Quantity: {fruit.quantity}
                                            </div>
                                            <div className="text-bg-light border rounded mt-1 text-center" style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}>
                                                Price: {fruit.price}
                                            </div>
                                        </Card.Text>
                                        <div className="text-center" style={{ marginBottom: "-10px" }}>
                                            {getItemQuantity(fruit) === 0 ? (
                                                <Button style={{ backgroundColor: '#06D001', borderColor: '#06D001', color: 'white' }} onClick={() => handleAddCount(index)}>
                                                    Add to cart
                                                </Button>
                                            ) : (
                                                userDetails.length === 0 && showPopup ? (
                                                    <Popup show={showPopup} onClose={() => setShowPopup(false)} />
                                                ) : (
                                                    userDetails.length === 0 ? (<Button variant="primary" style={{ backgroundColor: '#06D001', borderColor: '#06D001', color: 'white' }} onClick={() => handleAddCount(index)}>
                                                    Add to cart
                                                </Button>) : (
                                                    <p className="border border-black rounded w-50" style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a', marginLeft: "70px" }}>In Basket</p>
                                                ))
                                            )}
                                        </div>     
                                        </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* </div> */}
        </>
    );
}

export default FruitMenu;