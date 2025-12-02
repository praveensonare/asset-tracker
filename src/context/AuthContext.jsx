import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

// Dummy user data for demonstration
const DUMMY_USERS = {
  manufacturer: {
    username: 'mf_user',
    password: 'demo123',
    type: 'mf',
    name: 'John Manufacturing',
    email: 'john@manufacturer.com',
    mobile: '+1 234-567-8901',
    address: '123 Industrial Park, Manufacturing City, MC 12345',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  },
  logistic: {
    username: 'lp_user',
    password: 'demo123',
    type: 'lp',
    name: 'Sarah Logistics',
    email: 'sarah@logistics.com',
    mobile: '+1 234-567-8902',
    address: '456 Transport Ave, Shipping Town, ST 23456',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  wholeseller: {
    username: 'ws_user',
    password: 'demo123',
    type: 'ws',
    name: 'Mike Wholesale',
    email: 'mike@wholesale.com',
    mobile: '+1 234-567-8903',
    address: '789 Distribution Dr, Wholesale City, WC 34567',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  },
  retailer: {
    username: 'ret_user',
    password: 'demo123',
    type: 'ret',
    name: 'Emma Retail',
    email: 'emma@retail.com',
    mobile: '+1 234-567-8904',
    address: '321 Store St, Retail Plaza, RP 45678',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  },
  consumer: {
    username: 'con_user',
    password: 'demo123',
    type: 'con',
    name: 'David Consumer',
    email: 'david@consumer.com',
    mobile: '+1 234-567-8905',
    address: '654 Buyer Blvd, Consumer City, CC 56789',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password, userType) => {
    // Find user in dummy data
    const foundUser = Object.values(DUMMY_USERS).find(
      u => u.username === username && u.password === password && u.type === userType
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const loginWithGoogle = (userType) => {
    // Simulate Google login - in production, integrate with Google OAuth
    const googleUser = {
      ...DUMMY_USERS[Object.keys(DUMMY_USERS).find(key => DUMMY_USERS[key].type === userType)],
      loginMethod: 'google'
    };
    setUser(googleUser);
    localStorage.setItem('user', JSON.stringify(googleUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
