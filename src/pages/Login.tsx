import { useNavigate } from 'react-router-dom'
import { Guimarbot } from '@components/Guimarbot'
import { LoginForm } from '@components/forms/LoginForm'

export const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-5 bg-gray-100/20 md:grid">
      <div className="size-[200px]">
        <Guimarbot />
      </div>

      <div className="p-2">
        <h2 className="text-balance text-3xl font-bold md:text-5xl md:leading-[1.2]">
          Inicia sesión para continuar con experencia de aprendizaje
        </h2>

        <LoginForm />

        <p className="mt-8">
          ¿Aún no tienes cuenta?{' '}
          <span
            className="cursor-pointer font-bold text-blue-500"
            onClick={() => navigate('/register')}
          >
            Registrase
          </span>
        </p>
      </div>
    </main>
  )
}
