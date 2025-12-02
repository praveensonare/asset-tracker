import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaLock, FaGoogle } from 'react-icons/fa';
import { MdFactory, MdLocalShipping, MdWarehouse, MdStorefront, MdPerson } from 'react-icons/md';

const USER_TYPES = [
  { value: 'mf', label: 'Manufacturer', icon: MdFactory, route: '/mf/dashboard' },
  { value: 'lp', label: 'Logistic Provider', icon: MdLocalShipping, route: '/lp/dashboard' },
  { value: 'ws', label: 'Wholeseller', icon: MdWarehouse, route: '/ws/dashboard' },
  { value: 'ret', label: 'Retailer', icon: MdStorefront, route: '/ret/dashboard' },
  { value: 'con', label: 'Consumer', icon: MdPerson, route: '/con/dashboard' }
];

const Login = () => {
  const [selectedUserType, setSelectedUserType] = useState('mf');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }

    const success = login(username, password, selectedUserType);
    if (success) {
      const userRoute = USER_TYPES.find(u => u.value === selectedUserType)?.route;
      navigate(userRoute);
    } else {
      setError('Invalid credentials. Try: mf_user / demo123');
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(selectedUserType);
    const userRoute = USER_TYPES.find(u => u.value === selectedUserType)?.route;
    navigate(userRoute);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-purple-900/90"></div>
      </div>

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Asset Tracker</h1>
            <p className="text-blue-100">Welcome back! Please login to continue</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select User Type
                </label>
                <div className="space-y-2">
                  {USER_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                      <label
                        key={type.value}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedUserType === type.value
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={type.value}
                          checked={selectedUserType === type.value}
                          onChange={(e) => setSelectedUserType(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <Icon className={`ml-3 mr-2 text-xl ${
                          selectedUserType === type.value ? 'text-blue-600' : 'text-gray-500'
                        }`} />
                        <span className={`font-medium ${
                          selectedUserType === type.value ? 'text-blue-900' : 'text-gray-700'
                        }`}>
                          {type.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 text-center">{error}</p>
                </div>
              )}

              {/* Demo Credentials */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Username: <code className="bg-blue-100 px-1 rounded">mf_user</code> |
                  Password: <code className="bg-blue-100 px-1 rounded">demo123</code>
                </p>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                <FaGoogle className="text-xl text-red-500" />
                Login with Google
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white text-sm">
            © 2024 Asset Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
