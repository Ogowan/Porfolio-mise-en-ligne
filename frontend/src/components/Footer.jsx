const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 px-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nathan Bolyos</span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Resume</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Portfolio</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Services</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <a className="hover:underline">Nathan Bolyos</a>. All Rights Reserved.
        </span>
      </div>
    </footer>

  );
};

export default Footer;
