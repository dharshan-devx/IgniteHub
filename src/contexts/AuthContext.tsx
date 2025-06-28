import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, AuthContextType, LoginCredentials, RegisterCredentials, User, UserPreferences } from '../types/auth';
import { toast } from 'sonner';

// Mock user data for development
const mockUser: User = {
  id: 'user-1',
  email: 'demo@ignitehub.com',
  name: 'Demo User',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  bio: 'Passionate developer and innovator',
  location: 'San Francisco, CA',
  website: 'https://example.com',
  github: 'demouser',
  twitter: 'demouser',
  linkedin: 'demouser',
  skills: ['React', 'TypeScript', 'Node.js', 'Python'],
  interests: ['AI', 'Web Development', 'Startups', 'Open Source'],
  joinedAt: new Date('2024-01-01'),
  lastActive: new Date(),
  isVerified: true,
  role: 'user',
  preferences: {
    theme: 'light',
    emailNotifications: true,
    pushNotifications: true,
    weeklyDigest: true,
    resourceRecommendations: true,
    communityUpdates: true,
    language: 'en',
    timezone: 'America/Los_Angeles'
  },
  stats: {
    resourcesBookmarked: 15,
    reviewsWritten: 8,
    helpfulVotes: 42,
    resourcesSubmitted: 3,
    communityPoints: 150,
    badgesEarned: ['Early Adopter', 'Helpful Reviewer']
  }
};

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: Partial<User> }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, isLoading: false, error: null };
    case 'LOGIN_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialState };
    case 'UPDATE_PROFILE':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        user: state.user ? {
          ...state.user,
          preferences: { ...state.user.preferences, ...action.payload }
        } : null
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('igniteHub_user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('igniteHub_user');
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, this would be an API call
      if (credentials.email === 'demo@ignitehub.com' && credentials.password === 'demo123') {
        const user = { ...mockUser, lastActive: new Date() };
        localStorage.setItem('igniteHub_user', JSON.stringify(user));
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        toast.success('Welcome back!');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      dispatch({ type: 'LOGIN_ERROR', payload: message });
      toast.error(message);
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.password !== credentials.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      // Mock registration - create new user
      const newUser: User = {
        ...mockUser,
        id: `user-${Date.now()}`,
        email: credentials.email,
        name: credentials.name,
        joinedAt: new Date(),
        lastActive: new Date(),
        stats: {
          resourcesBookmarked: 0,
          reviewsWritten: 0,
          helpfulVotes: 0,
          resourcesSubmitted: 0,
          communityPoints: 0,
          badgesEarned: ['New Member']
        }
      };
      
      localStorage.setItem('igniteHub_user', JSON.stringify(newUser));
      dispatch({ type: 'LOGIN_SUCCESS', payload: newUser });
      toast.success('Account created successfully!');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      dispatch({ type: 'LOGIN_ERROR', payload: message });
      toast.error(message);
    }
  };

  const logout = () => {
    localStorage.removeItem('igniteHub_user');
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  };

  const updateProfile = async (updates: Partial<User>): Promise<void> => {
    try {
      const updatedUser = { ...state.user!, ...updates };
      localStorage.setItem('igniteHub_user', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_PROFILE', payload: updates });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const updatePreferences = async (preferences: Partial<UserPreferences>): Promise<void> => {
    try {
      dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });
      const updatedUser = { 
        ...state.user!, 
        preferences: { ...state.user!.preferences, ...preferences } 
      };
      localStorage.setItem('igniteHub_user', JSON.stringify(updatedUser));
      toast.success('Preferences updated');
    } catch (error) {
      toast.error('Failed to update preferences');
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: AuthContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
    login,
    register,
    logout,
    updateProfile,
    updatePreferences,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};