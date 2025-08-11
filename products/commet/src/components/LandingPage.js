import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
// import animationData from '../vi.json';
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';
import UserGuideSection from './UserGuideSection';
import ContactForm from './ContactForm';
import { Link as ScrollLink, Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS with proper settings
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-out-quad',
      mirror: false,
      startEvent: 'DOMContentLoaded'
    });

    // Add class when AOS is ready
    document.addEventListener('aos:in', ({ detail }) => {
      console.log('animated in', detail);
    });

    return () => {
      AOS.refresh(); // Cleanup
    };
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="landing-page">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand navbar-logo" href="#">
              <img 
                src={`${PUBLIC_URL}/images/logo-light.webp`} 
                alt="logo" 
                className="logo-1 logo" 
                loading="lazy"  
                style={{width: '80px', height: '80px', borderRadius: '50%'}}
                data-aos="fade-down"
              /> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              data-aos="fade-down"
            >
              <span className="fas fa-bars"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {['section0', 'section1', 'section2', 'section3', 'section4'].map((section, index) => (
                  <li className="nav-item" key={section} data-aos="fade-down" data-aos-delay={100 * (index + 1)}>
                    <ScrollLink 
                      className="nav-link" 
                      to={section} 
                      smooth={true} 
                      duration={600}
                      onClick={() => setIsOpen(false)}
                    >
                      {['Download App', 'About Us', 'User Guide', 'Features', 'FAQ'][index]}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner Section */}
        <Element name="section0">
          <section className="banner banner-padding">
            <div className="container" data-aos="fade-up">
              <div className="row align-items-center">
                <div className="col-md-7 col-sm-12 order-md-1 order-2">
                  <div className="banner-text text-center text-md-start">
                    <h1 className="gradient-text fw-bold" data-aos="fade-right">
                      Next-Gen Blockchain Messaging
                    </h1>
                    <h4 className="white mb-4 opacity-75" data-aos="fade-right" data-aos-delay="100">
                      Experience private, fast, and decentralized communication built on Solana.
                    </h4>

                    <div className="d-flex justify-content-center">
                      <ul className="d-flex flex-wrap gap-3 ps-0 animate-buttons justify-content-center w-100">
                        {[
                          { src: `${PUBLIC_URL}/images/appstore.webp`, alt: 'Download from App Store', delay: 200 },
                          { src: `${PUBLIC_URL}/images/playstore.webp`, alt: 'Download from Play Store', delay: 400 },
                        ].map((item, index) => (
                          <li className="mx-1" key={index}>
                            <a href="#" className="d-block hover-scale" data-aos="fade-up" data-aos-delay={item.delay}>
                              <img 
                                loading="eager"
                                src={item.src}
                                className="rounded-md transition-transform duration-300 hover:scale-105"
                                alt={item.alt}
                              />
                            </a>
                          </li>
                        ))}
                        <li className="mx-1">
                          <a
                            href="#contact"
                            className="btn-demo hover-scale"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            <div className="btn-demo-content">
                              <img 
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  marginRight: '8px',
                                  transition: 'transform 0.3s ease'
                                }}
                                src={`${PUBLIC_URL}/images/android.png`}
                                alt="android"
                                className="btn-demo-icon"
                              />
                              <span className="btn-demo-text">Apk</span>
                            </div>
                            <span className="btn-demo-subtext">Direct download</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 order-md-2 order-1 mb-md-0 mb-4">
                  <Lottie 
                    className="img-fluid float-md-end float-none" 
                    animationPath={`${PUBLIC_URL}/vi.json`}
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* About Section */}
        <Element name="section1">
          <section className="about section-padding prelative">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sectioner-header text-center" data-aos="fade-up">
                    <h3>About Us</h3>
                    <span className="line"></span>
                    <p className="about-text mt-5 mb-5">
                      <span className="line-1">Commet is a fully decentralized blockchain messenger based on Solana.</span>
                      <span className="line-2">With 2-layer cryptography, it keeps your identity and messages secure.</span>
                    </p>
                  </div>
                  <div className="section-content text-center">
                    <div className="row">
                      {[
                        { icon: 'fa-life-ring', title: 'High Security', text: 'Advanced encryption and blockchain technology for complete security.', delay: 200 },
                        { icon: 'fa-mobile', title: 'Cross-Platform', text: 'Available on mobile, desktop and web platforms seamlessly.', delay: 400 },
                        { icon: 'fa-bolt', title: 'High Speed', text: 'Solana blockchain enables near-instant transactions.', delay: 600 },
                      ].map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="icon-box" data-aos="fade-up" data-aos-delay={item.delay}>
                            <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* User Guide Section */}
        <Element name="section2">
          <UserGuideSection />
        </Element>

        {/* Features Section */}
        <Element name="section3">
          <section className="feature section-padding2 section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sectioner-header text-center text-white" data-aos="fade-up">
                    <h3>Features</h3>
                    <span className="line"></span>
                    <p className="text-white text-lg mt-5 mb-5">
                      Commet is an advanced messenger that uses Solana blockchain technology to provide secure and decentralized communication.
                    </p>
                  </div>
                  <div className="section-content text-center">
                    <div className="row">
                      {/* Left Features */}
                      <div className="col-md-4 col-sm-12">
                        {[
                          { icon: 'fa-bolt', title: 'Easy Payments', text: 'Sending and receiving SOL is as easy as sending a regular message!', align: 'right', delay: 200 },
                          { icon: 'fa-battery-full', title: 'Wallet Management', text: 'Dedicated wallet with full control over your digital assets.', align: 'right', delay: 200 },
                          { icon: 'fa-wifi', title: 'Regular Updates', text: 'The Commet development team is constantly improving the user experience.', align: 'right', delay: 400 },
                        ].map((item, index) => (
                          <div className="media single-feature" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                            {item.align === 'right' && (
                              <div className="media-body text-right media-right-margin">
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                              </div>
                            )}
                            <div className="media-right icon-border">
                              <span className={`fa ${item.icon}`} aria-hidden="true"></span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Center Image */}
                      <div className="col-md-4 d-none d-md-block d-lg-block">
                        <div className="feature-mobile" data-aos="fade-up" data-aos-delay="300">
                          <img 
                            src={`${PUBLIC_URL}/images/iphone-screen-with-shadow.webp`} 
                            loading="eager" 
                            className="img-fluid" 
                            alt="Commet App Preview"
                          />
                        </div>
                      </div>

                      {/* Right Features */}
                      <div className="col-md-4 col-sm-12">
                        {[
                          { icon: 'fa-check-double', title: 'Advanced Security', text: 'Your messages and information are kept secure using encryption and blockchain.', align: 'left', delay: 400 },
                          { icon: 'fa-dollar-sign', title: 'Low Fees', text: 'Sending messages and money with Commet is fast and nearly free.', align: 'left', delay: 600 },
                          { icon: 'fa-hdd', title: 'Decentralized Storage', text: 'Your data is stored in decentralized cloud storage and always accessible.', align: 'left', delay: 600 },
                        ].map((item, index) => (
                          <div className="media single-feature" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                            <div className="media-left icon-border media-right-margin">
                              <span className={`fa ${item.icon}`} aria-hidden="true"></span>
                            </div>
                            <div className="media-body text-left">
                              <h5>{item.title}</h5>
                              <p>{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* FAQ Section */}
        <Element name="section4">
          <section className="faq section-padding prelative section">
            <div className="faq-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sectioner-header text-center" data-aos="fade-up">
                    <h3>Frequently Asked Questions</h3>
                    <span className="line"></span>
                    <p>In this section, you can find answers to common questions about Commet messenger.</p>
                  </div>
                  <div className="section-content">
                    <div className="row">
                      {[
                        { question: 'What is Commet?', answer: 'Commet is a secure and decentralized messenger built on Solana blockchain technology that enables chatting, payments, and wallet management.', delay: 200 },
                        { question: 'Is Commet free to use?', answer: 'Yes, most features of the application are free to use. Only some transactions may require minimal fees.', delay: 200 },
                        { question: 'How do I manage my wallet in Commet?', answer: 'In the wallet section, you can view your balance, send or receive cryptocurrency, and review your transactions.', delay: 400 },
                        { question: 'Are my messages secure?', answer: 'Your messages are encrypted with a public key and can only be decrypted with your private key.', delay: 400 },
                        { question: 'Does Commet work on all phones?', answer: 'Yes, the application is designed for both Android and iOS operating systems.', delay: 600 },
                        { question: 'What happens if I forget my wallet password?', answer: 'When creating a wallet, you\'ll receive a recovery phrase. If you\'ve saved it, you can recover your wallet.', delay: 600 },
                      ].map((item, index) => (
                        <div className="col-md-6 faq-content" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                          <h4>{item.question}</h4>
                          <p>{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <footer className="section">
          <div className="discount-box" data-aos="fade-up">
            <h2>Instant Rewards Await</h2>
            <p>
              <strong>Engage. Earn. Grow.</strong><br/>
              Get rewarded in <strong>$SOL tokens</strong> for chatting, liking, and inviting friends.<br/>
              <strong>Exclusive:</strong> New members receive a <strong>10% welcome bonus!</strong>
            </p>
            <form className="email-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Get started</button>
            </form>
          </div>

          <div className="footer-main" data-aos="fade-up">
            <div className="newsletter">
              <h4>Sign up for our newsletter</h4>
              <p>
                Don't worry, we reserve our newsletter for important news so we only send a few updates a year.
              </p>
              <button className="subscribe-btn">Subscribe</button>
            </div>

            <div className="footer-links">
              {[
                { title: 'Quick Links', links: [
                  { to: 'section0', text: 'Download App' },
                  { to: 'section1', text: 'About Us' },
                  { to: 'section3', text: 'Features' }
                ]},
                { title: 'Resources', links: [
                  { to: 'section2', text: 'User Guide' },
                  { to: 'section4', text: 'FAQ' }
                ]},
                { title: 'Community', links: [
                  { text: 'Blog', href: '#' },
                  { text: 'Tokenomics', href: '#' },
                  { text: 'Contact Us', href: '#' }
                ]}
              ].map((section, index) => (
                <div key={index}>
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.to ? (
                          <ScrollLink className="nav-link" to={link.to} smooth={true} duration={600}>
                            {link.text}
                          </ScrollLink>
                        ) : (
                          <a href={link.href}>{link.text}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="app-links d-flex justify-content-center gap-3" data-aos="fade-up">
              <a href="#">
                <img src={`${PUBLIC_URL}/images/appstore.svg`} alt="App Store" height="40" loading="eager" />
              </a>
              <a href="#">
                <img src={`${PUBLIC_URL}/images/playstore.svg`} alt="Play Store" height="40" loading="eager" />
              </a>
            </div>
          </div>

          <div className="footer-bottom" data-aos="fade-up">
            <p>© 2025 Commet App. All Rights Reserved</p>
            <div className="socials px-4">
              <div>
                <a href="https://www.instagram.com/commetmessenger/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} color="#fff" />
                </a>
                <a href="mailto:commetmessenger@gmail.com">
                  <FaEnvelope size={25} color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
