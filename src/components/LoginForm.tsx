export const LoginForm: React.FC = () => {
  return (
    <form className="mx-auto max-w-sm rounded-lg bg-white px-4 py-6 shadow-md">
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Nombre de usuario o email</label>
        <input
          type="text"
          className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ingresa tu nombre de usuario o email"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">Contraseña</label>
        <input
          type="password"
          className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ingresa tu contraseña"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
      >
        Iniciar sesión
      </button>
    </form>
  )
}
