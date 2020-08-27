class FooterBeritamu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="pt-2 py-1">
                <div class="container">
                    <p>Built by Muhammad Najie with <span class="text-danger">&hearts;</span></p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-beritamu', FooterBeritamu);