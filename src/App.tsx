import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <div
      className="w-full h-full min-h-screen flex flex-col items-center justify-start"
      style={{
        backgroundColor: "hsl(244, 48%, 13%)",
        backgroundImage:
          "radial-gradient(circle 600px at right top, hsl(270, 73%, 35%) 0%, #131131 60%, transparent 100%)," +
          "radial-gradient(circle 600px at left bottom, hsl(270, 73%, 35%) 0%, #131131 80%, transparent 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-between w-full px-12 py-4">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

export default App
