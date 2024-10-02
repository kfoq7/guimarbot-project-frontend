import { Guimarbot } from '@components/Guimarbot'
import { RegisterForm } from '@components/forms/RegisterForm'

export const Register: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-2">
      <div className="size-[200px]">
        <Guimarbot />
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-balance text-3xl font-bold md:text-5xl md:leading-[1.2]">
          Registrate para comenzar tu aprendizaje
        </h2>

        <RegisterForm />
      </div>
    </main>
  )
}
