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
    body: 'Ant Design body 1',
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(9),
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 2',
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList,
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 3',
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList: [],
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 4',
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(10),
  },
];
