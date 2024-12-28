import './App.css';
import { initializeApp } from "firebase/app";
import TopNav from './components/TopNav';
import ArrowButton from './components/ArrowButton';

function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
        <p>
          Welcome to Vietyum Website!
        </p>
        <p>
          App building is in progress... 
        </p>
        <p>
          Stay tuned for more exciting updates!
        </p>
        <ArrowButton text="Click Me" onClick={() => alert("Button clicked!")}/>
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
