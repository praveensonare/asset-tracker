import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';
import Login from './pages/Login';
import Profile from './pages/Profile';

// Import all dashboard components
import ManufacturerDashboard from './pages/dashboards/ManufacturerDashboard';
import LogisticProviderDashboard from './pages/dashboards/LogisticProviderDashboard';
import WholesellerDashboard from './pages/dashboards/WholesellerDashboard';
import RetailerDashboard from './pages/dashboards/RetailerDashboard';
import ConsumerDashboard from './pages/dashboards/ConsumerDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Manufacturer Routes */}
          <Route
            path="/mf/dashboard"
            element={
              <ProtectedRoute allowedUserType="mf">
                <DashboardLayout userType="mf">
                  <ManufacturerDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/mf/profile"
            element={
              <ProtectedRoute allowedUserType="mf">
                <DashboardLayout userType="mf">
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Logistic Provider Routes */}
          <Route
            path="/lp/dashboard"
            element={
              <ProtectedRoute allowedUserType="lp">
                <DashboardLayout userType="lp">
                  <LogisticProviderDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/lp/profile"
            element={
              <ProtectedRoute allowedUserType="lp">
                <DashboardLayout userType="lp">
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Wholeseller Routes */}
          <Route
            path="/ws/dashboard"
            element={
              <ProtectedRoute allowedUserType="ws">
                <DashboardLayout userType="ws">
                  <WholesellerDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ws/profile"
            element={
              <ProtectedRoute allowedUserType="ws">
                <DashboardLayout userType="ws">
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Retailer Routes */}
          <Route
            path="/ret/dashboard"
            element={
              <ProtectedRoute allowedUserType="ret">
                <DashboardLayout userType="ret">
                  <RetailerDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ret/profile"
            element={
              <ProtectedRoute allowedUserType="ret">
                <DashboardLayout userType="ret">
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Consumer Routes */}
          <Route
            path="/con/dashboard"
            element={
              <ProtectedRoute allowedUserType="con">
                <DashboardLayout userType="con">
                  <ConsumerDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/con/profile"
            element={
              <ProtectedRoute allowedUserType="con">
                <DashboardLayout userType="con">
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
