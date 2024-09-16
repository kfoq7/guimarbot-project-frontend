import HealthCheck from './components/HealthCheck'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/health" element={<HealthCheck />} />
      </Routes>
    </Router>
  )
}
