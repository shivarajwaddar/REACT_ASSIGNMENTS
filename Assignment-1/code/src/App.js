import Blue from "./component/blue";
import Yellow from "./component/yellow";
import Red from "./component/red";
import Appcomponentgroup from "./component/Appcomponentgroup";

function App() {
  return (
    <div className="App">
      <Appcomponentgroup>
        <Yellow />
        <Yellow />
      </Appcomponentgroup>
      <Appcomponentgroup>
        <Red />
      </Appcomponentgroup>
      <Appcomponentgroup>
        <Blue />
        <Blue />
        <Blue />
      </Appcomponentgroup>
    </div>
  );
}

export default App;
