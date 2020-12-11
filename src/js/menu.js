// ДОСТУП К МАССИВУ ДАННЫХ ДЛЯ ШАБЛОНА
import menuData from '../menu.json';
// console.log(menuData);

// ЗАТЯГИВАЕМ СОБСТВЕННО САМ ШАБЛОН
import menuTemplate from '../templates/menu.hbs';
// console.log(menuTemplate);

// ДОСТУП К ЭЛЕМЕНТУ <ul class="menu js-menu"></ul>
const menuRef = document.querySelector('.js-menu');
// console.log(menuRef);

// СОЗДАЕМ ЭЛЕМЕНТЫ ПО ШАБЛОНУ
const markup = menuTemplate(menuData);
// console.log(markup);

// ВСТРАИВАЕМ ШАБЛОН В HTML РЕЗУЛЬТАТ
menuRef.insertAdjacentHTML('beforeend', markup);
