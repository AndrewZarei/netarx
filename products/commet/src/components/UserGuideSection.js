import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaDownload, FaExpand } from 'react-icons/fa';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const UserGuideSection = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  useEffect(() => {
    const checkIfMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    setIsMobile(checkIfMobile());
  }, []);

  const slides = [
    {
      text: "Chapter 1: \n\n (Requirement: This messenger requires having the Solana cryptocurrency from the Solana blockchain.)\n\nIn the first step, we select the type of blockchain network. Based on the type of work, one of the devnet or mainnet networks is selected.",
      image: `${PUBLIC_URL}/images/1.webp`
    },
    {
      text: "Chapter 2: \n\n Next, you must write a username and select its avatar. Note that the username can also be seen by other users.",
      image: `${PUBLIC_URL}/images/2.webp`
    },
    {
      text: "Chapter 3: \n\n After selecting the username, click the 'Continue' button, which shows you a text key string that is the private key of the wallet.",
      image: `${PUBLIC_URL}/images/3.webp`
    },
    {
      text: "Chapter 4: \n\n After that, you enter the main part of the app, which has three main sections at the bottom of the page: profile, wallet, and chats.\nThe profile section has 4 options:\n\n\n\n1. Passcode lock: This section is for changing and creating the app password.\n2. Manage logs: This section is for viewing the app logs.\n\n\n\n3. Export wallet: For exporting the private key of the cryptocurrency wallet.\n4. Log out: To log out of the wallet and user account.\n\n\n\nImportant note: Before logging out, you must export the private key of the wallet to be able to log in again.\nYou can use the backup option (shown in the right image) to export and save the private key on your phone.",
      image: `${PUBLIC_URL}/images/4.webp`
    },
    {
      text: " Chapter 5: \n\nIn the wallet section, you can deposit and withdraw cryptocurrency. If you are on the devnet (development network), you can also receive free tokens using the airdrop button.",
      image: `${PUBLIC_URL}/images/5.webp`
    },
    {
      text: "Chapter 6: \n\n In the chat section, to find a user, you must know their username. To create a new chat, select 'Add new contact' to display the list of all users.\nThen click on the desired user and confirm the cost to create the chat. After that, you return to the chat page and can start chatting.",
      image: `${PUBLIC_URL}/images/6.webp`
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };
  return (
    <section className="video-section prelative text-center white section" data-scroll-index='3'>
      <div className="section-padding2 video-overlay">
        <div className="container">
          <h3>User Guide</h3>
         
          <a className="download-link" onClick={() => setShowPreview(true)}>
            <i className="fa fa-download" id="download-icon" aria-hidden="true"></i>
          </a>
          
          {/* مدال برای نمایش اسلایدر */}
          {showPreview && (
            <div className="modal-overlay" style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 8000,
            }}>
              <div className="modal-content" style={{
                background: "white",
                padding: "00px",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "1200px",
                maxHeight: "120vh",
                height: "100vh",
                display: "flex",
               textAlign: "center",
                flexDirection: "column",
                
                overflow: "hidden",
              }}>
                <div className="modal-header" style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "5px",
                  paddingBottom: "0px",
                  borderBottom: "1px solid #eee"
                }}>
                  <h3 style={{
                    margin: 0,
                     display: "flex",
                  textAlign: "center",
        
                    color: "#333"
                  }}>Comet Messenger User Guide</h3>
                  <button 
                    onClick={() => setShowPreview(false)}
                    style={{
                      background: "none",
                      border: "none",
                   
                      cursor: "pointer",
                      color: "#666"
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
                
                {/* اسلایدر */}
                <div className="slider-container" style={{
                  flex: 1,
                  display: "flex",
                  position: "relative",
                  overflow: "hidden",
          
                }}>
                  <div className="slide" style={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "row",
            
                    transition: "transform 0.3s ease"
                  }}>
                <div className="slide-text" style={{
                  flex: 1,
                  padding: isMobile ? "12px" : "20px", 
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
             
                  color: '#000',
                  background: "#f9f9f9",
                  borderRadius: "8px",
                  marginRight: isMobile ? 0 : "20px",
                  marginBottom: isMobile ? "15px" : 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}>
                  <div style={{
                    maxHeight: "100%",
                    overflowY: "auto",
                    padding: isMobile ? "10px" : "10px", 
                  }}>
                    {slides[currentSlide].text.split('\n').map((paragraph, i) => (
                      <p key={i} style={{ 
                        marginBottom: isMobile ? "8px" : "15px", 
                        lineHeight: isMobile ? "1.4" : "1.7",
                      fontSize: isMobile ? "2.0rem" : "1.0rem", 
                        textAlign: isMobile ? "left" : "left", 

                        wordBreak: "break-word",
                        overflowY: "scroll",
                     
                      WebkitOverflowScrolling: "touch" 
                      }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
               <div className="slide-image" style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f0f0f0",
                    borderRadius: "8px",
                    padding: "20px",
                    position: "relative"
                  }}>
                       <img 
                      src={slides[currentSlide].image} 
                      alt={`Guide step ${currentSlide + 1}`}
                      style={{
                        maxHeight: "60vh",
                        maxWidth: "120%",
                        objectFit: "contain",
                        cursor: "pointer"
                      }}
                      onClick={() => openFullscreenImage(slides[currentSlide].image)}
                    />
                    <button 
                      onClick={() => openFullscreenImage(slides[currentSlide].image)}
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "5px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <FaExpand size={14} />
                    </button>
                    </div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevSlide}
                    className="slider-arrow left" 
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "88%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 9000
                    }}
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="slider-arrow right" 
                    style={{
                      position: "absolute",
                      right: "10px",
                    top: "88%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 10
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </div>
                
                {/* Pagination */}
                <div className="slider-pagination" style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px"
                }}>
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: currentSlide === index ? "#8b5cf6" : "#ddd",
                        border: "none",
                        margin: "0 5px",
                        cursor: "pointer",
                        transition: "background 0.3s"
                      }}
                    />
                  ))}
                </div>

                {/* دکمه‌های دانلود و بستن */}
                <div className="modal-footer" style={{ 
                  marginTop: "20px", 
                  display: "flex",  
                  justifyContent: "center", 
                  gap: "10px" 
                }}>
                  <a
                    href={`${PUBLIC_URL}/commet.pdf`}
                    download="commet_user_guide.pdf"
                    className="download-button"
                    style={{
                      padding: "12px 24px",
                      background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <FaDownload /> Download PDF
                  </a>
                  
                  <button
                    onClick={() => setShowPreview(false)}
                    className="close-button"
                    style={{
                      padding: "12px 24px",
                      background: "#f0f0f0",
                      color: "#333",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: 500
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* مدال نمایش تمام صفحه عکس */}
          {fullscreenImage && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9000,
              padding: "20px"
            }}>
              <button 
                onClick={() => setFullscreenImage(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10
                }}
              >
                <FaTimes size={20} />
              </button>
              
              <img 
                src={fullscreenImage} 
                alt="Fullscreen guide"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
                }}
              />
            </div>
          )}

          <p>Click on the icon above to view the guide</p>
        </div>
      </div>
    </section>
  );
};

export default UserGuideSection;