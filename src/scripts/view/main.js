const main = () => {
    navbarActiveSign();
    jakartaTimeDisplay();
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