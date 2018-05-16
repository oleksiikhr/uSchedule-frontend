export const devUrlApi = 'http://uschedule.local/api'

export const schedule = {
  show: {
    current: true,
    rest: true,
    time: true
  },
  time: [
    { start: '8:20', end: '9:40' },
    { start: '9:55', end: '11:15' },
    { start: '11:50', end: '13:10' },
    { start: '13:30', end: '14:50' },
    { start: '15:00', end: '16:20' },
    { start: '16:30', end: '17:50' },
    { start: '18:00', end: '19:20' }
  ]
}

export const sections = {
  items: [
    {
      name: 'Аккаунт',
      is_auth: true,
      items: [
        { name: 'Профиль', link: '/profile' },
        { name: 'Настройки', link: '/settings' },
        { name: 'Уведомления', link: '/notifications' }
      ]
    },
    {
      name: 'Сайт',
      items: [
        { name: 'Главная страница', link: '/' },
        { name: 'Авторизация', link: '/login', is_auth: false },
        { name: 'Расписание звонков', link: '/schedule' }
      ]
    },
    {
      name: 'Админка',
      is_admin: true,
      items: [
        { name: 'Главная страница', link: '/admin' },
        { name: 'Настройки', link: '/admin/settings' },
        { name: 'Преподаватели', link: '/admin/teachers' },
        { name: 'Предметы', link: '/admin/subjects' }
      ]
    },
    {
      name: 'Внешние ресурсы',
      items: [
        { name: 'Официальный сайт', href: 'https://example.com/' },
        { name: 'Google карта', href: 'https://example.com/' }
      ]
    }
  ]
}
