import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>List of Users</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
