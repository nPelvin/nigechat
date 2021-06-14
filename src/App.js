import logo from './logo.svg';
import PostForm from './PostForm';
import GetTest from './GetTest';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PostForm />
        <GetTest />
      </header>
    </div>
  );
}

export default App;
