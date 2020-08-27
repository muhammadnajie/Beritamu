import DataSource from './../data/dataSource.js';
import Swiper from 'swiper/bundle';

class NewsList extends HTMLElement {
    //on set [category, articles]

    connectedCallback() {
        this.category = this.getAttribute('category') || null;

        this.dataCall(this.category);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'category') {
            this.category = newValue;
            this.dataCall(this.category);
        }
    }

    dataCall(category) {
        if(typeof category === "undefined") {
            DataSource.getTopHeadlinesArticles()
                .then(results => {
                    this.articles = results;
                    this.render();
                })
                .catch(message => {
                    this.renderError(message);
                });
        }else {
            DataSource.getTopHeadlinesArticles(category)
            .then(results => {
                this.articles = results;
                this.render();            
            })
            .catch(message => {
                this.renderError(message);
            });
        }
    }

    render() {
        this.innerHTML = `
            ${this.style()}
            <div class="container">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight">
                        <h2 class="kategori-title">${this.category ?  this.category.toUpperCase() : "Umum"}</h2>
                    </div>
                    <div class="p-2 bd-highlight slide-button swiper-slide-button-prev">
                        <img src="./src/images/icons/keyboard_arrow_left-24px.svg" alt="left arrow">
                    </div>
                    <div class="p-2 bd-highlight slide-button swiper-slide-button-next">
                        <img src="./src/images/icons/keyboard_arrow_right-24px.svg" alt="right arrow">
                    </div>
                </div>
                
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        ${this.printArticles(this.articles)}
                    </div>
                    <!-- <div class="swiper-pagination"></div> -->
                </div>
            </div>`;

            this.swiper();
    }

    renderError(message) {
        console.log(message);
    }

    swiper() {
        new Swiper('.swiper-container', {
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            //  autoplay: {
            //      delay: 3000
            //  }, 
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-slide-button-next',
                prevEl: '.swiper-slide-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30
                },
                1440: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                    centeredSlides: false,
                    spaceBetween: 40
                }
            }
        });
    }

    // printArticles() {
    //     let el = '';
    //     for (let i = 1; i <= 10; i++) {
    //         el += `
    //             <article class="swiper-slide">Slide ${i}</article>
    //             `;
    //     }
    //     return el;
    // }

    printArticles(articles) {
        let el = '';
        for(const article of articles) {
            el += `
                <article class="swiper-slide">
                    <a href="${article.url}" target="_blank">
                        <figure class="figure">
                            <img src="${article.urlToImage}"
                                class="figure-img img-fluid rounded" alt="...">
                            <figcaption class="figure-caption">
                                <h5>${article.title.slice(0,100)}</h5>
                                <p>${article.description}</p>
                                <p class="tanggal">${article.publishedAt.slice(0,10)}</p>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                `;
        }
        return el;
    }

    style() {
        return `
            <style>
            news-list {
                display: block;
                margin-top: 1rem;
            }

            .swiper-container {
                width: 100%;
                height: 425px;
            }

            .kategori-title {
                border-left: 4px solid turquoise; 
                padding-left: 10px;
            }

            .slide-button {
                cursor: pointer;
            }

            .slide-button img {
                width: 40px;
                height: 40px;
            }

            .swiper-slide {
                text-align: center;
                font-size: 18px;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
            } 
            
            .swiper-slide img {
                max-height: 50vh;
            } 

            .swiper-slide h5 {
                color: black;
            }

            figcaption {
                text-align: left;
            }

            .tanggal {
                font-size: .9rem;
            }
            </style>
        `;
    }

    static get observedAttributes() {
        return ['category'];
    }
}

customElements.define('news-list', NewsList);