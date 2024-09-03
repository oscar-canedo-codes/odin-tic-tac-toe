export function loadHome() {
    const content = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Enjoy our delicious meals in a cozy atmosphere.';

    homeDiv.appendChild(title);
    homeDiv.appendChild(description);

    content.appendChild(homeDiv);
}
