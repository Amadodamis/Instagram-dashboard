/*import logo from './logo.svg';
<img src={logo} className="App-logo" alt="logo" />
Logo react
*/

import './css/App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"

function App() { 
  return (
    <div className="App">
      <main className="App-main">
        <Header />
        <Body />
        <Footer />
      </main>
    </div>
  );
}

export default App;
