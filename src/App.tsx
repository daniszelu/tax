import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import translations from './translations'
import type { Lang } from './translations'
import './App.css'

function App() {
  const [lang, setLang] = useState<Lang>('pl')
  const T = translations[lang]
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    alert(T.cta.alertMsg(String(data.get('name') ?? '')))
    form.reset()
  }

  return (
    <div className='app'>
      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav className='nav' ref={navRef}>
        <div className='nav-container'>
          <a href='#' className='nav-logo'>
            <span className='logo-text'>
              Tax<span>&amp;Ledger</span>
            </span>
          </a>
          <ul className='nav-links'>
            <li>
              <a href='#services'>{T.nav.services}</a>
            </li>
            <li>
              <a href='#about'>{T.nav.about}</a>
            </li>
            <li>
              <a href='#process'>{T.nav.process}</a>
            </li>
            <li>
              <a href='#contact'>{T.nav.contact}</a>
            </li>
          </ul>
          <div className='nav-right'>
            <div className='lang-switcher'>
              <button
                className={`lang-btn${lang === 'pl' ? ' lang-btn--active' : ''}`}
                onClick={() => setLang('pl')}
                aria-label='Język polski'
              >
                PL
              </button>
              <span className='lang-divider' />
              <button
                className={`lang-btn${lang === 'en' ? ' lang-btn--active' : ''}`}
                onClick={() => setLang('en')}
                aria-label='English'
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className='hero' id='hero'>
        <div className='hero-bg'>
          <div className='hero-grid' />
          <div className='hero-orb hero-orb-1' />
          <div className='hero-orb hero-orb-2' />
        </div>
        <div className='hero-container'>
          <div className='hero-badge'>{T.hero.badge}</div>
          <h1 className='hero-title'>
            {T.hero.title}
            <br />
            <span className='hero-title-accent'>{T.hero.titleAccent}</span>
          </h1>
          <p className='hero-subtitle'>{T.hero.subtitle}</p>
          <div className='hero-actions'>
            <a href='#contact' className='btn btn-primary'>
              {T.hero.ctaPrimary}
            </a>
            <a href='#services' className='btn btn-outline'>
              {T.hero.ctaSecondary}
            </a>
          </div>
          <div className='hero-stats'>
            <div className='hero-stat'>
              <span className='hero-stat-number'>{T.hero.stat1Number}</span>
              <span className='hero-stat-label'>{T.hero.stat1Label}</span>
            </div>
            <div className='hero-stat-divider' />
            <div className='hero-stat'>
              <span className='hero-stat-number'>{T.hero.stat2Number}</span>
              <span className='hero-stat-label'>{T.hero.stat2Label}</span>
            </div>
            <div className='hero-stat-divider' />
            <div className='hero-stat'>
              <span className='hero-stat-number'>{T.hero.stat3Number}</span>
              <span className='hero-stat-label'>{T.hero.stat3Label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className='services' id='services'>
        <div className='section-container'>
          <div className='section-header'>
            <span className='section-label'>{T.services.label}</span>
            <h2 className='section-title'>{T.services.title}</h2>
            <p className='section-subtitle'>{T.services.subtitle}</p>
          </div>
          <div className='services-grid'>
            {T.services.items.map((service, i) => (
              <div className='service-card' key={i}>
                <div className='service-icon'>{service.icon}</div>
                <h3 className='service-title'>{service.title}</h3>
                <p className='service-desc'>{service.desc}</p>
                <a href='#contact' className='service-link'>
                  {T.services.learnMore}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Why Us ─────────────────────────────────────── */}
      <section className='about' id='about'>
        <div className='section-container about-container'>
          <div className='about-content'>
            <span className='section-label'>{T.about.label}</span>
            <h2 className='section-title'>
              {T.about.titleLine1}
              <br />
              {T.about.titleLine2}
            </h2>
            <p className='about-text'>{T.about.text}</p>
            <ul className='about-features'>
              {T.about.features.map((f, i) => (
                <li key={i}>
                  <span className='check'>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href='#contact' className='btn btn-primary'>
              {T.about.cta}
            </a>
          </div>
          <div className='about-visual'>
            <div className='about-card about-card-main'>
              <div className='about-card-header'>
                <span className='about-card-badge'>{T.about.cardBadge}</span>
              </div>
              <div className='about-card-amount'>{T.about.cardAmount}</div>
              <div className='about-card-label'>{T.about.cardLabel}</div>
              <div className='about-card-bar'>
                <div className='about-card-bar-fill' />
              </div>
              <div className='about-card-meta'>{T.about.cardMeta}</div>
            </div>
            <div className='about-card about-card-secondary'>
              <div className='about-card-icon'>🏆</div>
              <div className='about-card-text'>
                <strong>{T.about.cardSecondaryTitle}</strong>
                <span>{T.about.cardSecondarySubtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────── */}
      <section className='process' id='process'>
        <div className='section-container'>
          <div className='section-header'>
            <span className='section-label'>{T.process.label}</span>
            <h2 className='section-title'>{T.process.title}</h2>
          </div>
          <div className='process-steps'>
            {T.process.steps.map((step, i) => (
              <div className='process-step' key={i}>
                <div className='step-number'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className='step-title'>{step.title}</h3>
                <p className='step-desc'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className='testimonials'>
        <div className='section-container'>
          <div className='section-header'>
            <span className='section-label'>{T.testimonials.label}</span>
            <h2 className='section-title'>{T.testimonials.title}</h2>
          </div>
          <div className='testimonials-grid'>
            {T.testimonials.items.map((t, i) => (
              <div className='testimonial-card' key={i}>
                <div className='testimonial-stars'>★★★★★</div>
                <p className='testimonial-text'>"{t.text}"</p>
                <div className='testimonial-author'>
                  <div className='testimonial-avatar'>{t.initials}</div>
                  <div>
                    <div className='testimonial-name'>{t.name}</div>
                    <div className='testimonial-role'>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ──────────────────────────────────────── */}
      <section className='cta' id='contact'>
        <div className='cta-container'>
          <h2 className='cta-title'>
            {T.cta.titleLine1}
            <br />
            {T.cta.titleLine2}
          </h2>
          <p className='cta-subtitle'>{T.cta.subtitle}</p>
          <form className='cta-form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder={T.cta.namePlaceholder}
              className='cta-input'
              required
              autoComplete='name'
            />
            <input
              type='email'
              name='email'
              placeholder={T.cta.emailPlaceholder}
              className='cta-input'
              required
              autoComplete='email'
            />
            <input
              type='tel'
              name='phone'
              placeholder={T.cta.phonePlaceholder}
              className='cta-input'
              autoComplete='tel'
            />
            <button type='submit' className='btn btn-gold'>
              {T.cta.submitBtn}
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-brand'>
            <div className='nav-logo'>
              <span className='logo-text'>
                Tax<span>&amp;Ledger</span>
              </span>
            </div>
            <p className='footer-tagline'>{T.footer.tagline}</p>
          </div>
          <div className='footer-links'>
            <div className='footer-col'>
              <h4>{T.footer.servicesTitle}</h4>
              <ul>
                {T.footer.serviceItems.map((item, i) => (
                  <li key={i}>
                    <a href='#services'>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-col'>
              <h4>{T.footer.companyTitle}</h4>
              <ul>
                <li>
                  <a href='#about'>{T.footer.companyItems[0]}</a>
                </li>
                <li>
                  <a href='#process'>{T.footer.companyItems[1]}</a>
                </li>
                <li>
                  <a href='#contact'>{T.footer.companyItems[2]}</a>
                </li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>{T.footer.officeTitle}</h4>
              <ul>
                <li>ul. Finansowa 12</li>
                <li>00-001 Warszawa</li>
                <li>+48 22 555 01 92</li>
                <li>hello@taxandledger.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <span>{T.footer.copyright}</span>
          <span>{T.footer.legal}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
