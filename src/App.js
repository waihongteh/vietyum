import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAosqn775NjdrNvWGX85XlDdAYsVz3QZds",
  authDomain: "vietyum-ed058.firebaseapp.com",
  projectId: "vietyum-ed058",
  storageBucket: "vietyum-ed058.firebasestorage.app",
  messagingSenderId: "877771551482",
  appId: "1:877771551482:web:490a2d1324b055f00c0f43",
  measurementId: "G-WFGSZHWKD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;
