import { useNavigate } from 'react-router-dom'
import { Guimarbot } from '@components/Guimarbot'
import { LoginForm } from '@components/forms/LoginForm'

export const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100/20">
      <div className="size-[200px]">
        <Guimarbot />
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-3xl font-bold md:text-5xl md:leading-[1.2]">
          Inicia sesión para continuar con experencia de aprendizaje
        </h2>

        <LoginForm />

        <p className="">
          ¿Aún no tienes cuenta?{' '}
          <span className="" onClick={() => navigate('/register')}>
            Registrase
          </span>
        </p>
      </div>
    </main>
  )
}
