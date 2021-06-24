import PostForm from './PostForm';
import GetTest from './GetTest';
import './App.css';
import LatestMessages from './LatestMessages';

export const API_URL =
  "http://localhost:5000";



function App() {
  return (
    <div className="App">
      <PostForm />
      <GetTest />
      <LatestMessages />
      
    </div>
  );
}

export default App;
