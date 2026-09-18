import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchUsers } from './mockApi';
import { UserRow } from './UserRow';
import type { User } from './types';
import { useDebounce } from '../useDebounce';
import { OnlineTimer } from './OnlineTimer';

type LoadStatus = 'loading' | 'ready' | 'error'

export function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState<LoadStatus>('loading')

  const searchTermDebounced = useDebounce(searchTerm, 500);

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    fetchUsers().then((data) => {
      if (!cancelled) {
        setUsers(data)
        setStatus('ready')
      }
    }).catch((error) => {
      if (!cancelled) {
        console.log('Error ', error)
        setStatus('error')
      }
    })
    return () => {
      cancelled = true
    }
  }, []);


  const toggleFavorite = useCallback((id: string) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, isFavorite: !u.isFavorite } : u))
  }, [])

  const filteredUsers = useMemo(() => {
    const query = searchTermDebounced.toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(query));
  }, [users, searchTermDebounced]);


  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <OnlineTimer />
      {
        status === 'loading' && <p>Loading users...</p>
      }
      {
        status === 'error' && <p>Could not load users</p>
      }
      {
        status === 'ready' && (
          <React.Fragment>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {
              filteredUsers.length === 0 ? (<p>No users match</p>) : (
                <ul>
                  {filteredUsers.map((user) => (
                    <UserRow key={user.id} user={user} onToggleFavorite={toggleFavorite} />
                  ))}
                </ul>
              )
            }
          </React.Fragment>)
      }
    </div>
  );
}
