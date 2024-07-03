import {Col, Row, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../App.css';
import '../appbar.css';

function Banner(){
    
    return(
        <div style={{ height: "100vh", marginTop: '10px'}}>
        <Container fluid>
            <Row className='d-flex justify-content-center align-items-center' >
                <Col lg={8}>
                <Carousel>
      <Carousel.Item interval={2000}>
      <Image className='d-block w-100 carousel-image ' style={{height: "500px", objectFit: "cover", width: "100%", marginTop: "90px"}} src={require('../assets/fandv.webp')} alt="One" rounded/>
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className='d-block w-100 carousel-image ' src={require('../assets/fruit.png')} alt="One" rounded/>
        
      </Carousel.Item >
      <Carousel.Item interval={2000}>
      <Image className='d-block w-100 carousel-image ' src={require('../assets/vegetable.avif')} alt="One" rounded/>
        
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>

    <div className='text-center '>
        <div className='d-flex justify-content-center'>
            <h2 className='display-5 mt-1 w-50' style={{color: '#06D001', width: '58% !important', backgroundColor: 'rgb(16 21 33)', padding: '5px 0px', fontSize: '32px'}}>
        <span><i className="bi bi-bag-heart-fill"></i>Green Grocery!</span>
           
        </h2>
            </div>
            <div>
            <p className='lead' >Buy farm fresh fruits & vegetables online!
            </p>
            </div>
            

    </div>
    
    </Container>
    </div>
    
)

}

export default Banner;