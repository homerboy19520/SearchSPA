export const BUTTON_CONTENT = {
  icon: {
    modifier: "icon",
  },
  text: [
    { modifier: "text", active: false, content: "Избранное" },
    { modifier: "text", active: false, content: "Выйти" },
    { modifier: "exit", active: false, content: "Выход" },
  ],

  primary: {
    save: {
      modifier: "primary",
    },
    signIn: {
      modifier: "primary",
    },
  },

  secondary: {
    modifier: "secondary",
  },
};
export const INPUT_CONTENT = {
  login: {
    modifier: "common",
    placeholder: "Логин",
    description: "Логин",
  },
  password: {
    modifier: "common",
    placeholder: "Пароль",
    description: "Пароль",
  },
  request: {
    modifier: "common",
    placeholder: "Запрос",
    description: "Запрос",
  },
  name: {
    modifier: "common",
    placeholder: "Укажите название",
    description: "Название",
  },
  search: {
    modifier: "search",
    placeholder: "Что хотите посмотреть?",
  },
};
