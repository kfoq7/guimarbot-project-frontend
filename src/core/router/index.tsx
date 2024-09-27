import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HealthCheck from '@components/HealthCheck'
import { Layout } from '@components/layouts/main'

import { Login } from '@/pages/Login'
import { Home } from '@/pages/Home'
import { Register } from '@pages/Register'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
