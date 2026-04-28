
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthicationCon } from "../Context/Authication";

export default function Logout() {

  const { setAuth } = useContext(AuthicationCon);
  const navigate = useNavigate();

  function handleLogout() {
    setAuth(false);        
    navigate("/login");    
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}



