
// Banner slider

const bannerMain = document.querySelector('.slider-wrapper-main');
const bannerItems = document.querySelectorAll('.slider-wrapper-main-item');
const dotItems = document.querySelectorAll('.slider-dot-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const bannerItemsWidth = bannerItems[0].offsetWidth;
const bannerItemsLength = bannerItems.length;


let index = 0;
let positionX = 0;

prevBtn.addEventListener('click', () => {
    handelChangeBanner(-1)
});

nextBtn.addEventListener('click', () => {
    handelChangeBanner(1)
});

[...dotItems].forEach(function (item) {
    item.addEventListener('click', function (e) {
        [...dotItems].forEach(function (dot) {
            dot.classList.remove('slider-dot-item-active');
        })
        e.target.classList.add('slider-dot-item-active');
        index = parseInt(e.target.dataset.index);
        positionX = -1 * index * bannerItemsWidth;
        bannerMain.style.transform = `translateX(${positionX}px)`;
    })
});

function handelChangeBanner(direction) {
    if(direction == 1) {
        if(index >= bannerItemsLength -1) {
            index = bannerItemsLength -1;
            return;
        }
        index++;
        positionX = positionX - bannerItemsWidth;
        bannerMain.style.transform = `translateX(${positionX}px)`;
    }else if(direction == -1) {
        if(index <= 0) {
            index = 0;
            return;
        }
        index--;
        positionX = positionX + bannerItemsWidth;
        bannerMain.style.transform = `translateX(${positionX}px)`;
    }
    [...dotItems].forEach(function (dot) {
        dot.classList.remove('slider-dot-item-active');
    });
    dotItems[index].classList.add('slider-dot-item-active');
}


// Banner Extra

const banneExtrarMain = document.querySelector('.banner-extra-slider-main');
const banneExtrarItems = document.querySelectorAll('.banner-extra-slider-main-item');
const prevBanener = document.querySelector('.prev-banner');
const nextBanener = document.querySelector('.next-banner');
const dotList = document.querySelectorAll('.banner-dot-item');
const bannerLink = document.querySelector('.banner-extra');

const banneExtrarItemsLength = banneExtrarItems.length;
const banneExtrarItemsWidth = banneExtrarItems[0].offsetWidth;

let indexBanner = 0;
let positionBannerX = 0;

bannerLink.onclick = function(e) {
    e.preventDefault();
}

nextBanener.addEventListener('click', () => {
    changeBanner(1);
});

prevBanener.addEventListener('click', () => {
    changeBanner(-1);
});

[...dotList].forEach(function(dotItem) {
    dotItem.addEventListener('click', (e) => {
        [...dotList].forEach((dot) => {
            dot.classList.remove('item-active');
        })
        e.target.classList.add('item-active');
        indexBanner = parseInt(e.target.dataset.index);
        positionBannerX = -1 * indexBanner * banneExtrarItemsWidth;
        banneExtrarMain.style.transform = `translateX(${positionBannerX}px)`;
    })
})

function changeBanner(dir) {
    if(dir == 1) {
        if(indexBanner >= banneExtrarItemsLength -1) {
            indexBanner =  banneExtrarItemsLength -1;
            return;
        }
        indexBanner++;
        positionBannerX -= banneExtrarItemsWidth;
        banneExtrarMain.style.transform = `translateX(${positionBannerX}px)`;
    }else if(dir == -1) {
        if(indexBanner <= 0) {
            indexBanner = 0;
            return;
        }
        indexBanner--;
        positionBannerX += banneExtrarItemsWidth;
        banneExtrarMain.style.transform = `translateX(${positionBannerX}px)`;
    }
    [...dotList].forEach((dot) => {
        dot.classList.remove('item-active');
    });
    dotList[indexBanner].classList.add('item-active');
}
 