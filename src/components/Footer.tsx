import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="w-3/4 h-[18vh] mx-auto flex flex-col justify-end">
      <div className="flex flex-row w-full h-full items-center justify-between gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-1 items-center justify-center h-full">
                <img src={`/footer-logo${i}.svg`} alt={`Logo ${i}`} className="mx-auto my-auto" style={{ height: '60px', width: i === 1 ? '236px' :  i === 3 ? '119px' : '100px' }} />
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
