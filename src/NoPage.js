import ArrowButton from "./components/ArrowButton";
import "./NoPage.css";

function NoPage() {
  return (
  <div className="NoPage">
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist or is currently under development.</p>
    <ArrowButton text="Go Back" onClick={() => window.history.back()}/>
  </div>);
}

export default NoPage;