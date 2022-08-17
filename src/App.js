import './App.css';
import CarbonForm from './components/CarbonForm';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <Header />
        <CarbonForm />
        <Scoreboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
