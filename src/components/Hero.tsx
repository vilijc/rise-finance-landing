import React from "react"
import { GradientTitle } from "./GradientTitle"
import { Title } from "./Title"
import Button from "./Button"

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center min-h-[65vh] justify-center mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-left">
          <GradientTitle text="Scale Fintech" />
          <Title text="Safe And Secure" />
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-6 text-left">
          Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide.
        </p>
        <Button text="CONSULTATION" />
      </div>
      <div
        className="w-full md:w-1/2 bg-no-repeat bg-contain bg-center flex-shrink-0 min-h-[300px] md:min-h-[528px]"
        style={{ backgroundImage: "url('/right-section.svg')" }}
      />
    </section>
  )
}

export default Hero
