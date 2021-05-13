
import './App.css';
import HeaderPanel from './Header/HeaderPanel'
import SlidingCorousel  from './Slider/SlidingCorousel'
import MultiSlidingCorousel from './Slider/MultiSlidingCorousel'

function App() {
  return (
    <div className="App">
      <HeaderPanel />
      <SlidingCorousel />
      <MultiSlidingCorousel />
    </div>
  );
}

export default App;
