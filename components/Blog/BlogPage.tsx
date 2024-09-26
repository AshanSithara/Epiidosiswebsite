"use client";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import FooterBanner from "./FooterBanner";
import TableOfContents from "./TableOfContents"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

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
  create_date: string;
  author_name: string | null;
}

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { id } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://blogapi.epiidosisinvestments.com/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
          generateTableOfContents(data.content.en);
        } else {
          setError("Failed to load blog post");
        }
      } catch (err) {
        setError("An error occurred while fetching the blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const generateTableOfContents = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc: TableOfContentsItem[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const title = heading.textContent || '';
      const id = `section-${index}`;
      heading.id = id;
      toc.push({ id, title, level });
    });

    setTableOfContents(toc);
  };

  const renderContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Add styles to headings
    headings.forEach((heading, index) => {
      const element = heading as HTMLElement; // Cast heading to HTMLElement to access the style property
      element.id = `section-${index}`;
      if (element.tagName === 'H1') {
        element.style.fontSize = '2rem'; // Larger font size for H1
        element.style.fontWeight = 'bold';
        element.style.color = '#56585C'; // Custom color for H1
      }
      if (element.tagName === 'H2') {
        element.style.fontSize = '1.875rem'; // Adjusted size for H2
        element.style.fontWeight = 'bold';
        element.style.color = '#56585C';
      }
      if (element.tagName === 'H3') {
        element.style.fontSize = '1.5rem';
        element.style.fontWeight = 'bold';
        element.style.color = '#56585C'; // Adjusted size for H3
      }
    });

    return { __html: doc.body.innerHTML };
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
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>Blog post not found</div>;

  let imageUrl = null;
  try {
    const coverProperties = JSON.parse(blog.cover_properties);
    if (coverProperties?.image_path) {
      const fixedImagePath = coverProperties.image_path.replace(/\\/g, "/");
      imageUrl = `https://blogapi.epiidosisinvestments.com/${fixedImagePath}`;
    }
  } catch (err) {
    console.error("Error parsing cover_properties:", err);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-28" style={{
        fontFamily: "Lato, sans-serif",
      }}>
        {/* Main Blog Content with Heading and Image */}
        <div className="w-full">
          <div className="mb-6">
            <span className="inline-block bg-[#56585C] text-[#FFFFFF] text-xs uppercase px-2 py-1 rounded-sm">
              UAE Investment
            </span>
            <h1 className="text-4xl font-extrabold mt-4 md:mr-[500px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {blog.name.en}
            </h1>
            <p className="text-gray-500 mt-2">
              by <span className="text-[#1A9548] font-bold mr-8">{blog.author_name || "Anonymous"}</span> {" "}
              <span className="text-[#B4B9C9] font-normal">
                {new Date(blog.create_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
            <div className="flex">
  {/* Share Button */}
  <a href="#" target="_blank" rel="noopener noreferrer" className="flex">
    <img src="/share.svg" alt="Share Button" className="mt-4 mr-6" />
  </a>

  {/* Social Media Icons */}
  <div className="flex space-x-4 mt-6">
    {/* Facebook Share */}
    <a 
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://yourwebsite.com')}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
      <FaFacebookF />
    </a>

    {/* Instagram - No direct share, link to your profile */}
    <a 
      href="https://www.instagram.com/yourprofile/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
      <FaInstagram />
    </a>

    {/* LinkedIn Share */}
    <a 
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://yourwebsite.com')}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
      <FaLinkedinIn />
    </a>
  </div>
</div>

          </div>

          {imageUrl && (
            <div className="mb-8">
              <img
                src={imageUrl}
                alt="Blog cover"
                className="w-full h-96 object-cover object-center rounded-sm"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row mt-16">
          {/* Table of Contents on the left (Sidebar) */}
          <aside className="hidden md:block w-full md:w-1/4 md:mr-8">
  <h2 className="text-lg font-bold mb-4 bg-[#E8F6FC] p-3 rounded-sm">Related Articles</h2>
  <div
    className="p-2 rounded sticky"
    style={{ fontFamily: "Lato, sans-serif" }}
  >
    {/* Articles Grid */}
    <div
      className="grid grid-cols-1 gap-8" // Only one column across all screen sizes
      style={{
        fontFamily: "Lato, sans-serif",
      }}
    >
      {/* Article Card */}
      {Array(3)
        .fill("")
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border-2 border-[#E1E4ED] overflow-hidden relative group"
          >
            <img
              src={`/Blog/image${idx + 1}.png`}
              alt="Article Image"
              className="w-full h-48 object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#19213D] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

            <div className="p-4 relative z-10">
              <h3
                className="text-lg text-[#56585C] font-bold mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Typography in web design: Enhancing UI/UX web apps
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit justo
                quis odio sit sit at porttitor sit males dolor sit.
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
</aside>




          {/* Blog Content on the right (Full width below the image) */}
          <div className="w-full md:w-3/5 text-justify">
            <div className="max-w-none text-xl" dangerouslySetInnerHTML={renderContent(blog.content.en)} style={{
              fontFamily: "Lato, sans-serif",
            }} />
            <p className="mt-4" style={{
              fontFamily: "Lato, sans-serif",
            }}><span className="text-[#CB8511] font-bold">Related: </span><a href="" className="italic underline">Top 10 sectors to invest in the UAE</a></p>


          </div>
          <TableOfContents tableOfContents={tableOfContents} />
          {/* <aside className="hidden md:block w-full md:w-1/3">
  <div
    className="p-2 rounded sticky top-8 overflow-y-scroll no-scrollbar"
    style={{ maxHeight: '80vh', fontFamily: "Lato, sans-serif" }}
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
            onClick={() => handleTOCClick(item.id)}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
</aside> */}

        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
};

export default BlogPage;
