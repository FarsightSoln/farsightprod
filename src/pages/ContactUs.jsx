import React, { useState } from 'react'
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
  const [otpAttempts, setOtpAttempts] = useState(0)

  const MAX_OTP_ATTEMPTS = 3

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const API_KEY = '517564ae-e928-11f0-a6b2-0200cd936042'

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_fufd8ef'
  const EMAILJS_TEMPLATE_ID = 'template_0vnftyp'
  const EMAILJS_PUBLIC_KEY = 'LIWCYSURBhmMwJamb'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile)
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  /* ================= SEND OTP ================= */
  const sendOTP = async () => {
    if (!validateMobile(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    setLoading(true)
    setError('')
    setOtpAttempts(0)

    try {
      const response = await fetch(
        `https://2factor.in/API/V1/${API_KEY}/SMS/${formData.mobile}/AUTOGEN/CAPIOP`
      )

      const data = await response.json()

      if (data.Status === 'Success') {
        setSessionId(data.Details)
        setOtpSent(true)
        setSuccess('OTP sent successfully to your mobile number.')
      } else {
        setError('OTP service is temporarily unavailable. Please try again later.')
      }
    } catch (err) {
      setError('Network error. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  /* ================= VERIFY OTP ================= */
  const verifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter the 6-digit OTP.')
      return
    }

    if (otpAttempts >= MAX_OTP_ATTEMPTS) {
      setError('Too many incorrect attempts. Please resend OTP.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
      )

      const data = await response.json()

      if (data.Status === 'Success' && data.Details === 'OTP Matched') {
        setOtpVerified(true)
        setOtpAttempts(0)
        setSuccess('Mobile number verified successfully!')
      } else {
        const attemptsLeft = MAX_OTP_ATTEMPTS - (otpAttempts + 1)
        setOtpAttempts(prev => prev + 1)

        if (attemptsLeft > 0) {
          setError(`Incorrect OTP. ${attemptsLeft} attempt(s) left.`)
        } else {
          setError('OTP expired due to multiple incorrect attempts. Please resend OTP.')
          setOtpSent(false)
          setOtp('')
        }
      }
    } catch (err) {
      setError('Unable to verify OTP. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  /* ================= SUBMIT FORM ================= */
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

    setLoading(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          company_name: formData.company || 'Not provided',
          from_email: formData.email,
          mobile_number: formData.mobile,
          message: formData.message || 'No message provided',
          to_email: 'capitalspark100@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      )

      setSuccess('Form submitted successfully! We will contact you soon.')

      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', mobile: '', message: '' })
        setOtp('')
        setOtpSent(false)
        setOtpVerified(false)
        setSessionId('')
        setOtpAttempts(0)
        setSuccess('')
      }, 3000)
    } catch (err) {
      console.error(err)
      setError('Form submitted but email notification failed.')
    } finally {
      setLoading(false)
    }
  }

  /* ================= UI ================= */
return (
  <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-4">
    <div className="w-100" style={{ maxWidth: '1100px' }}>
      <div className="bg-white rounded-4 shadow-lg overflow-hidden">
        <div className="row g-0">

          {/* LEFT IMAGE (DESKTOP ONLY) */}
          <div
            className="col-lg-6 d-none d-lg-block"
            style={{
              background: 'url(/assets/images/banner/contact-banner.png) center/cover no-repeat'
            }}
          />

          {/* FORM */}
          <div className="col-12 col-lg-6 p-4 p-lg-5">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

              {error && (
                <div className="alert alert-danger py-2 mb-0">
                  <small>{error}</small>
                </div>
              )}

              {success && (
                <div className="alert alert-success py-2 mb-0">
                  <small>{success}</small>
                </div>
              )}

              <input
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <input
                className="form-control"
                placeholder="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />

              <input
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              {/* MOBILE + OTP */}
              <div className="row g-2">
                <div className="col-12 col-md-8">
                  <input
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    disabled={otpVerified}
                  />
                </div>

                {!otpVerified && (
                  <div className="col-12 col-md-4 d-grid">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={sendOTP}
                      disabled={loading || otpSent}
                    >
                      {otpSent ? 'OTP Sent' : 'Send OTP'}
                    </button>
                  </div>
                )}
              </div>

              {/* OTP SECTION */}
              {otpSent && !otpVerified && (
                <>
                  <input
                    className="form-control"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))
                    }
                  />

                  <div className="d-grid gap-2 d-md-flex">
                    <button
                      type="button"
                      className="btn btn-success w-100"
                      onClick={verifyOTP}
                      disabled={loading}
                    >
                      Verify OTP
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary w-100"
                      onClick={() => {
                        setOtpSent(false)
                        setOtp('')
                        setOtpAttempts(0)
                        sendOTP()
                      }}
                    >
                      Resend OTP
                    </button>
                  </div>
                </>
              )}

              <textarea
                className="form-control"
                rows="4"
                placeholder="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="btn btn-primary py-2"
                disabled={!otpVerified || loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

}
