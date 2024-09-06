import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import '../appbar.css';

function AppBar({ cart, handleAddButton, handleRemoveButton, navigateTo }) {
    return (
      <>
      <section id='home'>
        <Navbar expand="lg" className="navBar" style={{backgroundColor: 'rgb(16 21 33)'}} fixed='top'>
          <Container>
            <Navbar.Brand href="#home">
              <h2 style={{color: '#06D001', display: 'flex'}} >
              <div class="spinner-3d-wrapper">
        <div class="animated spinner-3d duration8 infinite" style={{textAlign: 'center', marginRight: '5px'}}>
        <span><i className="bi bi-bag-heart-fill"></i></span>
           </div>
        </div>
        Garden Fresh
        
                
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#home" className='fw-bold' onClick={() => navigateTo("home")} style={{color: 'white'}}>Home</Nav.Link>
                <Nav.Link href="#category" className='fw-bold' onClick={() => navigateTo("category")} style={{color: 'white'}}>Category</Nav.Link>
                <Nav.Link href="#contact" className='border rounded bg-body-secondary me-2 ' onClick={() => navigateTo("contact")}><span><i class="bi bi-person-square" style={{padding: "8px"}}></i></span></Nav.Link>
                <Cart
                    cart={cart}
                    handleAddButton={handleAddButton}
                    handleRemoveButton={handleRemoveButton}
                />
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      </>
    );
}

export default AppBar;
