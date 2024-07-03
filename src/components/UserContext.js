import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails, cart, setCart }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
