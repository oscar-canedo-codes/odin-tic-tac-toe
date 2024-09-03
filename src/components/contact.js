export function setupEventListeners() {
    const contactForm = document.getElementById("form");
    contactForm.addEventListener('submit', handleFormSubmit);
}

export function handleFormSubmit(event) {
    event.preventDefault();
    const formName = document.getElementById("formName").value;
    const formDate = document.getElementById("formDate").value;
    event.target.reset();
    // Add any additional logic or validation here
}

export function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const title = document.createElement('h1');
    title.textContent = 'Reserve your event';

    const description = document.createElement('p');
    description.textContent = 'We will get in touch with you within 24 hours';

    const form = document.createElement('form');
    form.id = 'form';

    const nameInput = document.createElement('input');
    nameInput.id = 'formName';
    nameInput.placeholder = 'Name';

    const dateInput = document.createElement('input');
    dateInput.id = 'formDate';
    dateInput.type = 'date';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.appendChild(nameInput);
    form.appendChild(dateInput);
    form.appendChild(submitButton);

    contactDiv.appendChild(title);
    contactDiv.appendChild(description);
    contactDiv.appendChild(form);

    content.appendChild(contactDiv);

    setupEventListeners();
}