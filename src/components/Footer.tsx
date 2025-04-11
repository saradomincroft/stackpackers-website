"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white p-6">
      <div className="w-[80%] max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-sm sm:text-base md:text-lg mb-2 md:mb-0 text-left">
          &copy; Stackpackers {currentYear}
        </p>
        <div className="text-left">
          <span>Social Icons here</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
