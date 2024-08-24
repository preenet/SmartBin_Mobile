// src/services/api.js
import apiClient from "./AxiosClient";

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post(`/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Function to login a user
export const loginUser = async (userData) => {
    try {
        const response = await apiClient.post(`/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// Function to fetch activity data
export const getUserActivitiesData = async (userId) => {
    try {
        const response = await apiClient.get(`/activities/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching activity data:", error);
        throw error;
    }
};

// Function to fetch user point summary
export const getUserPointSummary = async (userId) => {
    try {
        const response = await apiClient.get(`/recycling-summary/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching activity data:", error);
        throw error;
    }
};

// Function to fetch smartbin data
export const getSmartbin = async () => {
    try {
        const response = await apiClient.get(`/smartbins`);
        return response.data;
    } catch (error) {
        console.error("Error fetching smartbin:", error);
        throw error;
    }
};

// Function to fetch user profile data
export const getUser = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

// Function to fetch username data
export const getUsername = async (username) => {
    try {
        const response = await apiClient.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

// Function to fetch rewards
export const getRewards = async () => {
    try {
        const response = await apiClient.get(`/rewards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rewards:", error);
        throw error;
    }
};

// Function to fetch user statistics
export const getUserStats = async (userId) => {
    try {
        const response = await apiClient.get(`/user-stats/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user stats:", error);
        throw error;
    }
};

// Function to update user profile data
export const updateUserProfile = async (userData) => {
    try {
        const response = await apiClient.put(`/users/${userData.user_id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
};

// Define other API requests similarly...
