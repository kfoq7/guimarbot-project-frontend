export const Hero: React.FC = () => {
  return (
    <div className="px-4 pb-20 pt-52">
      <h1 className="mx-auto max-w-[20ch] text-balance text-center text-5xl font-bold md:text-7xl md:leading-[1.16]">
        Conviérte en un gran Desarrollador
      </h1>

      <p className="mt-3 text-center text-2xl">Todo lo que necestias aprender en un solo lugar</p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
        <a
          href="#cursos"
          className="flex items-center justify-center gap-x-2.5 rounded-md border bg-transparent px-4 py-2.5 text-base font-bold transition-transform duration-300 hover:scale-105 md:px-6 md:text-xl"
        >
          Explorar cursos
        </a>
      </div>
    </div>
  )
}
