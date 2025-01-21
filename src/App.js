import "./App.scss";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <FAQ />
    </div>
  );
};

export default App;