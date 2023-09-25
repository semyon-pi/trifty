'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'


// Create the UserContext
const UserContext = createContext({
    loading: true,
    user: null,
    userData: null,
    isAuthenticated: null,
    login: () => { },
    logout: () => { },
});

// Custom hook to access the UserContext
const useUserContext = () => useContext(UserContext);
// Create the UserProvider component to wrap your app with the UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()



    // Check if the JWT token exists on initial load
    useEffect(() => {
        const token = Cookies.get('jwtToken');
        if (token) {
            verifyTokenAndRetrieveUserInfo(token);
        }
    }, []);

    const login = async (token) => {
        Cookies.set('jwtToken', token, { expires: 7 }); // Set the cookie to expire after 7 days
        try {
            const userData = await verifyTokenAndRetrieveUserInfo(token);
            setUser(userData);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        Cookies.remove('jwtToken');
        setUser(null);
        setIsAuthenticated(false);
        router.push('/')
    };

    const verifyTokenAndRetrieveUserInfo = async (token) => {
        try {
            const userData = await fetchUserInfo(token);
            setUser(userData);
            setIsAuthenticated(true);
            const { userId } = userData
            fetchUserById(token, userId)
        } catch (error) {
            console.error(error);
            // Handle token verification error, e.g., clear invalid token
            logout();
        }
    };

    // Helper function to fetch user info based on the token
    const fetchUserInfo = async (token) => {
        try {
            const response = await fetch('http://localhost:3000/auth/profile', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to retrieve user information');
            }
        } catch (error) {
            throw new Error('Failed to retrieve user information');
        }
    };

    const fetchUserById = async (token, userId) => {
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const userData = await response.json();
                setUserData(userData);
                setLoading(false)
            } else {
                throw new Error('Failed to retrieve user by ID');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ loading, user, userData, isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUserContext, UserContext };
