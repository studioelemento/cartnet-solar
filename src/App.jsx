import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const navItems = [
  ['/solutions', 'Solutions'],
  ['/solar-benefits', 'Solar benefits'],
  ['/why-cartnet', 'Why Cartnet'],
  ['/coverage', 'Our reach'],
];

function SunMark() {
  return <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/><circle cx="12" cy="12" r="4"/></svg></span>;
}

function Brand({ footer = false }) {
  return <Link className="brand" to="/" aria-label="Cartnet Solar home"><SunMark /><span>cartnet<small>solar</small></span></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topline"><div className="wrap"><span><strong>Good energy, made simple.</strong> Premium solar for homes and businesses.</span><span className="region">Kerala roots Â· Service across India</span></div></div>
    <header className="wrap nav">
      <Brand />
      <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Main navigation">
        {navItems.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <Link className="nav-cta" to="/contact">Get a free estimate <Arrow /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </header>
  </>;
}

function Arrow() { return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 10h13m-5-5 5 5-5 5"/></svg>; }
function Eyebrow({ children }) { return <span className="eyebrow">{children}</span>; }
function TextLink({ to, children }) { return <Link className="text-link" to={to}>{children} <span>â†—</span></Link>; }

function Footer() {
  return <footer><div className="wrap"><div className="footer-top"><div className="footer-brand"><Brand /><p>Premium solar products and dependable service, thoughtfully delivered for homes and businesses across India.</p></div><div className="footer-cols"><div className="footer-col"><b>Explore</b>{navItems.slice(0, 3).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div><div className="footer-col"><b>Get in touch</b><Link to="/contact">Request an estimate</Link><span>Kerala, India Â· Serving nationwide</span></div></div></div><div className="footer-bottom"><span>Â© 2026 Cartnet Solar. All rights reserved.</span><span>Made for a brighter tomorrow.</span></div></div></footer>;
}

function SiteLayout() {
  return <><Header /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/solar-benefits" element={<Benefits />} />
    <Route path="/why-cartnet" element={<WhyCartnet />} />
    <Route path="/coverage" element={<Coverage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes><Footer /></>;
}

function Home() {
  return <main>
    <section className="hero"><div className="wrap hero-grid">
      <div><Eyebrow>A brighter way to power life</Eyebrow><h1>Power that feels <em>right.</em></h1><p className="hero-copy">Thoughtfully designed solar, built with premium products and backed by people who stay by your side.</p><div className="hero-actions"><Link className="button" to="/contact">Letâ€™s talk solar <Arrow /></Link><TextLink to="/solutions">Explore solutions</TextLink></div><div className="trustline"><div className="avatar-stack"><span className="avatar">C</span><span className="avatar">S</span><span className="avatar">+</span></div><span><b>Quality at every step</b><br />From first conversation to after-sales care</span></div></div>
      <div className="hero-visual"><div className="hero-photo" /><span className="sun-chip"><i /> Clean energy, made personal</span><div className="floating-note"><div className="note-icon">âœ³</div><b>Made for the long run</b><span>Premium components. Careful installation.</span></div><div className="image-label"><small>Cartnet Solar Â· Across India</small><strong>Make room for a brighter future.</strong></div></div>
    </div></section>
    <section className="proof"><div className="wrap proof-row"><div className="proof-intro">A better solar experience, from the first question to the years after installation.</div><Proof title="Premium products" note="Chosen for lasting performance" icon="âœ§" /><Proof title="Expert installation" note="Planned around your needs" icon="âŒ‚" /><Proof title="Care that continues" note="Reliable after-sales support" icon="â—·" /></div></section>
    <section className="section" id="solutions"><div className="wrap"><div className="section-head"><div><Eyebrow>Solar that fits your world</Eyebrow><h2>One good decision.<br />Two ways to shine.</h2></div><p>Whether itâ€™s the place you call home or the business youâ€™re building, weâ€™ll help you find a solar setup that makes sense for you.</p></div><SolutionCards /></div></section>
    <HomeBenefits /><HomeWhy />
    <section className="coverage"><div className="wrap"><div className="coverage-card"><div><Eyebrow>Rooted in Kerala Â· Ready for India</Eyebrow><h2>Good solar knows no pin code.</h2><p>Based in Kerala, Cartnet Solar works with customers across India. Tell us where you are and what you needâ€”weâ€™ll help you understand the right next step.</p></div><Link className="button coverage-cta" to="/coverage">Explore our reach <Arrow /></Link></div></div></section>
    <Callout />
  </main>;
}

function Proof({ title, note, icon }) { return <div className="proof-item"><span className="proof-icon">{icon}</span><span><b>{title}</b><span>{note}</span></span></div>; }

function SolutionCards() {
  return <div className="solutions"><article className="solution-card home"><div className="card-copy"><span className="card-index">01 / For your home</span><h3>Bring good energy home.</h3><p>Make your rooftop work harder with a system designed around your family and your everyday energy use.</p><TextLink to="/solutions">Explore home solar</TextLink></div><div className="solution-art"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=850&q=85" alt="Modern home with rooftop solar panels" loading="lazy" /></div></article><article className="solution-card business"><div className="card-copy"><span className="card-index">02 / For your business</span><h3>Put your roof to work.</h3><p>Turn a large energy expense into a smarter investment with solar planned for your operations.</p><TextLink to="/solutions">Explore business solar</TextLink></div><div className="solution-art"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=850&q=85" alt="Bright commercial workspace" loading="lazy" /></div></article></div>;
}

function HomeBenefits() { return <section className="section benefits"><div className="wrap benefits-grid"><div><Eyebrow>The case for solar</Eyebrow><h2>Good for your bills. Better for whatâ€™s ahead.</h2><p className="benefit-intro">Solar helps you make more of the energy falling on your roof. The right system can bring greater control over electricity costs while making your energy mix cleaner.</p><Link className="button button-light" to="/solar-benefits">Explore the benefits <Arrow /></Link></div><BenefitList /></div></section>; }
function BenefitList() { return <div className="benefit-list"><Benefit number="01" title="Take control of energy costs">Generate power where you use it and reduce how much electricity you need to buy from the grid.</Benefit><Benefit number="02" title="Make an investment that keeps working">A well-planned solar system can deliver value over its lifetime. Savings depend on your usage, tariff, system and location.</Benefit><Benefit number="03" title="Choose a cleaner source of power">Use more renewable energy in your home or business, day after day.</Benefit></div>; }
function Benefit({ number, title, children }) { return <article className="benefit"><span className="benefit-no">{number}</span><div><h3>{title}</h3><p>{children}</p></div></article>; }

function HomeWhy() { return <section className="section"><div className="wrap why-grid"><div className="why-image"><img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85" alt="Solar panels capturing sunlight" loading="lazy" /><div className="quality-stamp"><b>Quality, always.</b><span>In the products we choose and the care we bring.</span></div></div><div className="why-copy"><Eyebrow>The Cartnet difference</Eyebrow><h2>Premium by nature. Practical by design.</h2><p>Going solar should feel like a confident step, not a complicated one. We pair dependable components with thoughtful service and clear guidance, at a price that feels fair.</p><PromiseList /><TextLink to="/why-cartnet">See why choose Cartnet</TextLink></div></div></section>; }
function PromiseList() { return <div className="promise-list"><Promise title="Products chosen with care">We focus on premium-quality equipment built for reliable performance.</Promise><Promise title="Service you can count on">From planning and installation to support after your system is switched on.</Promise><Promise title="Quality at a fair price">A considered solution shaped around your needs and budget.</Promise></div>; }
function Promise({ title, children }) { return <div className="promise"><span className="check">âœ“</span><div><b>{title}</b><span>{children}</span></div></div>; }

function PageIntro({ eyebrow, title, copy }) { return <section className="page-intro"><div className="wrap"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p></div></section>; }
function Solutions() {
  return <main><PageIntro eyebrow="Solar, shaped around you" title={<>A better fit for<br /><em>every kind of energy use.</em></>} copy="From a family home to a busy commercial site, Cartnet Solar helps plan a system around your needs, your property and your goals." />
    <section className="section page-section"><div className="wrap"><SolutionCards /><div className="detail-grid"><article className="detail-card"><span>01 / Residential</span><h2>Solar for the way you live.</h2><p>Start with how your household uses electricity. Weâ€™ll help you consider roof space, usage patterns and system options, then plan a setup that feels right for your home.</p><ul><li>Site and energy-use assessment</li><li>System planning and installation</li><li>Guidance on applicable approvals</li></ul></article><article className="detail-card"><span>02 / Commercial</span><h2>Solar that works for business.</h2><p>Every business has a different operating rhythm. We help evaluate your site and energy needs to plan a practical solar project for your facility.</p><ul><li>Project planning for commercial sites</li><li>System design aligned to operations</li><li>Installation and ongoing support</li></ul></article></div><div className="center-link"><Link className="button" to="/contact">Discuss your project <Arrow /></Link></div></div></section><Callout /></main>;
}

function Benefits() {
  return <main><PageIntro eyebrow="The value of solar" title={<>Make energy a<br /><em>smarter investment.</em></>} copy="Solar can help homes and businesses generate power on site, reduce reliance on grid electricity and plan for long-term energy costs." />
    <section className="section benefits"><div className="wrap benefits-grid"><div><Eyebrow>Why solar makes sense</Eyebrow><h2>More control over the energy you use.</h2><p className="benefit-intro">A solar system is a long-term decision. Its financial value depends on your electricity use, local tariff, installation and available policies. Weâ€™ll help you understand the inputs for your site.</p><Link className="button button-light" to="/contact">Talk through the numbers <Arrow /></Link></div><BenefitList /></div></section>
    <section className="section"><div className="wrap"><div className="section-head"><div><Eyebrow>Two different energy stories</Eyebrow><h2>Financial benefits,<br />made relevant.</h2></div><p>Weâ€™ll tailor a conversation around how your property uses electricity and what matters most to you.</p></div><div className="detail-grid"><article className="detail-card"><span>For homes</span><h2>Bring more certainty to household energy.</h2><p>Residential solar can offset a portion of the electricity your home draws from the grid. System size, daytime consumption, tariffs and local rules all shape potential savings.</p><ul><li>Understand your bill and usage pattern</li><li>Explore a suitable system size</li><li>Review possible savings with clear assumptions</li></ul></article><article className="detail-card"><span>For businesses</span><h2>Turn rooftops into productive assets.</h2><p>Commercial solar can help manage operating costs and make use of available roof or site area. The business case depends on load profile, project scale and operating hours.</p><ul><li>Assess site and business energy demand</li><li>Compare project cost against expected generation</li><li>Plan for operating and maintenance needs</li></ul></article></div><p className="fine-print">Savings and payback periods vary by site, system design, electricity tariff and applicable policy. Cartnet Solar can prepare a project-specific estimate after reviewing your requirements.</p></div></section><Callout /></main>;
}

function WhyCartnet() {
  return <main><PageIntro eyebrow="The Cartnet difference" title={<>Premium by nature.<br /><em>Practical by design.</em></>} copy="Quality is more than the equipment on your roof. Itâ€™s the care in choosing it, the work in installing it, and the support that follows." />
    <section className="section"><div className="wrap why-grid"><div className="why-image"><img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85" alt="Solar panels in a bright landscape" /><div className="quality-stamp"><b>Quality, always.</b><span>In the products we choose and the care we bring.</span></div></div><div className="why-copy"><Eyebrow>Our promise to you</Eyebrow><h2>Quality you can feel at every step.</h2><p>We believe going solar should be straightforward and supported. Cartnet brings premium products and attentive service together at an affordable price.</p><PromiseList /></div></div></section>
    <section className="section benefits"><div className="wrap"><div className="section-head"><div><Eyebrow>How we work</Eyebrow><h2>A considered process.<br />A team that stays close.</h2></div></div><div className="process-grid"><Process n="01" title="Understand" text="We learn about your site, energy use, and what you want solar to do." /><Process n="02" title="Plan" text="We discuss suitable products and a system design that fits your project." /><Process n="03" title="Install" text="Our team coordinates installation and supports you through the handover." /><Process n="04" title="Support" text="We remain available for after-sales service as your system operates." /></div></div></section><Callout /></main>;
}
function Process({ n, title, text }) { return <article className="process-card"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }

function Coverage() {
  return <main><PageIntro eyebrow="Kerala roots Â· Nationwide service" title={<>Local understanding.<br /><em>India-wide reach.</em></>} copy="Cartnet Solar is based in Kerala and serves residential and commercial customers across India. Let us know your location and project needs to start a conversation." />
    <section className="section"><div className="wrap coverage-feature"><div className="coverage-map"><span className="map-label">CARTNET SOLAR</span><div className="map-sun">â˜¼</div><div className="map-pin kerala">Kerala <i /></div><div className="map-pin north">North India <i /></div><div className="map-pin west">West India <i /></div><div className="map-pin east">East India <i /></div></div><div className="why-copy"><Eyebrow>One team, across India</Eyebrow><h2>Good solar knows no pin code.</h2><p>Wherever you are in India, weâ€™ll begin by understanding your site and energy needs. From there, we can help determine how to move your project forward.</p><PromiseList /><Link className="button" to="/contact">Check your location <Arrow /></Link></div></div></section><Callout /></main>;
}

function Contact() {
  return <main><PageIntro eyebrow="Start a conversation" title={<>Letâ€™s make your roof<br /><em>work for you.</em></>} copy="Share a few details about your home or business and the Cartnet Solar team can help you plan a next step." /><section className="section page-section"><div className="wrap contact-layout"><div className="detail-card"><span>YOUR PROJECT</span><h2>Tell us what you have in mind.</h2><p>We serve residential and commercial customers across India from our base in Kerala.</p><div className="contact-points"><p><b>Residential solar</b><br />For homes and rooftops</p><p><b>Commercial solar</b><br />For businesses and facilities</p><p><b>Service area</b><br />Kerala and pan-India enquiries</p></div></div><form className="contact-form" onSubmit={e => e.preventDefault()}><label>Your name<input name="name" placeholder="Name" required /></label><label>Phone or email<input name="contact" placeholder="How can we reach you?" required /></label><label>Project location<input name="location" placeholder="City, state" /></label><label>I'm interested in<select name="project"><option>Choose a project type</option><option>Home solar</option><option>Commercial solar</option><option>Other enquiry</option></select></label><button type="submit" className="button">Request a conversation <Arrow /></button><small className="form-note">This enquiry form is a design preview. Contact details and submission delivery can be added once confirmed.</small></form></div></section></main>;
}

function Callout() { return <section className="cta"><div className="wrap cta-inner"><div><Eyebrow>Your solar story starts here</Eyebrow><h2>Letâ€™s make your roof work for you.</h2><p>Tell us a little about your home or business. Weâ€™ll take it from there.</p></div><Link className="button" to="/contact">Request a consultation <Arrow /></Link></div></section>; }
function NotFound() { return <main><PageIntro eyebrow="Page not found" title={<>Looks like we missed<br /><em>a turn.</em></>} copy="The page youâ€™re looking for isnâ€™t here. Head back home to explore Cartnet Solar." /><div className="center-link"><Link className="button" to="/">Back to home <Arrow /></Link></div></main>; }

export default function App() { return <SiteLayout />; }

