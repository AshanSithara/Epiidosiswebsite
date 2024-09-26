"use client";
import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  blog_id: number;
  name: { en: string; fr?: string };
  content: { en: string; fr?: string };
  cover_properties: string;
  teaser_manual: string;
  subtitle: string;
  seo_name: string;
  website_meta_title: string;
  website_meta_description: string;
  website_meta_keywords: string;
  is_published: boolean;
  active: boolean;
  create_date: string; // Adjusted field name
  author_name: string | null; // Nullable
}

// Helper function to truncate text to a specific length
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const LatestArticles: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]); // Add "All" as the default category
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // Default selected category is "All"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blogapi.epiidosisinvestments.com/media");
        if (response.ok) {
          const data = await response.json();
          // Sort blogs by 'id' (latest first) or 'create_date'
          const sortedBlogs = data.sort((a: BlogPost, b: BlogPost) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime());
          setBlogs(sortedBlogs);
        } else {
          setError("Failed to load blogs");
        }
      } catch (err) {
        setError("An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://blogapi.epiidosisinvestments.com/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(["All", ...data]); // Prepend "All" to the category list
        } else {
          setError("Failed to load categories");
        }
      } catch (err) {
        setError("An error occurred while fetching categories");
      }
    };

    fetchCategories();
  }, []);

  // Function to fetch blogs by category
  const fetchBlogsByCategory = async (category: string) => {
    setLoading(true);
    try {
      const url = category === "All"
        ? "https://blogapi.epiidosisinvestments.com/blogs"
        : `https://blogapi.epiidosisinvestments.com/blogs/category/${encodeURIComponent(category)}`;
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // Sort blogs by 'id' (latest first) or 'create_date'
        const sortedBlogs = data.sort((a: BlogPost, b: BlogPost) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime());
        setBlogs(sortedBlogs); // Update state with filtered blogs
      } else {
        setError("Failed to load blogs");
      }
    } catch (err) {
      setError("An error occurred while fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch related blogs based on the clicked blog's ID
  const fetchRelatedBlogs = async (blogId: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://blogapi.epiidosisinvestments.com/blogs/related/${blogId}`);
      if (response.ok) {
        const data = await response.json();
        // Sort related blogs by 'id' (latest first) or 'create_date'
        const sortedBlogs = data.sort((a: BlogPost, b: BlogPost) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime());
        setBlogs(sortedBlogs); // Update state with related blogs
      } else {
        setError("Failed to load related blogs");
      }
    } catch (err) {
      setError("An error occurred while fetching related blogs");
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory === "All"
    ? blogs // Show all blogs if "All" is selected
    : blogs; // No further filtering required, since the API already returns category-specific blogs

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="mb-8">
          {/* Wrap the title and category filters in a flex container */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <h2
              className="text-4xl font-extrabold text-[#56585C]"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Latest articles
            </h2>

            {/* Category filters */}
            {/* <div className="flex space-x-2 md:space-x-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category); // Set the selected category
                    fetchBlogsByCategory(category); // Fetch blogs based on category
                  }}
                  className={`py-1 px-3 rounded-md font-bold ${selectedCategory === category ? "bg-[#56585C] text-white" : "bg-[#F8FAFF] text-[#56585C]"}`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t pt-12">
          {filteredBlogs.map((blog) => {
            let coverProperties;
            let imageUrl = null;

            try {
              coverProperties = JSON.parse(blog.cover_properties);
              if (coverProperties?.image_path) {
                const fixedImagePath = coverProperties.image_path.replace(/\\/g, "/");
                imageUrl = `https://blogapi.epiidosisinvestments.com/${fixedImagePath}`;
              }
            } catch (err) {
              console.error("Error parsing cover_properties:", err);
            }

            return (
              <div
                key={blog.blog_id}
                className="bg-white rounded-lg border-2 border-[#E1E4ED] overflow-hidden relative group flex flex-col"
                onClick={() => {
                  fetchRelatedBlogs(blog.blog_id); // Fetch related blogs when a blog is clicked
                }}
              >
                {/* Blog Image */}
                <img
                  src={imageUrl || "/path/to/default-image.jpg"}
                  alt="Article Image"
                  className="w-full h-48 object-cover"
                />
            
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19213D] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
                {/* Blog Content */}
                <div className="p-4 relative z-10 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Blog Title */}
                    <h3
                      className="text-lg text-[#56585C] font-bold mb-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {blog.name.en}
                    </h3>
            
                    {/* Blog Teaser */}
                    <p className="text-sm text-gray-600 mb-4">
                      {truncateText(blog.teaser_manual, 200)}
                    </p>
                  </div>
            
                  {/* Blog Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                      className="text-[#B4B9C9] font-bold"
                    >
                      {blog.create_date
                        ? new Date(blog.create_date).toLocaleDateString()
                        : "Date Not Available"}
                    </span>
            
                    {/* Blog Button Icon */}
                    <a href={`/our-blogs/${blog.id}`} className="cursor-pointer">
                      <img src="/Blog/ButtonIcon.png" alt="Arrow" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            );
            
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default LatestArticles;
