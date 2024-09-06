import React, { useState, useContext } from "react";
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Category from './components/Category';
import { fruits } from './components/fruitData';
import { vegetables } from './components/vegData';
import Contact from "./components/Contact";
import UserContext from "./components/UserContext";


function App() {
    const {cart, setCart} = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState("home");


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


    const handlePageSelect = (page) => {
        setCurrentPage(page);
    };




    

    
    return (
        <div>
            <AppBar 
                cart={cart}
                handleAddButton={handleAddButton}
                handleRemoveButton={handleRemoveButton}
                navigateTo={handlePageSelect}
                
            />
            <div>
                {currentPage === "home" &&
                <div >
                    <Banner />
                </div>
                }
                {currentPage === "category" &&
                <div>
                    <Category
                        cart={cart}
                        handleAddButton={handleAddButton}
                        handleRemoveButton={handleRemoveButton}
                        fruits={fruits}
                        vegetables={vegetables}
                    />
                </div>
                }
                {currentPage === "contact" && 
                <div>
                    <Contact />
                </div>
                }
            </div>
            
        </div>
    );
}

export default App;
