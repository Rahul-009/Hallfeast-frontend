import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data or token
  const [loading, setLoading] = useState(false); // For showing a spinner during API calls

  // Sign Up Function
  const signUp = async (username, email, password) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.hallfeast.com/api/v1/create-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) router.replace("/(auth)/sign-in");
      else throw new Error(data.message || "Sign-up failed!");

      alert("Sign-up successful!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Login Function
  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed!");

      setUser(data.user); // Assuming API returns user info
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null); // Clear user state
    alert("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
