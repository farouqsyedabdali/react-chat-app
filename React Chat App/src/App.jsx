import Login from './pages/login';
import Navbar from './components/navbar'
import Chatroom from './pages/chatroom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { PrivateRoute } from './routes/private_route';
import { AuthProvider } from './context/auth_context';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/"j element={<Login />} />
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
