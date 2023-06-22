import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users); // Assuming the array of users is under the "users" property
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phonenumber  </th>
          <th>Username  </th>
          <th>BirthDate   </th>
          <th>Image</th>
          <th>Height</th>
          <th>Weight</th>
          <th>City</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Bank Card Expire</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.birthDate}</td>
            <td>{user.image}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{user.address.city}</td>
            <td>{user.address.coordinates.lat}</td>
            <td>{user.address.coordinates.lng}</td>
            <td>{user.bank.cardExpire}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;