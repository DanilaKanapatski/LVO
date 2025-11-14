// const menu = document.getElementById('header-nav');
// const burger = document.getElementById('burger');
//
// // Создаем элемент для затемнения фона
// const overlay = document.createElement('div');
// overlay.className = 'menu-overlay';
// document.body.appendChild(overlay);
//
// // Добавляем стили для затемнения (можно также вынести в CSS)
// overlay.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.2);
//     z-index: 998; // Ниже меню, но выше остального контента
//     display: none;
//     opacity: 0;
//     transition: opacity 0.3s ease;
// `;
//
// // Обновляем функцию открытия/закрытия меню
// burger.addEventListener("click", function () {
//     menu.classList.toggle("active");
//     burger.classList.toggle("active");
//
//     if (menu.classList.contains("active")) {
//         overlay.style.display = 'block';
//         setTimeout(() => {
//             overlay.style.opacity = '1';
//         }, 10);
//     } else {
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//             overlay.style.display = 'none';
//         }, 300);
//     }
// });
//
// // Обновляем функцию закрытия при клике на ссылки
// const menuLinks = menu.querySelectorAll('a');
// menuLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         menu.classList.remove("active");
//         burger.classList.remove("active");
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//             overlay.style.display = 'none';
//         }, 300);
//     });
// });
//
// // Обновляем функцию закрытия при клике вне меню
// document.addEventListener('click', function(e) {
//     if (!menu.contains(e.target) && !burger.contains(e.target)) {
//         menu.classList.remove("active");
//         burger.classList.remove("active");
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//             overlay.style.display = 'none';
//         }, 300);
//     }
// });
//
// // Обновляем функцию закрытия при нажатии Escape
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         menu.classList.remove("active");
//         burger.classList.remove("active");
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//             overlay.style.display = 'none';
//         }, 300);
//     }
// });
//
// // Закрытие при клике на сам оверлей
// overlay.addEventListener('click', function() {
//     menu.classList.remove("active");
//     burger.classList.remove("active");
//     overlay.style.opacity = '0';
//     setTimeout(() => {
//         overlay.style.display = 'none';
//     }, 300);
// });
//
// // Функция для открытия/закрытия выпадающего списка
// function toggleDropdown(element) {
//     const wrapper = element.closest('.select-wrapper');
//     const isActive = wrapper.classList.contains('active');
//
//     // Закрываем все открытые списки
//     document.querySelectorAll('.select-wrapper.active').forEach(item => {
//         if (item !== wrapper) {
//             item.classList.remove('active');
//         }
//     });
//
//     // Переключаем текущий список
//     wrapper.classList.toggle('active');
// }
//
// // Функция для выбора страны
// function selectCountry(element, country) {
//     const wrapper = element.closest('.select-wrapper');
//     const input = wrapper.querySelector('input');
//
//     // Устанавливаем выбранное значение
//     input.value = country;
//
//     // Убираем выделение со всех элементов
//     wrapper.querySelectorAll('.dropdown-item').forEach(item => {
//         item.classList.remove('selected');
//     });
//
//     // Выделяем выбранный элемент
//     element.classList.add('selected');
//
//     // Закрываем выпадающий список
//     wrapper.classList.remove('active');
//
//     // Можно добавить обработку выбора страны
//     console.log('Выбрана страна:', country);
// }
//
// // Закрытие выпадающего списка при клике вне его
// document.addEventListener('click', function(event) {
//     if (!event.target.closest('.select-wrapper')) {
//         document.querySelectorAll('.select-wrapper.active').forEach(wrapper => {
//             wrapper.classList.remove('active');
//         });
//     }
// });
//
// // Обработка клавиатуры
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//         document.querySelectorAll('.select-wrapper.active').forEach(wrapper => {
//             wrapper.classList.remove('active');
//         });
//     }
// });
//
// // Функция для фильтрации стран (опционально)
// function filterCountries(searchTerm) {
//     const items = document.querySelectorAll('.dropdown-item');
//     items.forEach(item => {
//         const text = item.textContent.toLowerCase();
//         if (text.includes(searchTerm.toLowerCase())) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }
//
// // Если нужно сделать поиск по странам, можно добавить обработчик:
// document.querySelector('.select-trigger input').addEventListener('input', function(e) {
//     if (!e.target.closest('.select-wrapper').classList.contains('active')) {
//         toggleDropdown(e.target.closest('.select-trigger'));
//     }
//     filterCountries(e.target.value);
// });
//
// // Добавляем обработчик для изменения класса
// document.querySelectorAll('.date-input').forEach(input => {
//     input.addEventListener('input', function() {
//         if (this.value) {
//             this.classList.remove('placeholder-shown');
//         } else {
//             this.classList.add('placeholder-shown');
//         }
//     });
//
//     // Инициализация при загрузке
//     if (!input.value) {
//         input.classList.add('placeholder-shown');
//     }
// });