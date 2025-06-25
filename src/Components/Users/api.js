import axios from "axios";

let URL = "http://localhost:7000/api";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, clear storage
      clearAuthData();
      // Optionally redirect to login
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth token management
export const setAuthToken = (token) => {
  if (token) {
    // Note: Using sessionStorage instead of localStorage for better security
    // But as per user rules, we shouldn't use either due to SOC 2 compliance
    // In production, consider using secure HTTP-only cookies
    console.warn('Token storage disabled due to SOC 2 compliance requirements');
    // sessionStorage.setItem('authToken', token);
  }
};

export const getAuthToken = () => {
  // Return null due to SOC 2 compliance - tokens should be handled server-side
  return null;
  // return sessionStorage.getItem('authToken');
};

export const clearAuthData = () => {
  // Clear any stored auth data
  // sessionStorage.removeItem('authToken');
  // sessionStorage.removeItem('userInfo');
  console.log('Auth data cleared');
};

export const authenticateSignup = async (user) => {
  try {
    const response = await apiClient.post('/signup', user);
    
    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    
    return response;
  } catch (error) {
    console.error("Error during signup:", error.response?.data || error.message);
    throw error;
  }
};

export const authenticateLogin = async (user) => {
  try {
    const response = await apiClient.post('/login', user);
    
    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    
    return response;
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    return {
      status: error.response?.status || 500,
      data: error.response?.data || { message: 'Network error' }
    };
  }
};

export const getUserProfile = async () => {
  try {
    return await apiClient.get('/profile');
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error.message);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    return await apiClient.put('/profile', profileData);
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error.message);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    return await apiClient.get(`/get-product-by-id/${id}`);
  } catch (error) {
    console.error("Error while getting product by id:", error.response?.data || error.message);
    throw error;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const response = await apiClient.post('/payment', data);
    return response.data;
  } catch (error) {
    console.error("Payment error:", error.response?.data || error.message);
    throw error;
  }
};
