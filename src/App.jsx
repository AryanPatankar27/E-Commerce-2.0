import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { GroupProvider } from './context/GroupContext';
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Importing page components
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import OrderConfirmationPage from "./pages/OrderConfirmationPage.jsx";
import Cart from "./pages/Cart.jsx";
import ElectronicsPage from "./components/Electronics.jsx";
import ClothingPage from "./components/Clothing.jsx";
import AppliancesPage from "./components/Appliances.jsx";
import SportsPage from "./components/Sports.jsx";
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SocialActivity from './components/socialactivity.jsx';
import EnvironmentalDayForm from './components/enviormentalDayform.jsx';
import ReadingDayForm from './components/readingDayform';
import CreateGroup from './components/CreateGroup.jsx';
import GroupPage from './components/GroupPage.jsx';
import JoinGroup from './components/JoinGroup.jsx';
import Home from './components/Home.jsx'; // Group Shopping Home
//import CheckoutPage from './components/CheckoutPage';
import ReceiptPage from './components/ReceiptPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // A component to protect routes and ensure authentication
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <CartProvider>
        <GroupProvider>
          <div className="flex flex-col min-h-screen">
            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
              <ErrorBoundary>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                  <Route path="/signup" element={<SignupPage setIsAuthenticated={setIsAuthenticated} />} />

                  {/* Protected Routes (require authentication) */}
                  <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                  <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
                  <Route path="/order-confirmation" element={<ProtectedRoute><OrderConfirmationPage /></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                  <Route path="/electronics" element={<ProtectedRoute><ElectronicsPage /></ProtectedRoute>} />
                  <Route path="/clothing" element={<ProtectedRoute><ClothingPage /></ProtectedRoute>} />
                  <Route path="/appliances" element={<ProtectedRoute><AppliancesPage /></ProtectedRoute>} />
                  <Route path="/sports" element={<ProtectedRoute><SportsPage /></ProtectedRoute>} />

                  {/* Group Shopping Routes */}
                  <Route path="/group/:groupId" element={<ProtectedRoute><GroupPage /></ProtectedRoute>} />
                  <Route path="/group-shopping" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="/create-group" element={<ProtectedRoute><CreateGroup /></ProtectedRoute>} />
                  <Route path="/join" element={<ProtectedRoute><JoinGroup /></ProtectedRoute>} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  //<Route path="/receipt" element={<ReceiptPage />} />

                  {/* Social Activity Routes */}
                  <Route path="/social-activity" element={<ProtectedRoute><SocialActivity /></ProtectedRoute>} />
                  <Route path="/environment-form" element={<ProtectedRoute><EnvironmentalDayForm /></ProtectedRoute>} />
                  <Route path="/reading-form" element={<ProtectedRoute><ReadingDayForm /></ProtectedRoute>} />

                  {/* Catch-All for Not Found Pages */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </ErrorBoundary>
            </main>
          </div>
        </GroupProvider>
      </CartProvider>
    </Router>
  );
};

export default App;