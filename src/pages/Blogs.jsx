import React, { useState } from "react"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import { Calendar, User, Clock, ArrowRight, Search, Tag, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import "../assets/scss/pages/blogs.scss"

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    "Software Development",
    "App Development", 
    "Cloud Innovations",
    "Website Development",
    "Web Hosting",
    "Funding Assistance",
    "Certification Assistance",
    "Legal Assistance",
    "Marketing Assistance",
    "Business Strategy"
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Modern Software Development: Best Practices for 2024",
      excerpt: "Explore the latest trends and methodologies in software development including Agile, DevOps, and microservices architecture that are shaping the industry.",
      content: `
        <h2>The Evolution of Software Development</h2>
        <p>Software development has undergone significant transformation in recent years. The shift from traditional waterfall methodologies to Agile and DevOps practices has revolutionized how we build and deploy software.</p>
        
        <h3>Key Trends in 2024</h3>
        <ul>
          <li><strong>AI-Powered Development:</strong> Leveraging artificial intelligence for code generation and optimization</li>
          <li><strong>Microservices Architecture:</strong> Breaking down applications into smaller, independent services</li>
          <li><strong>Cloud-Native Development:</strong> Building applications specifically for cloud environments</li>
          <li><strong>Low-Code Platforms:</strong> Accelerating development with visual programming tools</li>
        </ul>

        <h3>Best Practices</h3>
        <p>Implementing CI/CD pipelines, automated testing, and containerization are no longer optional but essential for modern software development teams.</p>
      `,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "15 Dec 2024",
      readTime: "8 min read",
      author: "Sarah Chen",
      category: "Software Development",
      tags: ["Software", "Development", "Technology", "Programming"]
    },
    {
      id: 2,
      title: "Mobile App Development: Cross-Platform vs Native",
      excerpt: "Understanding the pros and cons of cross-platform and native mobile app development approaches for your business.",
      content: `
        <h2>Choosing the Right Mobile Development Approach</h2>
        <p>When building mobile applications, one of the most critical decisions is choosing between native and cross-platform development.</p>
        
        <h3>Native Development</h3>
        <p><strong>Pros:</strong> Superior performance, full access to device features, better user experience</p>
        <p><strong>Cons:</strong> Higher development cost, separate codebases for iOS and Android</p>

        <h3>Cross-Platform Development</h3>
        <p><strong>Pros:</strong> Code reusability, faster development, cost-effective</p>
        <p><strong>Cons:</strong> Performance limitations, dependency on frameworks</p>

        <h3>When to Choose Which?</h3>
        <p>Consider native for performance-critical applications and cross-platform for business applications where time-to-market is crucial.</p>
      `,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "12 Dec 2024",
      readTime: "6 min read",
      author: "Mike Rodriguez",
      category: "App Development",
      tags: ["Mobile", "App Development", "React Native", "Flutter"]
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for Enterprise Success",
      excerpt: "Learn proven strategies for successful cloud migration and how to avoid common pitfalls in enterprise cloud adoption.",
      content: `
        <h2>Enterprise Cloud Migration Guide</h2>
        <p>Cloud migration is no longer a choice but a necessity for enterprises looking to stay competitive. However, a successful migration requires careful planning and execution.</p>
        
        <h3>Migration Strategies</h3>
        <ul>
          <li><strong>Rehost (Lift and Shift):</strong> Moving applications without modifications</li>
          <li><strong>Refactor:</strong> Optimizing applications for cloud-native features</li>
          <li><strong>Revise:</strong> Partial modification before migration</li>
          <li><strong>Rebuild:</strong> Completely rearchitecting applications</li>
        </ul>

        <h3>Best Practices</h3>
        <p>Start with a comprehensive assessment, prioritize applications, and ensure proper security measures are in place throughout the migration process.</p>
      `,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "10 Dec 2024",
      readTime: "10 min read",
      author: "David Park",
      category: "Cloud Innovations",
      tags: ["Cloud", "Migration", "AWS", "Azure", "Enterprise"]
    },
    {
      id: 4,
      title: "Website Development: Creating High-Converting Landing Pages",
      excerpt: "Discover the key elements that make landing pages convert and how to implement them in your web development projects.",
      content: `
        <h2>High-Converting Landing Page Design</h2>
        <p>A well-designed landing page can significantly impact your conversion rates and business growth. Here's what makes a landing page effective.</p>
        
        <h3>Essential Elements</h3>
        <ul>
          <li><strong>Clear Value Proposition:</strong> Immediately communicate what you offer</li>
          <li><strong>Compelling Headlines:</strong> Grab attention and encourage reading</li>
          <li><strong>Strategic CTAs:</strong> Clear, action-oriented buttons</li>
          <li><strong>Social Proof:</strong> Testimonials and trust indicators</li>
        </ul>

        <h3>Technical Considerations</h3>
        <p>Ensure fast loading times, mobile responsiveness, and SEO optimization to maximize your landing page's effectiveness.</p>
      `,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "8 Dec 2024",
      readTime: "7 min read",
      author: "Emily Watson",
      category: "Website Development",
      tags: ["Web Development", "Landing Pages", "Conversion", "UI/UX"]
    },
    {
      id: 5,
      title: "Web Hosting: Choosing the Right Solution for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect web hosting solution based on your business needs and traffic expectations.",
      content: `
        <h2>Web Hosting Solutions Comparison</h2>
        <p>Choosing the right web hosting is crucial for your website's performance, security, and scalability. Here's how to make the right choice.</p>
        
        <h3>Hosting Types</h3>
        <ul>
          <li><strong>Shared Hosting:</strong> Cost-effective for small websites</li>
          <li><strong>VPS Hosting:</strong> Balanced performance and cost</li>
          <li><strong>Dedicated Servers:</strong> Maximum control and performance</li>
          <li><strong>Cloud Hosting:</strong> Scalable and reliable</li>
        </ul>

        <h3>Selection Criteria</h3>
        <p>Consider factors like expected traffic, technical requirements, security needs, and budget when choosing your hosting solution.</p>
      `,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "5 Dec 2024",
      readTime: "9 min read",
      author: "Robert Kim",
      category: "Web Hosting",
      tags: ["Hosting", "Servers", "Cloud", "Infrastructure"]
    },
    {
      id: 6,
      title: "Funding Assistance: Navigating Business Financing Options",
      excerpt: "Learn about various funding options available for startups and established businesses seeking growth capital.",
      content: `
        <h2>Business Funding Landscape</h2>
        <p>Access to capital is essential for business growth. Understanding the different funding options can help you make informed decisions.</p>
        
        <h3>Funding Options</h3>
        <ul>
          <li><strong>Venture Capital:</strong> For high-growth potential businesses</li>
          <li><strong>Angel Investors:</strong> Individual investors seeking early-stage opportunities</li>
          <li><strong>Bank Loans:</strong> Traditional financing with collateral requirements</li>
          <li><strong>Grants:</strong> Non-repayable funds for specific purposes</li>
        </ul>

        <h3>Preparation Tips</h3>
        <p>Have a solid business plan, financial projections, and understand your valuation before seeking funding.</p>
      `,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "3 Dec 2024",
      readTime: "11 min read",
      author: "Lisa Thompson",
      category: "Funding Assistance",
      tags: ["Funding", "Investment", "Startup", "Finance"]
    },
    {
      id: 7,
      title: "Digital Marketing Strategies for 2024",
      excerpt: "Explore the latest digital marketing trends and strategies that are driving business growth in the current landscape.",
      content: `
        <h2>Modern Digital Marketing Approaches</h2>
        <p>The digital marketing landscape continues to evolve rapidly. Staying ahead requires adopting new strategies and technologies.</p>
        
        <h3>Key Strategies</h3>
        <ul>
          <li><strong>AI-Powered Personalization:</strong> Delivering tailored experiences using artificial intelligence</li>
          <li><strong>Video Marketing:</strong> Leveraging short-form and live video content</li>
          <li><strong>Voice Search Optimization:</strong> Adapting content for voice assistants</li>
          <li><strong>Sustainability Marketing:</strong> Highlighting eco-friendly practices</li>
        </ul>

        <h3>Implementation Tips</h3>
        <p>Focus on data-driven decisions, customer experience, and omnichannel presence for maximum impact.</p>
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "1 Dec 2024",
      readTime: "8 min read",
      author: "Alex Johnson",
      category: "Marketing Assistance",
      tags: ["Marketing", "Digital", "Strategy", "Growth"]
    },
    {
      id: 8,
      title: "Legal Compliance for Tech Startups",
      excerpt: "Essential legal considerations and compliance requirements for technology startups and digital businesses.",
      content: `
        <h2>Legal Framework for Tech Companies</h2>
        <p>Navigating the legal landscape is crucial for tech startups to avoid costly mistakes and ensure sustainable growth.</p>
        
        <h3>Key Areas</h3>
        <ul>
          <li><strong>Intellectual Property:</strong> Protecting your innovations and brand</li>
          <li><strong>Data Privacy:</strong> Compliance with GDPR, CCPA, and other regulations</li>
          <li><strong>Terms of Service:</strong> Clear and enforceable user agreements</li>
          <li><strong>Employment Law:</strong> Proper contractor and employee classification</li>
        </ul>

        <h3>Best Practices</h3>
        <p>Consult with legal experts early, document everything, and stay updated on regulatory changes in your industry.</p>
      `,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "28 Nov 2024",
      readTime: "12 min read",
      author: "Michael Brown",
      category: "Legal Assistance",
      tags: ["Legal", "Compliance", "Startup", "Regulations"]
    },
    {
      id: 9,
      title: "360° Business Assistance: Building Sustainable Companies",
      excerpt: "How comprehensive business support services can accelerate growth and ensure long-term success.",
      content: `
        <h2>Holistic Business Support Approach</h2>
        <p>Successful businesses require support across multiple domains. A 360° approach ensures all aspects of your business receive proper attention.</p>
        
        <h3>Key Support Areas</h3>
        <ul>
          <li><strong>Strategic Planning:</strong> Roadmap development and goal setting</li>
          <li><strong>Operational Excellence:</strong> Process optimization and efficiency</li>
          <li><strong>Financial Management:</strong> Budgeting, forecasting, and cash flow management</li>
          <li><strong>Technology Integration:</strong> Implementing the right tools and systems</li>
        </ul>

        <h3>Benefits</h3>
        <p>Comprehensive support leads to faster growth, better decision-making, and increased resilience in competitive markets.</p>
      `,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "25 Nov 2024",
      readTime: "10 min read",
      author: "Jennifer Lee",
      category: "Business Strategy",
      tags: ["Business", "Strategy", "Growth", "Management"]
    }
  ]

  const [selectedPost, setSelectedPost] = useState(null)

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handleReadMore = (post) => {
    setSelectedPost(post)
    window.scrollTo(0, 0)
  }

  const handleBackToList = () => {
    setSelectedPost(null)
  }

  if (selectedPost) {
    return (
      <div className="blog-detail-page">
        <Container>
          <button onClick={handleBackToList} className="back-to-blogs-btn">
            ← Back to Blogs
          </button>
          
          <article className="blog-detail">
            <header className="blog-detail-header">
              <Badge bg="primary" className="blog-category-badge">
                {selectedPost.category}
              </Badge>
              <h1 className="blog-detail-title">{selectedPost.title}</h1>
              
              <div className="blog-meta">
                <div className="meta-item">
                  <User size={16} />
                  <span>By {selectedPost.author}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </header>

            <div className="blog-detail-image">
              <img src={selectedPost.image} alt={selectedPost.title} />
            </div>

            <div className="blog-detail-content">
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>

            <footer className="blog-detail-footer">
              <div className="blog-tags">
                <Tag size={16} />
                {selectedPost.tags.map((tag, index) => (
                  <Badge key={index} bg="outline-secondary" className="tag-badge">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="share-section">
                <Share2 size={16} />
                <span>Share this article</span>
                <div className="social-share">
                  <button className="share-btn">Twitter</button>
                  <button className="share-btn">LinkedIn</button>
                  <button className="share-btn">Facebook</button>
                </div>
              </div>
            </footer>
          </article>

          <section className="related-posts">
            <h3>Related Articles</h3>
            <Row>
              {blogPosts
                .filter(post => post.category === selectedPost.category && post.id !== selectedPost.id)
                .slice(0, 3)
                .map(post => (
                  <Col md={4} key={post.id}>
                    <Card className="related-post-card">
                      <Card.Img variant="top" src={post.image} />
                      <Card.Body>
                        <Badge bg="primary" className="mb-2">{post.category}</Badge>
                        <Card.Title>{post.title}</Card.Title>
                        <button 
                          onClick={() => handleReadMore(post)}
                          className="read-more-link"
                        >
                          Read More <ArrowRight size={16} />
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </section>
        </Container>
      </div>
    )
  }

  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div 
          className="blogs-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="blogs-hero-title mb-4">
                    Insights & Updates
                  </h1>
                  <p className="blogs-hero-subtitle lead mb-5">
                    Stay informed with the latest trends, insights, and best practices in technology, 
                    business development, and digital innovation from Farsight Solution experts.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blogs-content py-5">
        <Container>
          {/* Search and Filter Section */}
          <Row className="mb-5">
            <Col lg={8}>
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </Col>
            <Col lg={4}>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-filter"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </Col>
          </Row>

          {/* Category Filters */}
          <Row className="mb-4">
            <Col>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Blog Grid */}
          <Row className="blogs-grid">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <Col lg={4} md={6} key={post.id} className="mb-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="blog-card h-100">
                      <div className="blog-card-image-wrapper">
                        <Card.Img variant="top" src={post.image} className="blog-card-image" />
                        <div className="blog-card-badge">
                          <Badge bg="primary">{post.category}</Badge>
                        </div>
                      </div>
                      <Card.Body className="blog-card-body">
                        <div className="blog-card-meta">
                          <span className="blog-date">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <span className="blog-read-time">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <Card.Title className="blog-card-title">
                          {post.title}
                        </Card.Title>
                        <Card.Text className="blog-card-excerpt">
                          {post.excerpt}
                        </Card.Text>
                        <div className="blog-card-footer">
                          <button 
                            onClick={() => handleReadMore(post)}
                            className="blog-read-more-btn"
                          >
                            Read More <ArrowRight size={16} />
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h4>No blogs found matching your criteria</h4>
                <p>Try adjusting your search or filter options</p>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <Row>
              <Col>
                <div className="blogs-pagination">
                  <button
                    className="pagination-btn prev"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    ‹ Previous
                  </button>

                  <div className="pagination-numbers">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    className="pagination-btn next"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next ›
                  </button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </div>
  )
}

export default Blogs