import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Clock3, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const orderUrl = 'https://deliveroo.co.uk/menu/london/chiswick/kitch-chiswick/?fulfillment_type=DELIVERY';
const instagramUrl = 'https://www.instagram.com/kitchcafe/';
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=6%20Bedford%20Park%20Corner%2C%20Chiswick%2C%20London%20W4%201LS';

const images = {
  hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=90',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=90',
  breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=90',
  sandwich: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1600&q=90',
  pastry: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90',
  interior: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1800&q=90'
};

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site">
      <div className="announcement"><span>CHISWICK</span><span>COFFEE · KITCHEN · GOOD COMPANY</span><span>OPEN DAILY</span></div>

      <header className="nav">
        <a className="brand" href="#top" onClick={close}>KiTCH</a>
        <nav className={open ? 'navlinks open' : 'navlinks'}>
          <a href="#menu" onClick={close}>Menu</a>
          <a href="#place" onClick={close}>The place</a>
          <a href="#visit" onClick={close}>Visit</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={close}>Instagram</a>
          <a className="navcta" href={orderUrl} target="_blank" rel="noreferrer" onClick={close}>Order online <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menubtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroimage" style={{backgroundImage:`url(${images.hero})`}} />
          <div className="herooverlay" />
          <div className="heroindex">01 — 06</div>
          <div className="herocopy">
            <p className="eyebrow">A MODERN CHISWICK COFFEE & KITCHEN</p>
            <h1>Coffee.<br/><i>Breakfast.</i><br/>Chiswick.</h1>
            <p className="lede">A neighbourhood spot beside Turnham Green, serving great coffee, generous food and something worth lingering over.</p>
            <div className="actions">
              <a className="button light" href="#menu">View the menu <ArrowUpRight size={16}/></a>
              <a className="heroorder" href={orderUrl} target="_blank" rel="noreferrer">Order online</a>
            </div>
          </div>
          <div className="herofoot"><span>6 Bedford Park Corner</span><span>W4 1LS · London</span></div>
        </section>

        <section className="statement section">
          <div className="sectionlabel">02 / THE IDEA</div>
          <div className="statementbody">
            <h2>A place for the <i>first coffee</i>,<br/>the long lunch & everything between.</h2>
            <div className="statementmeta"><span>Breakfast from 6:30am</span><span>Volcano Coffee Works</span><span>Dog friendly</span></div>
          </div>
        </section>

        <section className="editorial">
          <div className="editorialmain">
            <img src={images.breakfast} alt="Breakfast at KiTCH" />
            <div className="caption"><span>01</span><strong>Morning, properly done.</strong><em>Eggs · Pancakes · French Toast</em></div>
          </div>
          <div className="editorialside">
            <div className="sideimage"><img src={images.coffee} alt="Coffee at KiTCH" /></div>
            <div className="sidecopy"><span>02</span><h3>Good coffee.<br/><i>No fuss.</i></h3><p>Brewing Volcano Coffee Works from the first pour to the last cup.</p></div>
          </div>
        </section>

        <section id="menu" className="menu section">
          <div className="sectionlabel">03 / FROM THE KITCH</div>
          <div className="menutop">
            <div><h2>Come hungry.<br/><i>Stay a while.</i></h2></div>
            <div><p>Breakfast favourites, focaccia sandwiches, fresh drinks and baked goods. Made for mornings that don't need to be rushed.</p><a className="underlink" href={orderUrl} target="_blank" rel="noreferrer">Order from KiTCH <ArrowUpRight size={15}/></a></div>
          </div>
          <div className="menuitems">
            <div className="menuitem"><span>01</span><strong>Breakfast & brunch</strong><small>Truffle & Parmesan Scrambled Eggs · American Pancakes · Eggs Benedict · Eggs Royale · Turkish Eggs · French Toast · Waffles · Avocado on Toast</small></div>
            <div className="menuitem"><span>02</span><strong>Lunch & sandwiches</strong><small>Chicken Wrap · Steak Sandwich · Halloumi Wrap · Falafel Wrap · Beef Burger</small></div>
            <div className="menuitem"><span>03</span><strong>Coffee, matcha & drinks</strong><small>Espresso · Cappuccino · Oat Latte · Iced Coffee · Iced Matcha · Chai · Juices · Smoothies · Soft Drinks</small></div>
            <div className="menuitem"><span>04</span><strong>Pastries & sweet things</strong><small>Croissants · Baked Goods · Cookies · Cakes · Fresh Counter Favourites</small></div>
          </div>
        </section>

        <section id="place" className="place">
          <div className="placeimage"><img src={images.interior} alt="KiTCH Chiswick interior" /></div>
          <div className="placecopy">
            <p className="eyebrow">04 / THE PLACE</p>
            <h2>A little<br/><i>bit of Chiswick.</i></h2>
            <p>Vibrant, welcoming and full of character. Come in for the coffee, stay for the atmosphere. Local artwork on the walls, good food on the table and Volcano in the cup.</p>
            <p>Bring the dog. Bring a friend. Bring your laptop. Or just bring yourself.</p>
            <a className="underlink" href={instagramUrl} target="_blank" rel="noreferrer">@kitchcafe <InstagramIcon size={15}/></a>
          </div>
        </section>

        <section className="counter section">
          <div className="counterimage"><img src={images.pastry} alt="Fresh baked goods" /></div>
          <div className="countercopy"><span>05</span><h2>Something<br/><i>for the counter.</i></h2><p>Pastries, cakes and baked goods for the walk home — or the excuse to stay for another coffee.</p></div>
        </section>

        <section id="visit" className="visit section">
          <div className="sectionlabel">06 / COME BY</div>
          <div className="visitgrid">
            <div><h2>See you<br/><i>at KiTCH.</i></h2><a className="button dark" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16}/></a></div>
            <div className="details">
              <div><MapPin size={18}/><p><strong>6 Bedford Park Corner</strong><br/>Chiswick, London W4 1LS</p></div>
              <div><Clock3 size={18}/><p><strong>Mon–Fri</strong> 6:30am–7pm<br/><strong>Sat–Sun</strong> 7am–7pm</p></div>
              <div><InstagramIcon size={18}/><p><strong>@kitchcafe</strong><br/>Follow the day-to-day.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerbrand"><span>KiTCH</span><small>CHISWICK · LONDON</small></div>
        <div className="footerlinks"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={orderUrl} target="_blank" rel="noreferrer">Order online ↗</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
