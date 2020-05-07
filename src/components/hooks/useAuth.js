import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState(localStorage.getItem("uid"));
	const [resError, setResError] = useState(null);

  const authenticate = (data, path) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/auth${path}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
        localStorage.setItem("uid", res.data.data);
      })
      .catch((err) => {
        if (err) console.log(err.response.data.message);
        setResError(err.response.data.message);
      });
  };

  const logout = () => {
    return axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.removeItem("uid");
        setUser(null);
        console.log(res);
      })
      .catch((err) => {
				if (err) console.log(err);
				setResError(err.response.data.message);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    };

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
		user,
		resError,
    authenticate,
    logout,
  };
}
