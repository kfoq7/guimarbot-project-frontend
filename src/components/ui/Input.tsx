interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input: React.FC<Props> = ({ label, name, type, placeholder, ...restProps }) => {
  return (
    <div className="my-2">
      <label className="mb-3 block text-lg font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-md border border-gray-500/80 px-1.5 py-2.5 outline-none focus:border-[#1c1364] focus:ring-1 focus:ring-[#1c1364]"
        {...restProps}
      />
    </div>
  )
}
