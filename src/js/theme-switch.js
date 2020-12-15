// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

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
// console.log(Theme);

// ПОЛУЧАЕМ ДОСТУПЫ К ЭЛЕМЕНТАМ
const bodyRef = document.querySelector('body');
// console.dir(bodyRef);

const inputRef = document.querySelector('.theme-switch__toggle');
// console.log(inputRef);

// ВЕШАЕМ СЛУШАТЕЛЯ СОБЫТИЯ.
inputRef.addEventListener('change', handleThemeChange);

// При изменении темы, на элемент body добавляем класс dark-theme
function handleThemeChange(event) {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  // const checkbox = event.currentTarget.checked;
  // console.dir(checkbox);

  // Используем метод setItem чтобы записать и отображать данные в local Storage
  localStorage.setItem('theme', bodyRef.className);
}

// Чтобы выбранная тема сохранялась между перезагрузками страницы. Для хранения темы используем свойство getItem
function handleThemeSave(event) {
  const savedTheme = localStorage.getItem('theme');
  // console.log(savedTheme);
  // console.dir(inputRef.checked);

  if (savedTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    inputRef.checked = true; //Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    // inputRef.checked = false;
  }
}
handleThemeSave();
