import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home/Home';
import Single from './views/single/Single';
import Profile from './views/profile/Profile';
import Upload from './views/upload/Upload';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './views/Layout';
import { MediaProvider } from './contexts/MediaContext';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
