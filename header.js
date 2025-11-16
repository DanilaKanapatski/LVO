const menu = document.getElementById('header-nav');
const burger = document.getElementById('burger');

// Создаем элемент для затемнения фона
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// Добавляем стили для затемнения (можно также вынести в CSS)
overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 998; // Ниже меню, но выше остального контента
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

// Обновляем функцию открытия/закрытия меню
burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");

    if (menu.classList.contains("active")) {
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
    } else {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
});

// Обновляем функцию закрытия при клике на ссылки
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove("active");
        burger.classList.remove("active");
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    });
});

// Обновляем функцию закрытия при клике вне меню
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
});

// Обновляем функцию закрытия при нажатии Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        menu.classList.remove("active");
        burger.classList.remove("active");
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
});

// Закрытие при клике на сам оверлей
overlay.addEventListener('click', function() {
    menu.classList.remove("active");
    burger.classList.remove("active");
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
});

// Функция для фильтрации стран
function filterCountries(searchTerm) {
    const items = document.querySelectorAll('.dropdown-list .dropdown-item');
    const searchLower = searchTerm.toLowerCase().trim();

    items.forEach(item => {
        // Пропускаем контейнер поиска
        if (item.classList.contains('search-container')) return;

        const countryName = item.textContent.toLowerCase();

        if (searchTerm === '' || countryName.includes(searchLower)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Функция для открытия/закрытия выпадающего списка
function toggleDropdown(element) {
    const wrapper = element.closest('.select-wrapper');
    const isActive = wrapper.classList.contains('active');

    // Закрываем все открытые списки
    document.querySelectorAll('.select-wrapper.active').forEach(item => {
        if (item !== wrapper) {
            item.classList.remove('active');
        }
    });

    // Переключаем текущий список
    wrapper.classList.toggle('active');

    // Фокус на поле поиска при открытии и сброс фильтра
    if (wrapper.classList.contains('active')) {
        const searchInput = wrapper.querySelector('.country-search');
        if (searchInput) {
            searchInput.value = '';
            filterCountries(''); // Сбрасываем фильтр
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
    }
}

// Функция для выбора страны
function selectCountry(element, country) {
    const wrapper = element.closest('.select-wrapper');
    const input = wrapper.querySelector('.select-trigger input');

    // Устанавливаем выбранное значение
    input.value = country;

    // Сбрасываем поиск
    const searchInput = wrapper.querySelector('.country-search');
    if (searchInput) {
        searchInput.value = '';
        filterCountries(''); // Показываем все страны
    }

    // Убираем выделение со всех элементов
    wrapper.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Выделяем выбранный элемент
    element.classList.add('selected');

    // Закрываем выпадающий список
    wrapper.classList.remove('active');

    console.log('Выбрана страна:', country);
}

// Закрытие выпадающего списка при клике вне его
document.addEventListener('click', function(event) {
    if (!event.target.closest('.select-wrapper')) {
        document.querySelectorAll('.select-wrapper.active').forEach(wrapper => {
            wrapper.classList.remove('active');
        });
    }
});

// Обработка клавиатуры
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.select-wrapper.active').forEach(wrapper => {
            wrapper.classList.remove('active');
        });
    }
});

// Предотвращаем закрытие при клике на поле поиска
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('country-search')) {
        event.stopPropagation();
    }
});

// Обработчик для поля даты
document.querySelectorAll('.date-input').forEach(input => {
    const placeholder = input.nextElementSibling;

    input.addEventListener('input', function() {
        if (this.value) {
            placeholder.style.opacity = '0';
        } else {
            placeholder.style.opacity = '1';
        }
    });

    input.addEventListener('focus', function() {
        placeholder.style.opacity = '0';
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            placeholder.style.opacity = '1';
        }
    });

    // Инициализация при загрузке
    if (!input.value) {
        placeholder.style.opacity = '1';
    } else {
        placeholder.style.opacity = '0';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1297) {
        video.poster = 'assets/images/video.png';
    } else if (screenWidth >= 768) {
        video.poster = 'assets/images/video1.png';
    } else {
        video.poster = 'assets/images/video2.png';
    }
});

// Обновление при изменении размера окна
window.addEventListener('resize', function() {
    const video = document.getElementById('myVideo');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1297) {
        video.poster = 'assets/images/video.png';
    } else if (screenWidth >= 768) {
        video.poster = 'assets/images/video1.png';
    } else {
        video.poster = 'assets/images/video2.png';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const OFFSET = 80; // высота шапки

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - OFFSET;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

