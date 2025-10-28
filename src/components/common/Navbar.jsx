import React, { useState, useRef, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../../assets/scss/components/_navbar.scss'


const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const [clickedDropdown, setClickedDropdown] = useState(null)
  const timeoutRef = useRef(null)
  const isMobile = useRef(window.innerWidth < 992)

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 992
      if (!isMobile.current) {
        setClickedDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeNavbar = () => {
    setExpanded(false)
    setClickedDropdown(null)
  }

  const handleDropdownMouseEnter = (dropdownId) => {
    if (isMobile.current) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setHoveredDropdown(dropdownId)
  }

  const handleDropdownMouseLeave = () => {
    if (isMobile.current) return
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null)
    }, 150)
  }

  const handleDropdownClick = (dropdownId) => {
    if (!isMobile.current) return
    setClickedDropdown(clickedDropdown === dropdownId ? null : dropdownId)
  }

  const isDropdownOpen = (dropdownId) => {
    return isMobile.current ? clickedDropdown === dropdownId : hoveredDropdown === dropdownId
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <Navbar expand="lg" expanded={expanded} className="main-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src="../../assets/images/logo.png"
            alt="Farsight Solutions Logo"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>

            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('about')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown
                title="About Us"
                id="about-dropdown"
                className="nav-dropdown"
                show={isDropdownOpen('about')}
                onToggle={() => handleDropdownClick('about')}
              >
                <NavDropdown.Item as={Link} to="/about-farsight" onClick={closeNavbar}>
                  About Farsight Solutions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#" onClick={closeNavbar}>
                  Career
                </NavDropdown.Item>
              </NavDropdown>
            </div>


            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('business-consultancy')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown
                title="Business Consultancy"
                id="business-consultancy-dropdown"
                className="nav-dropdown"
                show={isDropdownOpen('business-consultancy')}
                onToggle={() => handleDropdownClick('business-consultancy')}
              >
                <NavDropdown
                  title="Funding Assistance"
                  id="funding-assistance-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item as={Link} to="/funding-assistance/grant" onClick={closeNavbar}>
                    Grant
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/funding-assistance/loan" onClick={closeNavbar}>
                    Loan
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/funding-assistance/nbfc" onClick={closeNavbar}>
                    NBFC
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} to="/certification-assistance" onClick={closeNavbar}>
                  Certification Assistance
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/legal-assistance" onClick={closeNavbar}>
                  Legal Assistance
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/marketing-assistance" onClick={closeNavbar}>
                  Marketing Assistance
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/all-business" onClick={closeNavbar}>
                  360° Business Assistance
                </NavDropdown.Item>
              </NavDropdown>
            </div>
                        <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('it-solutions')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown
                title="IT Solutions"
                id="it-solutions-dropdown"
                className="nav-dropdown"
                show={isDropdownOpen('it-solutions')}
                onToggle={() => handleDropdownClick('it-solutions')}
              >
                <NavDropdown.Item as={Link} to="/software-development" onClick={closeNavbar}>
                  Software Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/app-development" onClick={closeNavbar}>
                  App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cloud-innovations" onClick={closeNavbar}>
                  Cloud Innovations
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/website-development" onClick={closeNavbar}>
                  Website Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/web-hosting" onClick={closeNavbar}>
                  Web Hosting
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('hr-outsource')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown
                title="Products"
                id="hr-outsource-dropdown"
                className="nav-dropdown"
                show={isDropdownOpen('hr-outsource')}
                onToggle={() => handleDropdownClick('hr-outsource')}
              >
                <NavDropdown.Item as={Link} to="/crm" onClick={closeNavbar}>
                 Customer Relationship Management (CRM)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/erp" onClick={closeNavbar}>
                  ERP
                </NavDropdown.Item>
                
              </NavDropdown>
            </div>

            {/* <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('explore-more')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown
                title="Explore More"
                id="explore-more-dropdown"
                className="nav-dropdown"
                show={isDropdownOpen('explore-more')}
                onToggle={() => handleDropdownClick('explore-more')}
              >
                <NavDropdown.Item as={Link} to="/legal-compliance" onClick={closeNavbar}>
                  Legal & Compliance (LPO)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/financial-services" onClick={closeNavbar}>
                  Financial Services (FPO)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/business-consultancy" onClick={closeNavbar}>
                  Business Consultancy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/angel-investors" onClick={closeNavbar}>
                  Angel Investors
                </NavDropdown.Item>
              </NavDropdown>
            </div> */}

            <Nav.Link as={Link} to="/blogs" onClick={closeNavbar}>
              Blogs
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              onClick={closeNavbar}
              className="custom-btn btn-12"
            >
              <span>Contact Us</span>
              <span>Contact Us</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar