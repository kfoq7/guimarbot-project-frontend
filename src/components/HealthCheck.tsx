import React, { useEffect, useState } from 'react'

const HealthCheck: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/health')
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.text()
        setStatus(result)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    }

    checkHealth()
  }, [])

  if (error) return <p>Error: {error}</p>

  return <div className="flex items-center justify-center h-screen font-bold">{status}</div>
}

export default HealthCheck
