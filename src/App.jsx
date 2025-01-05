import "./App.css";
import { Navbar, AppMidText, AppBox, DescApp, Promote, Footer } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppMidText />
      <AppBox />
      <DescApp />
      <Promote />
      <Footer />
    </div>
  );
};

export default App;
