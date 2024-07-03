import { useState } from 'react';
import FruitMenu from './FruitMenu';
import Cart from './Cart';
import {fruits} from './fruitData';
import VegMenu from './VegMenu';


function FruitShop({cart, handleAddButton, handleRemoveButton}) {

    
    return(
    <>
    <FruitMenu 
        cart={cart}      
        handleAddButton={handleAddButton} 
        handleRemoveButton={handleRemoveButton} 
    />

    <VegMenu
      cart={cart}
      handleAddButton={handleAddButton}
      handleRemoveButton={handleRemoveButton}
    />
    
    <Cart 
        cart = {cart}
        handleAddButton={handleAddButton} 
        handleRemoveButton={handleRemoveButton} 
    />
    </>
    )

}
export default FruitShop;