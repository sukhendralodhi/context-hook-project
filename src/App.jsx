import { useGlobalContext } from "./AppContext";

function App() {
  const {name} = useGlobalContext();
  console.log(name);
  return (
    <>
      <h1>Hello Main Component</h1>
    </>
  );
}

export default App;
