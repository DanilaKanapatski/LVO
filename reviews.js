new Swiper('.reviews-slider', {
    // // loop: true,
    // autoplay: {
    //     delay: 10000,
    // },
    slidesPerView: 1, // Показываем только один слайд
    spaceBetween: 12, // Добавляем расстояние 10px между слайдами
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.querySelector('.directions-btn');
    const hiddenItems = document.querySelectorAll('.hidden-mobile');

    // Проверяем, есть ли скрытые элементы
    if (hiddenItems.length > 0) {
        showMoreBtn.addEventListener('click', function() {
            // Показываем первые 2 скрытых элемента
            let shownCount = 0;

            hiddenItems.forEach(item => {
                if (!item.classList.contains('show') && shownCount < 2) {
                    item.classList.add('show');
                    shownCount++;
                }
            });

            // Скрываем кнопку, если все элементы показаны
            const remainingHidden = document.querySelectorAll('.hidden-mobile:not(.show)');
            if (remainingHidden.length === 0) {
                showMoreBtn.classList.add('hidden');
            }
        });
    } else {
        // Если скрытых элементов нет, скрываем кнопку
        showMoreBtn.classList.add('hidden');
    }
});