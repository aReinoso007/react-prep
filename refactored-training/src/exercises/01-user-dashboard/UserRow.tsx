import { memo, useEffect } from 'react';
import type { User } from './types';

interface UserRowProps {
  user: User;
  onToggleFavorite: (id: string) => void;
}

function UserRowImpl({ user, onToggleFavorite }: UserRowProps) {
  

    useEffect(() =>{
        if(user){
            console.log(`UserRow rendered for user: ${user.name}`)
        }
        
    }, [user])

  return (
    <li className="user-row">
      <span>{user.name}</span>
      <span className="email">{user?.email?.toLowerCase()}</span>
      <button onClick={() => onToggleFavorite(user.id)}>
        {user.isFavorite ? '★' : '☆'}
      </button>
    </li>
  );
}

export const UserRow = memo(UserRowImpl);
