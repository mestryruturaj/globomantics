
import Banner from "./components/Banner";
import './App.css';
import HouseList from "./components/HouseList";

function App():React.JSX.Element {
  return (
    <>
      <Banner>
        <h1>Welcome to Globomantics</h1>
      </Banner>
      <HouseList></HouseList>
    </>
  );
}

export default App;