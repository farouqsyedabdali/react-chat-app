import { useEffect, useState } from 'react';
import Login from './pages/login';
import Navbar from './components/navbar';
import SideMenu from './components/side_menu';
import Chatroom from './pages/chatroom';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/private_route';
import { AuthProvider } from './context/auth_context';
import SendMessage from './components/send_message';
import { themeChange } from 'theme-change';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [theme, setTheme] = useState('black');  // Initialize theme state

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    themeChange(false);  // 👆 false parameter is required for react project
    document.documentElement.setAttribute('data-theme', theme); // Set the initial theme
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // Apply theme change to the entire application
  }, [theme]);

  return (
    <div>
      <AuthProvider>
        <Navbar theme={theme} toggleDrawer={toggleDrawer} />
        <SideMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat"
            element={
              <PrivateRoute>
                <Chatroom />
                <SendMessage />
              </PrivateRoute>
            } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
