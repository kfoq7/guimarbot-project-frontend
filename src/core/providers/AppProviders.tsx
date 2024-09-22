import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@context/auth'

const queryClient = new QueryClient()

export const AppProvider: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}
