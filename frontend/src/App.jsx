import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all screens
import AdminPanelScreen from './pages/AdminPanelScreen';
import FindTailorMapView from './pages/FindTailorMapView';
import HomeScreenCustomer from './pages/HomeScreenCustomer';
import MeasurementResults from './pages/MeasurementResults';
import MeasurementsScreen from './pages/MeasurementsScreen';
import OrderConfirmationScreen from './pages/OrderConfirmationScreen';
import OrderDetailsMeasurements from './pages/OrderDetailsMeasurements';
import OrdersManagement from './pages/OrdersManagement';
import OrderSuccessScreen from './pages/OrderSuccessScreen';
import PaymentScreen from './pages/PaymentScreen';
import RateTailorScreen from './pages/RateTailorScreen';
import SplashOnboarding from './pages/SplashOnboarding';
import TailorDashboardScreen from './pages/TailorDashboardScreen';
import TailorOnboarding from './pages/TailorOnboarding';
import TailorProfileEditor from './pages/TailorProfileEditor';
import TailorProfileScreen from './pages/TailorProfileScreen';
import WorkshopDashboard from './pages/WorkshopDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreenCustomer />} />
        <Route path="/admin" element={<AdminPanelScreen />} />
        <Route path="/tailors/map" element={<FindTailorMapView />} />
        <Route path="/measurements/results" element={<MeasurementResults />} />
        <Route path="/measurements/new" element={<MeasurementsScreen />} />
        <Route path="/orders/confirmation" element={<OrderConfirmationScreen />} />
        <Route path="/orders/:id" element={<OrderDetailsMeasurements />} />
        <Route path="/orders" element={<OrdersManagement />} />
        <Route path="/orders/success" element={<OrderSuccessScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/rate" element={<RateTailorScreen />} />
        <Route path="/onboarding" element={<SplashOnboarding />} />
        <Route path="/tailor/dashboard" element={<TailorDashboardScreen />} />
        <Route path="/tailor/onboarding" element={<TailorOnboarding />} />
        <Route path="/tailor/profile/edit" element={<TailorProfileEditor />} />
        <Route path="/tailor/profile" element={<TailorProfileScreen />} />
        <Route path="/workshop" element={<WorkshopDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
