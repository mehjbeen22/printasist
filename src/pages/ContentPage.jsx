import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const ContentPage = () => {
  return (
    <main className="bg-gray-100 p-8">
      
      {/* How to Proceed with Printer Setup? */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img 
            src="http://select-printer.com/wp-content/uploads/2021/05/hp-printer-setup.jpg" 
            alt="Printer Setup" 
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold  mb-4">How to Proceed with Printer Setup?</h2>
          <p className=" mb-4">Over the years, printers have become essential in both offices and households. Printed copies make documents more vivid and creative. Nowadays, everyone uses printers for school projects, presentations, and creating posters and maps.</p>
          <ul className="list-disc pl-5  space-y-2">
            <li>Firstly, remove the printer from its packaging and connect it to a power source.</li>
            <li>Carefully install the ink cartridges.</li>
            <li>Now get some paper and put them into the input tray. However, make sure that the paper is compatible with your printer model.</li>
            <li>Also set preferences such as time, language, and country.</li>
            <li>Next, download and install the software so that your printer can connect. You can either connect it to your PC or mobile phone.</li>
            <li>Lastly, try printing a document so that you are ensured that your printer works properly.</li>
          </ul>
        </div>
      </section>

      {/* How to Fix Printer Offline Issue? */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold  mb-4">How to Fix Printer Offline Issue?</h1>
          <p className=" mb-4">If your printer has abruptly stopped working, then the first problem that you should look to troubleshoot is the printer offline issue. It’s mostly a common issue and with a few solutions, anybody can get the glitch fixed at home.</p>
          <ul className="list-disc pl-5  space-y-2">
            <li>Start by checking the cable connections. Ensure that the USB cable is firm and inserted well.</li>
            <li>The second thing to try is to set the printer online manually.</li>
            <li>Also, make sure to remove all the pending print jobs.</li>
            <li>Check the drivers because an outdated or corrupted driver can lead your printer to go offline quickly. In this case, make sure to reinstall new drivers immediately.</li>
            <li>If possible, also try and run the Print and Scan Doctor to identify and rectify any printer errors.</li>
            <li>Check for a paper jam issue by taking the input tray out. If you find a paper being stuck then remove it carefully.</li>
          </ul>
        </div>

        <div className="flex-shrink-0 w-full lg:w-1/2">
            <img src="http://select-printer.com/wp-content/uploads/2021/05/printer-offline-issue.png" alt="" />
        </div>
      </section>

      {/* Icons Section */}
      <section className="bg-blue-900 p-8">
        <div className="flex flex-col lg:flex-row justify-around items-center bg-white shadow-lg rounded-lg  space-y-8 lg:space-y-0 lg:space-x-8 p-4">
          <div className="flex flex-col items-center space-y-2">
            <FileDownloadDoneIcon sx={{fontSize :"4rem"}} className='text-blue-900'/>
            <p className="text-xl font-semibold">Super Efficient</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FileDownloadDoneIcon sx={{fontSize :"4rem"}} className='text-blue-900'/>
            <p className="text-xl font-semibold">Deeply Committed</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
           <FileDownloadDoneIcon sx={{fontSize :"4rem"}} className='text-blue-900'/>
            <p className="text-xl font-semibold">Highly Skilled</p>
          </div>
        </div>
      </section>

      {/* How to Resolve Printer Offline Issue by using Print and Scan Doctor? */}
      <section className=" bg-gray-100 p-8">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="w-full lg:w-1/2">
            <img 
              className="object-cover w-full h-full" 
              src="http://select-printer.com/wp-content/uploads/2021/05/hp-printer-setup.jpg" 
              alt="Printer Setup"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold  mb-4">How to Resolve Printer Offline Issue by using Print and Scan Doctor?</h2>
            <ul className="list-disc pl-5  space-y-2 mb-4">
              <li>Start by downloading the Print and Scan Doctor.</li>
              <li>In the next step, click on Run from ‘Download’ on your computer.</li>
              <li>Once it’s open, choose your printer from the mentioned list.</li>
              <li>The screen may prompt turn on the printer updates. In this case click Yes.</li>
              <li>Other prompts could be set printer to default printer, click on yes and continue.</li>
            </ul>
            <p className="">Following all the above-mentioned ways will help you troubleshoot the printer issue. But, always make sure to check if your printer is working or not. If not, then you may require the assistance of a professional.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContentPage;
