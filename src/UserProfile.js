import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store';
import './UserProfile.css'

function UserProfile() {
  const val = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [user] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet.',
  });

  return (
    <div className="user-profile-container">
      {val.isAuthenticated ? (
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
      <div className="buttons">
        <button onClick={() => dispatch(login(user.name))}>Login</button>
        <button onClick={() => dispatch(logout(''))}>Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;
