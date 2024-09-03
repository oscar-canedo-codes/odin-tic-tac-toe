import { loadHome } from "../src/components/home";


describe('Home module', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="content"></div>';
    });

    it('should loadHome adds content to the page', () => {
        loadHome();
        const content = document.getElementById('content');
        expect(content).toHaveTextContent('Welcome to Our Restaurant');
        expect(content).toHaveTextContent('Enjoy our delicious meals');
    });
});