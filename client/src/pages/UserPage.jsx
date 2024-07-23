import React, { useState } from 'react';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const handleUserCreated = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onUserCreated={handleUserCreated} />
      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;
