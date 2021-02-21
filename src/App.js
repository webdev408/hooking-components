import './App.css';
import {Switch, Route} from 'react-router-dom';
import First from './components/First';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Third from './components/Third';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <First />} />
          <Route path="/second" render={() => <Second />} />
          <Route path="/third" render={() => <Third />} />
          <Route path="/registerform" render={() => <RegisterForm />} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App;

