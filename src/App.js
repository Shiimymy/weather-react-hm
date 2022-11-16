import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Form from "./Form";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Form />
      <Header />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
