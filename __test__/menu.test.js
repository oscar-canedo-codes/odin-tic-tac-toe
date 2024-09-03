import { loadMenu, createMenuCard } from "../src/components/menu";


describe('Menu module', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="menu"></div>';
    });

    it('should create a menu card correctly', () => {
        const menu = {
            title: 'Burger',
            description: 'Delicious beef patty'
        };
        const menuCard = createMenuCard(menu, 0);
        expect(menuCard).toHaveClass('menu');
        expect(menuCard.dataset.index).toBe('0');
        expect(menuCard.querySelector('.menu__title')).toHaveTextContent('Burger');
        expect(menuCard.querySelector('.menu__description')).toHaveTextContent('Delicious beef patty');
    });

    it('should display the menu items correctly', () => {
        const menu = [
            { title: 'Burger', description: 'Delicious beef patty' },
            { title: 'Salad', description: 'Fresh greens' },
            { title: 'Pizza', description: 'Homemade dough' }
        ];
        loadMenu(menu);
        const menuItems = document.querySelectorAll('#menu .menu');
        expect(menuItems).toHaveLength(3);
        expect(menuItems[0].querySelector('.menu__title')).toHaveTextContent('Burger');
        expect(menuItems[1].querySelector('.menu__title')).toHaveTextContent('Salad');
        expect(menuItems[2].querySelector('.menu__title')).toHaveTextContent('Pizza');
    });
});