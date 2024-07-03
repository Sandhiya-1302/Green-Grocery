import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import { ButtonGroup } from 'react-bootstrap';


function Cart({ handleAddButton, handleRemoveButton, cart }) {
  const [show, setShow] = useState(false);
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <>
      <Button onClick={() => setShow(!show)} className="me-2" style={{backgroundColor: '#06D001 '}}>
        <i className="bi bi-cart4"></i>
        <span className="visually-hidden">cart</span>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement='end' className='border border-2 border-black rounded'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Your Basket</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='mt-1'>
            
              <Accordion defaultActiveKey="0" className='border border-3 border-secondary rounded'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='border-0'>Shopping Cart</Accordion.Header>
                  {(cart.length > 0) ? (
                    <div>
                  {cart.map((item, index) => (
                    <Accordion.Body key={index}>
                      <div className='d-flex justify-content-center align-items-center flex-column border border-2 rounded'>
                        <Image src={item.url} className='w-50' alt={item.alt} rounded />
                        <h4>{item.name}</h4>
                        <h5 className='p-2 mt-1'>Quantity: {item.quantity}</h5>
                        <ButtonGroup>
                          <Button variant='secondary' onClick={() => handleRemoveButton(item)}>-</Button>
                          <Button variant='light'>{item.quantity}</Button>
                          <Button variant='secondary' onClick={() => handleAddButton(item)}>+</Button>
                        </ButtonGroup>
                        <h5 className='border border-black rounded text-bg-light p-2 mt-3'>Price: ₹{item.price * item.quantity}</h5>
                      </div>
                    </Accordion.Body>
                  ))}
                  </div> ) : (<h4 className='text-center p-2 pt-4 border-top border-black'>Your Cart is empty.</h4>)}
                </Accordion.Item>
              </Accordion>
            
          </div>
          <div className='border rounded p-3 mt-5 text-bg-dark text-center'>
            <div className='text-white'>
              <h3>Subtotal: ₹{calculateSubtotal()}</h3>
              
            </div>
            <div className='text-center mt-3'>
              <Button style={{backgroundColor: '#06D001'}}>Check out</Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
