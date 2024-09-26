"use client";
import React, { useEffect, useState } from "react";

interface BlogPost {
  blog_id: number;
  name: { en: string }; // Assuming the blog title is in 'name.en'
  content: string;
  teaser_manual: string;
  cover_properties: string;
  subtitle: string;
  seo_name: string;
  website_meta_title: string;
  website_meta_description: string;
  website_meta_keywords: string;
  is_published: boolean;
  active: boolean;
  create_date: string;
  author_name: string;
  category: string;
}

const VisionMissionValues: React.FC = () => {
  const [featuredBlog, setFeaturedBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the featured blog when the component mounts
  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      try {
        const response = await fetch("https://blogapi.epiidosisinvestments.com/blog/featured");
        if (response.ok) {
          const data = await response.json();
          setFeaturedBlog(data);
        } else {
          setError("Failed to load featured blog");
        }
      } catch (err) {
        setError("An error occurred while fetching the featured blog");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlog();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!featuredBlog) {
    return <div>No featured blog available</div>;
  }

  // Parse cover_properties to get the image path if available
  let coverProperties;
  let coverImageUrl = null;

  try {
    coverProperties = JSON.parse(featuredBlog.cover_properties);
    if (coverProperties?.image_path) {
      const fixedImagePath = coverProperties.image_path.replace(/\\/g, "/");
      coverImageUrl = `https://blogapi.epiidosisinvestments.com/${fixedImagePath}`;
    }
  } catch (err) {
    console.error("Error parsing cover_properties:", err);
  }

  return (
    <>
    <section className="relative py-8 md:py-12 bg-white-100">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-8">
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
  {/* Flex container to hold image and card side by side */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
    
    {/* Card Overlay - left side */}
    <div className="relative bg-black text-white px-6 sm:px-8 pt-12 sm:pt-16 rounded-lg sm:w-[50%] h-72 sm:h-72 md:h-96 shadow-lg">
      <div className="mb-2 sm:mb-4">
        <span className="bg-[#56585C] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm uppercase rounded-sm">
          {featuredBlog.category || "Category"}
        </span>
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 leading-tight">
        {featuredBlog.name.en || "Title goes here of 2024"}
      </h3>
      <div className="flex items-center justify-between mt-8 sm:mt-12 mb-4 sm:mb-6 text-xs sm:text-sm">
        <div className="flex items-center space-x-2">
          <img
            src="/Blog/Circle Avatar.png"
            alt="User Icon"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-[#56585C] font-extrabold">{featuredBlog.author_name || "Author"}</p>
            <p className="text-[#B4B9C9] text-[10px] sm:text-xs">
              {new Date(featuredBlog.create_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button className="p-1 sm:p-2 bg-[#56585C] rounded-sm">
          <img
            src={`/Blog/Arrow.svg`}
            alt="Arrow"
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </div>

    {/* Background Image - right side */}
    <div
      className="relative bg-cover bg-center rounded-lg w-full sm:w-[50%] h-72 sm:h-72 md:h-96"
      style={{ backgroundImage: `url('${coverImageUrl || "/Blog/FrameBlog.svg"}')` }}
    >
      {/* Background image itself, no changes needed here */}
    </div>
  </div>
</div>


    </section>
    </>
  );
};

export default VisionMissionValues;
