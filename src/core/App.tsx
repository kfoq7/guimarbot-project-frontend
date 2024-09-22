import { AppProvider } from './providers/AppProviders'
import AppRouter from './router'

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
