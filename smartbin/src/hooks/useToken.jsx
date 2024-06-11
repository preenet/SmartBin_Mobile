import { useState, useEffect } from 'react';

function useToken() {
  const getToken = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
    return null;
  };

  const getUsername = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.username;
    }
    return null;
  };  

  const getFullName = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      const first_name = userToken?.user.first_name;
      const last_name = userToken?.user.last_name;
      const full_name = `${first_name} ${last_name}`;
      return full_name;
    }
    return null;
  };

  const getFirstName = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.first_name;
    }
    return null;
  };

  const getLastName = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.last_name;
    }
    return null;
  };

  const getPhoneNumber = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.phone_number;
    }
    return null;
  };

  const getID = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.id;
    }
    return null;
  };

  const getRole = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.role;
    }
    return null;
  };

  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUsername());
  const [fullName, setFullName] = useState(getFullName());
  const [firstName, setFirstName] = useState(getFirstName());
  const [lastName, setLastName] = useState(getLastName());
  const [phoneNumber, setPhoneNumber] = useState(getPhoneNumber());
  const [userId, setUserId] = useState(getID());
  const [role, setRole] = useState(getRole());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
    setUsername(userToken.user.username);
    setFullName(`${userToken.user.first_name} ${userToken.user.last_name}`);
    setFirstName(userToken.user.first_name);
    setLastName(userToken.user.last_name);
    setPhoneNumber(userToken.user.phone_number);
    setUserId(userToken.user.id);
    setRole(userToken.user.role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUsername(null);
    setFullName(null);
    setFirstName(null);
    setLastName(null);
    setPhoneNumber(null);
    setUserId(null);
    setRole(null);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(getToken());
      setUsername(getUsername());
      setFullName(getFullName());
      setFirstName(getFirstName());
      setLastName(getLastName());
      setPhoneNumber(getPhoneNumber());
      setUserId(getID());
      setRole(getRole());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    setToken: saveToken,
    token,
    isLoggedIn: !!token,
    logout,
    username,
    fullName,
    firstName,
    lastName,
    phoneNumber,
    userId,
    role,
  };
}


export default useToken;