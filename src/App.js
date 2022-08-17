import './App.css';
import CarbonForm from './components/CarbonForm';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CarbonForm />
      <Scoreboard />
      <Footer />
    </div>
  );
}

export default App;
