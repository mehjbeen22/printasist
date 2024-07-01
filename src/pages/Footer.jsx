import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-around items-center">
          <div className="w-1/2 whitespace-nowrap">
            <p>Email us :- support@printasist.com</p>
            <p>Address :- 3942 Oak Woods Ct, Douglasville, GA 30135</p>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
            <p>
              Printasist operates as a completely independent third-party
              company, unaffiliated with any printer brand and not involved in
              associate programs, affiliate advertising, or product
              endorsements. We strive to provide comprehensive printer
              information, but cannot guarantee its absolute accuracy or
              compatibility with your specific model. We strongly recommend
              users carefully review this disclaimer to understand the
              information presented. Additionally, we do not host external links
              on our website. If you encounter any, please inform us for prompt
              removal. Brand names and logos are used solely for representation
              and do not imply endorsement. Ultimately, users are responsible
              for ensuring the compatibility of any printer content (cartridges,
              toner, etc.) with their device. We recommend consulting your
              printer manual or manufacturer's website for definitive
              compatibility information.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">© 2024 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
