import React, { useState } from "react"
import styles from "./Home.module.css"

const Home = () => {
  const [showSignInForm, setShowSignInForm] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false)

  const toggleLoginForm = () => {
    if (showSignInForm) {
      setShowSignInForm(false)
    } else if (showSignUpForm) {
      setShowSignUpForm(false)
    } else {
      setShowSignInForm(true)
    }
  }

  const showSignupForm = (e) => {
    e.preventDefault()
    setShowSignInForm(false)
    setShowSignUpForm(true)
  }

  const showSigninForm = (e) => {
    e.preventDefault()
    setShowSignUpForm(false)
    setShowSignInForm(true)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    alert("Sign Up clicked!")
    setShowSignUpForm(false)
    setShowSignInForm(true)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    alert("Sign In clicked!")
  }

  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.logo}>ResumeGenius</div>
          <nav className={styles.nav}>
            <a href="#">Builders</a>
            <a href="#">Resumes</a>
            <a href="#">Cover Letters</a>
            <a href="#">CVs</a>
            <a href="#">Resources</a>
            <button className={styles.loginButton} onClick={toggleLoginForm}>
              Login
            </button>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroContainer}`}>
          <div className={styles.heroText}>
            <h1>
              Make your professional resume <span>in minutes</span>
            </h1>
            <p>
              From generating bullet points to automatic formatting, our resume
              builder will help you make a professional resume quickly and
              effortlessly.
            </p>
            <div className={styles.heroButtons}>
              <button
                className={styles.buildResumeButton}
                onClick={() => (window.location.href = "/")}
              >
                Build My Resume Now
              </button>
              {/* <button className={styles.uploadResumeButton}>
                Upload My Existing Resume
              </button> */}
            </div>
            <div className={styles.trustpilotRating}>
              <img src="trustpilot-stars.png" alt="Trustpilot Rating" />
              <span>4.5</span>
            </div>
          </div>

          {showSignInForm && (
            <div className={`${styles.loginForm} ${styles.active}`}>
              <div className={styles.authContainer}>
                <h2>Sign In</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={handleSignIn}>Sign In</button>
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={showSignupForm}>
                    Create one
                  </a>
                </p>
              </div>
            </div>
          )}

          {showSignUpForm && (
            <div className={`${styles.loginForm} ${styles.active}`}>
              <div className={styles.authContainer}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={handleSignUp}>Sign Up</button>
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={showSigninForm}>
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Key Features</h2>
          <div className={styles.featureGrid}>
            {[
              {
                icon: "feature-icon-1.png",
                title: "Leverage the latest tech",
                desc: "Our resume builder lets you make a fully customized resume in minutes. Use our software to your advantage & apply for jobs faster.",
              },
              {
                icon: "feature-icon-2.png",
                title: "Generate bullet points",
                desc: "Your resume's experience section is what employers care about most. Autogenerate experience bullet points that prove your on-the-job skills.",
              },
              {
                icon: "feature-icon-3.png",
                title: "Auto-format each section",
                desc: "Formatting can be time-consuming. Don't let margins & spacing slow you down - put in your details and the resume maker does the rest.",
              },
              {
                icon: "feature-icon-4.png",
                title: "Instantly download your resume",
                desc: "Easily download your resume as a PDF, for Word, or in text format. Use the dashboard to test different templates to see what works best for you.",
              },
              {
                icon: "feature-icon-5.png",
                title: "Get expert feedback",
                desc: "The job market is extremely competitive. Get an edge on other applicants with professional feedback after you've made your resume.",
              },
              {
                icon: "feature-icon-6.png",
                title: "Launch your job hunt",
                desc: "Equipped with your perfected resume, you're ready to take on the job market. Get more job interviews & earn better job offers.",
              },
            ].map((feature, index) => (
              <div className={styles.feature} key={index}>
                <img src={feature.icon} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.templates}>
        <div className={styles.container}>
          <h2>Choose your favorite resume template</h2>
          <p>
            Regardless of your background, there's a template in the Genius
            resume maker that's perfect for highlighting your experience & skill
            set.
          </p>
          <button
            className={styles.viewTemplatesButton}
            onClick={() => alert("View More Resume Templates button clicked!")}
          >
            View More Resume Templates
          </button>
          <div className={styles.templateGrid}>
            {[
              { img: "template-1.png", name: "Minimalist" },
              { img: "template-2.png", name: "Elegant" },
              { img: "template-3.png", name: "Chicago" },
              { img: "template-4.png", name: "Clean" },
              { img: "template-5.png", name: "Tai Manual" },
              { img: "template-6.png", name: "2025" },
              { img: "template-7.png", name: "Corporate" },
            ].map((template, index) => (
              <div className={styles.template} key={index}>
                <img src={template.img} alt={`${template.name} Template`} />
                <p>{template.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          <div className={styles.stepsContent}>
            <h2>Use our resume builder in 3 easy steps</h2>
            <p>
              Putting together a complete job application has never been easier.
              Make a resume with our professional resume builder, and then
              quickly generate a matching cover letter. In minutes you'll be
              ready to apply for your next job.
            </p>

            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>1</div>
                <h3>Generate your resume's content instantly</h3>
              </div>
              <p>
                In a few clicks, create a resume summary and work-experience
                bullet points to showcase your qualifications and skills.
              </p>
              <div className={styles.fillOutSections}>
                <p>Fill out these sections:</p>
                <div className={styles.sectionTags}>
                  {[
                    "Contact Information",
                    "Experience",
                    "Education",
                    "Certifications",
                    "Skills",
                    "Summary",
                  ].map((section, index) => (
                    <span key={index}>{section}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>2</div>
                <h3>Select a resume template</h3>
              </div>
              <p>
                See how your resume looks using different templates. Choose the
                template that fits the job you want and best suits your
                personality.
              </p>
              <div className={styles.templateStyles}>
                <p>Template Styles:</p>
                <div className={styles.styleTags}>
                  {["Professional", "Modern", "Creative", "Simple", "etc."].map(
                    (style, index) => (
                      <span key={index}>{style}</span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>3</div>
                <h3>Download your resume</h3>
              </div>
              <p>
                Save your newly built resume as a PDF, Word Doc, or TXT file
                directly to your browser. You're now ready to start applying for
                jobs!
              </p>
              <div className={styles.downloadFormats}>
                <p>Formats:</p>
                <div className={styles.formatTags}>
                  {["Word formats", "Google Docs", "PDF format"].map(
                    (format, index) => (
                      <span key={index}>{format}</span>
                    )
                  )}
                </div>
              </div>
              <button className={styles.makeResumeButton}>
                Make a Resume Now
              </button>
            </div>
          </div>

          <div className={styles.stepsImage}>
            <img src="resume-builder-image.png" alt="Resume Builder Preview" />
          </div>
        </div>
      </section>

      <div
        className={styles.needHelpButton}
        onClick={() => alert("Need Help? button clicked!")}
      >
        Need Help?
      </div>
    </div>
  )
}

export default Home
