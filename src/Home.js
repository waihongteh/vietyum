import './Home.css';
import { initializeApp } from "firebase/app";
import TopNav from './components/TopNav';
import ArrowButton from './components/ArrowButton';

function App() {
  const currLanguage = localStorage.getItem("language") ?? "english";
  return currLanguage != "vietnamese" 
  ? (
    <div className="App">
      <TopNav />
      <div className="main-content col">
        <div>
          <h1>Welcome to Vietyum Website!</h1>
        </div>
        <ArrowButton text="Start" onClick={() => window.location.href = "/game"}/>
      </div>
    </div>
  )
  : (
    <div className="App">
      <TopNav />
      <div className="main-content col">
        <div>
          <h1>chào mừng đến với website Vietyum!</h1>
        </div>
        <ArrowButton text="Bắt đầu" onClick={() => window.location.href = "/game"}/>
      </div>
    </div>
  )
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;

export default App;
