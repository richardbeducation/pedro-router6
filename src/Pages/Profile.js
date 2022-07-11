import React from "react";
import { useNavigate, useParams } from 'react-router-dom'

function Profile () {
  let navigate = useNavigate();
  let { username } = useParams()
  return (
    <div>This is the PROFILE page for {username}! 
      <button onClick={() => {
        navigate('/about')
      }}>Change to the About page</button>
    </div>
  )
}

export default Profile;