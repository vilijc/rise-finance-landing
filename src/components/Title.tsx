type TitleProps = {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <h1
      className="
        font-poppins
        text-5xl
        md:text-6xl
        font-extrabold
        tracking-[-0.02em]
        font-semibold
        tracking-[1px]
      "
    >
      {text}
    </h1>
  )
}
