import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
