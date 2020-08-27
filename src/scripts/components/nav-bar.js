class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#"><strong>Beritamu</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0 ml-3">
                            <li class="nav-item">
                                <a class="nav-link active" href="#kategori-bisnis">BISNIS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#kategori-olahraga">OLAHRAGA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#kategori-teknologi">TEKNOLOGI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#kategori-kesehatan">KESEHATAN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#kategori-sains">SAINS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#kategori-hiburan">HIBURAN</a>
                            </li>
                        </ul>
                        <span class="navbar-text time">
                            <small></small>
                        </span>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);