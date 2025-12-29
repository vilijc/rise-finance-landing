import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-11 py-4 z-10 bg-transparent">
      <div
        className="w-10 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/logo.svg')", minHeight: '40px', height: '40px', width: '378px' }}
        aria-label="Logo"
      />
      <button className="focus:outline-none">
        <img src="/burger-menu.svg" alt="Menu" className="h-8 w-8" />
      </button>
    </nav>
  )
}

export default Navbar
