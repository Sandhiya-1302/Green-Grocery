import React, { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Container, Row, Col } from 'react-bootstrap';
import UserContext from './UserContext';

function Contact() {
    const { userDetails, setUserDetails } = useContext(UserContext);
    const [show, setShow] = useState(false);

    const [signEmail, setSignEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');
    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const [signEmailError, setSignEmailError] = useState('');
    const [signPasswordError, setSignPasswordError] = useState('');
    const [logEmailError, setLogEmailError] = useState('');
    const [logPasswordError, setLogPasswordError] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        if (!email) return false;
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex >= email.length - 2) return false;
        const localPart = email.slice(0, atIndex);
        const domainPart = email.slice(atIndex + 1, dotIndex);
        const topLevelDomain = email.slice(dotIndex + 1);
        const hasLetters = /[A-Za-z]/.test(localPart);
        const hasNumbers = /[0-9]/.test(localPart);
        if (!hasLetters || !hasNumbers) return false;
        if (domainPart !== 'gmail' && domainPart !== 'email') return false;
        if (topLevelDomain !== 'com') return false;
        return true;
    };

    const handleSignup = (event) => {
        event.preventDefault();
        setSignEmailError('');
        setSignPasswordError('');
        if (!signEmail) {
            setSignEmailError('Email field should not be empty!');
            return;
        }
        if (!validateEmail(signEmail)) {
            setSignEmailError('Please provide a valid email!');
            return;
        }
        if (!signPassword) {
            setSignPasswordError('Password field should not be empty!');
            return;
        }
        const firstChar = signPassword.charAt(0);
        const atPassIndex = signPassword.indexOf('@');
        if (firstChar !== firstChar.toUpperCase()) {
            setSignPasswordError('Password should start with a capital letter!');
            return;
        }
        if (atPassIndex === -1) {
            setSignPasswordError('Password should contain an "@" symbol!');
            return;
        }
        const localPart = signPassword.slice(1, atPassIndex);
        const domainPart = signPassword.slice(atPassIndex + 1);
        const hasLetter = /[A-Za-z]/.test(localPart);
        const hasDigit = /[0-9]/.test(domainPart);
        if (!hasLetter) {
            setSignPasswordError('Provide a valid password!');
            return;
        }
        if (!hasDigit) {
            setSignPasswordError('Password should contain at least one digit!');
            return;
        }
        if (signPassword.length > 8) {
            setSignPasswordError('Password should not exceed 8 characters long!');
            return;
        }
        if (userDetails.find((user) => user.email === signEmail)) {
            setSignEmailError('Email already exists!');
            return;
        }
        setUserDetails([...userDetails, { email: signEmail, password: signPassword }]);
        setSignEmail('');
        setSignPassword('');
        alert('Signup successful!');
    };

    const handleLogin = (event) => {
        event.preventDefault();
        setLogEmailError('');
        setLogPasswordError('');
        setError('');
        const foundUser = userDetails.find(
            (user) => user.email === logEmail && user.password === logPassword
        );
        if (foundUser) {
            setLogEmailError('');
            setLogPasswordError('');
            setError('');
            alert('Login successful!');
        } else {
            if (!logEmail) {
                setLogEmailError('Email is required!');
                return;
            }
            if (!logPassword) {
                setLogPasswordError('Password is required!');
                return;
            }
            setError('Invalid email or password!');
        }
        setLogEmail('');
        setLogPassword('');
    };

    const handleLinkClick = () => {
        setShow(!show);
        setError('');
        setSignEmailError('');
        setSignPasswordError('');
        setLogEmailError('');
        setLogPasswordError('');
    };

    const formStyles = {
        backgroundColor: 'rgb(16 21 33)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        border: '1px solid black',
        borderRadius: '3px',
        padding: '4px'
    };

    return (
        <>
            {show ? (
                <section id="contact" className="d-flex align-items-center min-vh-100 bg-body-secondary">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} md={8} lg={6} xl={4} className="p-3">
                                <form className="p-4 border rounded-3" style={formStyles} onSubmit={handleSignup}>
                                    <h2 className="text-center mb-5" style={{ color: 'white' }}>Signup</h2>
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                        <Form.Control
                                            type="email"
                                            value={signEmail}
                                            onChange={(e) => {
                                                setSignEmail(e.target.value);
                                                setSignEmailError('');
                                                setSignPasswordError('');
                                            }}
                                            placeholder="name@example.com"
                                            style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}
                                        />
                                    </FloatingLabel>
                                    {signEmailError && <div className="error" style={{ color: 'red', marginTop: '-19px', marginBottom: '20px' }}>{signEmailError}</div>}
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
                                        <Form.Control
                                            type="password"
                                            value={signPassword}
                                            onChange={(e) => {
                                                setSignPassword(e.target.value);
                                                setSignEmailError('');
                                                setSignPasswordError('');
                                            }}
                                            placeholder="Password"
                                            style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}
                                        />
                                    </FloatingLabel>
                                    {signPasswordError && <div className="error" style={{ color: 'red', marginTop: '-25px' }}>{signPasswordError}</div>}
                                    <div className="text-center mt-5">
                                        <Button className="w-100" size="sm" style={{ fontSize: '1.5rem', borderRadius: '6px', backgroundColor: '#06D001', borderColor: '#06D001', color: 'white' }} type="submit">
                                            Signup
                                        </Button>
                                    </div>
                                    <div className="text-center mt-4">
                                        <Button variant="link" className="mt-1" onClick={handleLinkClick} style={{ fontSize: '1.2rem', color: '#06D001', textDecoration: 'none' }}>Login</Button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            ) : (
                <section id="contact" className="d-flex align-items-center min-vh-100 bg-body-secondary">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} md={8} lg={6} xl={4} className="p-3">
                                <form className="p-4 border rounded-3" style={formStyles} onSubmit={handleLogin}>
                                    <h2 className="text-center mb-5" style={{ color: 'white' }}>Login</h2>
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                        <Form.Control
                                            type="email"
                                            value={logEmail}
                                            onChange={(e) => {
                                                setLogEmail(e.target.value);
                                                setLogEmailError('');
                                                setLogPasswordError('');
                                                setError('');
                                            }}
                                            placeholder="name@example.com"
                                            style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}
                                        />
                                    </FloatingLabel>
                                    {logEmailError && <div className="error" style={{ color: 'red', marginTop: '-19px', marginBottom: '20px' }}>{logEmailError}</div>}
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
                                        <Form.Control
                                            type="password"
                                            value={logPassword}
                                            onChange={(e) => {
                                                setLogPassword(e.target.value);
                                                setLogEmailError('');
                                                setLogPasswordError('');
                                                setError('');
                                            }}
                                            placeholder="Password"
                                            style={{ backgroundColor: '#f0f0f0', color: '#2a2a2a' }}
                                        />
                                    </FloatingLabel>
                                    {logPasswordError && <div className="error" style={{ color: 'red', marginTop: '-25px' }}>{logPasswordError}</div>}
                                    {error && <div className="error" style={{ color: 'red', marginTop: '-10px' }}>{error}</div>}
                                    <div className="text-center mt-5">
                                        <Button className="w-100" size="sm" style={{ fontSize: '1.5rem', borderRadius: '6px', backgroundColor: '#06D001', borderColor: '#06D001', color: 'white' }} type="submit">
                                            Login
                                        </Button>
                                    </div>
                                    <div className="text-center mt-4">
                                        <Button variant="link" className="mt-1" onClick={handleLinkClick} style={{ fontSize: '1.2rem', color: '#06D001', textDecoration: 'none' }}>Signup</Button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
}

export default Contact;
