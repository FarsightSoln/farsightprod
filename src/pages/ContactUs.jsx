import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    message: ''
  })
  
  const [otp, setOtp] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const API_KEY = '517564ae-e928-11f0-a6b2-0200cd936042'
  
  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_fufd8ef' // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_0vnftyp' // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'LIWCYSURBhmMwJamb' // Replace with your EmailJS public key

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/
    return mobileRegex.test(mobile)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const sendOTP = async () => {
    if (!validateMobile(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Using AUTOGEN2 which sends SMS instead of voice call
      const response = await fetch(
        `https://2factor.in/API/V1/${API_KEY}/SMS/${formData.mobile}/AUTOGEN/CAPITALSPARK_OTP`,
        { method: 'GET' }
      )
      
      const data = await response.json()
      
      if (data.Status === 'Success') {
        setSessionId(data.Details)
        setOtpSent(true)
        setSuccess('OTP sent successfully via SMS to your mobile number!')
      } else {
        setError('OTP service is temporarily unavailable. Please try again Later.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error('Send OTP Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const verifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`,
        { method: 'GET' }
      )
      
      const data = await response.json()
      
      if (data.Status === 'Success' && data.Details === 'OTP Matched') {
        setOtpVerified(true)
        setSuccess('Mobile number verified successfully!')
        setError('')
      } else {
        setError('Invalid OTP. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error('Verify OTP Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }
    
    if (!otpVerified) {
      setError('Please verify your mobile number with OTP')
      return
    }

    // Send email using EmailJS
    setLoading(true)
    try {
      const templateParams = {
        from_name: formData.name,
        company_name: formData.company || 'Not provided',
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.message || 'No message provided',
        to_email: 'capitalspark100@example.com' // Replace with your email
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Form submitted:', formData)
      setSuccess('Form submitted successfully! We will contact you soon.')
      
      // Reset form
      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', mobile: '', message: '' })
        setOtp('')
        setOtpSent(false)
        setOtpVerified(false)
        setSessionId('')
        setSuccess('')
      }, 3000)
    } catch (emailError) {
      console.error('Email send error:', emailError)
      setError('Form submitted but failed to send email notification. Please contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-4">
      <div className="w-100" style={{maxWidth: '1200px'}}>
        <div className="bg-white rounded-4 shadow-lg overflow-hidden">
          <div className="row g-0">
            {/* Left Side - Banner Image */}
            <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white position-relative overflow-hidden" style={{background: 'url(/assets/images/banner/contact-banner.png) center center/cover no-repeat', padding: '3rem'}}>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-12 col-lg-6 p-4 p-lg-5">
              {/* Form */}
              <form onSubmit={handleSubmit} className="d-grid gap-4">
            {/* Alert Messages */}
            {error && (
              <div className="alert alert-danger py-2 px-3 mb-0">
                <small>{error}</small>
              </div>
            )}
            {success && (
              <div className="alert alert-success py-2 px-3 mb-0">
                <small>{success}</small>
              </div>
            )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="form-label fw-medium">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Company Name Field */}
                <div>
                  <label htmlFor="company" className="form-label fw-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter your company name (optional)"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="form-label fw-medium">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Mobile Number with OTP */}
                <div>
                  <label htmlFor="mobile" className="form-label fw-medium">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex gap-2">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="form-control flex-grow-1"
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      disabled={otpVerified}
                      required
                    />
                    {!otpVerified && (
                      <button
                        type="button"
                        onClick={sendOTP}
                        disabled={loading || otpSent}
                        className={`btn btn-primary ${otpSent ? 'disabled' : ''} text-nowrap`}
                      >
                        {loading ? 'Sending...' : otpSent ? 'Sent' : 'Send OTP'}
                      </button>
                    )}
                    {otpVerified && (
                      <div className="d-flex align-items-center px-3 py-2 bg-success bg-opacity-10 text-success rounded text-sm">
                        <svg className="me-2" style={{width: '1rem', height: '1rem'}} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>
                </div>

                {/* OTP Input */}
                {otpSent && !otpVerified && (
                  <div className="bg-primary bg-opacity-10 p-3 rounded border border-primary mb-2">
                    <label htmlFor="otp" className="form-label fw-medium">
                      Enter OTP <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex gap-2">
                      <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '')
                          if (value.length <= 6) setOtp(value)
                        }}
                        className="form-control flex-grow-1"
                        placeholder="Enter 6-digit OTP"
                        maxLength="6"
                      />
                      <button
                        type="button"
                        onClick={verifyOTP}
                        disabled={loading || otp.length !== 6}
                        className="btn btn-success text-nowrap"
                      >
                        {loading ? 'Verifying...' : 'Verify'}
                      </button>
                    </div>
                    <small className="text-secondary mt-2 d-block">
                      Didn't receive OTP?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setOtpSent(false)
                          setOtp('')
                          sendOTP()
                        }}
                        className="btn btn-link p-0 align-baseline"
                      >
                        Resend
                      </button>
                    </small>
                  </div>
                )}

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="form-label fw-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="form-control"
                    placeholder="How can we help you? (optional)"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!otpVerified || loading}
                  className="btn btn-primary w-100 fw-semibold py-3 px-4 shadow"
                  style={{background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)', border: 'none'}}
                >
                  {loading ? 'Submitting...' : 'Submit Contact Form'}
                </button>

                <small className="text-secondary text-center d-block mt-3">
                  By submitting this form, you agree to our terms and conditions.
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
