// src/services/api.js
import axios from 'axios';

// Update with your backend URL
const API_URL = 'http://127.0.0.1:5000'; // Example: http://localhost:3000/api
//const API_URL = 'postgresql://postgress:postgress@139.162.62.123:5444/smartbin_db';

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Function to login a user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// Function to fetch activity data
export const getActivitiesData = async () => {
    try {
        const response = await axios.get(`${API_URL}/activities`); // Adjust the URL to match your backend endpoint
        return response.data;
    } catch (error) {
        console.error("Error fetching activity data:", error);
        throw error;
    }
};

// Example functions for fetching user and rewards
export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const getUsername = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const getRewards = async () => {
    try {
        const response = await axios.get(`${API_URL}/rewards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rewards:", error);
        throw error;
    }
};

// Define other API requests similarly...
