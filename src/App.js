
import './App.css';
import Nav from './navbar';
import Recent from './recent';
import Sidebar from './sidebar';
import Trending from './trending';



function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Trending />
      <Recent />
    </div>
  );
}

export default App;
