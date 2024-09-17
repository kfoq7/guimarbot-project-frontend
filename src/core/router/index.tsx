import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HealthCheck from '@/components/HealthCheck'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/health" element={<HealthCheck />} />
        </Route>
      </Routes>
    </Router>
  )
}
