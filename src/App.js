import React, { useState, useContext } from "react";
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Category from './components/Category';
import { fruits } from './components/fruitData';
import { vegetables } from './components/vegData';
import Contact from "./components/Contact";
import Carousel from 'react-bootstrap/Carousel';
import UserContext from "./components/UserContext";


function App() {
    const {cart, setCart} = useContext(UserContext);
    const [index, setIndex] = useState(0);


    const handleAddButton = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });    

    };

    const handleRemoveButton = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(cartItem =>
                    cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                );
            } else {
                return prevCart.filter(cartItem => cartItem.name !== item.name);
            }
        });
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigateTo = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    console.log(window.outerWidth);
    return (
        <div>
            <AppBar 
                cart={cart}
                handleAddButton={handleAddButton}
                handleRemoveButton={handleRemoveButton}
                navigateTo={navigateTo} 
            />
            <div>
                <div >
                    <Banner />
                </div>
                <div>
                    <Category
                        cart={cart}
                        handleAddButton={handleAddButton}
                        handleRemoveButton={handleRemoveButton}
                        fruits={fruits}
                        vegetables={vegetables}
                    />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
            
        </div>
    );
}

export default App;
