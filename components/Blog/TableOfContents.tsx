import { useState, useEffect, useRef } from 'react';

const TableOfContents = ({ tableOfContents }: { tableOfContents: any[] }) => {
  const [isTOCVisible, setTOCVisible] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  // Function to toggle TOC visibility
  const toggleTOC = () => {
    setTOCVisible(!isTOCVisible);
  };

  // Function to handle smooth scroll with offset
  const handleTOCClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor link behavior

    const element = document.getElementById(id);
    const navbarHeight = 80; // Adjust this value to the height of your fixed navbar

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth', // Smooth scrolling effect
      });
    }

    // Optional: Hide TOC after clicking
    setTOCVisible(false);
  };

  // Close TOC when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setTOCVisible(false);
      }
    };

    if (isTOCVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTOCVisible]);

  return (
    <div>
      {/* Conditionally render the Sticky Button only when TOC is not visible */}
      {!isTOCVisible && (
        <button
          onClick={toggleTOC}
          className="fixed top-52 right-0 z-50 transform -translate-y-1/2 bg-[#E8F6FC] font-bold font-lg text-[#2D3955] px-2 py-6"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: 'Lato, sans-serif' }}
        >
          Table of Contents
        </button>
      )}

      {/* Sliding Table of Contents */}
      <aside
        ref={tocRef}
        className={`fixed top-52 right-0  z-40 w-full md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 ${
          isTOCVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxWidth: '300px' }} // Adjust width if necessary
      >
        <div
          className="p-2 rounded sticky top-8 overflow-y-scroll no-scrollbar"
          style={{ maxHeight: '50vh', fontFamily: 'Lato, sans-serif' }}
        >
          <h2 className="text-lg font-bold mb-4 bg-[#E8F6FC] p-3 rounded-sm">
            Table of Contents
          </h2>
          <ul className="space-y-1 text-base">
            {tableOfContents.map((item) => (
              <li
                key={item.id}
                className="hover:bg-[#E8F6FC] p-2"
                style={{ marginLeft: `${(item.level - 1) * 12}px` }}
              >
                <a
                  href={`#${item.id}`}
                  className="text-[#2D3955] font-bold"
                  onClick={handleTOCClick(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default TableOfContents;
