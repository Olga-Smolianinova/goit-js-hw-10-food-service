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
console.log(Theme);

// ПОЛУЧАЕМ ДОСТУПЫ К ЭЛЕМЕНТАМ
