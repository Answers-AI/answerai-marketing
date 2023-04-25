import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Cookies from "js-cookie"; // Import the js-cookie library

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: 16px;
`;

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the "logged in" cookie is set
  const checkLoggedInStatus = () => {
    const loggedInCookie = Cookies.get("logged_in");
    setIsLoggedIn(loggedInCookie === "true");
  };

  // Set the "logged in" cookie
  const handleLogin = () => {
    Cookies.set("logged_in", "true", { expires: 7 }); // Set cookie to expire in 7 days
    setIsLoggedIn(true);
  };

  // Delete the "logged in" cookie
  const handleLogout = () => {
    Cookies.remove("logged_in");
    setIsLoggedIn(false);
  };

  // Check the logged-in status on component mount
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <NavContainer>
      <Link href="/">Home</Link>
      <Link href="https://app.theanswer.ai">Login</Link>
    </NavContainer>
  );
};

export default Navigation;
