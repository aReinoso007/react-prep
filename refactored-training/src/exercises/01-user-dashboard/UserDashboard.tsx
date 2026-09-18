import { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from './mockApi';
import { UserRow } from './UserRow';
import type { User } from './types';

export function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [secondsOnline, setSecondsOnline] = useState(0);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSecondsOnline((s) => s + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('user searched for:', searchTerm);
  }, []);

  function toggleFavorite(id: string) {
    setUsers(users.map((u) => (u.id == id ? { ...u, isFavorite: !u.isFavorite } : u)));
  }

  const filteredUsers = useMemo(() => {
    const query = searchTerm.toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(query));
  }, [users, searchTerm]);


  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>Time online: {secondsOnline}s</p>

      <input
        type="text"
        placeholder="Search users..."
        defaultValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <UserRow key={index} user={user} onToggleFavorite={(id) => toggleFavorite(id)} />
        ))}
      </ul>
    </div>
  );
}
