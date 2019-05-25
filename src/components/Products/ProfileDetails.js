import React from 'react';

const ProfileDetails = ({ name, email, adress, number, location }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Adress: {adress}</p>
    <p>Number: {number}</p>
    <p>location: {location}</p>
  </div>

);


export default ProfileDetails;
