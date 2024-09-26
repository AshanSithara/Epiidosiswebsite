"use client";
import { useState, useEffect } from "react";
import React from "react";

// Define the BlogPost interface based on the provided data format
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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://blogapi.epiidosisinvestments.com/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  let coverProperties;
  let imageUrl = null;

  // Handle cover image parsing
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
    <>
    <div className="container mx-auto px-24 md:px-48 py-12">
      {/* Title Section */}
      <div className="mb-6">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs uppercase px-2 py-1 rounded-full">
          Blog Category {/* Assuming a category field could be added */}
        </span>
        <h1 className="text-4xl font-bold mt-4">{blog.name.en}</h1>
        <p className="text-gray-500 mt-2">
          By {blog.author_name || "Team Epiidosis "} ·{" "}
          {blog.create_date ? new Date(blog.create_date).toLocaleDateString() : "Date Not Available"}
        </p>
      </div>

      {/* Cover Image */}
      {imageUrl && (
        <div className="my-8">
          <img 
            src={imageUrl} 
            alt="Cover Image" 
            className="w-full h-96 object-fill rounded-lg" 
          />
        </div>
      )}

      {/* Teaser */}
      {/* <div className="my-4 text-lg font-semibold text-gray-600">
        <div dangerouslySetInnerHTML={{ __html: blog.content.en }} />
      </div> */}

      {/* Subtitle */}
      {/* <div className="my-2 text-md italic text-gray-700">
        {blog.subtitle}
      </div> */}

      {/* Content Section */}
      <div className="prose max-w-none text-gray-700">
        <div dangerouslySetInnerHTML={{ __html: blog.content.en }} />
      </div>
    </div>
    </>
  );
};

export default BlogPage;
