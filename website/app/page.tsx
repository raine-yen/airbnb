export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Atria House home">ATRIA<span>HOUSE</span></a>
          <a className="nav-link" href="#contact">Start a pilot</a>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cinematic property visualization</p>
            <h1>Turn approved property assets into cinematic leasing videos.</h1>
            <p className="lede">Short-form property marketing for apartment communities, developments, and rental portfolios—without organizing another full video shoot.</p>
            <div className="actions"><a className="button button-primary" href="#contact">Request a pilot</a><a className="button button-quiet" href="#demonstration">View the study</a></div>
          </div>
          <aside className="hero-study" aria-label="Atria House demonstration status"><div className="frame-lines" /><p className="study-number">01 / PROPERTY STUDY</p><div className="study-title"><span>Atria</span><strong>House</strong></div><p className="study-note">Render preview awaiting verified source asset</p></aside>
        </div>
      </section>
      <section className="statement" aria-labelledby="statement-title"><p className="eyebrow">The advantage of a considered system</p><h2 id="statement-title">One visual language. Multiple truthful adaptations.</h2><p>Build one careful master around an approved floor plan, then adapt it for legitimately matching homes—while updating views, finishes, mirrored layouts, and furnishings where they differ.</p></section>
      <section className="demonstration" id="demonstration" aria-labelledby="demo-title">
        <div className="section-heading"><p className="eyebrow">Independent visualization study</p><h2 id="demo-title">Atria House</h2><p>Two intentional compositions: a 9:16 social-first cut and a 16:9 cinematic cut.</p></div>
        <div className="format-grid"><article className="format-card vertical-card"><div className="render-placeholder vertical-placeholder"><span>9:16</span></div><div><h3>Vertical master</h3><p>15–20 seconds · 1080 × 1920 · social-ready</p></div></article><article className="format-card horizontal-card"><div className="render-placeholder horizontal-placeholder"><span>16:9</span></div><div><h3>Horizontal master</h3><p>15–20 seconds · 1920 × 1080 · cinematic presentation</p></div></article></div>
        <p className="disclosure">Independent demonstration created from a licensed 3D asset. Not an active property listing.</p>
      </section>
      <section className="process" aria-labelledby="process-title"><div className="section-heading"><p className="eyebrow">A clear production path</p><h2 id="process-title">From approved source to platform-ready delivery.</h2></div><ol><li><span>01</span><h3>Submit approved assets</h3><p>Plans, photography, video, or licensed 3D assets—plus the details that make each layout accurate.</p></li><li><span>02</span><h3>Review a watermarked preview</h3><p>See the composition, pacing, and accuracy before the final master is delivered.</p></li><li><span>03</span><h3>Receive focused exports</h3><p>Deliver vertical and horizontal files designed for the channels your team actually uses.</p></li></ol></section>
      <section className="offer" aria-labelledby="offer-title"><div><p className="eyebrow">Founding-client offer</p><h2 id="offer-title">A focused first film.</h2><p className="offer-price">$149 <span>pilot</span></p></div><div className="offer-details"><ul><li>One 15-second vertical video</li><li>One approved floor plan</li><li>One revision</li><li>1080 × 1920 export</li></ul><p>Source assets must be approved. No marketing result is guaranteed.</p><a className="button button-primary" href="#contact">Request a pilot</a></div></section>
      <section className="pricing" aria-labelledby="pricing-title"><p className="eyebrow">When a portfolio grows</p><h2 id="pricing-title">Straightforward next steps.</h2><div className="price-grid"><p><strong>From $400</strong><span>Full floor-plan video</span></p><p><strong>From $100</strong><span>Truthful same-layout adaptation</span></p><p><strong>Custom</strong><span>Property-wide visual packages</span></p></div></section>
      <section className="accuracy" aria-labelledby="accuracy-title"><p className="eyebrow">Accuracy is the aesthetic</p><h2 id="accuracy-title">No invented rooms, views, amenities, or structural features.</h2><p>Every visual begins with approved assets and stays anchored to what the property actually is.</p></section>
      <section className="contact" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Tell us what you&apos;re working with.</h2><p>The production contact route is being configured. This form intentionally does not claim to submit until a destination is connected.</p></div><form><label>Name<input name="name" type="text" autoComplete="name" /></label><label>Company or property<input name="company" type="text" autoComplete="organization" /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Properties or layouts<input name="layouts" type="text" /></label><label className="full">Message<textarea name="message" rows={4} /></label><button className="button button-disabled" type="button" disabled>Contact route pending configuration</button></form></section>
      <footer><a className="brand" href="#top">ATRIA<span>HOUSE</span></a><p>Independent visualization study · AI-assisted production disclosure · Not an active property listing.</p><p>Demo asset attribution will appear here after license verification. © 2026 Atria House.</p></footer>
    </main>
  );
}
