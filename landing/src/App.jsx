import React, { useState, useEffect } from 'react';
import './App.css';

const base = import.meta.env.BASE_URL;

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">Netarx</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#ecosystem" className="nav-link">Ecosystem</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background"></div>

        <div className="blockchain-elements">
          <div className="blockchain-element element-1">
            <img src="../asset/blockchain_4221485.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-2">
            <img src="../asset/blockchain_5675227.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-3">
            <img src="../asset/blockchain_5805586.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-4">
            <img src="../asset/distributed-ledger_5675173.png" alt="Distributed Ledger" />
          </div>
          <div className="blockchain-element element-5">
            <img src="../asset/blockchain_4221485.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-6">
            <img src="./asset/blockchain_5675227.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-7">
            <img src="./asset/blockchain_5805586.png" alt="Blockchain" />
          </div>
          <div className="blockchain-element element-8">
            <img src="./asset/distributed-ledger_5675173.png" alt="Distributed Ledger" />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Netarx</h1>
          <h2 className="hero-subtitle">Blockchain Rich Ecosystem & Innovation Hub</h2>
          <p className="hero-description">
            Revolutionary blockchain and communication solutions built with cutting-edge technology. 
            Discover the future of Web3 with our comprehensive suite of innovative products.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProducts}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={scrollToProducts}>
              Ecosystem
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          ↓
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <img src={`${base}../asset/icons/blockshield.png`} alt="BlockShield" />
              </div>
              <h3>BlockShield</h3>
              <p>Advanced blockchain forensics platform trusted by 500+ organizations. Features transaction pattern analysis, smart contract forensics, dark web monitoring, and entity clustering for comprehensive blockchain investigations. Built with cutting-edge AI and machine learning algorithms to detect and prevent fraud, money laundering, and other illicit activities across multiple blockchain networks.</p>
              <a href="/products/blockshield" className="product-link">Learn More</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <img src={`${base}../asset/icons/cloud-manager.png`} alt="Cloud Manager" />
              </div>
              <h3>Cloud Manager</h3>
              <p>Distributed file management with hidden wallet integration. Zero-knowledge design ensures complete privacy and security. Features cross-platform synchronization, encrypted storage, and automated backup systems. Perfect for enterprises and individuals who need secure, decentralized cloud storage with built-in cryptocurrency wallet functionality for seamless payments and transactions.</p>
              <a href="/products/cloudmanager" className="product-link">Learn More</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <img src={`${base}../asset/icons/commet_icon.png`} alt="Commet" />
              </div>
              <h3>Commet</h3>
              <p>Next-generation decentralized messenger built on Solana blockchain. Features 2-layer cryptography for maximum security, cross-platform support for all devices, integrated wallet management, and instant SOL payments with near-zero fees. Includes voice messaging, file sharing, and group chat capabilities while maintaining complete privacy and decentralization.</p>
              <a href="/products/commet" className="product-link">Learn More</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <img src={`${base}../asset/icons/multichain_wallet.png`} alt="MultiChain Wallet" />
              </div>
              <h3>MultiChain Wallet</h3>
              <p>Universal crypto management supporting 50+ blockchains including Bitcoin, Ethereum, Solana, Polygon, and more. Features cross-chain swaps, multi-signature security, staking capabilities, and DeFi integration. Built with enterprise-grade security protocols and user-friendly interface for both beginners and advanced users.</p>
              <a href="/products/multichain-wallet" className="product-link">Learn More</a>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <img src={`${base}../asset/icons/solanaweb_wallet.png`} alt="Solana Web Wallet" />
              </div>
              <h3>Solana Web Wallet</h3>
              <p>High-performance Solana wallet with full swap support and complete control over your assets. Built with React + TypeScript for enterprise-grade security and seamless dApp integration. Features include token management, NFT support, staking, and direct integration with Solana's high-speed, low-cost blockchain network.</p>
              <a href="/products/solana-web-wallet" className="product-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Netarx</h3>
              <p>Building the future of blockchain technology</p>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="/products/blockshield">BlockShield</a></li>
                <li><a href="/products/cloudmanager">Cloud Manager</a></li>
                <li><a href="/products/commet">Commet</a></li>
                <li><a href="/products/multichain-wallet">MultiChain Wallet</a></li>
                <li><a href="/products/solana-web-wallet">Solana Web Wallet</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Netarx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
