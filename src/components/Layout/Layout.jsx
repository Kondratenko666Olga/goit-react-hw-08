import { Routes, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage';
import ContactsPage from '../../pages/ContactsPage';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" element={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" element={<ContactsPage />} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default Layout;
