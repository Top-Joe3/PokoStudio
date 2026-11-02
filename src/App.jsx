import "./App.css";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import whatsAppIcon from "./assets/icons/whatsapp-icon.svg";
import emailIcon from "./assets/icons/email-icon.svg"
import heroImage from "./assets/images/pexels-josh-dago-original.jpg"

function App() {
  return (
    <>
      <header>
        <div>Poko Studio</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </header>
      <main>
        <section>
          <div className="hero">
            <img src={heroImage} className="heroImage"/>
            <div className="heroText">
              <h1>
                Let's give you and your business the digital presence you deserve
              </h1>
              <a href="" className="heroButton">Book now</a>
            </div>
          </div>
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
      </main>
      <footer>
          <p>&copy; {new Date().toLocaleString("en-GB",{year: "numeric"})} pokpixel studio</p>
          <div className="contact-icons">
              <a href=""><img src={whatsAppIcon} alt="whatsapp icon"/></a>
              <a href=""><img src={emailIcon} alt="email icon"/></a>
            </div>
      </footer>
    </>
  );
}

export default App;
