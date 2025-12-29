import React from 'react'

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div
      className="p-[2px] bg-gradient-to-r from-[#9130F4] to-[#4646F9] inline-block transition-all duration-300 hover:scale-105"
      style={{ borderRadius: 0 }}
    >
      <button
        className="text-white font-semibold bg-[#131131] outline-none border-none"
        style={{ borderRadius: 0, fontSize: '18px', width: '274px', height: '74px' }}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
