type GradientTitleProps = {
  text: string
}

export function GradientTitle({ text }: GradientTitleProps) {
  return (
    <h1
      className="
        font-poppins
        text-5xl
        md:text-6xl
        font-extrabold
        tracking-[-0.02em]
        bg-clip-text
        text-transparent
        font-semibold
        tracking-[3px]
      "
      style={{
        backgroundImage: "linear-gradient(90deg, #4646F9 0%, #9130F4 100%)",
      }}
    >
      {text}
    </h1>
  )
}
