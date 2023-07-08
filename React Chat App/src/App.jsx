import { useState } from 'react';
import Login from './pages/login';
import Navbar from './components/navbar'
import SideMenu from './components/side_menu'; // assuming this is the correct import path
import Chatroom from './pages/chatroom';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/private_route';
import { AuthProvider } from './context/auth_context';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <AuthProvider>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat"
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
