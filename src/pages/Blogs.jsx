import React from 'react'
import Header from '../Components/Header'
import '../css/blogs.css';
import { blogs } from '../Data/Blogs';

const Blogs = () => {
    console.log("blogs,", blogs)
    return (
        <>
            <Header title="Explore Our Blogs" />
            <section>
                <div className='blog_page container'>
                    <div class="page-blog">
                        <div class="container">
                            <div class="row">
                                {blogs?.map((blog) => (
                                    <div className="col-lg-4 col-md-6">
                                        {/* Post Item */}
                                        <div className="post-item">
                                            {/* Post Featured Image */}
                                            <div className="post-featured-image">
                                                <a href={`/blog/${blog.id}`} >
                                                    <figure className="image-anime">
                                                        <img src={blog?.blogpageimage} alt="Chakra Balancing" />
                                                    </figure>
                                                </a>
                                            </div>

                                            {/* Post Item Content */}
                                            <div className="post-item-content">
                                                <h2>
                                                    <a href={`/blog/${blog.id}`}>
                                                        {blog.title}
                                                    </a>
                                                </h2>
                                            </div>

                                            {/* Blog Item Button */}
                                            <div className="blog-item-btn">
                                                <a href={`/blog/${blog.id}`} className="readmore-btn">
                                                    view details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs