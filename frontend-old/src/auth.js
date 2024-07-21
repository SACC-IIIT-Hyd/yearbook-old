// auth.js

import React, { useState, useEffect } from "react";

export default function Auth() {
  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const fetchCookie = () => {
    setTrigger(!trigger); // Toggle trigger state to invoke useEffect
  };

  useEffect(() => {
    function getCookie(name) {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }
      return "";
    }

    if (getCookie("login") === "true") setAuth(true);
    if (getCookie("profile") === "true") setProfile(true);
  }, [trigger]);

  useEffect(() => {}, [trigger]);

  return { auth, profile, fetchCookie };
}
