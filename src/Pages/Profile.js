import React from "react";
import { useNavigate } from 'react-router-dom'

function Profile () {
  let navigate = useNavigate();
  return (
    <div>This is the PROFILE page 
      <button onClick={() => {
        navigate('/about')
      }}>Change to the About page</button>
    </div>
  )
}

export default Profile;