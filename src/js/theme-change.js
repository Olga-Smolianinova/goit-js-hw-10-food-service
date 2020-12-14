// / Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

//   <div class="theme-switch__control">
//     <input
//       class="theme-switch__toggle"
//       type="checkbox"
//       name="theme"
//       id="theme-switch-toggle"
//       aria-label="Переключить между тёмной и светлой темой"
//     />
//     <label
//       aria-hidden="true"
//       class="theme-switch__track"
//       for="theme-switch-toggle"
//     ></label>
//     <div aria-hidden="true" class="theme-switch__marker"></div>
//   </div>;

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ПОЛУЧАЕМ ДОСТУПЫ К ЭЛЕМЕНТАМ
const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('.theme-switch__toggle'),
};
console.log(refs);

// ВЕШАЕМ СЛУШАТЕЛЯ СОБЫТИЯ. При изменении темы, на элемент body добавляем класс dark-theme
refs.checkbox.addEventListener('change', handleThemeChange);

function handleThemeChange(event) {
  //   console.log(event);
  console.dir(refs.checkbox.checked);

  const savedTheme = localStorage.getItem('theme');
  if (!refs.checkbox.checked) {
    refs.body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
  if (refs.checkbox.checked) {
    refs.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}
