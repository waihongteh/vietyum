import "./AboutUs.css";
import TopNav from "./components/TopNav";

function AboutUs() {
    return (
      <div className="AboutUs">
        <TopNav />
        <div className="content">
          <h1>Here's what Vietyum is all about:</h1>
          <ul>
            <li>Vietyum is a web development company that specializes in creating websites and web applications.</li>
            <li>Our team is dedicated to providing high-quality services to our clients.</li>
            <li>We are passionate about web development and strive to create innovative solutions for our clients.</li>
          </ul>
        </div>
      </div>
    );
}

export default AboutUs;