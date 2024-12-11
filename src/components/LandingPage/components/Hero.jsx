import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Muscle-Nutrition</h1>
        <p>Fuel your gains with our professional-grade supplements</p>
        <Link to="/login">
  <button className="cta-button">Shop Now</button>
</Link>
 
      </div>
    </section>
  )
}

export default Hero