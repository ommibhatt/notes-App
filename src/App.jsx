import Heading from "./Components/Heading";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

var React = require("react");

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
