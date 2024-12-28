import './App.css';
import { initializeApp } from "firebase/app";
import logo from './assets/logo.jpg';
import TopNav from './components/TopNav';

const handleButtonClick = (message) => {
  alert(message);
};

function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <p>
          Welcome to Vietyum Website!
        </p>
        <p>
          App building is in progress... 
        </p>
        <p>
          Stay tuned for more exciting updates!
        </p>
      </header>
    </div>
  );
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
