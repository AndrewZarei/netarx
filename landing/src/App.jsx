import React, { useEffect } from 'react'

const App = () => {
  const base = import.meta.env.BASE_URL || '/'

  useEffect(() => {
    // Intersection Observer for fade-ins
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    // Floating parallax
    const onScroll = () => {
      const scrolled = window.pageYOffset
      document.querySelectorAll('.floating-element').forEach((el, i) => {
        const speed = 0.5 + i * 0.1
        el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`
      })
    }
    window.addEventListener('scroll', onScroll)

    // Cursor trail (lightweight)
    let mouseX = 0, mouseY = 0
    let trail = []
    let raf
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!raf) raf = requestAnimationFrame(updateTrail)
    }
    function updateTrail() {
      if (trail.length > 8) trail.shift()
      trail.push({ x: mouseX, y: mouseY })
      trail.forEach((pos, idx) => {
        let dot = document.getElementById(`trail-${idx}`)
        if (!dot) dot = createDot(idx)
        dot.style.transform = `translate(${pos.x}px, ${pos.y}px)`
        dot.style.opacity = 1 - idx * 0.12
      })
      raf = null
    }
    function createDot(idx) {
      const d = document.createElement('div')
      d.id = `trail-${idx}`
      d.style.cssText = `position:fixed;width:6px;height:6px;background:linear-gradient(135deg,#6366F1,#7C3AED);border-radius:50%;pointer-events:none;z-index:9999;left:0;top:0;will-change:transform;filter:blur(.5px);`
      document.body.appendChild(d)
      return d
    }
    window.addEventListener('mousemove', onMove)

    // Card hover effect + click navigation
    document.querySelectorAll('.product-card').forEach((card) => {
      const href = card.getAttribute('data-href')
      if (!href) return
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)'
      })
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)'
      })
      card.addEventListener('click', (e) => {
        if (e.target && e.target.closest && e.target.closest('.product-btn')) return
        window.location.href = href
      })
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') window.location.href = href
      })
    })

    document.body.classList.add('loaded')

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div>
      <style>{`
        :root{--primary:#6366F1;--secondary:#10B981;--accent:#7C3AED;--dark:#0F0F23;--light:#F8FAFC;--card-bg:rgba(255,255,255,.08);--glass:rgba(255,255,255,.1);--border:rgba(255,255,255,.2);--shadow:0 25px 50px -12px rgba(0,0,0,.25)}
        html{font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}
        body{font-family:Inter,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Helvetica Neue,Arial;background:radial-gradient(ellipse at top,#1a1a2e 0%,#16213e 50%,#0f0f23 100%);color:var(--light);line-height:1.6;overflow-x:hidden}
        h1,h2,h3{text-wrap:balance;line-height:1.15;letter-spacing:-.02em}
        p{max-width:75ch;margin-left:auto;margin-right:auto}
        .container{max-width:1400px;margin:0 auto;padding:2rem;position:relative;z-index:1}
        header{background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:24px;margin:2rem auto;max-width:800px;padding:3rem 2rem;text-align:center;position:relative;box-shadow:var(--shadow)}
        header h1{font-size:4rem;font-weight:900;letter-spacing:-2px;background:linear-gradient(135deg,var(--primary) 0%,var(--accent) 50%,var(--secondary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem}
        header p{font-size:1.4rem;color:rgba(248,250,252,.8);font-weight:500;margin-bottom:.5rem}
        body::before{content:'';position:fixed;inset:0;background:radial-gradient(circle at 20% 80%,rgba(99,102,241,.15) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(124,58,237,.15) 0%,transparent 50%),radial-gradient(circle at 40% 40%,rgba(16,185,129,.1) 0%,transparent 50%);animation:float 20s ease-in-out infinite;z-index:-1}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0)}33%{transform:translateY(-20px) rotate(1deg)}66%{transform:translateY(10px) rotate(-1deg)}}
        .floating-element{position:absolute;width:100px;height:100px;background:linear-gradient(135deg,var(--primary),var(--accent));border-radius:50%;opacity:.1;animation:float 6s ease-in-out infinite;z-index:-1}
        .products{display:grid;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));gap:3rem;margin:4rem auto;max-width:1600px}
        .product-card{background:var(--card-bg);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:24px;overflow:hidden;position:relative;transition:all .4s cubic-bezier(.175,.885,.32,1.275);box-shadow:var(--shadow);cursor:pointer}
        .product-image{height:200px;background:linear-gradient(135deg,rgba(99,102,241,.2) 0%,rgba(124,58,237,.2) 100%);display:flex;align-items:center;justify-content:center;padding:2rem;position:relative;overflow:hidden}
        .product-image img{max-width:90%;max-height:90%;object-fit:contain;filter:drop-shadow(0 4px 20px rgba(99,102,241,.3));border-radius:16px;transition:transform .3s ease}
        .product-content{padding:2.5rem 2rem 2rem;text-align:center;position:relative}
        .product-title{font-size:1.8rem;font-weight:800;margin-bottom:1rem;background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-.5px}
        .product-content p{color:rgba(248,250,252,.8);font-size:1.1rem;margin-bottom:1.5rem;min-height:80px;line-height:1.7;max-width:62ch}
        .product-features{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem;justify-content:center}
        .feature-tag{background:rgba(99,102,241,.2);border:1px solid rgba(99,102,241,.3);color:rgba(248,250,252,.9);padding:.4rem .8rem;border-radius:20px;font-size:.85rem;font-weight:500;letter-spacing:.5px;backdrop-filter:blur(10px)}
        .product-btn{display:inline-block;padding:1rem 2rem;background:linear-gradient(135deg,var(--primary),var(--accent));color:#fff;text-decoration:none;border-radius:16px;font-weight:600;font-size:1.1rem;letter-spacing:.5px;border:none;outline:none;cursor:pointer;position:relative;overflow:hidden;transition:all .3s ease;box-shadow:0 8px 25px rgba(99,102,241,.3)}
        .section-header{margin-bottom:4rem;position:relative}
        .section-header h2{position:relative;z-index:1}
        footer{text-align:center;margin-top:6rem;padding:3rem 2rem 2rem;background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:24px;box-shadow:var(--shadow)}
        footer a{color:#c7d2fe;text-decoration:none;border-bottom:1px dashed rgba(199,210,254,.5);padding-bottom:2px}
      `}</style>

      <div className="floating-element" />
      <div className="floating-element" />
      <div className="floating-element" />

      <header>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <img src={`${base}icons/netarx-logo.svg`} alt="Netarx Logo" style={{ width: 110, height: 110, borderRadius: 20, filter: 'drop-shadow(0 0 20px rgba(99,102,241,.45))' }} />
            <h1>Netarx</h1>
          </div>
          <p>Innovative Blockchain & Communication Solutions</p>
        </div>
      </header>

      <div className="container">
        <div className="section-header fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Products</h2>
          <p style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 3rem', color: 'rgba(248,250,252,.8)', fontSize: '1.3rem', lineHeight: 1.6 }}>
            Discover our comprehensive suite of blockchain-powered solutions designed to revolutionize digital security, communication, and financial management.
          </p>
        </div>

        <div className="products">
          <div className="product-card" data-href={'/products/blockshield/'} role="link" tabIndex={0}>
            <div className="product-image">
              <img src={`${base}icons/blockshield.png`} alt="BlockShield Logo" />
            </div>
            <div className="product-content">
              <h3 className="product-title">BlockShield</h3>
              <p>Advanced blockchain forensics platform trusted by 500+ organizations. Features transaction pattern analysis, smart contract forensics, dark web monitoring, and entity clustering for comprehensive blockchain investigations.</p>
              <div className="product-features">
                <span className="feature-tag">🔍 Forensics</span>
                <span className="feature-tag">🛡️ Compliance</span>
                <span className="feature-tag">⚡ data analysis</span>
              </div>
              <a href={'/products/blockshield/'} className="product-btn">Explore BlockShield</a>
            </div>
          </div>

          <div className="product-card" data-href={'/products/commet/build/index.html'} role="link" tabIndex={0}>
            <div className="product-image">
              <img src={`${base}icons/commet_icon.png`} alt="Commet Logo" />
            </div>
            <div className="product-content">
              <h3 className="product-title">Commet</h3>
              <p>Next-generation decentralized messenger built on Solana blockchain. 2-layer cryptography, cross-platform support, integrated wallet management, and instant SOL payments with near-zero fees.</p>
              <div className="product-features">
                <span className="feature-tag">💬 Messaging</span>
                <span className="feature-tag">💰 Payments</span>
                <span className="feature-tag">🔒 onchain voice call</span>
              </div>
              <a href={'/products/commet/build/index.html'} className="product-btn">Explore Commet</a>
            </div>
          </div>

          <div className="product-card" data-href={'/products/solana-web-wallet/index.html'} role="link" tabIndex={0}>
            <div className="product-image">
              <img src={`${base}icons/solanaweb_wallet.png`} alt="Solana Web Wallet Logo" />
            </div>
            <div className="product-content">
              <h3 className="product-title">Solana Web Wallet</h3>
              <p>High-performance Solana wallet with swap support and full control. Built with React + TypeScript for enterprise-grade security and seamless dApp integration.</p>
              <div className="product-features">
                <span className="feature-tag">⚡ full featured</span>
                <span className="feature-tag">🔄 swap support</span>
                <span className="feature-tag">🔒 full controll</span>
              </div>
              <a href={'/products/solana-web-wallet/index.html'} className="product-btn">Launch Wallet</a>
            </div>
          </div>

          <div className="product-card" data-href={'/products/cloudmanager/index.html'} role="link" tabIndex={0}>
            <div className="product-image">
              <img src={`${base}icons/cloud-manager.png`} alt="CloudManager Logo" />
            </div>
            <div className="product-content">
              <h3 className="product-title">CloudManager</h3>
              <p>Distributed file management with hidden wallet. Zero-knowledge design, cross-platform sync, and encrypted storage for complete privacy and security.</p>
              <div className="product-features">
                <span className="feature-tag">☁️ Distributed</span>
                <span className="feature-tag">🔒 encrypted</span>
                <span className="feature-tag">🔄 Auto-Sync</span>
              </div>
              <a href={'/products/cloudmanager/index.html'} className="product-btn">Get Started</a>
            </div>
          </div>

          <div className="product-card" data-href={'/products/multichain-wallet/index.html'} role="link" tabIndex={0}>
            <div className="product-image">
              <img src={`${base}icons/multichain_wallet.png`} alt="MultiChain Wallet Logo" />
            </div>
            <div className="product-content">
              <h3 className="product-title">MultiChain Wallet</h3>
              <p>Universal crypto management supporting 50+ blockchains including Bitcoin, Ethereum, Solana, and Polygon. Cross-chain swaps and multi-signature security.</p>
              <div className="product-features">
                <span className="feature-tag">🔗 50+ Chains</span>
                <span className="feature-tag">🔄 full controll</span>
                <span className="feature-tag">🛡️ Multi-Sig</span>
              </div>
              <a href={'/products/multichain-wallet/index.html'} className="product-btn">Download Wallet</a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>© 2024 Netarx Technologies. All rights reserved.</p>
        <p>Contact: <a href="mailto:netarxcorp@gmail.com">netarxcorp@gmail.com</a></p>
      </footer>
    </div>
  )
}

export default App
