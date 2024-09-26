import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const dummyData = [
  {
    id: 1,
    title: "Epiidosis Investments LLC x Apollo Green Energy Limited ",
    content: "Epiidosis Investments is excited to announce a strategic partnership with Apollo Green Energy Limited (AGEL), a prominent player in renewable energy, EPC projects, and international trading under the esteemed Apollo Group. This partnership is set to accelerate the development and execution of sustainable energy projects, leveraging the strengths of both companies in finance, technology, and industry expertise.",
    author: "Author",
    date: "September 19, 2024 09:00 AM GMT",
    image: "/MediaAnnouncement/image.png"
  },
  {
    id: 2,
    title: "Epiidosis Investments & Kanwar Enterprises Private Limited",
    content: "Epiidosis Investments is proud to announce a strategic partnership with Kanwar Enterprises Private Limited (KEPL), a leading construction company with a rich legacy in civil engineering projects, including large-scale infrastructure development. This collaboration represents a significant step in advancing the growth objectives of both organizations, driven by shared values of innovation, sustainability, and customer satisfaction",
    author: "Author",
    date: "September 19, 2024 09:00 AM GMT",
    image: "/MediaAnnouncement/image2.png"
  },
  // {
  //   id: 3,
  //   title: "Dubai's tourism sector shows strong recovery",
  //   content: "Latest figures reveal a significant bounce-back in Dubai's tourism industry, with hotel occupancy rates reaching pre-pandemic levels.",
  //   author: "Ahmed Al-Mansoori",
  //   date: "August 31, 2024 11:15 AM GMT",
  //   image: "/MediaAnnouncement/image3.png"
  // }
];

const NewsAnnouncementCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dummyData.length) % dummyData.length);
  };

  const currentAnnouncement = dummyData[currentIndex];

  return (
    <>
    <div className="bg-white p-6" style={{ fontFamily: "Lato, sans-serif" }}>
      <div className="max-w-[1300px] mx-auto"> {/* Responsive container */}
        <div className="flex justify-between items-center mb-8 mt-12">
          <h2 className="font-bold textgold" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Newest announcements
          </h2>
          <div className="flex space-x-2">
            <button onClick={prevSlide}>
              <img src="/MediaAnnouncement/left.png" alt="Previous" />
            </button>
            <button onClick={nextSlide}>
              <img src="/MediaAnnouncement/right.png" alt="Next" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-[350px] bg-[#FAFAFA]">
          {/* Image container */}
          <div className="w-full lg:w-[400px] h-[250px] lg:h-[400px]">
            <img
              src={currentAnnouncement.image}
              alt="Announcement visual"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Content container */}
          <div className="w-full lg:w-[700px] py-6 lg:py-12 px-4 lg:px-6 overflow-hidden ml-0 lg:ml-12">
  <h3 className="text-2xl lg:text-4xl font-extrabold mb-4 lg:mb-6 text-[#56585C]">
    {currentAnnouncement.title}
  </h3>
  <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
    {currentAnnouncement.content.length > 300
      ? `${currentAnnouncement.content.slice(0, 300)}...`
      : currentAnnouncement.content}
  </p>
  <div className="flex justify-between items-center text-sm text-gray-500">
  <div>
    <span className="font-bold mr-2 text-[#1A9548]">by {currentAnnouncement.author}</span>
    <span className="text-[#B4B9C9]">| {currentAnnouncement.date}</span>
  </div>
  
  <a href={`/announcement/${currentAnnouncement.id}`}  className="cursor-pointer">
                      <span className="material-icons text-gray-600">
                        <img src="/Blog/ButtonIcon.png" alt="Arrow" />
                      </span>
                    </a>
</div>

</div>

        </div>
      </div>
    </div>
    </>
  );
};

export default NewsAnnouncementCarousel;
