let avatarId = 0;

const dyosList = [
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
]

export default [
  {
    headline: 'My Title',
    body: `Read more about how to adapt styling based on props in the Adapting based on props section.

    The properties that are passed into an interpolated function get attached a special property, theme, which is injected by a higher level ThemeProvider component. Check the section on Theming for more information on this.`,
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(9),
  },
  {
    headline: 'My Title',
    body: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    author: {
      name: 'Break Cheese',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList,
  },
  {
    headline: 'My Title',
    body: `third-person singular simple present adds on, present participle adding on, simple past and past participle added on)
    To incorporate (something extra, often an amount of money) into something else (often a bill).
    To put an expansion onto a building, usually a home.`,
    author: {
      name: 'Grizzly Bear',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList: [],
  },
  {
    headline: 'My Title',
    body: 'Arduino is a single-board microcontroller. It is intended to make the application of interactive objects or environments more accessible. The hardware consists of an open-source hardware board designed around an 8-bit Atmel AVR microcontroller, or a 32-bit Atmel ARM. Here, we are listing out some of the best and very useful Arduino project ideas which are collected from different resources and are very interesting to implement them. Recommended read: Arduino Starter Kits.',
    author: {
      name: 'Huffle Morg',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(10),
  },
];
