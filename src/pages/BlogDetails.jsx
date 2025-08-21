import React from 'react'
import Header from '../Components/Header'
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../Data/Blogs';
import '../css/blogDetails.css';
const BlogDetails = () => {
    const { id } = useParams(); // get blog id from URL
    const blogId = parseInt(id, 10);
    const blog = blogs.find((b) => b.id === parseInt(id));


    // Find previous and next blogs
    const currentIndex = blogs.findIndex((b) => b.id === blogId);
    const prevBlog = blogs[currentIndex - 1];
    const nextBlog = blogs[currentIndex + 1];
    console.log("nextBlog", nextBlog, prevBlog, currentIndex)
    if (!blog) {
        return <h2>Blog not found</h2>;
    }


    return (
        <>
            <Header title={blog.title} />
            <section className='container'>
                <div className="blog-details container mx-auto px-6 py-10">
                    {/* Blog Title */}
                    {/* <h1 className="text-3xl font-bold mb-6">{blog.title}</h1> */}

                    {/* Blog Category */}
                    {/* <p className="text-sm text-gray-500 mb-4">
                        Category: <span className="font-medium">{blog.category}</span>
                    </p> */}

                    {/* Blog Content */}
                    <div className="blog-content space-y-6">
                        {blog.content.map((blog, index) => {
                            if (blog.type === "paragraph") {
                                return <p key={index} className="text-lg leading-relaxed blog-paragraph" dangerouslySetInnerHTML={{ __html: blog.text }} />;
                            }
                            if (blog.type === "heading") {
                                return <h2 key={index} className="text-2xl font-semibold mt-4">{blog.text}</h2>;
                            }
                            if (blog.type === "image") {
                                return (
                                    <div key={index} className="my-6 blog-image-container">
                                        <img src={blog.src} alt={blog.alt} className="rounded-lg w-full blog-image" />
                                        {blog.caption && <p className="text-sm text-gray-500 mt-2">{blog.caption}</p>}
                                    </div>
                                );
                            }
                            if (blog.type === "ul") {
                                return (
                                    <ul key={index} className="list-disc list-inside space-y-1 blog-ul">
                                        {blog.items.map((item, i) => (
                                            <li key={i} className="text-lg">{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (blog.type === "subheading") {
                                return <h3 key={index} className="text-xl font-semibold mt-4 blog-subheading">{blog.text}</h3>;
                            }
                            if (blog.type === "ol") {
                                return (
                                    <ol key={index} className="list-decimal list-inside space-y-1 blog-ol">
                                        {blog.items.map((item, i) => (
                                            <li key={i} className="text-lg">{item}</li>
                                        ))}
                                    </ol>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>
                <div className="blog-navigation">
                    {prevBlog ? (
                        <Link to={`/blog/${prevBlog.id}`} className="nav-btn prev-btn">
                            ← {prevBlog.title}
                        </Link>
                    ) : <div></div>}
                    {nextBlog ? (
                        <Link to={`/blog/${nextBlog.id}`} className="nav-btn next-btn">
                            {nextBlog.title} →
                        </Link>
                    ) : <div></div>}
                </div>
            </section>
        </>
    )
}

export default BlogDetails