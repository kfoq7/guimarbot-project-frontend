export const BackgroundSlider: React.FC = () => {
  return (
    <div className="relative -z-[99999] mb-10 h-[600px] w-full max-w-[1200px] opacity-45">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)`,
        }}
        className="size-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
    </div>
  )
}
