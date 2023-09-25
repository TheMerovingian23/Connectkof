import React, { useState } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleInterestsChange = event => {
    setInterests(event.target.value);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <label>Interests:</label>
      <input type="text" value={interests} onChange={handleInterestsChange} />
    </div>
  );
}

export default UserProfile;
