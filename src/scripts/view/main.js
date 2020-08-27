const main = () => {
    navbarActiveSign();
    jakartaTimeDisplay();
    swiperSlider();
    categoryBtnGroup();
}

const navbarActiveSign = () => {
    const navLinks = document.querySelectorAll('.nav-link');

    const navLinkActive = selectedNavLink => {
        for (const navLink of navLinks) {
            if (navLink.classList.contains('active')) {
                navLink.classList.remove('active');
            }
        }

        selectedNavLink.classList.add('active');
    }

    for (const navLink of navLinks) {
        navLink.addEventListener('click', function () {
            navLinkActive(this);
        });
    }
}

const jakartaTimeDisplay = () => {
    const timeClock = document.querySelector('.time');

    const displayTime = () => {
        let now = new Date().toLocaleString('id-ID', {
                                    timeZone: 'Asia/Jakarta'
                            });
        timeClock.innerHTML = now;
    };

    const updateTime = () => {
        displayTime();
        setTimeout(updateTime, 1000);
    }

    updateTime();
}

const swiperSlider = () => {
    var swiper = new Swiper('.swiper-container', {
        //  slidesPerView: '3',
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
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}

const categoryBtnGroup = () => {
    const newsListEl = document.querySelector('news-list');
    const btnsSelectNewsCategory = document.querySelectorAll('.btn');
    btnsSelectNewsCategory.forEach(btn => {
        btn.addEventListener('click', function () {
            const categoryAtt = this.getAttribute('category') || null;
            if (categoryAtt) {
                newsListEl.setAttribute('category', this.getAttribute('category'));
            } else {
                newsListEl.removeAttribute('category');
            }
        });
    });
}

export default main;