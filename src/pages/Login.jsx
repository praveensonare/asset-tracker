import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaLock, FaGoogle, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { MdFactory, MdLocalShipping, MdWarehouse, MdStorefront, MdPerson, MdCheckCircle } from 'react-icons/md';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const USER_TYPES = [
  { value: 'mf', label: 'Manufacturer', icon: MdFactory, route: '/mf/dashboard', color: 'from-blue-500 to-cyan-500', gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)', description: 'Manage production & inventory' },
  { value: 'lp', label: 'Logistic Provider', icon: MdLocalShipping, route: '/lp/dashboard', color: 'from-green-500 to-emerald-500', gradient: 'linear-gradient(135deg, #10B981, #059669)', description: 'Track shipments & fleet' },
  { value: 'ws', label: 'Wholeseller', icon: MdWarehouse, route: '/ws/dashboard', color: 'from-purple-500 to-pink-500', gradient: 'linear-gradient(135deg, #A855F7, #EC4899)', description: 'Control warehouse & sales' },
  { value: 'ret', label: 'Retailer', icon: MdStorefront, route: '/ret/dashboard', color: 'from-orange-500 to-red-500', gradient: 'linear-gradient(135deg, #F97316, #EF4444)', description: 'Manage store & customers' },
  { value: 'con', label: 'Consumer', icon: MdPerson, route: '/con/dashboard', color: 'from-indigo-500 to-purple-500', gradient: 'linear-gradient(135deg, #6366F1, #A855F7)', description: 'Track orders & rewards' }
];

const Login = () => {
  const [selectedUserType, setSelectedUserType] = useState('mf');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const selectedType = USER_TYPES.find(t => t.value === selectedUserType);

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          {/* Logo & Brand */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <HiSparkles className="text-3xl text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Asset Tracker
                </h1>
                <p className="text-blue-200 text-sm">Enterprise Management Platform</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold mb-8">
              Streamline Your Supply Chain Operations
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLightningBolt className="text-2xl text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Real-Time Tracking</h3>
                  <p className="text-blue-200 text-sm">Monitor assets and shipments across the entire supply chain instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-xl text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Advanced Analytics</h3>
                  <p className="text-blue-200 text-sm">Get actionable insights with powerful data visualization tools</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-pink-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-xl text-pink-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Enterprise Security</h3>
                  <p className="text-blue-200 text-sm">Bank-level encryption and multi-factor authentication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">50K+</div>
              <div className="text-sm text-blue-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">99.9%</div>
              <div className="text-sm text-blue-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration for mobile */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <HiSparkles className="text-2xl text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Asset Tracker
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection - Modern Cards */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Select Your Role
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {USER_TYPES.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedUserType === type.value;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setSelectedUserType(type.value)}
                        className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                          isSelected
                            ? 'border-transparent shadow-xl scale-105'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        }`}
                        style={isSelected ? {
                          background: type.gradient,
                        } : {}}
                      >
                        <div className={`flex flex-col items-center gap-2 ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                          <Icon className="text-3xl" />
                          <span className="text-xs font-semibold text-center leading-tight">{type.label}</span>
                        </div>
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <MdCheckCircle className="text-green-500" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
                {selectedType && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <p className="text-xs text-gray-700 text-center font-medium">{selectedType.description}</p>
                  </div>
                )}
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-shake">
                  <p className="text-sm text-red-600 text-center font-medium">{error}</p>
                </div>
              )}

              {/* Demo Credentials */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                <p className="text-xs text-gray-700 text-center">
                  <span className="font-bold text-blue-700">🎯 Demo Credentials:</span><br />
                  <span className="inline-block mt-1">
                    Username: <code className="bg-white px-2 py-1 rounded font-mono text-blue-600 font-semibold">mf_user</code> |
                    Password: <code className="bg-white px-2 py-1 rounded font-mono text-blue-600 font-semibold">demo123</code>
                  </span>
                </p>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{
                  background: selectedType?.gradient || 'linear-gradient(135deg, #3B82F6, #06B6D4)'
                }}
              >
                <span>Sign In</span>
                <HiLightningBolt className="text-xl group-hover:animate-pulse" />
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-semibold">Or continue with</span>
                </div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all group"
              >
                <FaGoogle className="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                <span>Login with Google</span>
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Forgot Password?</a>
              <span className="text-gray-400 mx-2">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Need Help?</a>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center mt-6 text-sm text-gray-600">
            © 2024 Asset Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
