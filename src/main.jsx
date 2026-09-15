import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Clock3, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const orderUrl = 'https://deliveroo.co.uk/menu/london/chiswick/kitch-chiswick/?fulfillment_type=DELIVERY';

const images = {
  hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
  breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85',
  sandwich: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1200&q=85',
  pastry: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
  interior: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=85'
};

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site">
      <div className="topbar">TURNHAM GREEN · CHISWICK · OPEN DAILY</div>
      <header className="nav">
        <a className="brand" href="#top" onClick={close}>KiTCH<span>•</span></a>
        <nav className={open ? 'navlinks open' : 'navlinks'}>
          <a href="#menu" onClick={close}>Menu</a>
          <a href="#story" onClick={close}>Our story</a>
          <a href="#visit" onClick={close}>Visit</a>
          <a href="https://www.instagram.com/kitchcafe/" target="_blank" rel="noreferrer" onClick={close}>Instagram</a>
          <a className="navcta" href={orderUrl} target="_blank" rel="noreferrer" onClick={close}>Order online <ArrowUpRight size={16}/></a>
        </nav>
        <button className="menubtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24}/> : <Menu size={24}/>} 
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroimage" style={{backgroundImage: `url(${images.hero})`}} />
          <div className="herooverlay" />
          <div className="herocopy">
            <p className="eyebrow">COFFEE · BREAKFAST · FOCACCIA · BAKED GOODS</p>
            <h1>Your neighbourhood<br/><em>coffee spot.</em></h1>
            <p className="lede">Coffee, breakfast, generous sandwiches and something good from the counter. Right by Turnham Green.</p>
            <div className="actions">
              <a className="button light" href="#menu">Explore the menu <ArrowUpRight size={17}/></a>
              <a className="textlink" href="#visit">Find us <MapPin size={16}/></a>
            </div>
          </div>
          <div className="herofoot"><span>6 Bedford Park Corner</span><span>Chiswick, W4 1LS</span></div>
        </section>

        <section className="intro section">
          <div className="sectionlabel">01 / THE KITCH</div>
          <div>
            <h2>Come for the coffee.<br/><span>Stay for the good stuff.</span></h2>
            <p>KiTCH is a Chiswick neighbourhood café built around great coffee, proper food and an easy-going space to start your morning, catch up with friends or settle in for a while.</p>
          </div>
        </section>

        <section className="featuregrid">
          <article className="feature large"><img src={images.coffee} alt="Specialty coffee"/><div><small>01</small><h3>Good coffee,<br/>done properly.</h3></div></article>
          <article className="feature"><img src={images.breakfast} alt="Breakfast at KiTCH"/><div><small>02</small><h3>Breakfast worth<br/>waking up for.</h3></div></article>
          <article className="feature"><img src={images.sandwich} alt="Fresh sandwich"/><div><small>03</small><h3>Sandwiches made<br/>for lunch.</h3></div></article>
        </section>

        <section id="menu" className="menu section">
          <div className="sectionlabel">02 / ON THE COUNTER</div>
          <div className="menugrid">
            <div><h2>Made for<br/><em>slow mornings.</em></h2><p>From a first coffee to a proper lunch, the menu covers breakfast favourites, sandwiches, drinks and fresh options throughout the day.</p><a className="underlink" href={orderUrl} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={16}/></a></div>
            <div className="menuitems">
              <div><span>01</span><strong>Coffee & drinks</strong><small>Latte · Flat White · Cappuccino · Matcha · Chai · Iced drinks</small></div>
              <div><span>02</span><strong>Breakfast & brunch</strong><small>Eggs Benedict · Pancakes · French Toast · Porridge · Avocado Toast</small></div>
              <div><span>03</span><strong>Wraps & sandwiches</strong><small>Chicken · Steak · Halloumi · Falafel · Burger</small></div>
              <div><span>04</span><strong>Fresh drinks</strong><small>Fresh juices · Smoothies · Lemonades · Soft drinks</small></div>
            </div>
          </div>
        </section>

        <section id="story" className="story">
          <div className="storyimage" style={{backgroundImage:`url(${images.interior})`}} />
          <div className="storycopy">
            <p className="eyebrow">03 / OUR PLACE</p>
            <h2>A little bit<br/><em>of Chiswick.</em></h2>
            <p>We wanted KiTCH to feel like the kind of place you naturally come back to. Vibrant, welcoming and full of character, with local artwork on the walls and Volcano Coffee Works in the cup.</p>
            <p>Bring the dog. Bring a friend. Bring your laptop. Or just bring yourself.</p>
            <a className="underlink" href="https://www.instagram.com/kitchcafe/" target="_blank" rel="noreferrer">Follow along on Instagram <InstagramIcon size={16}/></a>
          </div>
        </section>

        <section id="visit" className="visit section">
          <div className="sectionlabel">04 / COME BY</div>
          <div className="visitgrid">
            <div><h2>See you<br/><em>at KiTCH.</em></h2><a className="button dark" href="https://www.google.com/maps/search/?api=1&query=6%20Bedford%20Park%20Corner%2C%20Chiswick%2C%20London%20W4%201LS" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17}/></a></div>
            <div className="details">
              <div><MapPin size={19}/><p><strong>6 Bedford Park Corner</strong><br/>Chiswick, London W4 1LS</p></div>
              <div><Clock3 size={19}/><p><strong>Mon–Fri</strong> 6:30am–7pm<br/><strong>Sat–Sun</strong> 7am–7pm</p></div>
              <div><InstagramIcon size={19}/><p><strong>@kitchcafe</strong><br/>Come say hello online.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">KiTCH<span>•</span></div>
        <p>Chiswick coffee, food & good vibes.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
