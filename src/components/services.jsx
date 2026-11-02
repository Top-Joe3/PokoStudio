/*export default function Services() {
    return (
        <div className="services-wrapper">
            <h2>What we do</h2>
            <p className="first">Photography</p>
            <p>Videography</p>
            <p>Drone capture</p>
            <p>Logo Design</p>
        </div>
    )
}*/
import "./services.css"

const services = [
  { name: "Photography", note: "Portraits, events and products" },
  { name: "Videography", note: "Short films, promos and recaps" },
  { name: "Drone capture", note: "Aerial photo and video" },
  { name: "Logo design", note: "Identities and brand marks" },
];

export default function Services() {
  return (
    <div className="services-wrapper">
      <div>
        <h2 className="services-title">What we <span className="do">do</span></h2>
        <p className="title-note">We help brands and individuals tell their stories
through powerful visuals and creative design.</p>
      </div>

      <ul className="services-list">
        {services.map(({ name, note }) => (
          <li key={name}>
            <div className="service-row">
              <span className="service-name">{name}</span>
              <span className="service-note">{note}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

