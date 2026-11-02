import "./portfolio.css"
import image1 from "../assets/images/POK_7370.jpg"
import image2 from "../assets/images/POK_7371.jpg"
import image3 from "../assets/images/POK.jpg"
export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <img className="image1" src={image1}/>
      <img className="image1" src={image2}/>
      <img className="image1" src={image3}/>
    </div>
  );
}
