import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiCamera, FiSave, FiEdit2, FiX } from 'react-icons/fi';
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from 'react-icons/md';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    address: user?.address || '',
    avatar: user?.avatar || ''
  });
  const [previewImage, setPreviewImage] = useState(user?.avatar || '');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      mobile: user?.mobile || '',
      address: user?.address || '',
      avatar: user?.avatar || ''
    });
    setPreviewImage(user?.avatar || '');
    setIsEditing(false);
  };

  const getUserTypeLabel = () => {
    const labels = {
      mf: 'Manufacturer',
      lp: 'Logistic Provider',
      ws: 'Wholeseller',
      ret: 'Retailer',
      con: 'Consumer'
    };
    return labels[user?.type] || 'User';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-blue-100 mt-2">{getUserTypeLabel()} Account</p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-lg"
            >
              <FiEdit2 />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all font-semibold"
              >
                <FiX />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-lg"
              >
                <FiSave />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Content */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
        <div className="space-y-8">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={previewImage || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
              />
              {isEditing && (
                <button
                  onClick={handleImageClick}
                  className="absolute bottom-0 right-0 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg"
                  title="Change profile picture"
                >
                  <FiCamera className="text-xl" />
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {isEditing ? 'Click camera icon to change profile picture' : 'Profile Picture'}
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MdPerson className="inline mr-2 text-blue-600" />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-800 font-medium">{formData.name}</p>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MdEmail className="inline mr-2 text-blue-600" />
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-800">{formData.email}</p>
                </div>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MdPhone className="inline mr-2 text-blue-600" />
                Mobile Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your mobile number"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-800">{formData.mobile}</p>
                </div>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MdLocationOn className="inline mr-2 text-blue-600" />
                Address
              </label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your address"
                />
              ) : (
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-800">{formData.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Account Info */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">Account Type</p>
                <p className="text-lg font-bold text-blue-800">{getUserTypeLabel()}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="text-lg font-bold text-purple-800">January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Security & Privacy</h3>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all border border-gray-200">
            <p className="font-semibold text-gray-800">Change Password</p>
            <p className="text-sm text-gray-600">Update your password regularly for security</p>
          </button>
          <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all border border-gray-200">
            <p className="font-semibold text-gray-800">Two-Factor Authentication</p>
            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
          </button>
          <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all border border-gray-200">
            <p className="font-semibold text-gray-800">Privacy Settings</p>
            <p className="text-sm text-gray-600">Manage your data and privacy preferences</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
