import type { User } from './types';

const USERS: User[] = [
  { id: '1', name: 'Ada Lovelace', email: 'ada@example.com', isFavorite: false },
  { id: '2', name: 'Grace Hopper', email: 'grace@example.com', isFavorite: false },
  { id: '3', name: 'Margaret Hamilton', isFavorite: false },
  { id: '4', name: 'Katherine Johnson', email: 'katherine@example.com', isFavorite: true },
  { id: '5', name: 'Radia Perlman', email: 'radia@example.com', isFavorite: false },
];

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(USERS), 400);
  });
}
