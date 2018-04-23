export const schedule = {
  show: {
    current: true,
    rest: true
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

// TODO setting (show or no)
export const sections = {
  items: [
    {
      name: 'Сайт',
      items: [
        { name: 'Главная страница', link: '/' },
        { name: 'Авторизация', link: '/login' },
        { name: 'Расписание звонков', link: '/schedule' }
      ]
    },
    {
      name: 'Админка',
      items: [
        { name: 'Настройки', link: '/admin' },
        { name: 'Преподаватели', link: '/admin/teachers' },
        { name: 'Предметы', link: '/admin/subjects' }
      ]
    },
    {
      name: 'Прочее',
      items: [
        { name: 'Сайт', href: 'https://example.com/' }
      ]
    }
  ]
}
