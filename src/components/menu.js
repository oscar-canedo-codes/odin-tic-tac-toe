export function createMenuCard(menu, index) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu");
    menuCard.dataset.index = index;
    menuCard.innerHTML = `
    <h3 class="menu__title">${menu.title}</h3>
    <p class="menu__description">by ${menu.description}</p>
  `;
    return menuCard;
}


export function loadMenu(menu = defaultMenu) {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        menuElement.innerHTML = ''; // Clear existing content
        menu.forEach((item, index) => {
            const menuCard = createMenuCard(item, index);
            menuElement.appendChild(menuCard);
        });
    }
}

// Define a default menu
const defaultMenu = [
    { title: 'Burger', description: 'Delicious beef patty' },
    { title: 'Salad', description: 'Fresh greens' },
    { title: 'Pizza', description: 'Homemade dough' }
];

