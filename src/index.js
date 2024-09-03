import { loadHome } from './components/home';
import { loadMenu } from './components/menu';
import { loadContact } from './components/contact';


function setActiveButton(button) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function switchTab(newTab) {
    clearContent();
    newTab();
}

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    homeButton.addEventListener('click', () => {
        setActiveButton(homeButton);
        switchTab(loadHome);
    });

    menuButton.addEventListener('click', () => {
        setActiveButton(menuButton);
        switchTab(loadMenu);
    });

    contactButton.addEventListener('click', () => {
        setActiveButton(contactButton);
        switchTab(loadContact);
    });

    // Load home page by default
    loadHome();
    setActiveButton(homeButton);
});

console.log("Restaurant Page");