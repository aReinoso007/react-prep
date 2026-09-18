import { memo } from 'react';
import type { User } from './types';

interface UserRowProps {
  user: User;
  onToggleFavorite: (id: string) => void;
}

function UserRowImpl({ user, onToggleFavorite }: UserRowProps) {

  return (
    <li className="user-row">
      <span>{user.name}</span>
      <span className="email">{user.email?.toLowerCase() ?? '-'}</span>
      <button onClick={() => onToggleFavorite(user.id)} type='button' 
        aria-pressed={user.isFavorite}
        aria-label={
          user.isFavorite ? `Remove ${user.name} from favorites` : `Add ${user.name} to favorites`
        }
      >
        {user.isFavorite ? '★' : '☆'}
      </button>
    </li>
  );
}

export const UserRow = memo(UserRowImpl);
