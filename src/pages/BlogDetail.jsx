"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import "../assets/scss/pages/blog-detail.scss"

const BlogDetail = () => {
  const { id } = useParams()
  const [email, setEmail] = useState("")

  const blogPost = {
    id: 1,
    title: "Google Analytics vs. Google Tag Manager: Key Differences Explained for Marketers",
    content: `
      <p>Discover the fundamental differences between Google Analytics and Google Tag Manager, two essential tools in digital marketing. Learn how they work, their unique roles, and why combining them can enhance your website's performance. Ideal for businesses in the best digital marketing company in Noida, looking to optimize data tracking and analysis.</p>
      
      <h3>What's the Difference Between Google Analytics and Google Tag Manager?</h3>
      <p>In the ever-evolving world of digital marketing, tracking and analyzing user behavior is crucial for business success. Tools like Google Analytics (GA) and Google Tag Manager (GTM) are often at the forefront of this process. While these tools work seamlessly together, they serve entirely different puemsses. If you're looking to understand how they differ, you've come down to the right place. Whether you're a marketer, a business owner, or even the best digital marketing company in Noida, understanding the roles of these tools can significantly enhance your strategies.</p>
      
      <h3>What is Google Analytics (GA)?</h3>
      <p>Google Analytics is a web analytics service that helps you track and analyze website traffic. It provides data about user behavior, such as: - Number of visitors - Source of traffic (e.g., organic search, social media, referrals) - Pages viewed - Session duration - Bounce rate. With Google Analytics, you gain insights into your website's performance, audience demographics, and user interactions, allowing you to make data-driven decisions.</p>
      
      <h3>2. WhatsApp Business App (For Small Businesses)</h3>
      <p>The WhatsApp Business App is more suited for small businesses and allows for simpler forms of communication with customers. However, the Business App does not support advanced automation or bulk messaging at scale, but it does provide essential features for communicating with multiple customers.</p>
      
      <h3>Key Features of Google Analytics:</h3>
      <p>1. Real-time tracking: Monitor live activity on your website. 2. Audience insights: Learn about user age, location, and interests. 3. Goal tracking: Set and measure key objectives like purchases or sign-ups. 4. Custom reports: Tailor data reports to your specific needs.</p>
      
      <h3>What is Google Tag Manager (GTM)?</h3>
      <p>Google Tag Manager is a tag management system that allows you to manage and deploy marketing tags (like snippets of code) on your website without needing to modify the codebase.</p>
      
      <h3>Key Features of Google Tag Manager:</h3>
      <p>1. Tag management without coding: Easily add, edit, or remove tags without involving developers. 2. Event tracking: Monitor specific user actions like button clicks or form submissions. 3. Pre-built templates: Use ready-made templates for Google Ads, Analytics, and more. 4. Debugging tools: Preview changes and debug issues before publishing.</p>
      
      <h3>Key Differences Between Google Analytics and Google Tag Manager</h3>
      <p>WhatsApp has been experimenting with the pricing of paid message templates, where businesses may need to pay for sending messages outside of the standard 24-hour customer support window. This would allow businesses to message customers even when the customer has not initiated the conversation.</p>
      
      <h3>How GA and GTM Work Together</h3>
      <p>While Google Analytics is essential for data analysis, Google Tag Manager simplifies the process of data collection by managing tags. Here's how they complement each other: 1. Setup Tracking Tags: Use GTM to install and configure GA tracking codes. 2. Event Tracking: Set up events like scroll depth, video plays, or form submissions in GTM. 3. Faster Deployments: GTM eliminates the need for direct code changes, allowing marketers to implement tags quickly and accurately.</p>
      
      <h3>Which One Do You Need?</h3>
      <p>If you're focusing solely on analyzing user data, Google Analytics is your go-to tool. However, if your goal is to streamline the process of managing tracking codes and advanced event tracking, Google Tag Manager is invaluable. For businesses seeking to enhance their online presence, combining these tools delivers the best results. As the best digital marketing company in Noida, we recommend using both GA and GTM to achieve a seamless and efficient tracking and analysis framework for your business.</p>
      
      <h3>Final Thoughts</h3>
      <p>Google Analytics and Google Tag Manager are both powerful tools in a digital marketer's toolkit, but they serve distinct roles. Understanding their differences and how they work together will help you create a more effective digital marketing strategy. If you're looking to set up a robust tracking and analysis framework for your business, consider consulting experts. The best digital marketing company in Noida can help you harness the full potential of GA and GTM to drive growth and achieve your goals. Ready to take your digital marketing strategy to the next level? Contact us today to unlock the power of data-driven insights and effective tag management.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    date: "21 Nov",
    category: "Digital Marketing",
    author: "Admin",
  }

  const categories = [
    "Web Development",
    "Mobile Application Development",
    "Software Development",
    "Mobile Application Development",
  ]

  const recentPosts = [
    {
      id: 2,
      title: "Navigating the Marketing Horizon: Is Programmatic Advertising the Future?",
      image: "/placeholder.svg?height=60&width=80",
      date: "30 June",
    },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-hero-section">
        <Container>
          <Row>
            <Col>
              <h1 className="blog-detail-hero-title">Blog Detail</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="blog-detail-content-section">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <article className="blog-detail-article">
                <div className="blog-detail-featured-image">
                  <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="blog-detail-image" />
                </div>

                <div className="blog-detail-content">
                  <h1 className="blog-detail-title">{blogPost.title}</h1>
                  <div className="blog-detail-text" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                </div>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <aside className="blog-detail-sidebar">
                <div className="blog-detail-search-widget">
                  <input type="text" placeholder="Type Search Words..." className="blog-detail-search-input" />
                  <button className="blog-detail-search-button">🔍</button>
                </div>

                <div className="blog-detail-categories-widget">
                  <h3 className="blog-detail-widget-title">CATEGORIES</h3>
                  <ul className="blog-detail-categories-list">
                    {categories.map((category, index) => (
                      <li key={index} className="blog-detail-category-item">
                        <Link
                          to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="blog-detail-category-link"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="blog-detail-recent-posts-widget">
                  <h3 className="blog-detail-widget-title">RECENT POSTS</h3>
                  <div className="blog-detail-recent-posts-list">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="blog-detail-recent-post-item">
                        <div className="blog-detail-recent-post-image">
                          <img src={post.image || "/placeholder.svg"} alt={post.title} />
                        </div>
                        <div className="blog-detail-recent-post-content">
                          <Link to={`/blog/${post.id}`} className="blog-detail-recent-post-title">
                            {post.title}
                          </Link>
                          <span className="blog-detail-recent-post-date">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="blog-detail-newsletter-widget">
                  <h3 className="blog-detail-widget-title">NEWSLETTER</h3>
                  <p className="blog-detail-newsletter-text">
                    Enter your email address below to subscribe to my newsletter
                  </p>
                  <form onSubmit={handleSubscribe} className="blog-detail-newsletter-form">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@heuristic.com"
                      className="blog-detail-newsletter-input"
                      required
                    />
                    <button type="submit" className="blog-detail-newsletter-button">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BlogDetail
