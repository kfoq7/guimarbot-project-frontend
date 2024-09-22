import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HealthCheck from '@components/HealthCheck'

import { Login } from '@page/Login'
import { Home } from '@page/Home'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route>
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
