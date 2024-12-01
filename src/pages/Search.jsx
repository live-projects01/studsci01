import React, { useRef } from "react";

const Search = () => {
  // Refs for sections
  const homeRef = useRef(null);
  const eventRef = useRef(null);
  const contactRef = useRef(null);
  const latestRef = useRef(null);

  // Scroll handler
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.trim().toLowerCase();
      let sectionRef = null;

      // Map search query to corresponding ref
      switch (query) {
        case "home":
          sectionRef = homeRef;
          break;
        case "event":
          sectionRef = eventRef;
          break;
        case "contact":
          sectionRef = contactRef;
          break;
        case "latest":
          sectionRef = latestRef;
          break;
        default:
          alert("Section not found");
          return;
      }

      // Scroll to the section if ref is found
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Student-Scientist
            </span>
          </a>
          {/* Search Bar */}
          <input
            type="text"
            className="block w-full max-w-sm p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            onKeyPress={handleSearch}
          />
        </div>
      </nav>

      {/* Sections */}
      <div ref={homeRef} className="h-screen flex items-center justify-center bg-blue-50">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
      <div ref={eventRef} className="h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-4xl font-bold">Event</h1>
      </div>
      <div ref={contactRef} className="h-screen flex items-center justify-center bg-yellow-50">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <div ref={latestRef} className="h-screen flex items-center justify-center bg-red-50">
        <h1 className="text-4xl font-bold">Latest</h1>
      </div>
    </div>
  );
};

export default Search;
