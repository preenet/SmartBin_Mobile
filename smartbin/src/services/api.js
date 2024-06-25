// src/services/api.js
import apiClient from "./AxiosClient";
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

export const getUserPointSummary = async (userId) => {
    try {
        const response = await apiClient.get(`/recycling-summary/${userId}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching activity data:", error);
        throw error;
    }
}

export const getSmartbin = async () => {
    try {
        const response = await apiClient.get(`/smartbins`);
        return response.data;
    } catch (error) {
        console.error("Error fetching smartbin:", error);
        throw error;
    }
};  
                                                                                                                                                       
// Example functions for fetching user and rewards
export const getUser = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const getUsername = async (username) => {
    try {
        const response = await apiClient.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const getRewards = async () => {
    try {
        const response = await apiClient.get(`/rewards`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rewards:", error);
        throw error;
    }
};

// Define other API requests similarly...
