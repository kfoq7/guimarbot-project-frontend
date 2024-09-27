import { Guimarbot } from '@components/Guimarbot'
import { Input } from '@components/ui'

export const Register: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-2">
      <div>
        <Guimarbot />
      </div>

      <div>
        <Input label="Correo" />
      </div>
    </main>
  )
}
