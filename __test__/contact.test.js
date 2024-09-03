import { setupEventListeners, handleFormSubmit, loadContactForm } from '../src/components/contact';


describe('Contact module', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="form">
                <input id="formName" value="Test Name">
                <input id="formDate" value="Test Date">
                <button type="submit"></button>
            </form>
            <div id="content"></div>
        `;
    });

    it('should set up event listeners', () => {
        setupEventListeners();
        const form = document.getElementById('form');
        expect(form.onsubmit).toBeDefined();
    });

    it('handleFormSubmit displays message received confirmation', () => {
        const mockReset = jest.fn();
        const event = {
            preventDefault: jest.fn(),
            target: { reset: mockReset }
        };
        handleFormSubmit(event);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(mockReset).toHaveBeenCalled();
    });

    it('loadContactForm creates the contact form', () => {
        loadContactForm();
        const content = document.getElementById('content');
        expect(content.querySelector('.contact')).toBeTruthy();
        expect(content.querySelector('h1')).toHaveTextContent('Reserve your event');
        expect(content.querySelector('form')).toBeTruthy();
    });
});