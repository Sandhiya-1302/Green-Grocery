export const category = [
    {
        imgSrc: require('../assets/fruit.png'),
        title: 'Fruits',
        description: 'Click the "Show Menu" button below to view the fruits menu and enjoy buying Juicy fruits!',
        function : function handleFruitShowMenu(setActiveMenu) {
            setActiveMenu('fruit');
            window.scrollTo({top: 750, behavior: 'smooth'});
        }
        
    },
    {
        imgSrc: require('../assets/vegetable.avif'),
        title: 'Vegetables',
        description: 'Click the "Show Menu" button below to view the vegetable menu and enjoy buying farm fresh vegetables!',
        function: function handleVegShowMenu(setActiveMenu) {
            setActiveMenu('veg');
            window.scrollTo({top: 750, behavior: 'smooth'});
        }
    }
];