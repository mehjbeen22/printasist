import React from 'react'
import ContentPage from './ContentPage';

const HomePage = () => {
  return (
    <>
    <main className="relative flex items-center justify-center p-10 ">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://img.freepik.com/premium-photo/black-printer-office-with-soft-focus-light-background_41050-1378.jpg?w=826" 
          alt="Printer Background" 
          className="w-full h-full object-cover blur-md"
        />
      </div>
      <section className="relative z-10 flex flex-row items-centerbg-opacity-80 p-8
       rounded-lg shadow-lg bg-gray-50 space-x-8">
        <div className="flex-shrink-0 w-1/2">
          <img 
            src="https://img.freepik.com/premium-photo/black-printer-office-with-soft-focus-light-background_41050-1378.jpg?w=826" 
            alt="Printer" 
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2   p-10 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Discover the Power of Printing</h1>
          <p >
            Printers have become indispensable tools in both homes and offices, facilitating the creation of physical documents from digital files. They enhance the clarity and impact of presentations, reports, and creative projects. Modern printers offer a range of functionalities, including scanning and copying, to meet diverse needs. From school assignments to professional documents, printers play a crucial role in daily tasks.
          </p>
        </div>
      </section>

    </main>

   <ContentPage/> 
</>
  )
}

export default HomePage;
