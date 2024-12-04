import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ReportDashboard from './components/ReportDashboard';
import Login from './components/Login';
import Settings from './components/Settings';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/report" element={<ReportDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Routes>
          {/* ... routes */}
        </Routes>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}